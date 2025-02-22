import React, {useEffect, useState} from "react";
import usernameLogo from "../assets/SignUpformLogo/usernameLogo (1).png"
import passwordLogo from "../assets/SignUpformLogo/passwordLogo.png"
import mobileLogo from "../assets/SignUpformLogo/tempImage5qyAJv 1 (2).png"
import gsuiteLogo from "../assets/SignUpformLogo/tempImageRnhnz3 1.png"
import nameLogo from "../assets/SignUpformLogo/tempImageChspc3 1 (1).png"
import {MouseEffectBackground} from "../components/background/MouseEffectBackground.js";
import AnimatedWrapper from "../components/AnimatedWrapper.js";

interface FormData {
    username: string;
    fullName: string;
    gsuiteId: string;
    mobileNo: string;
    password: string;
}

const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        fullName: '',
        gsuiteId: '',
        mobileNo: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);


    };

    return (
        <div className=" relative flex items-center justify-center min-h-screen *:z-10 p-5">
            <MouseEffectBackground/>
            <div className="absolute top-5 right-5 ">
                <button className="w-[140px] h-[37px] bg-AC_Green  text-white font-semibold py-2 rounded-xl">
                    Login
                </button>
            </div>


            <AnimatedWrapper>
                <div
                    className="flex justify-center items-center align-middle flex-col bg-neutral-900 text-white p-8 min-w-[90dvw] md:min-w-0">
                    <h2 className="text-4xl text-center font-poltawski mb-8">SignUp</h2>

                    <form onSubmit={handleSubmit} className="flex gap-5 md:gap-3 flex-col min-w-full">
                        {/* Username */}
                        <div className="flex flex-col md:grid grid-cols-[1fr_2fr] gap-1 md:gap-4 ">
                            <label
                                className="flex gap-2 justify-self-end">
                                <img src={usernameLogo} className="h-5 w-5"
                                     alt="username"/> Username :
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="p-1  rounded-lg bg-neutral-800 border-none px-2 outline-none focus:ring-2 focus:ring-AC_Orange"
                            />
                        </div>

                        {/* Full Name */}
                        <div className="flex flex-col md:grid grid-cols-[1fr_2fr] gap-1 md:gap-4 ">
                            <label
                                className="flex gap-2 justify-self-end">
                                <span className="mr-2 font-poppins"><img src={nameLogo} className="h-5 w-5"
                                                                         alt="fullname"/></span> Full Name :
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="p-1  rounded-lg bg-neutral-800 border-none px-2 outline-none focus:ring-2 focus:ring-AC_Orange"
                            />
                        </div>

                        {/* GSuite ID */}
                        <div className="flex flex-col md:grid grid-cols-[1fr_2fr] gap-1 md:gap-4 ">
                            <label
                                className="flex gap-2 justify-self-end">
                                <span className="mr-2 font-poppins"><img src={gsuiteLogo} className="h-5 w-5"
                                                                         alt="gsuite"/></span> GSuite ID :
                            </label>
                            <input
                                type="email"
                                name="gsuiteId"
                                value={formData.gsuiteId}
                                onChange={handleChange}
                                className="p-1  rounded-lg bg-neutral-800 border-none px-2 outline-none focus:ring-2 focus:ring-AC_Orange"
                            />
                        </div>

                        {/* Mobile No */}
                        <div className="flex flex-col md:grid grid-cols-[1fr_2fr] gap-1 md:gap-4 ">
                            <label
                                className="flex gap-2 justify-self-end">
                                <span className="mr-2 font-poppins"><img src={mobileLogo} className="h-5 w-5"
                                                                         alt="mobile"/></span> Mobile No :
                            </label>
                            <input
                                type="text"
                                name="mobileNo"
                                value={formData.mobileNo}
                                onChange={handleChange}
                                className="p-1  rounded-lg bg-neutral-800 border-none px-2 outline-none focus:ring-2 focus:ring-AC_Orange"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col md:grid grid-cols-[1fr_2fr] gap-1 md:gap-4 ">
                            <label
                                className="flex gap-2 justify-self-end">
                                <span className="mr-2 font-poppins"><img src={passwordLogo} className="h-5 w-5"
                                                                         alt="password"/></span> Password :
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="p-1  rounded-lg bg-neutral-800 border-none px-2 outline-none focus:ring-2 focus:ring-AC_Orange"
                            />
                        </div>

                        <div className="flex justify-center mt-6">
                            <button type="submit"
                                    className="w-[140px] h-[37px] bg-[#2DBAAAF0] hover:bg-teal-600 text-white font-semibold py-2 rounded-xl">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </AnimatedWrapper>
        </div>
    );
};


export default SignupPage;
