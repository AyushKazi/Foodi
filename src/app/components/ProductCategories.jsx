import React from "react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

const categories = [
  { name: "Main Dish", count: 86 },
  { name: "Break Fast", count: 45 },
  { name: "Dessert", count: 32 },
  { name: "Browse All", count: 163 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const ProductCategories = () => {
  return (
    <div className="xl:mx-28 lg:mx-20 md:mx-10 my-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h3
          className="uppercase text-xs text-red-600 font-medium my-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Customer favourites
        </motion.h3>
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Product Categories
        </motion.h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:gap-10 gap-5 my-8 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            count={category.count}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCategories;
