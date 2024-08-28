"use client"
import React, { useState } from 'react';
import AppointmentHeader from './appointmentHeader';

const InputField = ({ name, label, type = 'text', value, onChange }) => (
  <div className="grow">
    <label htmlFor={name} className="sr-only">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full px-4 py-5 lg:py-3 lg:px-3 bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 max-md:pr-5 max-md:max-w-full"
      aria-label={label}
    />
  </div>
);

const SelectField = ({ name, label, options, value, onChange }) => (
  <div className="flex-1">
    <label htmlFor={name} className="sr-only">{label}</label>
    <div className="relative">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full appearance-none px-5 py-4 lg:py-3 lg:px-3 rounded-3xl border border-solid border-orange-400 border-opacity-30 max-md:max-w-full"
        aria-label={label}
      >
        <option value="" disabled>{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  </div>
);

const Button = ({ children, type = 'button', className = '', onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-16 py-5 lg:py-3 lg:px:10px max-w-full text-center text-white bg-orange-400 border border-orange-400 border-solid rounded-[800px] w-[708px] max-md:px-5 ${className}`}
  >
    {children}
  </button>
);

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    doctor: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const departments = ['Department 1', 'Department 2', 'Department 3'];
  const doctors = ['Doctor 1', 'Doctor 2', 'Doctor 3'];

  return (
    <main className="flex overflow-hidden flex-col pb-28 font-bold bg-white max-md:pb-24">
        <AppointmentHeader/>
      <section className="flex flex-col self-center mt-10 max-w-full text-base text-neutral-500 w-[1242px] max-md:mt-10">
        <h1 className="self-start text-3xl text-orange-400 max-md:max-w-full">
         Book An Appointment
        </h1>
        <form onSubmit={handleSubmit} >
          <h2 className="self-start mt-10 text-neutral-800">Enter Details</h2>
          <div className="flex flex-wrap gap-10 mt-4 font-light max-md:max-w-full">
            <InputField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <InputField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap gap-10 mt-4 font-light whitespace-nowrap">
            <SelectField
              name="department"
              label="Department"
              options={departments}
              value={formData.department}
              onChange={handleInputChange}
            />
            <SelectField
              name="doctor"
              label="Doctor"
              options={doctors}
              value={formData.doctor}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap gap-10 mt-4 font-light max-md:max-w-full">
            <InputField
              name="email"
              label="Your Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputField
              name="phone"
              label="Contact Number"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap gap-10 mt-4 font-light">
            <SelectField
              name="date"
              label="Select Date"
              options={[]}
              value={formData.date}
              onChange={handleInputChange}
            />
            <SelectField
              name="time"
              label="Select Time"
              options={[]}
              value={formData.time}
              onChange={handleInputChange}
            />
          </div>
          <h2 className="self-start mt-6 text-neutral-800">Additional Information</h2>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="flex shrink-0 mt-4 w-full h-10 rounded-3xl border border-solid border-orange-400 border-opacity-30"
            aria-label="Additional Information"
          />
          {/* <Button type="submit" className="self-center mt-10">
            Book an Appointment
          </Button> */}



    </form>
    <button className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95">
  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
  <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
   Book An Appointment
  </span>
</button>
      </section>
    </main>
  );
};

export default AppointmentForm;