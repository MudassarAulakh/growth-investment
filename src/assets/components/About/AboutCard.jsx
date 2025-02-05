import React from "react";
const AboutCard = ({ title, description, img }) => {
  return (
    <>
      <div className="rounded-xl pb-14 ">
        <div className="w-[100%] mx-auto pt-10">
          <div>
            <img src={img} alt="" 
            className="w-[45px]"
            />
          </div>
          <p className="mt-4 text-2xl font-medium">{title}</p>
          <p className="mt-3 text-[18px]">{description}</p>
        </div>
      </div>
    </>
  );
};
export default AboutCard;
