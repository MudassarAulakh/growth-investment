import React, { useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import SignUpNav from "./SignUpNav";

const SignUpForCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("Pakistan");
  const [isChecked, setIsChecked] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => {
    return /[a-z]/.test(password) &&
           /[A-Z]/.test(password) &&
           /[0-9]/.test(password) &&
           /[$%&*]/.test(password) &&
           password.length >= 9;
  };

  const handleSubmit = () => {
    if (!companyName) return alert("Company Name is required");
    if (!firstName) return alert("First Name is required");
    if (!lastName) return alert("Last Name is required");
    if (!validateEmail(email)) return alert("Invalid email format");
    if (!validatePassword(password)) return alert("Password does not meet criteria");
    if (!isChecked) return alert("You must agree to the terms");

    alert("Account Created Successfully!");
  };
  return (
    <>
    <SignUpNav />
    <div className="flex flex-col justify-center items-center">
      <div className="w-[35%] py-16 flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-semibold">Sign up as a company</h2>
        <div className="w-full">
          <input
            type="email"
            className="bg-[#F6F6F9] focus:outline-none w-full rounded-xl px-3 py-4"
            placeholder="Company Name"
            value={companyName} onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="flex w-[100%] gap-2 justify-between items-center">
          <input
            type="text"
            className="bg-[#F6F6F9] focus:outline-none w-full rounded-xl px-3 py-4"
            placeholder="Representative first name"
            value={firstName} onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="bg-[#F6F6F9] w-full focus:outline-none rounded-xl px-3 py-4"
            placeholder="Representative last name"
            value={lastName} onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex w-full items-center gap-20">
          <select className="flex rounded-xl focus:outline-none justify-between bg-[#F6F6F9] p-4 w-full"
          value={country} onChange={(e) => setCountry(e.target.value)}
          >
            <option>Pakistan</option>
            <option>USA</option>
            <option>Argentina</option>
          </select>
        </div>
        <div className="w-full">
          <input
            type="email"
            className="bg-[#F6F6F9] focus:outline-none w-full rounded-xl px-3 py-4"
            placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full px-3 py-4 rounded-xl bg-[#F6F6F9]">
          <input
            type="password"
            className="w-full focus:outline-none"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
        </div>
        <div className="w-full text-[17px] gap-2 flex flex-col text-left">
          <div className="flex justify-start items-center gap-3">
            <FaCircleExclamation className="text-[#F4C2C7]" />
            <p>At least 1 lowercase character (a-z)</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaCircleExclamation className="text-[#F4C2C7]" />
            <p>At least 1 uppercase character (A-Z)</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaCircleExclamation className="text-[#F4C2C7]" />
            <p>At least 1 special character ($%&*)</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaCircleExclamation className="text-[#F4C2C7]" />
            <p>At least 1 digit (0-9)</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaCircleExclamation className="text-[#F4C2C7]" />
            <p>At least 9 characters long</p>
          </div>
        </div>
        <div className="w-full flex gap-3 justify-start items-start">
          <input type="checkbox" className="my-2" 
          checked={isChecked} onChange={() => setIsChecked(!isChecked)}
          />
          <p className=" text-[18px]">
            Agree to receive marketing communications to provided e-mail in line
            with the Privacy policy.
          </p>
        </div>
        <p className="text-[17px]">
          By proceeding with registration I agree to the Terms & conditions and
          Privacy policy. I also agree that Nectaro provided me with all
          information related to investment services, including certain
          documents available online and personally addressed information via
          email.
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="text-2xl font-semibold hover:underline">
            Back To Sign In
          </div>
          <button className="flex justify-center items-center px-6 py-3 bg-black cursor-pointer text-white font-semibold rounded-full"
          onClick={handleSubmit}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUpForCompany;
