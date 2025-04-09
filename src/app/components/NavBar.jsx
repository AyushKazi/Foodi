import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useCartStore } from "../stateHooks/use_cart";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Menu, Button } from "@mantine/core";
import CartModal from "./CartModal";

const NavBar = () => {
  const { cartItems } = useCartStore();
  const [opened, { toggle }] = useDisclosure();
  const [cartOpened, { open: openCart, close: closeCart }] =
    useDisclosure(false);

  const menuItems = [
    { label: "Home", link: "#" },
    { label: "Menu", link: "#menu", hasSubmenu: true },
    { label: "Services", link: "#services", hasSubmenu: true },
    { label: "Offers", link: "#offers" },
  ];

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="flex justify-between items-center p-4 container mx-auto">
        {/* Logo */}
        <div className="flex justify-center items-center lg:text-3xl font-bold">
          <span className="text-white text-3xl px-2 py-1 bg-green-400 rounded-xl">
            F
          </span>
          OODI
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center lg:text-lg">
          {menuItems.map((item) => (
            <Menu
              key={item.label}
              trigger="hover"
              openDelay={100}
              closeDelay={200}
            >
              <Menu.Target>
                <Button
                  variant="subtle"
                  className="flex gap-2 items-center hover:text-green-500"
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <IoIosArrowDown className="text-green-500" />
                  )}
                </Button>
              </Menu.Target>
              {item.hasSubmenu && (
                <Menu.Dropdown>
                  <Menu.Item>Option 1</Menu.Item>
                  <Menu.Item>Option 2</Menu.Item>
                  <Menu.Item>Option 3</Menu.Item>
                </Menu.Dropdown>
              )}
            </Menu>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 lg:text-lg">
          <button className="hover:text-green-500">
            <LuSearch className="text-xl" />
          </button>
          <button className="relative hover:text-green-500" onClick={openCart}>
            <HiOutlineShoppingBag className="text-xl" />
            {cartItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-green-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </div>
            )}
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-3xl text-white font-medium bg-green-500 hover:bg-green-600 transition-colors">
            <FiPhoneCall />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            className="text-gray-600"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${opened ? "block" : "hidden"} md:hidden bg-white border-t`}
      >
        <div className="container mx-auto px-4 py-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2 w-full p-3 hover:bg-gray-50 rounded-lg"
            >
              {item.label}
              {item.hasSubmenu && <IoIosArrowDown className="text-green-500" />}
            </button>
          ))}
          <div className="flex items-center justify-between gap-4 mt-4 p-3 border-t">
            <button className="hover:text-green-500">
              <LuSearch className="text-xl" />
            </button>
            <button
              className="relative hover:text-green-500"
              onClick={openCart}
            >
              <HiOutlineShoppingBag className="text-xl" />
              {cartItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-green-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </div>
              )}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-3xl text-white font-medium bg-green-500 hover:bg-green-600 transition-colors">
              <FiPhoneCall />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal opened={cartOpened} close={closeCart} />
    </nav>
  );
};

export default NavBar;
