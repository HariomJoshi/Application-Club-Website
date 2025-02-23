import React, {useState, useEffect} from "react";
import userIcon from "../assets/images/icons/user.png";
import lockIcon from "../assets/images/icons/lock.png";
import {HiEye, HiEyeOff} from "react-icons/hi";
import {MouseEffectBackground} from "../components/background/MouseEffectBackground.js";
import AnimatedWrapper from "../components/AnimatedWrapper";

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (

        <div
            className="relative min-h-screen flex items-center *:z-10 justify-center px-4 sm:px-8 md:px-12 lg:px-16">
            <MouseEffectBackground/>


            <button
                className="absolute top-6 right-6 text-black px-4 py-2 rounded-md transition hover:opacity-80 bg-AC_Green">
                Signup
            </button>

            <AnimatedWrapper>

                <div
                    className="flex justify-center items-center align-middle flex-col bg-neutral-900 text-white p-8 min-w-[90dvw] md:min-w-[500px]">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-white font-poltawski">
                        LOGIN
                    </h2>

                    <div className="mb-4 flex gap-2 flex-col w-full">
                        <label className="flex items-center text-lg font-medium text-white">
                            <img src={userIcon} alt="User Icon" className="w-5 h-5 mr-2"/>
                            <span>Username / Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username/ Email"
                            className="w-full p-2 px-4 rounded-lg bg-neutral-800 border-0 outline-none focus:ring-0 text-white placeholder-gray-300"
                        />
                    </div>


                    <div className="mb-6 flex gap-2 flex-col w-full">
                        <div className="flex justify-between items-center text-lg font-medium text-white">
                            <label className="flex items-center text-lg font-medium text-white">
                                <img src={lockIcon} alt="Lock Icon" className="w-5 h-5 mr-2"/>
                                <span>Password</span>
                            </label>
                            <span className="text-sm cursor-pointer hover:underline" style={{color: "#00FFE2"}}>
              Forgot Password?
            </span>
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full p-2 px-4 rounded-lg bg-neutral-800 border-0 outline-none focus:ring-0 text-white placeholder-gray-300"
                            />
                            <span className="top-1/2 -translate-y-1/2 right-3 text-white cursor-pointer absolute"
                                  onClick={togglePasswordVisibility}>{showPassword ? <HiEye/> : <HiEyeOff/>}</span>
                        </div>
                    </div>

                    <button type="submit"
                            className="w-[140px] h-[37px] bg-[#2DBAAAF0] hover:bg-teal-600 text-white font-semibold py-2 rounded-xl">
                        Submit
                    </button>
                </div>
            </AnimatedWrapper>
        </div>

    );
};

export default LoginPage;
