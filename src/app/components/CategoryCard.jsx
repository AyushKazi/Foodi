import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const CategoryCard = ({ name, count }) => {
  return (
    <motion.div
      className="py-6 border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow"
      variants={item}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="bg-green-200 rounded-full flex items-center justify-center xl:h-40 xl:w-40 lg:h-32 lg:w-32 md:h-28 md:w-28 h-24 w-24 mx-auto"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          className="xl:w-32 xl:h-32 w-20 h-20 lg:w-24 lg:h-24"
          src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
      <motion.h2
        className="flex justify-center mt-4 font-semibold xl:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.h2>
      <motion.p
        className="flex justify-center text-slate-600 mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ({count} dishes)
      </motion.p>
    </motion.div>
  );
};

export default CategoryCard;
