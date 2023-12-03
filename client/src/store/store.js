import { create } from 'zustand';

const useStore = create((set) => ({
    order: [],
    addToOrder: (item) => set((state) => ({ order: [...state.order, item] })),
    removeFromOrder: (title) =>
        set((state) => ({
            order: state.order.filter((item) => item.title !== title),
        })),
    addItem: (item, title) => {
        set((state) => ({ order: [...state.order, item] }));
    },
    removeFromOrderByTitle: (title) => {
        set((state) => {
            const indexToRemove = state.order.findIndex(
                (item) => item.title === title
            );
            if (indexToRemove !== -1) {
                const newOrder = [
                    ...state.order.slice(0, indexToRemove),
                    ...state.order.slice(indexToRemove + 1),
                ];
                return { order: newOrder };
            }
            return state;
        });
    },
    isBucketClicked: false,
    toastIndicator: 0,
    isCliced: false,
}));

export default useStore;