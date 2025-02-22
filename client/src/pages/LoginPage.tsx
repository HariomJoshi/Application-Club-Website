import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import userIcon from "../assets/images/icons/user.png";
import lockIcon from "../assets/images/icons/lock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins:400,700", "Poltawski Nowy"],
      },
    });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    
    <div
      className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      
      <div className="absolute top-6 right-6">
        <button
          className="text-black font-bold px-4 py-2 rounded-md transition hover:opacity-80"
          style={{ background: "#2DBAAAF0", boxShadow: "none" }}
        >
          SIGNUP
        </button>
      </div>

    
      <div
        className="rounded-xl py-8 px-6 sm:px-10 md:px-14 lg:px-16 shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl"
        style={{
          background: "#000000", 
          border: "4px solid green",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2
          className="text-center text-2xl sm:text-3xl font-bold mb-6 text-white"
          style={{ fontFamily: "Poltawski Nowy, sans-serif" }}
        >
          LOGIN
        </h2>

        
        <div className="mb-4">
          <label className="flex items-center mb-1 text-lg font-medium text-white">
            <img src={userIcon} alt="User Icon" className="w-5 h-5 mr-2" />
            <span>Username / Email</span>
          </label>
          <div
            className="rounded-lg border border-gray-600 px-3 py-2 sm:py-3"
            style={{ background: "rgba(74,74,74,0.42)" }}
          >
            <input
              type="text"
              placeholder="Enter your username/Email"
              className="w-full bg-transparent border-0 outline-none focus:ring-0 text-white placeholder-gray-300"
            />
          </div>
        </div>

       
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1 text-lg font-medium text-white">
            <label className="flex items-center">
              <img src={lockIcon} alt="Lock Icon" className="w-5 h-5 mr-2" />
              <span>Password</span>
            </label>
            <span className="text-sm cursor-pointer hover:underline" style={{ color: "#00FFE2" }}>
              Forgot Password?
            </span>
          </div>
          <div
            className="flex items-center rounded-lg border border-gray-600 px-3 py-2 sm:py-3"
            style={{ background: "rgba(74,74,74,0.42)" }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-transparent border-0 outline-none focus:ring-0 text-white placeholder-gray-300"
            />
            <span className="ml-2 cursor-pointer" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-white" />
            </span>
          </div>
        </div>

        <button
          className="block w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/4 mx-auto text-black font-bold py-2 sm:py-3 rounded-lg mt-6 transition hover:opacity-80"
          style={{ background: "#2DBAAAF0" }}
        >
          Submit
        </button>
      </div>
    
    </div>
   
  );
};

export default LoginPage;
