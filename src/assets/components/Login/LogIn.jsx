import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto text-center">
      <nav className=" w-[80%] flex justify-between items-center mx-auto">
        <div>
          <Link to="/"><img src="./Logo.png" alt="Logo Image" className="w-24" /></Link>
        </div>

        <div className="flex font-semibold items-center gap-20">
          <select className="">
            <option>EN</option>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </nav>
      <div className="flex flex-col gap-4 w-[100%] justify-center items-center mx-auto h-[80vh]">
        <h1 className="text-4xl font-bold mb-3">Welcome back</h1>
        <input type="email" className="w-[20%] px-3 focus:outline-none py-4 rounded-xl fl justify-center  bg-[#F6F6F9]" placeholder="Email" />
        <div className="w-[20%] px-3 py-4 rounded-xl bg-[#F6F6F9]">
          <input type="password" className="w-full focus:outline-none" placeholder="Password" />
          <span></span>
        </div>
        <div className="w-[20%] flex justify-between items-center text-blue-600">
          <p className="hover:underline">Reset password</p>
          <Link to="/individual" className="hover:underline">Create account</Link>
        </div>
        <div className="flex bg-black justify-center rounded-full cursor-pointer items-center w-[20%]">
          <button className=" w-full text-white py-3">Sign In</button>
        </div>
      </div>
      {/* SVG Shape */}
      {/* <svg
        width="300"
        height="331"
        viewBox="0 0 300 331"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-10 right-10 md:right-32 lg:right-16"
      >
        <path
          d="M100 -8.74228e-06C210.457 -3.91405e-06 300 89.543 300 200L225 200C225 130.964 169.036 75 100 75L100 -8.74228e-06Z"
          fill="#A0F000"
        />
        <rect
          y="75"
          width="75"
          height="100"
          transform="rotate(-90 0 75)"
          fill="#A0F000"
        />
        <rect
          x="300"
          y="331"
          width="75"
          height="131"
          transform="rotate(180 300 331)"
          fill="#664CF6"
        />
      </svg> */}
    </div>
    
  );
};
export default LogIn;
