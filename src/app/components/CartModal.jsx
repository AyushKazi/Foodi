import React from "react";
import { Modal, Button, NumberInput, Group } from "@mantine/core";
import { useCartStore } from "../stateHooks/use_cart";
import { HiOutlineTrash } from "react-icons/hi";

const CartModal = ({ opened, close }) => {
  const { items, total, removeFromCart, updateQuantity, clearCart } =
    useCartStore();

  return (
    <Modal opened={opened} onClose={close} title="Your Cart" size="lg" centered>
      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || "https://via.placeholder.com/80"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-green-600 font-medium">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <NumberInput
                    value={item.quantity}
                    min={1}
                    max={99}
                    onChange={(value) => updateQuantity(item.id, value)}
                    className="w-20"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <HiOutlineTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Group justify="space-between">
              <Button variant="subtle" color="red" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button
                color="green"
                onClick={() => {
                  // Implement checkout logic
                  console.log("Proceeding to checkout...");
                }}
              >
                Checkout
              </Button>
            </Group>
          </div>
        </>
      )}
    </Modal>
  );
};

export default CartModal;
