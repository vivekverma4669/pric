"use client";
import React, { useState, useContext } from 'react';
import OTPVerification from './OtpVerification';
import { AuthContext } from '@/AuthContextApi/AuthContext';

function LoginForm() {
  const [patientId, setPatientId] = useState('');
  const [otpOpen, setOtpOpen] = useState(false);
  const { login } = useContext(AuthContext); 

  const requestOtp = async () => {
    try {
      const response = await fetch('https://wdc.staging.cyphermd.com/api/v1/patient/send_otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patient_id: patientId }),
      });

      if (!response.ok) {
        throw new Error('Failed to request OTP');
      }

      const result = await response.json();
      console.log('OTP Response:', result); 
      setOtpOpen(true);
    } catch (error) {
      console.error('Error requesting OTP:', error);
      alert('Failed to request OTP. Please try again.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (patientId.trim() === '') {
      alert('Please enter a Patient ID');
      return;
    }
    requestOtp();
  };

  return (
    <div className="flex flex-col grow justify-center items-center px-20 py-40 w-full text-base font-bold bg-white rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full ">
      <div className="flex flex-col items-center max-w-full w-[602px]">
        <h1 className="text-xl text-orange-400">PRIC</h1>
        {otpOpen ? (
          <OTPVerification patientId={patientId} login={login} />
        ) : (
          <>
            <h2 className="mt-6 text-2xl text-center text-neutral-800">
              Login to your account
            </h2>
            <p className="mt-4 text-center text-black">Hello, Welcome back!</p>
            <form onSubmit={handleSubmit} className="self-stretch mt-10">
              <label htmlFor="patientId" className="sr-only">
                Patient ID
              </label>
              <input
                id="patientId"
                type="text"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="w-full px-4 py-5 font-light rounded-3xl border border-solid bg-neutral-100 border-orange-400 border-opacity-30 text-neutral-500 max-md:pr-5 max-md:max-w-full"
                placeholder="Patient ID"
                required
              />

              <button
                type="submit"
                className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95"
              >
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
                  Request OTP
                </span>
              </button>
            </form>
            <p className="mt-2 text-xs font-light text-neutral-500">
              One-Time Password will be sent to your registered mobile number.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
