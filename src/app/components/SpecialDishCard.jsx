import { Button, Modal, Rating } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useCartStore } from "../stateHooks/use_cart";

const SpecialDishCard = ({ dish }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(dish);
    close();
  };

  return (
    <>
      <div
        className="px-8 py-6 border border-gray-100 rounded-2xl shadow-xl relative mt-2 cursor-pointer hover:shadow-2xl transition-shadow"
        onClick={open}
      >
        <div className="absolute bg-green-400 top-0 right-0 p-3 rounded-es-2xl rounded-se-2xl">
          <FaHeart className="text-white text-xs" />
        </div>
        <img
          className="xl:h-60 xl:w-60 lg:h-48 lg:w-48 h-36 w-36 mx-auto object-cover"
          src={dish.image}
          alt={dish.name}
        />
        <h2 className="font-semibold text-lg lg:text-2xl mt-4">{dish.name}</h2>
        <p className="text-gray-500 my-2 text-xs lg:text-sm line-clamp-2">
          {dish.description}
        </p>
        <div className="flex justify-between items-center text-base lg:text-xl mt-4">
          <p className="font-medium">
            <span className="text-red-600 text-xs lg:text-sm pr-1">$</span>
            {dish.price}
          </p>
          <Rating value={4.5} fractions={2} readOnly size="sm" />
        </div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        title={<span className="text-xl font-semibold">{dish.name}</span>}
      >
        <div className="grid md:grid-cols-2 gap-6 p-4">
          <div className="flex items-center justify-center">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full max-w-[300px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">{dish.description}</p>
                <p className="text-2xl font-bold text-green-600 mt-4">
                  ${dish.price}
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Rating</h3>
                <div className="flex items-center gap-2">
                  <Rating value={4.5} fractions={2} readOnly />
                  <span className="text-gray-500">(4.5/5)</span>
                </div>
              </div>
            </div>

            <Button
              fullWidth
              size="lg"
              color="green"
              className="mt-6"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SpecialDishCard;
