"use client"
import React, { useState } from 'react';

function LoginForm() {
  const [patientId, setPatientId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <div className="flex flex-col grow justify-center items-center px-20 py-44 w-full text-base font-bold bg-white rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[602px]">
        <h1 className="text-xl text-orange-400">PRIC</h1>
        <h2 className="mt-6 text-2xl text-center text-neutral-800">
          Login to your account
        </h2>
        <p className="mt-4 text-center text-black">
          Hello, Welcome back!
        </p>
        <form onSubmit={handleSubmit} className="self-stretch mt-10">
          <label htmlFor="patientId" className="sr-only">Patient ID</label>
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
            className="w-full px-16 py-5 mt-10 text-center text-white bg-orange-400 border border-orange-400 border-solid rounded-[800px] max-md:px-5 max-md:max-w-full"
          >
            Request OTP
          </button>
        </form>
        <p className="mt-2 text-xs font-light text-neutral-500">
          One-Time Password will be sent to registered mobile number
        </p>
      </div>
    </div>
  );
}

export default LoginForm;