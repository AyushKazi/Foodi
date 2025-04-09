import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useCartStore } from "../stateHooks/use_cart";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Menu, Button } from "@mantine/core";
import CartModal from "./CartModal";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      className="sticky top-0 bg-white z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center p-4 container mx-auto">
        {/* Logo */}
        <motion.div
          className="flex justify-center items-center lg:text-3xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="text-white text-3xl px-2 py-1 bg-green-400 rounded-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            F
          </motion.span>
          OODI
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center lg:text-xl text-gray-800">
          {menuItems.map((item, index) => (
            <Menu
              key={item.label}
              trigger="hover"
              openDelay={100}
              closeDelay={200}
            >
              <Menu.Target>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Button
                    variant="subtle"
                    className="flex gap-2 items-center hover:text-green-600 text-lg"
                  >
                    {item.label}
                    {item.hasSubmenu && (
                      <motion.span
                        animate={{ rotate: opened ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IoIosArrowDown className="text-green-600" />
                      </motion.span>
                    )}
                  </Button>
                </motion.div>
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
          <motion.button
            className="hover:text-green-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LuSearch className="text-xl" />
          </motion.button>
          <motion.button
            className="relative hover:text-green-500"
            onClick={openCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <HiOutlineShoppingBag className="text-xl" />
            <AnimatePresence>
              {cartItems > 0 && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-green-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  {cartItems}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 rounded-3xl text-white font-medium bg-green-500 hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FiPhoneCall />
            <span>Contact</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            className="text-gray-600"
          />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {opened && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className="flex items-center gap-2 w-full p-3 hover:bg-gray-50 rounded-lg"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <IoIosArrowDown className="text-green-500" />
                  )}
                </motion.button>
              ))}
              <motion.div
                className="flex items-center justify-between gap-4 mt-4 p-3 border-t"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  className="hover:text-green-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LuSearch className="text-xl" />
                </motion.button>
                <motion.button
                  className="relative hover:text-green-500"
                  onClick={openCart}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HiOutlineShoppingBag className="text-xl" />
                  <AnimatePresence>
                    {cartItems > 0 && (
                      <motion.div
                        className="absolute -top-2 -right-2 bg-green-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        {cartItems}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-3xl text-white font-medium bg-green-500 hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPhoneCall />
                  <span>Contact</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Modal */}
      <CartModal opened={cartOpened} close={closeCart} />
    </motion.nav>
  );
};

export default NavBar;
