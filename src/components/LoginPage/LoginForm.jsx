"use client";
import React, { useState, useContext } from 'react';
import OTPVerification from './OtpVerification';
import { AuthContext } from '@/AuthContextApi/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginForm() {
  const [patientId, setPatientId] = useState('');
  const [otpOpen, setOtpOpen] = useState(false);
  const [loading,setLoading]=useState(false);
  const { login } = useContext(AuthContext); 
  
const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const requestOtp = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/patient/send_otp`, {
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
      toast.success("OTP send to your register mobile number")
    } catch (error) {
      console.error('Error requesting OTP:', error);
      alert('Failed to request OTP. Please try again.');
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (patientId.trim() === '') {
      toast.error("Please enter a Patient ID ")
      return;
    }
    requestOtp();
  };

  return (
    <div className="flex flex-col grow justify-center items-center px-20 py-40 w-full text-base font-bold bg-white rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full ">
      <ToastContainer/>
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

          

      <button  type='submit'  disabled={loading} className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
        {loading ? 'Requesting ....' : ' Request OTP'}
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

