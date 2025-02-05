import React from "react";
import { Link } from "react-router-dom";

const SignUpNav = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className=" w-[80%] flex justify-between items-center mx-auto">
        <div>
          <Link to="/">
            <img src="./Logo.png" alt="Logo Image" className="w-24" />
          </Link>
        </div>

        <div className="flex font-semibold items-center gap-20">
          <select className="">
            <option>EN</option>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </nav>
      <div className="w-[35%] py-16 flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between items-center mx-auto">
      
         <Link to="/individual" className="py-4 cursor-pointer bg-[#F6F6F9] w-[50%] rounded-l-full font-semibold text-2xl flex justify-center items-center">
            Individual
          </Link>
          <Link to="/company" className="py-4 cursor-pointer bg-black w-[50%] rounded-r-full font-semibold text-2xl text-white flex justify-center items-center">
            Company
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpNav;
