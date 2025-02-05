import React from "react";
const Cards = ({ title, description,src }) => {
  return (
    <>
      <div className=" bg-[#F6F3FE] rounded-xl pb-14 ">
        <div className="w-[85%] mx-auto pt-10">
          <div>
            <img src={src} alt="" />
          </div>
          <p className="mt-4 text-2xl font-medium">{title}</p>
          <p className="mt-3 text-[18px]">{description}</p>
        </div>
      </div>
    </>
  );
};
export default Cards;