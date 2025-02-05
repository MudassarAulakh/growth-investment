import React from "react";

const AboutForPeople = () => {
  return (
    <div className="w-[80%] flex flex-col gap-32 my-10 mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold ">Created by people, for people</h1>
        <p className="text-[22px] w-[80%]">
          Nectaro is an investment platform with a IBF license (Nr 27-55/2023/3)
          , which provides assurance to investors that the platform is operating
          legally and in compliance with EU regulations, giving investors more
          confidence. We are supervised by the Bank of Latvia.
        </p>
      </div>
    <div className="flex justify-center items-center">
    <div className="w-[65%] flex flex-col justify-center items-center">
     <p className="text-4xl text-left">
        "Let's learn, grow, and invest together, and create a brighter future
        for ourselves and the generations to come."
      </p>
      <div className="flex justify-end items-end w-[100%]">
      <div className="flex justify-between items-end text-end">
        <p className="font-semibold">Sigita Kotlere</p>
        <p> - CEO of Nectaro</p>
      </div>
      </div>
      <div className="py-22">
        <h1 className="text-5xl text-center py-10 font-semibold">People behind Nectaro</h1>
        <div className="flex gap-22 justify-around text-center">
          <div className="flex flex-col gap-2">
            <img src="./about/image1.webp" alt="" />
            <h2 className="text-2xl font-bold">Sigita Kotlere</h2>
            <h3>Board Member & CEO</h3>
          </div>
          <div className="flex flex-col gap-2">
            <img src="./about/image2.webp" alt="" />
            <h2 className="text-2xl font-bold">Anna Berezovska</h2>
            <h3>Board Member & CCO</h3>
          </div>
          <div className="flex flex-col gap-2">
            <img src="./about/image3.webp" alt="" />
            <h2 className="text-2xl font-bold">Dmitry Tsymber</h2>
            <h3>Founder & Board Member</h3>
          </div>
        </div>
      </div>
     </div>
    </div>
    </div>
  );
};

export default AboutForPeople;
