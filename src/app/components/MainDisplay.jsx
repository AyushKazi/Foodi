import { Rating } from "@mantine/core";
import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";

const MainDisplay = () => {
  return (
    <div className="grid grid-cols-2  mx-16 py-16  ">
      <div className="flex flex-col gap-16 px-12 ">
        <h1 className="text-5xl font-bold ">
          Dive into Delights Of Delectable{" "}
          <span className="text-green-500">Food</span>
        </h1>

        <p className="text-lg  pr-10 tracking-wide text-gray-600">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex">
          <button className="flex items-center gap-2 px-6 py-3 rounded-3xl text-white font-medium bg-green-500">
            <p className="">Order Now</p>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-3xl  font-medium">
            <p className="">Watch Video</p>
          </button>
          <button className=" border border-gray-200 rounded-full px-4 shadow-2xl">
            <FaPlay />
          </button>
        </div>
      </div>
      <div className="px-6  flex justify-center items-center relative">
        <div className=" h-96 w-96 rounded-full bg-green-400 flex justify-center items-center ">
          <img
            className="  h-[500px] w-[800px] absolute  right-24"
            src="https://s3-alpha-sig.figma.com/img/274f/bc24/c74d318156023a0fe71cf0dab4009ace?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvU5oipfnE3mSYpq3T-SBcg3EClx3sUmOTSu83FC~XFIfz0rWHieGOYpzz47D1-3neWv8oGGsmboHAsGWhUBMqmpyxFHCeWPwMokAOCsp8Xo6IcsXfeTlVan7ML8RlXmNoe65W-ziOhZzzFy-u4AJtOv5qHATGpknV2jnjLrKkZBO6GRmyJ6ZF6lZerSHHPepqQWLXinnMj8hIcSo8Bqj9x2SecO9n3QzI3nbjhHhLTCcCvte6ahfrrJr8v~HKhEIwpcuS1BT1P5kAU2XR5o7aANAfbZOs-CSlsd6QOb4zpk~x6YA6l814HUCMwJrni5Lwkfn-SCSVsRK-uOdq5Cew__"
            alt=""
          />
          <div className="flex gap-6 px-5 py-1 absolute -bottom-10 left-16 bg-white rounded-xl drop-shadow-xl">
            <img
              className="h-20 w-20 "
              src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
              alt=""
            />
            <div className="flex flex-col gap-1 ">
              <h2 className="font-medium text-lg">Spicy Noodles</h2>
              <Rating value={3} />
              <p className="text-lg font-medium">
                <span className="text-red-700 text-sm">$</span>18.00
              </p>
            </div>
          </div>
          <div className="flex gap-6 px-5 py-1 absolute -bottom-10 right-10 bg-white rounded-xl drop-shadow-xl">
            <img
              className="h-20 w-20 "
              src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
              alt=""
            />
            <div className="flex flex-col gap-1 ">
              <h2 className="font-medium text-lg">Vegetarian Salad</h2>
              <Rating value={4} />
              <p className="text-lg font-medium">
                <span className="text-red-700 text-sm">$</span>23.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;
