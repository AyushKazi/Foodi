import { Rating } from "@mantine/core";
import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import image from "../../assets/Intersect.png";

const MainDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-16  xl:mx-20 lg:mx-10 ">
      <div className="flex flex-col gap-16 px-8 lg:px-12 mb-14 md:mb-0 ">
        <h1 className=" text-3xl lg:text-5xl font-bold ">
          Dive into Delights Of Delectable{" "}
          <span className="text-green-500">Food</span>
        </h1>

        <p className="lg:text-lg  pr-10 tracking-wide text-gray-600">
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
          <button className=" border border-gray-200 rounded-full px-4 drop-shadow-2xl">
            <FaPlay />
          </button>
        </div>
      </div>
      <div className=" flex justify-center  items-center relative   mr-4 mb-10 md:mb-0 lg:mr-0">
        <div className="h-[350px] w-[350px] lg:h-[420px] lg:w-[420px] rounded-full bg-green-400  relative    ">
          <img
            className="h-[380px] w-[380px] lg:h-[480px] lg:w-[750px]   absolute -bottom-2 right-3  "
            src={image}
            alt=""
          />
        </div>
        <div className="drop-shadow-2xl  flex  flex-col absolute -bottom-32 xl:flex-row xl:-bottom-16  gap-3   ">
          <div className=" flex items-center gap-6 px-5 py-1  bg-white rounded-xl drop-shadow-xl ">
            <img
              className="lg:h-20 lg:w-20 h-16 w-16 "
              src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
              alt=""
            />
            <div className="flex flex-col gap-1 ">
              <h2 className="font-medium lg:text-lg">Spicy Noodles</h2>
              <Rating value={3} />
              <p className="lg:text-lg font-medium">
                <span className="text-red-700 text-xs lg:text-sm">$</span>18.00
              </p>
            </div>
          </div>
          <div className="flex gap-6 px-5 py-1  bg-white rounded-xl drop-shadow-xl ">
            <img
              className="lg:h-20 lg:w-20 h-16 w-16 "
              src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
              alt=""
            />
            <div className="flex flex-col gap-1 ">
              <h2 className="font-medium lg:text-lg">Vegetarian Salad</h2>
              <Rating value={3} />
              <p className="lg:text-lg font-medium">
                <span className="text-red-700 text-sm">$</span>28.00
              </p>
            </div>
          </div>
        </div>
      </div>
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
