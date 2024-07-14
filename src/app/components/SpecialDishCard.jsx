import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useCartStore } from "../stateHooks/use_cart";

const SpecialDishCard = ({ dish }) => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const { addToCart } = useCartStore();

  const handleCart = (dishName) => {
    console.log("Added to cart");
    addToCart(dishName);
    // localStorage.setItem("cart", JSON.stringify(dishName));
    close();
  };

  return (
    <>
      <div
        className="px-8 py-6 border border-gray-100 rounded-2xl shadow-xl relative"
        onClick={open}
      >
        <div className="absolute bg-green-400 top-0 right-0 p-3 rounded-es-2xl rounded-se-2xl">
          <FaHeart className="text-white text-xs" />
        </div>
        <img
          className="h-60 w-60   mx-auto "
          src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
          alt=""
        />
        <h2 className="font-semibold text-2xl">{dish.name}</h2>
        <h3 className=" text-gray-500 my-2">Description of the item</h3>
        <div className="flex justify-between text-xl">
          <p>
            {" "}
            <span className="text-red-600 text-sm font-semibold pr-1">$</span>
            {dish.price}
          </p>
          <p className=" flex items-center text-xl">
            <FaStar className="text-yellow-400" />
            4.9
          </p>
        </div>
      </div>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        {/* Modal content */}
        <div className="grid grid-cols-2 ">
          <div className=" p-2">
            <h2 className="font-semibold text-xl my-2 ">{dish.name}</h2>
            <p className="text-sm "> Description {dish.description}</p>
            <p className="py-4">
              {" "}
              Price: <span className="font-bold"> $ {dish.price}</span>
            </p>
          </div>
          <div className=" flex flex-col items-center  justify-around">
            <img
              className="h-36 w-36 mx-4"
              src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
              alt=""
            />
            <button
              className="px-4 py-2 bg-green-400 text-white font-semibold focus:bg-none "
              onClick={() => handleCart(dish.name)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SpecialDishCard;
