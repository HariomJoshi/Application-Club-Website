import React, {useState} from "react";
import LeetCodeIcon from "../assets/images/icon/leetcode.png";
import GFGIcon from "../assets/images/icon/gfg.png";
import GitHubIcon from "../assets/images/icon/github.png";
import LinkedInIcon from "../assets/images/icon/linkedin.png";
import CodeforcesIcon from "../assets/images/icon/codeforces.png";
import VerifyIcon from "../assets/images/icon/verify.png";
import AnimatedWrapper from "../components/AnimatedWrapper.js";
import {MouseEffectBackground} from "../components/MouseEffectBackground.js";

const ProfileVerificationPage: React.FC = () => {

    const randomName: string = "random_name";

    // State to hold usernames for different platforms
    const [usernames, setUsernames] = useState({
        leetcode: "",
        gfg: "",
        github: "",
        linkedin: "",
        codeforces: "",
    });

    // Handler to update the username for a specific platform
    const handleChange = (platform: string, value: string) => {
        setUsernames({...usernames, [platform]: value});
    };

    // Handler to verify the username for a specific platform
    const handleVerify = (platform: string) => {
        console.log(`Verifying ${platform} username: ${usernames[platform]}`);
    };

    return (
        <div className="relative bg-black flex flex-col items-center justify-center px-4 py-8 min-h-screen">
            <MouseEffectBackground/>

            {/* Button for user login */}
            <button
                className="absolute top-4 right-4 bg-AC_Green text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
                Login
            </button>


            <AnimatedWrapper>
                {/* Inner container with background and shadow */}
                <div
                    className="bg-neutral-900 w-full p-8 px-10 flex flex-col items-center justify-center">
                    <h2 className="text-center text-white text-2xl sm:text-3xl font-poltawski mb-10">
                        Profile Verification
                    </h2>

                    <p className="font-thin w-[90%] mb-8">
                        To verify your profile, change your name to <span
                        className="font-medium text-AC_Orange">{randomName}</span> on
                        each platform, then click verify</p>

                    <p className="text-red-500 font-medium text-lg mb-8">Caution: You won't be allowed to change your
                        username once
                        verified!</p>

                    {/* List of platforms for username verification */}
                    {[
                        {name: "Leetcode", key: "leetcode", icon: LeetCodeIcon},
                        {name: "Codeforces", key: "codeforces", icon: CodeforcesIcon},
                        {name: "GFG", key: "gfg", icon: GFGIcon},
                        {name: "GitHub", key: "github", icon: GitHubIcon},
                        {name: "LinkedIn", key: "linkedin", icon: LinkedInIcon},
                    ].map(({name, key, icon}) => (
                        <div key={key}
                             className="flex flex-col sm:flex-row items-center mb-3 space-y-6 sm:space-y-0 w-full">
                            {/* Platform icon and label */}
                            <label
                                className="text-white font-poppins text-lg flex items-center w-full sm:w-1/4 justify-center sm:justify-end sm:mr-4">
                                <img src={icon} alt={name} className="w-6 h-6 mr-2"/>
                                {name} :
                            </label>
                            {/* Input field and verify button */}
                            <div className="flex-1 flex items-center space-x-4">
                                <input
                                    type="text"
                                    value={usernames[key]}
                                    onChange={(e) => handleChange(key, e.target.value)}
                                    className="flex-1 p-2 px-3 border-none rounded-xl bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 sm:w-auto md:w-[200px]"
                                    placeholder={`Enter your ${name} username`}
                                />

                                {/* Verify section with icon and button */}
                                <div className="flex items-center space-x-3 h-12">
                                    {/* Verify icon inside a box */}
                                    <div
                                        className=" cursor-pointer bg-neutral-800 p-2 rounded-md w-12 flex items-center justify-center">
                                        <img src={VerifyIcon} alt="Verify Icon" className="w-6 h-6"/>
                                    </div>
                                    {/* Verify button */}
                                    <button
                                        onClick={() => handleVerify(key)}
                                        className="cursor-pointer bg-neutral-800 text-AC_Green px-4 py-2 rounded-md font-semibold hover:opacity-90 transition font-poltawski"
                                    >
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Submit button */}
                    <div className="p-2 rounded-lg flex justify-center w-[300px]">
                        <button
                            className="bg-AC_Green text-black px-8 py-2 w-full rounded-lg text-lg font-medium hover:opacity-90 transition"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </AnimatedWrapper>
        </div>
    );
};

export default ProfileVerificationPage;
