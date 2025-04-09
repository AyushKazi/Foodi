import { Rating } from "@mantine/core";
import React from "react";
import { FaPlay } from "react-icons/fa";
import image from "../../assets/Intersect.png";
import { motion } from "framer-motion";

const MainDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-16 xl:mx-20 lg:mx-10">
      <motion.div
        className="flex flex-col gap-16 px-8 lg:px-12 mb-14 md:mb-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Dive into Delights Of Delectable{" "}
          <motion.span
            className="text-green-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Food
          </motion.span>
        </motion.h1>

        <motion.p
          className="lg:text-lg pr-10 tracking-wide text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </motion.p>

        <motion.div
          className="flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-2 px-6 py-3 rounded-3xl text-white font-medium bg-green-500 hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="">Order Now</p>
          </motion.button>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 rounded-3xl font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="">Watch Video</p>
          </motion.button>
          <motion.button
            className="border border-gray-200 rounded-full px-4 drop-shadow-2xl hover:bg-green-500 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center relative mr-4 mb-10 md:mb-0 lg:mr-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="h-[350px] w-[350px] lg:h-[420px] lg:w-[420px] rounded-full bg-green-400 relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            className="h-[380px] w-[380px] lg:h-[480px] lg:w-[750px] absolute -bottom-2 right-3"
            src={image}
            alt=""
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="drop-shadow-2xl flex flex-col absolute -bottom-32 xl:flex-row xl:-bottom-16 gap-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              name: "Spicy Noodles",
              price: "18.00",
              rating: 3,
            },
            {
              name: "Vegetarian Salad",
              price: "28.00",
              rating: 3,
            },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              className="flex items-center gap-6 px-5 py-1 bg-white rounded-xl drop-shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="lg:h-20 lg:w-20 h-16 w-16"
                src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h2 className="font-medium lg:text-lg">{item.name}</h2>
                <Rating value={item.rating} />
                <p className="lg:text-lg font-medium">
                  <span className="text-red-700 text-sm">$</span>
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainDisplay;

// <div className="flex absolute gap-4 -bottom-28">
//             <div className="flex gap-6 px-5 py-1  bg-white rounded-xl drop-shadow-xl ">
//               <img
//                 className="h-20 w-20 "
//                 src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
//                 alt=""
//               />
//               <div className="flex flex-col gap-1 ">
//                 <h2 className="font-medium text-lg">Spicy Noodles</h2>
//                 <Rating value={3} />
//                 <p className="text-lg font-medium">
//                   <span className="text-red-700 text-sm">$</span>18.00
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-6 px-5 py-1  bg-white rounded-xl drop-shadow-xl">
//               <img
//                 className="h-20 w-20 "
//                 src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
//                 alt=""
//               />
//               <div className="flex flex-col gap-1 ">
//                 <h2 className="font-medium text-lg">Vegetarian Salad</h2>
//                 <Rating value={4} />
//                 <p className="text-lg font-medium">
//                   <span className="text-red-700 text-sm">$</span>23.00
//                 </p>
//               </div>
//             </div>
//           </div>
