"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function OTPVerification({ patientId, login }) {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const router = useRouter(); 

  const verifyOtp = async () => {
    const otpString = otp.join(''); 
    try {
      const response = await fetch('https://wdc.staging.cyphermd.com/api/v1/patient/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patient_id: patientId, otp: otpString }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify OTP');
      }

      login();
      // alert('Login successful!');
      toast.success('Login Successful')
      router.push('/profile');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // alert('Failed to verify OTP. Please try again.');
      toast.error('Failed to verify OTP. Please try again.');
    }
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
    } else if (value === '') {
      // Allow deletion of input
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

      <div className="flex gap-5 justify-between mt-10 max-w-full font-light whitespace-nowrap text-neutral-500 w-[446px] text-orange-400">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            className=" px-6 w-12 h-12 rounded-2xl border border-solid bg-neutral-100 border-orange-400 text-black border-opacity-30 max-md:px-5" 
              style={{color:"black"}}
            aria-label={`OTP digit ${index + 1}`}
            value={digit}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>

      <button
        type="submit"
        onClick={verifyOtp}
        className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95"
      >
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
          Submit
        </span>
      </button>

      <button
        type="button"
        onClick={() => alert('Resend OTP to your number successfully .')}
        className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95"
      >
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
          Resend it
        </span>
      </button>
    </>
  );
}

export default OTPVerification;
