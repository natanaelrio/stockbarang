import { create } from 'zustand'

export const useBearStore = create((set) => ({
    scannedData: null,
    setScannedData: (e) => set((state) => ({ scannedData: e })),

    isLoadingProduk: false,
    setIsLoadingProduk: (e) => set((state) => ({ isLoadingProduk: e ? e : !state.isLoadingProduk })),

    showInputBarang: false,
    setShowInputBarang: (e) => set((state) => ({ showInputBarang: e ? e : !state.showInputBarang })),

    showSelectedProduct: false,
    setShowSelectedProduct: (e) => set((state) => ({ showSelectedProduct: e ? e : !state.showSelectedProduct })),

    showScanCameraBarcode: false,
    setScanShowCameraBarcode: (e) => set((state) => ({ showScanCameraBarcode: e ? e : !state.showScanCameraBarcode })),

    dataSelectedProduct: false,
    setDataSelectedProduct: (e) => set((state) => ({ dataSelectedProduct: e })),

    dataProduk: [],
    setDataProduk: (e) => set((state) => ({ dataProduk: e })),
}))