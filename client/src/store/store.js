import { create } from 'zustand';

const useStore = create((set) => ({
    order: [],
    loadedTitles: new Set(),
    amounts: {},
    addToOrder: (item) => {

      set((state) => {
        if (!state.loadedTitles.has(item.title)) {
          const updatedOrder = [...state.order, item];
          const updatedTitles = new Set(state.loadedTitles);
          const toastIndicator = state.toastIndicator
        

          updatedTitles.add(item.title);

          console.log(updatedOrder, updatedTitles)


          return { order: updatedOrder, loadedTitles: updatedTitles, toastIndicator: toastIndicator + 1};

        }
        return state;
      });
    },
    updateAmountByTitle: (title, amount) => {
      set((state) => ({
        amounts: {
          ...state.amounts,
          [title]: amount,
        },
      }));
    },
    addItem: (item, title) => {
        set((state) => ({ order: [...state.order, item] }));
    },
    removeFromOrderByTitle: (title) => {
        set((state) => {
          const newOrder = state.order.filter((item) => !item.title.includes(title));
          
          const updatedTitles = new Set(state.loadedTitles);
          updatedTitles.delete(title);
          
          console.log(newOrder, updatedTitles)

          return { order: newOrder, loadedTitles: updatedTitles };
        });
      },
    clearOrder: () => {
        set((state) => {
            return { order: [], loadedTitles: new Set() };
          });
      },
      addDuplicateItemByTitle: (title) => {
        set((state) => {
            const existingItemIndex = state.order.findIndex((item) => item.title === title);
            
            if (existingItemIndex !== -1) {
                const newItem = { ...state.order[existingItemIndex] };
                const updatedOrder = [
                    ...state.order.slice(0, existingItemIndex + 1),
                    newItem,
                    ...state.order.slice(existingItemIndex + 1),
                ];
                
                console.log(updatedOrder)
                return { order: updatedOrder };
            }
    
            return state;
        });
    },
      removeFirstItemByTitle: (title) => {
        set((state) => {
            const newOrder = state.order.slice();
    

            const indexToRemove = state.order.findIndex((item) => item.title === title);

            console.log(indexToRemove)

            if (indexToRemove !== -1) {
                newOrder.splice(indexToRemove, 1);

                console.log(newOrder)

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