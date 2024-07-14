import React from "react";

const CategoryCard = ({ name }) => {
  return (
    <div className=" py-6 border border-gray-100 rounded-3xl shadow-xl ">
      <div className="bg-green-200 rounded-full flex items-center justify-center xl:h-40 xl:w-40 lg:h-32 lg:w-32 md:h-28 md:w-28 h-24 w-24 mx-auto">
        <img
          className="xl:w-32 xl:h-32 w-20 h-20 lg:w-24 lg:h-24 "
          src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
          alt=""
        />
      </div>
      <h2 className="flex justify-center mt-4 font-semibold  xl:text-xl">
        {name}
      </h2>
      <p className="flex justify-center  text-slate-600 mb-1">(86 dishes)</p>
    </div>
  );
};

export default CategoryCard;
