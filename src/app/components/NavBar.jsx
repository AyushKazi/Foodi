import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useCartStore } from "../stateHooks/use_cart";

const NavBar = () => {
  const { cartItems } = useCartStore();
  return (
    <>
      <div className="flex justify-around  p-4 py-8  ">
        <div className="flex justify-center items-center text-3xl font-bold">
          <span className="text-white text-3xl px-2 py-1 bg-green-400 rounded-xl">
            {" "}
            F
          </span>
          OODI
        </div>

        <div className="gap-8 flex items-center text-lg">
          <button>Home</button>
          <button className="flex gap-2 items-center">
            Menu <IoIosArrowDown className="text-green-500 " />
          </button>
          <button className="flex gap-2 items-center">
            Services <IoIosArrowDown className="text-green-500" />
          </button>
          <button>Offers</button>
        </div>
        <div>
          <div className=" flex items-center gap-6  text-lg">
            <p>
              <LuSearch className="text-xl" />
            </p>
            <div className="relative text-4xl">
              <HiOutlineShoppingBag className="text-xl" />
              {cartItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-green-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </div>
              )}
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-3xl text-white font-medium bg-green-500">
              <FiPhoneCall />
              <p>Contact</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
