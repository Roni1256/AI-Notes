import axios from "axios";
import React, { useContext, useState } from "react";
import { FaEnvelope, FaLock, FaCheckCircle, FaRedoAlt } from "react-icons/fa";
import endpoints from "../../endpoints/endpoints";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../context/axios";
import { UserContext } from "../../App";
import Loader from "../../components/styleComponents/Loader";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [loading,setLoading]=useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.id || " ";
  const [authDetails, setAuthDetails] = useContext(UserContext);

  const handleCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  const handleVerify = async () => {
    setLoading(true)
    const code = verificationCode.join("");
    console.log(code, userId);

    try {
      const resp = await axiosInstance.post(endpoints.verify, {
        userId: userId,
        code: code,
      });
      setAuthDetails(resp.data);
      navigate("/");

      console.log(resp);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
    console.log("Verification code:", code);
  };

  const handleResend = async () => {
    try {
      const resp = await axios.post(endpoints.resendCode, { email, userId });
    } catch (error) {
      console.log(error);
    }
    console.log("Resending code");
  };
  if(loading){
    return <Loader/>
  }
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-50 rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-4">
          <FaEnvelope className="text-3xl text-black" />
        </div>
        <h2 className="text-2xl font-bold text-center text-black mb-8">
          Verification Code
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please enter the verification code sent to your email
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold border-gray-300 focus:border-black focus:outline-none"
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          <FaCheckCircle className="mr-2" />
          Verify
        </button>
        <p className="text-gray-600 text-center mt-6">
          Didn't receive code?{" "}
          <button
            onClick={handleResend}
            className="text-black font-semibold hover:underline flex items-center justify-center "
          >
            <FaRedoAlt className="mr-1" />
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default Verification;
