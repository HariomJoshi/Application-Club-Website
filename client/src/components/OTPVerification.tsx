import React, { useRef } from "react";
import AnimatedWrapper from "./AnimatedWrapper"; // Wrap with Animated Wrapper

const OTPVerification = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-black">
      {/* OTP Box with Animation */}
      <AnimatedWrapper>  
        <h2 className="text-xl font-semibold text-center mb-6">OTP Verification</h2>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-4">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 bg-gray-800 border border-gray-600 text-center text-white rounded focus:outline-none focus:ring-2 focus:ring-AC_Green"
            />
          ))}
        </div>

        {/* Resend OTP */}
        <div className="mb-4 flex justify-end">
          <a href="#" className="text-xs text-AC_Green hover:underline">
            Resend OTP ?
          </a>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="w-32 bg-AC_Green text-black font-semibold py-1 rounded hover:bg-opacity-80 transition">
            Submit
          </button>
        </div>
      </AnimatedWrapper>

      {/* Login Button - Positioned Completely Outside */}
      <button className="absolute top-5 right-5 w-24 bg-AC_Green text-black font-semibold py-1 rounded hover:bg-opacity-80 transition">
        Login
      </button>
    </div>
  );
};

export default OTPVerification;
