import React from "react";

const HomeDesktopHeroSection = () => {
  return (
    <div className="flex pt-6 justify-between w-[80%] mx-auto">
      <div className="flex flex-col text-left mt-10 items-left gap-10">
        <h1 className="text-7xl font-bold">
          Empower your <br /> investments!
        </h1>
        <p className="text-xl">
          Unlock passive income by investing in loans on licensed <br />{" "}
          investment platform Nectaro.
        </p>
        <div className="relative bg-[#F6F6F9] flex items-center px-6 py-4 rounded-4xl">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#F6F6F9] w-full focus:outline-none"
          />
          <button className="absolute bg-black cursor-pointer text-white px-8 right-0 rounded-4xl py-4">
            Create account
          </button>
        </div>
      </div>
      <div className="absolute z-10 right-48 top-32">
        <img src="./home/image1.webp" alt="Investment Image" />
      </div>
    </div>
  );
};

export default HomeDesktopHeroSection;
