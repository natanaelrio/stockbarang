import { create } from 'zustand'

export const useBearStore = create((set) => ({
    scannedData: null,
    setScannedData: (e) => set((state) => ({ scannedData: e })),

    refreshData: false,
    setRefreshData: (e) => set((state) => ({ refreshData: e ? e : !state.refreshData })),

    isLoadingProduk: false,
    setIsLoadingProduk: (e) => set((state) => ({ isLoadingProduk: e })),

    showInputBarang: false,
    setShowInputBarang: (e) => set((state) => ({ showInputBarang: e ? e : !state.showInputBarang })),

    showSelectedProduct: false,
    setShowSelectedProduct: (e) => set((state) => ({ showSelectedProduct: e ? e : !state.showSelectedProduct })),

    showScanCameraBarcode: false,
    setScanShowCameraBarcode: (e) => set((state) => ({ showScanCameraBarcode: e ? e : !state.showScanCameraBarcode })),

    showNoteSales: false,
    setShowNoteSales: (e) => set((state) => ({ showNoteSales: e ? e : !state.showNoteSales })),

    dataSelectedProduct: false,
    setDataSelectedProduct: (e) => set((state) => ({ dataSelectedProduct: e })),

    dataProduk: [],
    setDataProduk: (e) => set((state) => ({ dataProduk: e })),

    dataSales: {},
    setDataSales: (e) => set((state) => ({ dataSales: e })),
}))