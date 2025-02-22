import React, { useState } from "react";
import LeetCodeIcon from "../assets/images/icon/leetcode.png";
import GFGIcon from "../assets/images/icon/gfg.png";
import GitHubIcon from "../assets/images/icon/github.png";
import LinkedInIcon from "../assets/images/icon/linkedin.png";
import CodeforcesIcon from "../assets/images/icon/codeforces.png";
import VerifyIcon from "../assets/images/icon/verify.png";

const ProfileVerificationPage: React.FC = () => {
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
    setUsernames({ ...usernames, [platform]: value });
  };

  // Handler to verify the username for a specific platform
  const handleVerify = (platform: string) => {
    console.log(`Verifying ${platform} username: ${usernames[platform]}`);
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      {/* Button for user login */}
      <button className="absolute top-4 right-4 bg-[#2DBAAA] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
        LOGIN
      </button>

      {/* Container with gradient border */}
      <div className="relative p-[2px] rounded-[30px] bg-gradient-to-r from-yellow-500 via-green-400 to-orange-500 w-full max-w-5xl">
        {/* Inner container with background and shadow */}
        <div className="bg-[rgba(22,22,22,1)] p-6 sm:p-10 rounded-[30px] w-full shadow-md shadow-[rgba(0, 0, 0, 0.25)] border-[2px] border-gray-700">
          <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-poltawski mb-10">
            Profile Verification
          </h2>

          {/* List of platforms for username verification */}
          {[
            { name: "Leetcode", key: "leetcode", icon: LeetCodeIcon },
            { name: "GFG", key: "gfg", icon: GFGIcon },
            { name: "GitHub", key: "github", icon: GitHubIcon },
            { name: "LinkedIn", key: "linkedin", icon: LinkedInIcon },
            { name: "Codeforces", key: "codeforces", icon: CodeforcesIcon },
          ].map(({ name, key, icon }) => (
            <div key={key} className="flex flex-col sm:flex-row items-center mb-6 space-y-6 sm:space-y-0 w-full">
              {/* Platform icon and label */}
              <label className="text-white font-poppins text-lg sm:text-xl flex items-center w-full sm:w-1/4 min-w-[180px] justify-center sm:justify-end sm:mr-4">
                <span className="mr-2">
                  <img src={icon} alt={name} className="w-8 h-8 sm:w-9 sm:h-9" />
                </span>
                {name} :
              </label>
              {/* Input field and verify button */}
              <div className="flex-1 flex items-center space-x-4">
                <input
                  type="text"
                  value={usernames[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="flex-1 p-3 border-none rounded-xl bg-[rgba(74,74,74,0.42)] text-white focus:outline-none focus:ring-2 focus:ring-green-400 sm:w-auto md:w-[200px]"
                  placeholder={`Enter your ${name} username`}
                />

                {/* Verify section with icon and button */}
                <div className="flex items-center space-x-3 h-12">
                  {/* Verify icon inside a box */}
                  <div className="bg-[rgba(74,74,74,0.42)] p-2 rounded-md w-12 flex items-center justify-center">
                    <img src={VerifyIcon} alt="Verify Icon" className="w-7 h-7" />
                  </div>
                  {/* Verify button */}
                  <button
                    onClick={() => handleVerify(key)}
                    className="bg-[rgba(74,74,74,0.42)] text-[#2DBAAA] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition font-poltawski"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Submit button */}
          <div className="p-2 rounded-lg mt-8 flex justify-center">
            <button
              className="bg-[#2DBAAA] text-black px-8 py-2 rounded-md text-lg font-bold hover:opacity-90 transition font-poppins"
              style={{ width: '100%', maxWidth: '420px', height: '50px' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVerificationPage;
