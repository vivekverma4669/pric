import Header from '@/components/Header'
import React from 'react'

const pages = () => {
  return (
    <Header/>
  )
}

export default pages;


// import React, { useState } from 'react';

// const InputField = ({ name, label, type = 'text', value, onChange }) => (
//   <div className="grow">
//     <label htmlFor={name} className="sr-only">{label}</label>
//     <input
//       type={type}
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={label}
//       className="w-full px-4 py-5 bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 max-md:pr-5 max-md:max-w-full"
//       aria-label={label}
//     />
//   </div>
// );

// const SelectField = ({ name, label, options, value, onChange }) => (
//   <div className="flex-1">
//     <label htmlFor={name} className="sr-only">{label}</label>
//     <div className="relative">
//       <select
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full appearance-none px-5 py-4 rounded-3xl border border-solid border-orange-400 border-opacity-30 max-md:max-w-full"
//         aria-label={label}
//       >
//         <option value="" disabled>{label}</option>
//         {options.map((option, index) => (
//           <option key={index} value={option}>{option}</option>
//         ))}
//       </select>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e3e3ef5b6456e05842bf1b36278a5307c7d60210bcfd06fe77392c236731eaf?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1"
//         alt=""
//         className="absolute right-5 top-1/2 transform -translate-y-1/2 object-contain w-3 aspect-square pointer-events-none"
//       />
//     </div>
//   </div>
// );

// const Button = ({ children, type = 'button', className = '', onClick }) => (
//   <button
//     type={type}
//     onClick={onClick}
//     className={`px-16 py-5 max-w-full text-center text-white bg-orange-400 border border-orange-400 border-solid rounded-[800px] w-[708px] max-md:px-5 ${className}`}
//   >
//     {children}
//   </button>
// );

// const AppointmentForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     department: '',
//     doctor: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     additionalInfo: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const departments = ['Department 1', 'Department 2', 'Department 3'];
//   const doctors = ['Doctor 1', 'Doctor 2', 'Doctor 3'];

//   return (
//     <main className="flex overflow-hidden flex-col pb-28 font-bold bg-white max-md:pb-24">
//       <header className="flex relative flex-col pb-12 w-full min-h-[242px] max-md:max-w-full">
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/773d6e8e78224441e0169e3c85fd26d867552a65df594032569349431b9ef453?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1" alt="" className="object-cover absolute inset-0 size-full" />
//         <nav className="flex relative flex-col justify-center items-center px-16 py-4 w-full text-orange-400 bg-slate-50 shadow-[0px_25px_45px_rgba(47,46,65,0.075)] max-md:px-5 max-md:max-w-full">
//           <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1465px] max-md:max-w-full">
//             <div className="self-stretch my-auto text-xl">PRIC</div>
//             <div className="flex gap-8 self-stretch my-auto text-base max-md:max-w-full">
//               <a href="#about">About Us</a>
//               <a href="#departments">Departments</a>
//               <a href="#membership">Membership</a>
//               <a href="#help">Help</a>
//               <a href="#contact" className="my-auto">Contact</a>
//             </div>
//             <button className="self-stretch px-7 py-5 text-sm text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5">
//               Sign In
//             </button>
//           </div>
//         </nav>
//         <h1 className="relative self-center mt-11 text-8xl text-center text-orange-100 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//           APPOINTMENT
//         </h1>
//       </header>
//       <section className="flex flex-col self-center mt-20 max-w-full text-base text-neutral-500 w-[1242px] max-md:mt-10">
//         <h1 className="self-start text-3xl text-orange-400 max-md:max-w-full">
//           Your Healthcare Starts Here
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <h2 className="self-start mt-10 text-neutral-800">Enter Details</h2>
//           <div className="flex flex-wrap gap-10 mt-4 font-light max-md:max-w-full">
//             <InputField
//               name="firstName"
//               label="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//             <InputField
//               name="lastName"
//               label="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-wrap gap-10 mt-4 font-light whitespace-nowrap">
//             <SelectField
//               name="department"
//               label="Department"
//               options={departments}
//               value={formData.department}
//               onChange={handleInputChange}
//             />
//             <SelectField
//               name="doctor"
//               label="Doctor"
//               options={doctors}
//               value={formData.doctor}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-wrap gap-10 mt-4 font-light max-md:max-w-full">
//             <InputField
//               name="email"
//               label="Your Email"
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             <InputField
//               name="phone"
//               label="Contact Number"
//               type="tel"
//               value={formData.phone}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-wrap gap-10 mt-4 font-light">
//             <SelectField
//               name="date"
//               label="Select Date"
//               options={[]}
//               value={formData.date}
//               onChange={handleInputChange}
//             />
//             <SelectField
//               name="time"
//               label="Select Time"
//               options={[]}
//               value={formData.time}
//               onChange={handleInputChange}
//             />
//           </div>
//           <h2 className="self-start mt-6 text-neutral-800">Additional Information</h2>
//           <textarea
//             name="additionalInfo"
//             value={formData.additionalInfo}
//             onChange={handleInputChange}
//             className="flex shrink-0 mt-4 w-full h-10 rounded-3xl border border-solid border-orange-400 border-opacity-30"
//             aria-label="Additional Information"
//           />
//           <Button type="submit" className="self-center mt-10">
//             Book an Appointment
//           </Button>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default AppointmentForm;