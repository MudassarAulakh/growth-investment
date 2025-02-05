import React from "react";
const InvestCard = ({ title, description,paragraph }) => {
  return (
    <>
      <div className=" bg-[#F6F6F9] rounded-xl pb-14 ">
        <div className="w-[85%] mx-auto pt-10">
          <p className="mt-4 text-2xl font-medium">{title}</p>
          <p className="mt-3 text-[18px]">{description}</p>
          <p className="mt-3 text-[18px]">{paragraph}</p>
        </div>
      </div>
    </>
  );
};
export default InvestCard;