import React from "react";
import CategoryCard from "./CategoryCard";

const ProductCategories = () => {
  return (
    <div className="mx-16  ">
      <h3 className="uppercase text-xs text-red-600 font-medium flex justify-center my-4">
        Customer favourites
      </h3>
      <h1 className="flex justify-center text-3xl font-semibold">
        Product Categories
      </h1>
      <div className="flex justify-center  gap-10  my-8">
        <CategoryCard name={"Main Dish"} />
        <CategoryCard name={"Break Fast"} />
        <CategoryCard name={"Dessert"} />
        <CategoryCard name={"Browse All"} />
      </div>
    </div>
  );
};

export default ProductCategories;
