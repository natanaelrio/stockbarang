import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    // Mengakses semua perangkat video
    codeReader.getVideoInputDevices().then((videoInputDevices) => {
      if (videoInputDevices.length > 0) {
        // Cari perangkat dengan label "environment" (kamera belakang)
        const backCamera = videoInputDevices.find((device) =>
          device.label.toLowerCase().includes("back") ||
          device.label.toLowerCase().includes("environment")
        );

        // Gunakan kamera belakang jika ditemukan, jika tidak gunakan kamera pertama
        const selectedDeviceId = backCamera ? backCamera.deviceId : videoInputDevices[0].deviceId;

        // Mulai pemindaian dari kamera yang dipilih
        codeReader.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current,
          (result, err) => {
            if (result) {
              onScan(result.getText());
            }
            if (err) {
              setError("Gagal membaca barcode");
            }
          }
        );
      } else {
        setError("Kamera tidak ditemukan");
      }
    }).catch((err) => setError("Error mengakses kamera"));

    return () => {
      codeReader.reset();
    };
  }, [onScan]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%", height: "auto" }} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BarcodeScanner;
