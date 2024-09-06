"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { toast } from 'react-toastify';

function OTPVerification({ patientId, login }) {
 
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [loading,setLoading]=useState(false);
  const router = useRouter(); 
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const verifyOtp = async () => {
    setLoading(true);
    const otpString = otp.join(''); 
    try {
      const response = await fetch(`${API_URL}/api/v1/patient/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patient_id: patientId, otp: otpString }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify OTP');
      }
     
      const data = await response.json();
      const { payload } = data;
      console.log(payload +"payload")
      login(payload);
      toast.success('Login Successful')
      router.push('/patient_appointments');
    }
    catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Failed to verify OTP. Please try again.');
    }
    setLoading(false);
  };

  const resendOtp = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/patient/resend_otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patient_id: patientId }),
      });
      toast.success("OTP Resend to your mobile number")
    } catch (error) {
      console.error('Error requesting OTP:', error);
      alert('Failed to request OTP. Please try again.');
    }
    setLoading(false);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {  
      const newOtp = [...otp];
      newOtp[index] = value; 
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
    else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };


  return (
    <>
      <h2 className="mt-6 text-2xl text-center text-neutral-800">OTP Verification</h2>
      <p className="mt-4 text-center text-black max-md:max-w-full">
        Enter the verification code we sent to your registered mobile number.
      </p>

      <div className="flex gap-5 justify-between mt-10 max-w-full font-light whitespace-nowrap w-[446px] text-orange-400">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
             className=" px-4 w-12 h-12 rounded-2xl border border-solid bg-neutral-100 border-orange-400 text-red-500 border-opacity-30" 
            style={{color:"black"}}
            aria-label={`OTP digit ${index + 1}`}
            value={digit}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
  

      <button  type="submit"  onClick={verifyOtp} className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
        {loading?   'Submitting....' : 'Submit'}
        </span>
      </button>


      <button  type="submit"  onClick={resendOtp} className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-black border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
        Resend OTP 
        </span>
      </button>
    </>
  );
}

export default OTPVerification;
