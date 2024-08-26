import React from 'react';
import TestimonialCard from './TestimonialCard';
import profile from '../../images/avatar.png';
import Image from 'next/image';

  const testimonials = [
    {
      content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
      author: "Edward Newgate",
      role: "UI Developer, COP",
      avatarSrc: profile
    },
    {
      content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services. health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. ",
      author: "Edward Newgate",
      role: "UI Developer, COP",
      avatarSrc: profile,
    },
    {
      content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
      author: "Edward Newgate",
      role: "UI Developer, COP",
      avatarSrc: profile
    
    },

    
  ];

const Testimonials = () => {
  return (
    <>
    
    <div className="relative mb-12">
        <h2 className="relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
        More than 100,000 Patients Cured
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
          More than 100,000 Patients Cured
          </span>
        </h2>
      </div>

    <div className="flex flex-col items-start px-20 pt-20 bg-amber-200 max-md:px-10" >
      <div className="self-end w-full max-w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col w-1/3 max-md:w-full">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 mt-5">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex shrink-0 rounded-full border border-amber-100 border-solid h-[31px] w-[31px]" />
        ))}
      </div>
    </div>
    </>
  );
};

export default Testimonials;

// import React from 'react';
// import TestimonialCard from './TestimonialCard';
// import profile from '../../images/avatar.png';

// const TestimonialPage = () => {
//   const testimonials = [
//     {
//       content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
//       author: "Edward Newgate",
//       role: "UI Developer, COP",
//       avatarSrc: profile
//     },
//     {
//       content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.",
//       author: "Edward Newgate",
//       role: "UI Developer, COP",
//       avatarSrc: profile,
//     },
//     {
//       content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
//       author: "Edward Newgate",
//       role: "UI Developer, COP",
//       avatarSrc: profile
    
//     }
//   ];

//   return (
//     <div className="flex flex-col items-start px-20 pt-20 bg-amber-200 max-md:px-5">
//       <div className="self-end w-full max-w-[1682px] max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="flex flex-col w-1/3 max-md:w-full">
//               <TestimonialCard {...testimonial} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex gap-6 mt-5">
//         {[...Array(4)].map((_, index) => (
//           <div key={index} className="flex shrink-0 rounded-full border border-amber-100 border-solid h-[31px] w-[31px]" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialPage;
