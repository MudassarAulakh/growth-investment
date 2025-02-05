import React from "react";
import NavBar from "../NavBar";
import BlogCardSection from "./BlogCardSection";
import InvestmentIntro from "../Home/InvestmentIntro";
import Footer from "../Footer/Footer";

const BlogMain = () => {
  return (
    <>
      <NavBar />
      <div className="w-[90%] mx-auto flex flex-col gap-22">
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-7xl font-semibold text-center">Blog</h1>
        </div>
        <div className="w-[90%] mx-auto text-center text-2xl">
          <p>
            Explore Nectaro Blog for useful information on finance,<br /> investment
            trends, and portfolio diversification. Transparent <br /> insights for
            smart financial decisions.
          </p>
        </div>
        <BlogCardSection />
      </div>
     <div className="py-32">
     <InvestmentIntro />
     </div>
     <Footer />
    </>
  );
};

export default BlogMain;
