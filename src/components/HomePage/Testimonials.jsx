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
    content: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations,",
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
    <div className='max-w-[1350px]'>
    <div className="relative  self-center mt-40 mb-0 w-full mx-auto max-md:mt-10 max-md:mb-2.5 max-md:max-w-ful max-w-[1350px] px-10 " >
      <h2 className=" text-6xl font-bold  text-orange-400 max-md:text-4xl">
        Testimonials
      </h2>
     
      <p className='text-black max-md:text-4xl'  > More than 100,000 Patients Cured</p>
    </div> 
      
    <section className="px-12 pt-6 pb-24 max-md:px-5 w-full ">
        
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

            <div className="flex flex-col self-end max-w-full w-[475px] overflow-y-hidden" >
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
           
          
          {/* <div className='bg-orange-400'> heloo</div> */}

     </div>

    
    </section>

   
    
  
    </div>
  );
};

export default TestimonialSection;

