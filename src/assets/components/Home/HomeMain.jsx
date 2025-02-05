import React, { useState } from "react";
import NavBar from "../NavBar";
import CardSection from "./CardSection";
import QuestionList from "./QuestionList";
import HomeMainDesktop from "./HomeMainDesktop";
import InvestmentSteps from "./InvestmentSteps";
import HomeMainTable from "./HomeMainTable";
import InvestmentIntro from "./InvestmentIntro";
import Footer from "../Footer/Footer";

const HomeMain = () => {
  return (
    <div className="flex flex-col gap-32">
      <NavBar />
      <HomeMainDesktop />
      <CardSection />
      <InvestmentSteps />
      <HomeMainTable />
      <QuestionList />
      <InvestmentIntro />
      <Footer />
    </div>
  );
};

export default HomeMain;
