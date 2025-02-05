import React, { useState } from "react";
import { Link } from "react-router-dom";
// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const IndivisualSignup = () => {
  const [Email, setEmail] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [LastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const isLowercase = /[a-z]/.test(Password);
  const isUppercase = /[A-Z]/.test(Password);
  const isSpecialChar = /[\W_]/.test(Password); // Matches symbols
  const isDigit = /\d/.test(Password);
  const isValidLength = Password.length >= 9;
  const getStatusClass = (isValid) =>
    isValid ? "bg-green-300 text-white" : "bg-red-300 text-black";
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlefirstname=(e)=>{
    setFirstname(e.target.value)
  }
  const handlelastname=(e)=>{
    setLastName(e.target.value)
  }
  const handleSubmit = () => {
    if (!Password || !Email || !Firstname || !LastName) {
      return alert("Please fill all the fields");
    } else
    if (
      !isDigit ||
      !isLowercase ||
      !isSpecialChar ||
      !isUppercase ||
      !isValidLength
    ) {
      return alert("Please follow the password rules");
    }else
    if (!emailRegex.test(Email)) {
      return alert("Please enter the correct email");
    }else
    return alert("Data addes successfully")
    //     console.log(emailRegex.test(Email))
    //    else{
    //     return alert("The email is correct")
    //    }
  };
  return (
    <div className="flex flex-col py-4">
      <div className="flex justify-center mt-10">
        <p className="text-4xl font-bold">Sign up as an individual</p>
      </div>
      <div className="mt-10 flex gap-2">
        <input
          type="text"
          placeholder="Firstname"
          onChange={handlefirstname}
          className="bg-[#F6F6F9] p-2 w-full rounded-[10px] focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={handlelastname}
          className="bg-[#F6F6F9] p-2 w-full rounded-[10px] focus:outline-none"
        />
      </div>
      <div>
        <select className="bg-[#F6F6F9] w-full mt-7 p-4 rounded-[15px] focus:outline-none">
          <option value=""></option>
          <option value="Saudia">Saudi Arabia</option>
          <option value="pakistan" selected="">
            Pakistan
          </option>
          <option value="england">England</option>
        </select>
      </div>
      <div className="mt-[25px]">
        <input
          type="text"
          placeholder="Email "
          onChange={handleEmail}
          className="bg-[#F6F6F9] w-full p-3 rounded-[15px] focus:outline-none"
        />
      </div>
      <div className="p-5">
        <div className="mt-6">
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            className="bg-[#F6F6F9] w-full p-3 rounded-[15px] focus:outline-none"
          />
        </div>
        <div className="mt-6 space-y-3">
          {[
            {
              text: "At least 1 lowercase character (a-z)",
              valid: isLowercase,
            },
            {
              text: "At least 1 uppercase character (A-Z)",
              valid: isUppercase,
            },
            {
              text: "At least 1 special character ($%&*)",
              valid: isSpecialChar,
            },
            { text: "At least 1 digit (0-9)", valid: isDigit },
            { text: "At least 9 characters long", valid: isValidLength },
          ].map(({ text, valid }, index) => (
            <div key={index} className="flex gap-3">
              <p
                className={`h-[25px] w-[25px] flex items-center justify-center rounded-full ${getStatusClass(
                  valid
                )}`}
              >
                {valid ? ":heavy_check_mark:" : "!"}
              </p>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[25px]">
        <p>
          By proceeding with registration I agree to the Terms & conditions and
          Privacy policy. I also agree that Nectaro provided me with all
          information related to investment services, including certain
          documents available online and personally addressed information via
          email.
        </p>
      </div>
      <div className="mt-[25px] flex justify-between">
        <div>
          <Link to="/">
            <p className="text-xl font-semibold">Back to Sign in</p>
          </Link>
        </div>
        <div>
          <button
            className="bg-black p-3 rounded-[10px] text-white"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </div>
      <div className="w-100 ps-2 py-3 d-flex align-items-baseline">
        <input type="checkbox" />
        <label htmlFor="check" className="px-3">
          <span className="checked-para">
            Agree to receive marketing communications to provided e-mail in line
            with the Privacy policy.
          </span>
        </label>
      </div>
    </div>
  );
};
export default IndivisualSignup;