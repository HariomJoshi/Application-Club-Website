import React, {useEffect, useState} from "react";
import usernameLogo from "../assets/SignUpformLogo/usernameLogo (1).png" 
import passwordLogo from "../assets/SignUpformLogo/passwordLogo.png"
import mobileLogo from "../assets/SignUpformLogo/tempImage5qyAJv 1 (2).png"
import gsuiteLogo from "../assets/SignUpformLogo/tempImageRnhnz3 1.png"
import nameLogo from "../assets/SignUpformLogo/tempImageChspc3 1 (1).png"
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
      const { name, value } = e.target;
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
        <div className=" relative flex items-center justify-center min-h-screen bg-black " >
        <div className="absolute top-5 right-5 bg-black">
              <button type="submit" className="w-[140px] h-[37px] bg-[#2DBAAAF0] hover:bg-teal-600 text-white font-semibold py-2 rounded-xl">
                SignUp
              </button>
            </div>
      <div className="flex items-center justify-center min-h-screen bg-black">
        
        <div className="w-full sm:w-[530px] md:w-[530px] p-6 sm:p-8 bg-[#161616] text-white rounded-2xl">
          <h2 className="text-center mt-[-10px] mb-9 text-[30px] sm:text-[30px] md:text-[35px] font-poltawski">SignUp</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start ">
              <label className="text-[#FFFFFF] w-full sm:w-1/3 flex items-center text-[16px] sm:text-[18px] md:text-[20px] justify-center sm:justify-end sm:mr-5 mb-2 sm:mb-0 ">
                <span className="mr-2 font-poppins"><img src={usernameLogo} className="h-5 w-5" alt="username" /></span> Username :
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full sm:w-[273px] h-[36px] p-3 bg-[#4A4A4A6B] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Full Name */}
            <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start">
              <label className="text-[#FFFFFF] w-full sm:w-1/3 flex items-center text-[16px] sm:text-[18px] md:text-[20px] justify-center sm:justify-end sm:mr-5 mb-2 sm:mb-0">
                <span className="mr-2 font-poppins"><img src={nameLogo} className="h-5 w-5" alt="fullname" /></span> Full Name :
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full sm:w-[273px] h-[36px] p-3 bg-[#4A4A4A6B] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* GSuite ID */}
            <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start">
              <label className="text-[#FFFFFF] w-full sm:w-1/3 flex items-center text-[16px] sm:text-[18px] md:text-[20px] justify-center sm:justify-end sm:mr-5 mb-2 sm:mb-0">
                <span className="mr-2 font-poppins"><img src={gsuiteLogo} className="h-5 w-5" alt="gsuite" /></span> GSuite ID :
              </label>
              <input
                type="email"
                name="gsuiteId"
                value={formData.gsuiteId}
                onChange={handleChange}
                className="w-full sm:w-[273px] h-[36px] p-3 bg-[#4A4A4A6B] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Mobile No */}
            <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start">
              <label className="text-[#FFFFFF] w-full sm:w-1/3 flex items-center text-[16px] sm:text-[18px] md:text-[20px] justify-center sm:justify-end sm:mr-5 mb-2 sm:mb-0">
                <span className="mr-2 font-poppins"><img src={mobileLogo} className="h-5 w-5" alt="mobile" /></span> Mobile No :
              </label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full sm:w-[273px] h-[36px] p-3 bg-[#4A4A4A6B] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Password */}
            <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start">
              <label className="text-[#FFFFFF] w-full sm:w-1/3 flex items-center text-[16px] sm:text-[18px] md:text-[20px] justify-center sm:justify-end sm:mr-5 mb-2 sm:mb-0">
                <span className="mr-2 font-poppins"><img src={passwordLogo}  className="h-5 w-5" alt="password" /></span> Password :
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full sm:w-[273px] h-[36px] p-3 bg-[#4A4A4A6B] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex justify-center mt-6">
              <button type="submit" className="w-[140px] h-[37px] bg-[#2DBAAAF0] hover:bg-teal-600 text-white font-semibold py-2 rounded-xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  };
  
  
  
export default SignupPage;
