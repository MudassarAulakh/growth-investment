import React from "react";
import NavBar from "../NavBar";
import { FaArrowRight } from "react-icons/fa";
import AboutCardSection from "./AboutCardSection";
import AboutSVGCards from "./AboutSVGCards";
import AboutForPeople from "./AboutForPeople";
import InvestmentIntro from "../Home/InvestmentIntro";
import Footer from "../Footer/Footer";

const AboutMain = () => {
  return (
    <div>
      <NavBar />
      <div className="w-[80%] mx-auto flex flex-col gap-22">
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-7xl font-semibold text-center">About</h1>
          <p className="text-2xl text-center">
            Your new favorite investment platform.
          </p>
        </div>
        <div className="w-[90%] mx-auto text-2xl">
          <p>
            Welcome to Nectaro, the fully licensed investment platform designed
            with Gen Z and millennials in mind to provide the best experience
            for every person. We understand the unique challenges and
            aspirations of today's generation, and we're here to empower
            everyone to take control of your financial future.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-6xl font-bold">3 reasons to trust us</p>
          <button className="flex justify-start items-center w-[15%] gap-8 border mt-10 bg-black text-white rounded-full px-7 py-4">
            Start now
            <span className="bg-white text-black p-2 rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <AboutCardSection />
      </div>
        <AboutSVGCards />
        <AboutForPeople />
        <div className="py-22">
        <InvestmentIntro />
        </div>
        <Footer />
    </div>
  );
};

export default AboutMain;
