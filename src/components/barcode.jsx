import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import { GetSearchProductID } from '@/service/data';
import { useBearStore } from '@/zustand/data';

const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [productData, setProductData] = useState(null);
  const setDataBarcode = useBearStore((state) => state.setDataBarcode);
  const dataBarcode = useBearStore((state) => state.dataBarcode);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    codeReader.getVideoInputDevices()
      .then((videoInputDevices) => {
        if (videoInputDevices.length > 0) {
          const backCamera = videoInputDevices.find((device) =>
            device.label.toLowerCase().includes("back") ||
            device.label.toLowerCase().includes("environment")
          );

          const selectedDeviceId = backCamera ? backCamera.deviceId : videoInputDevices[0].deviceId;

          codeReader.decodeFromVideoDevice(
            selectedDeviceId,
            videoRef.current,
            async (result, err) => {
              if (result) {
                const barcode = result.getText();
                setScannedData(barcode);

                try {
                  const data = await GetSearchProductID(barcode);
                  setDataBarcode(data);
                  onScan(data);
                } catch (fetchError) {
                  setError("Gagal mengambil data produk");
                }
              }
              if (err) {
                setError("Gagal membaca barcode");
              }
            }
          );
        } else {
          setError("Kamera tidak ditemukan");
        }
      })
      .catch(() => setError("Error mengakses kamera"));

    return () => {
      codeReader.reset();
    };
  }, [onScan, setDataBarcode]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%", height: "auto" }} />
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      {/* {scannedData && <p>Barcode: {scannedData}</p>} */}
      {/* {dataBarcode?.data?.length ? <p>Data Produk: {JSON.stringify(dataBarcode.data)}</p> : <p>Loading...</p>} */}
    </div>
  );
};

export default BarcodeScanner;
