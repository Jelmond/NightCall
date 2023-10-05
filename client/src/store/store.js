import {create} from 'zustand'

const useStore = create((set) => ({
    order: [],
    addToOrder: (item) => set((state) => ({ order: [...state.order, item] })),
}))

export default useStore