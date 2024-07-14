import React from "react";

const CategoryCard = ({ name }) => {
  return (
    <div className=" px-14 py-6 border border-gray-100 rounded-3xl shadow-xl">
      <div className="bg-green-200 rounded-full flex items-center justify-center h-36 w-36">
        <img
          className="w-24 h-2w-24 "
          src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-burger-png-images-png-image_13164941.png"
          alt=""
        />
      </div>
      <h2 className="flex justify-center mt-4 font-semibold text-xl">{name}</h2>
      <p className="flex justify-center  text-slate-600 mb-1">(86 dishes)</p>
    </div>
  );
};

export default CategoryCard;
