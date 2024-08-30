import React from 'react';
import TestimonialCard from './TestimonialCard';
import profile from '../../images/avatar.png';
import Image from 'next/image';


const testimonials = [
  {
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
    author: "Edward Newgate",
    role: "UI Developer, COP",
    imageSrc: profile,
  },
  {
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job.",
    author: "Edward Newgate",
    role: "UI Developer, COP",
    imageSrc: profile,
  },
  {
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.",
    author: "Edward Newgate",
    role: "UI Developer, COP",
    imageSrc: profile,
  }
];
const testimonialsCenter = [
  {
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care",
    author: "Edward Newgate",
    role: "UI Developer, COP",
    imageSrc: profile,
    
  },
  {
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved.This medical and health care facility distinguishes itself from the competition,",
    author: "Edward Newgate",
    role: "UI Developer, COP",
    imageSrc: profile,
  }
];

const TestimonialSection = () => {
  return (
    <>
    <div className="relative mb-12 " id="testimonials" >
        <h2 className="relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
      More than 100,000 Patients Cured
        <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
        More than 100,000 Patients Cured
        </span>
      </h2>
    </div> 
      
    <section className="px-12 pt-20  pb-24 bg-amber-200 max-md:px-5 w-full">
        
     <div className={`w-full max-w-[1468px]  m-auto max-md:max-w-full `}>
         
     <div className="flex  gap-5 max-md:flex-col ">

        <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full" >
          <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">

            <div className="flex flex-col self-end max-w-full w-[475px]" >
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div key={index} className={index > 0 ? "mt-8" : ""}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            <div className="flex flex-col self-end max-w-full w-[475px]" >
                <div className='mt-8'>
                  <TestimonialCard {...testimonials[2]} />
                </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-12 max-md:mt-10">
            {testimonialsCenter.slice(0, 2).map((testimonial, index) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>


         <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
            
            <div className="flex flex-col self-end max-w-full w-[475px]" >
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={index} className={index > 0 ? "mt-8" : ""}>
                  <TestimonialCard {...testimonial}  />
                </div>
              ))}
            </div>
          </div>
        </div>  


        </div>


     </div>

     <nav className=" flex flex-col gap-6  absolute "  >
  {[...Array(4)].map((_, index) => (
    <div key={index} className="flex gap-6">
      {[...Array(4)].map((_, innerIndex) => (
        <div key={innerIndex} className="flex shrink-0 rounded-full border border-amber-100 border-solid h-[30px] w-[31px]" tabIndex="0" role="button" aria-label={`Navigation dot ${index * 4 + innerIndex + 1}`} />
      ))}
    </div>
  ))}
</nav> 

    </section>

   
    
  
    </>
  );
};

export default TestimonialSection;

