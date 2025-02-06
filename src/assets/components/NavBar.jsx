import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-[80%] flex justify-between items-center mx-auto">
      <div>
       <Link to="/"> <img src="./Logo.png" alt="Logo Image" className="w-24" /></Link>
      </div>

      <div className="flex font-semibold items-center gap-20">
        <Link to="/howitworks" className="cursor-pointer hover:underline">How it works</Link>
        <Link to="/investmain" className="cursor-pointer hover:underline">Invest</Link>
        {/* Added Link to navigate to /about */}
        <Link to="/about" className="cursor-pointer hover:underline">About</Link>
        <Link to="/blog" className="cursor-pointer hover:underline">Blog</Link>

        <select className="">
          <option>EN</option>
          <option>English</option>
          <option>Spanish</option>
        </select>

        <Link to="/login" className="cursor-pointer">Sign In</Link>

        <Link to="/individual" className="bg-[#A0F000] px-6 cursor-pointer py-4 rounded-full hover:bg-[#BBFE59]">
          Create Account
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
