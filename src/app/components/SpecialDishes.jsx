import React, { useEffect, useState } from "react";
import SpecialDishCard from "./SpecialDishCard";
import { useQueryAllDishes } from "../queryHooks/useQueryAllDishes";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Carousel } from "@mantine/carousel";

const SpecialDishes = () => {
  const { data, isLoading, error } = useQueryAllDishes();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (data) {
      const newData = data.data.results.map((dish) => ({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        description:
          dish.description || "A delicious dish from our special menu",
        image: dish.image || "https://via.placeholder.com/300",
      }));
      setDishes(newData);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-red-500">
          Failed to load dishes. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="lg:mx-16 mx-8 lg:px-14 px-4 flex flex-col gap-4 pt-10 mb-14">
      <h2 className="uppercase text-red-600 text-xs font-medium tracking-wider">
        Special dishes
      </h2>
      <div className="grid grid-cols-2">
        <h1 className="text-xl md:text-3xl font-semibold">
          Standout Dishes From Our Menu
        </h1>
      </div>

      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap="md"
        align="start"
        slidesToScroll={1}
        withControls
        loop
        className="mt-10"
        nextControlIcon={<IoIosArrowForward size={20} />}
        previousControlIcon={<IoIosArrowBack size={20} />}
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
            border: "1px solid #E5E7EB",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#4ADE80",
              color: "white",
            },
          },
        }}
      >
        {dishes.map((dish) => (
          <Carousel.Slide key={dish.id}>
            <SpecialDishCard dish={dish} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default SpecialDishes;
