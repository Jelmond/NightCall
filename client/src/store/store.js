import {create} from 'zustand'

const useStore = create((set) => ({
    order: [],
    addToOrder: (item) => set((state) => ({ order: [...state.order, item] })),
    removeFromOrder: (title) =>
    set((state) => ({ order: state.order.filter((item) => item.title !== title) })),
    addItem: (item, title) => {
        set((state) => ({ order: [...state.order, item] }));
    },
    isBucketClicked: false,
    toastIndicator: 0,
}))

export default useStore