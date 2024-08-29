import React from 'react';

const InputField = ({ label, type = "text" }) => {
  return (
    <div className="grow px-4 py-4 bg-white rounded-2xl border border-solid border-orange-400 border-opacity-30 w-fit">
      <label className="sr-only" htmlFor={label.toLowerCase().replace(" ", "-")}>{label}</label>
      <input
        type={type}
        id={label.toLowerCase().replace(" ", "-")}
        placeholder={label}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default InputField;