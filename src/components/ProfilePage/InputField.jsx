import React from 'react';

const InputField = ({ label, type = "text", value, name, onChange, disabled }) => {
  return (
    <div className="grow px-4 py-4 bg-white rounded-2xl border border-solid border-orange-400 border-opacity-30 w-fit font-bold">
      <label className="sr-only" htmlFor={name || label.toLowerCase().replace(" ", "-")}>{label}</label>
      <input
        type={type}
        id={name || label.toLowerCase().replace(" ", "-")}
        placeholder={label}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default InputField;
