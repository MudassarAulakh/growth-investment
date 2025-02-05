import React from "react";
import AboutMain from "./About/AboutMain";
import HomeMain from "./Home/HomeMain";
import HowItWorks from "./HowItWorks/HowItWorks";
import InvestMain from "./Invest/InvestMain";
import LogIn from "./Login/LogIn";
import SignUpForCompany from "./SignUp/SignUpForCompany";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForIndividual from "./SignUp/SignUpForIndividual";
import BlogMain from "./Blog/BlogMain";

const AppMain = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/investmain" element={<InvestMain />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/individual" element={<SignUpForIndividual />} />
          <Route path="/company" element={<SignUpForCompany />} />
          <Route path="/blog" element={<BlogMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppMain;
