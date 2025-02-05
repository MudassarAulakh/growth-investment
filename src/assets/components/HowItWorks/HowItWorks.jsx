import React from "react";
import NavBar from "../NavBar";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import HowWorkCardSection from "./HowWorkCardSection";
import HomeMainTable from "../Home/HomeMainTable";
import InvestmentIntro from "../Home/InvestmentIntro";
import Footer from "../Footer/Footer";

const HowItWorks = () => {
  return (
    <>
      <NavBar />
      <div className="w-[80%] mx-auto flex flex-col gap-22 justify-center items-center">
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-7xl font-semibold text-center">How it works</h1>
          <p className="text-2xl text-center">
            Retail investment democratization offers diverse options for <br />{" "}
            both beginners and experienced investors.
          </p>
        </div>
        <div className="flex justify-between w-[95%] py-14 gap-10">
          <div className="w-[55%]">
            <p className="text-3xl font-semibold text-blue-700">
              Investing in loans
            </p>
            <p className="text-6xl font-semibold">
              Unlock the passive income tool by investing in Notes on a licensed
              investment platform.
            </p>
          </div>
          <div className="w-[45%] flex flex-col gap-5 text-2xl">
            <p>
              Nectaro believes that democratizing investments is an opportunity
              for individuals of all income levels to achieve better returns on
              their savings and build long-term wealth.
            </p>
            <p>
              Nectaro believes that democratizing investments is an opportunity
              for individuals of all income levels to achieve better returns on
              their savings and build long-term wealth.
            </p>
          </div>
        </div>
        <div className="w-[80%] bg-[#F6F6F9] rounded-2xl px-8 py-5 flex gap-3">
          <FaCircleExclamation className="text-blue-400 text-6xl flex text-start" />
          <p className="pt-4">
            As an investor, it's essential to understand the risks involved,
            even though we are a regulated platform with a license supervised by
            the Bank of Latvia. Please be aware that your capital is subject to
            potential risks, carefully consider your objectives and potential
            risks before making any investment decisions.
          </p>
        </div>
        <div className="py-10 w-[85%]">
          <img
            src="./howitworks/image.jpg"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="w-[100%] flex justify-between items-center">
          <p className="text-6xl font-semibold">
            Getting started with Nectaro is easy and safe
          </p>
          <button className="flex justify-start items-center w-[15%] gap-8 border mt-10 bg-black text-white rounded-full px-7 py-4">
            Start now
            <span className="bg-white text-black p-2 rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <HowWorkCardSection />
      </div>
        <HomeMainTable />
        <div c className="py-22">
        <InvestmentIntro/>
        </div>
        <Footer />
    </>
  );
};

export default HowItWorks;
