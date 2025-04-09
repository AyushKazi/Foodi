import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: 0,
      items: [],
      total: 0,

      addToCart: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          const updatedItems = currentItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
          set({
            items: updatedItems,
            cartItems: get().cartItems + 1,
            total: get().total + item.price,
          });
        } else {
          set({
            items: [...currentItems, { ...item, quantity: 1 }],
            cartItems: get().cartItems + 1,
            total: get().total + item.price,
          });
        }
      },

      removeFromCart: (itemId) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find((i) => i.id === itemId);

        if (itemToRemove) {
          set({
            items: currentItems.filter((i) => i.id !== itemId),
            cartItems: get().cartItems - itemToRemove.quantity,
            total: get().total - itemToRemove.price * itemToRemove.quantity,
          });
        }
      },

      updateQuantity: (itemId, quantity) => {
        const currentItems = get().items;
        const item = currentItems.find((i) => i.id === itemId);

        if (item) {
          const quantityDiff = quantity - item.quantity;
          const updatedItems = currentItems.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          );

          set({
            items: updatedItems,
            cartItems: get().cartItems + quantityDiff,
            total: get().total + item.price * quantityDiff,
          });
        }
      },

      clearCart: () => {
        set({
          cartItems: 0,
          items: [],
          total: 0,
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
