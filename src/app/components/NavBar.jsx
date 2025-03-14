import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useCartStore } from "../stateHooks/use_cart";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const NavBar = () => {
  const { cartItems } = useCartStore();
  const [opened, { toggle }] = useDisclosure();
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <div
        className={`flex justify-between items-center  sm:hidden p-3  static`}
      >
        <div>
          <div className="flex justify-center items-center lg:text-3xl font-bold">
            <span className="text-white text-3xl px-2 py-1 bg-green-400 rounded-xl">
              {" "}
              F
            </span>
            OODI
          </div>
        </div>
        <div>
          <Burger opened={opened} onClick={toggle} />
          <div
            className={`${
              opened ? "block" : "hidden"
            }  absolute right-0 w-full top-[70px] text-base   bg-green-300`}
          >
            <button className="flex hover:bg-white w-full p-3 px-6 ">
              Home
            </button>
            <button className="flex gap-2 items-center hover:bg-white w-full p-3 px-6">
              Menu <IoIosArrowDown className="text-green-500 " />
            </button>
            <button className="flex gap-2 items-center hover:bg-white w-full p-3 px-6">
              Services <IoIosArrowDown className="text-green-500" />
            </button>
            <button className="flex hover:bg-white w-full p-3 px-6">
              Offers
            </button>
          </div>
        </div>
      </div>
      <div className=" justify-around  p-2 py-8  hidden sm:flex">
        {/* logo */}
        <div className="flex justify-center items-center lg:text-3xl font-bold">
          <span className="text-white text-3xl px-2 py-1 bg-green-400 rounded-xl">
            {" "}
            F
          </span>
          OODI
        </div>
        {/* pages */}
        <div className="gap-8 flex items-center lg:text-lg">
          <button>Home</button>
          <button className="flex gap-2 items-center">
            Menu <IoIosArrowDown className="text-green-500 " />
          </button>
          <button className="flex gap-2 items-center">
            Services <IoIosArrowDown className="text-green-500" />
          </button>
          <button>Offers</button>
        </div>
        {/* search and carts */}
        <div>
          <div className=" flex items-center gap-6  lg:text-lg">
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
