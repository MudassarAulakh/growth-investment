import React from "react";
import NavBar from "../NavBar";
import InvestCardSection from "./InvestCardSection";
import HomeMainTable from "../Home/HomeMainTable";
import InvestmentIntro from "../Home/InvestmentIntro";
import Footer from "../Footer/Footer";

const InvestMain = () => {
  return (
    <div className="flex flex-col gap-10">
      <NavBar />
      <div className="w-[80%] mx-auto flex flex-col gap-22 justify-center items-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-7xl font-semibold text-center">Invest</h1>
          <p className="text-2xl text-center">
            We simplify investing for financial independence, catering <br />
            beginners and experienced investors alike.
          </p>
        </div>
      <div className="w-[90%] flex gap-6 justify-between items-center">
        <div className="w-[40%]">
        <img src="./invest/image.webp" className="w-[90%] h-auto" alt="" />
        </div>
        <div className="flex w-[60%] flex-col justify-between py-14 gap-10">
          <p className="text-3xl font-semibold text-blue-700">
            Secure your future by investing in loans
          </p>
          <p className="text-6xl font-semibold">
            Start with €50 and build a diversified portfolio
          </p>
          <p className="text-2xl">
            At Nectaro, we offer several investment methods to make your
            investment experience as comfortable and simple as possible, helping
            you achieve your investment goals quickly and effortlessly.
          </p>
          <p className="text-2xl">
            Nectaro is regulated by Latvijas Banka, the central bank of Latvia,
            and is a member of the Latvian Investor Protection Scheme in
            accordance with Directive 97/9/EC. This supervision provides
            additional protection for investors by ensuring that financial
            institutions adhere to established rules and requirements.
          </p>
        </div>
      </div>
      <InvestCardSection />
      </div>
      <HomeMainTable />
      <div className="py-32">
      <InvestmentIntro />
      </div>
      <Footer />
    </div>
  );
};

export default InvestMain;
