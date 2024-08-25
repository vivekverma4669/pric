import React from 'react';
import TestimonialCard from './TestimonialCard';
import profile from '../../images/avatar.png';
import Image from 'next/image';

const testimonialData = [
  {
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
    name: "Edward Newgate",
    role: "UI Developer, COP",
    avatarSrc: profile
  },
  {
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
    name: "Edward Newgate",
    role: "UI Developer, COP",
    avatarSrc: profile
  },
];

const Testimonials = () => {
  return (
    <div>
    <h2 className="mt-44 text-8xl font-bold text-center text-orange-100 uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl w-1000wh">
    More than 100,000 Patients Cured
    </h2>
    <section className="flex flex-col items-start self-stretch px-20 pt-20 mt-12 w-full bg-amber-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      

      <div className="self-end w-full max-w-[1682px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Testimonial columns */}
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-end max-w-full w-[475px]">
                {testimonialData.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
              {/* Add more testimonial columns as needed */}
            </div>
          </div>
        </div>
      </div>
      {/* Navigation dots */}
      <div className="flex gap-6 mt-5">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex shrink-0 rounded-full border border-amber-100 border-solid h-[31px] w-[31px]" />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
