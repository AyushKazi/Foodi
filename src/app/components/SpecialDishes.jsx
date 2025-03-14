import React, { useEffect, useState } from "react";
import SpecialDishCard from "./SpecialDishCard";
import { useQueryAllDishes } from "../queryHooks/useQueryAllDishes";
import { useQuery } from "react-query";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SpecialDishes = () => {
  const { data } = useQueryAllDishes();

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (data) {
      const newData = data.data.results.map((dish) => dish);
      setDishes(newData);
    }
  }, [data]);
  // console.log(dishes);
  return (
    <div className="lg:mx-16 mx-8 lg:px-14 px-4 flex flex-col gap-4 pt-10 mb-14  ">
      <h2 className="uppercase text-red-600 text-xs">Special dishes</h2>
      <div className="grid grid-cols-2 ">
        <h1 className="text-xl md:text-3xl font-semibold">
          Standout Dishes From Our Menu
        </h1>
        <div className="flex justify-end items-center gap-4 ">
          <button className="border border-gray-200 rounded-full px-4 py-4 drop-shadow-2xl bg-white text-black">
            <IoIosArrowBack />
          </button>
          <button className=" border border-gray-200 rounded-full px-4 py-4 drop-shadow-2xl bg-green-400 text-white">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-3 lg:gap-8 xl:gap-12 my-4  mt-10 2xl:grid-cols-4  ">
        {/* {dishes.map((dish) => ( */}
        <SpecialDishCard key={"dish.id"} dish={"dish"} />
        {/* ))} */}
        {/* <SpecialDishCard />
        <SpecialDishCard />

        <SpecialDishCard /> */}
      </div>
    </div>
  );
};

export default SpecialDishes;
