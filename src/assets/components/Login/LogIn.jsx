import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
// import { AuthContext } from "../../Context/useUser";

const LogIn = () => {
  // const { email, password } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = () => {
  //   if (!userEmail) {
  //     return alert("Please enter the email");
  //   } else if (!userPassword) {
  //     return alert("Please enter the password");
  //   } else if (email === userEmail && password === userPassword) {
  //     return alert("Login Successfully");
  //   } else {
  //     return alert("Error");
  //   }
  // };
  const handleSubmit = () => {
    if (!userEmail) {
      return alert("Please enter the email");
    } else if (!userPassword) {
      return alert("Please enter the password");
    } else {
      return alert("Login Successfully");
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center mx-auto text-center">
      <nav className="w-[80%] flex justify-between items-center mx-auto">
        <div>
          <Link to="/">
            <img src="./Logo.png" alt="Logo" className="w-24" />
          </Link>
        </div>
        <div className="flex font-semibold items-center gap-20">
          <select>
            <option>EN</option>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </nav>

      <div className="flex flex-col gap-4 w-[100%] justify-center items-center mx-auto h-[80vh]">
        <h1 className="text-4xl font-bold mb-3">Welcome back</h1>

        <input
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-[20%] px-3 focus:outline-none py-4 rounded-xl bg-[#F6F6F9]"
          placeholder="Email"
        />

        <div className="w-[20%] flex justify-between items-center px-3 py-4 rounded-xl bg-[#F6F6F9]">
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setUserPassword(e.target.value)}
            className="w-full focus:outline-none"
            placeholder="Password"
          />
          <span onClick={handleShowPassword} className="cursor-pointer">
            {showPassword ? <GoEye /> : <GoEyeClosed />}
          </span>
        </div>

        <div className="w-[20%] flex justify-between items-center text-blue-600">
          <p className="hover:underline">Reset password</p>
          <Link to="/individual" className="hover:underline">
            Create account
          </Link>
        </div>

        <div
          className="flex bg-black justify-center rounded-full cursor-pointer items-center w-[20%]"
          onClick={handleSubmit}
        >
          <button className="w-full text-white py-3">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
