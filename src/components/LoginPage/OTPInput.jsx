import React from 'react';

function OTPInput() {
  const inputCount = 6;

  return (
    <div className="flex gap-5 justify-between mt-10 max-w-full font-light whitespace-nowrap text-neutral-500 w-[446px]">
      {[...Array(inputCount)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          className="px-6 w-12 h-12 rounded-2xl border border-solid bg-neutral-100 border-orange-400 border-opacity-30 max-md:px-5"
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default OTPInput;