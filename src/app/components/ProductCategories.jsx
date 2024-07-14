import React from "react";
import CategoryCard from "./CategoryCard";

const ProductCategories = () => {
  return (
    <div className="xl:mx-28 lg:mx-20 md:mx-10 my-20  ">
      <h3 className="uppercase text-xs text-red-600 font-medium flex justify-center my-4">
        Customer favourites
      </h3>
      <h1 className="flex justify-center text-3xl font-semibold">
        Product Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-10 gap-5   my-8 px-4">
        <CategoryCard name={"Main Dish"} />
        <CategoryCard name={"Break Fast"} />
        <CategoryCard name={"Dessert"} />
        <CategoryCard name={"Browse All"} />
      </div>
    </div>
  );
};

export default ProductCategories;
