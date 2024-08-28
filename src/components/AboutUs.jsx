import React from 'react';
import grp3 from '../images/group3.png';
import Image from 'next/image';
import health from '../images/doctor.png'

const AboutUs = () => {
  return (
    <section id="about" className="mt-36 w-full max-w-[1690px] max-md:mt-10 max-md:max-w-full">
       <div className="relative">
        <h2 className="relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
          ABOUT US
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
            ABOUT US
          </span>
        </h2>
      </div>
      <div className="flex gap-5 mt-28 max-md:flex-col max-md:mt-10">
        <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
                <Image loading="lazy"
                 src={grp3}
                 alt=""
                  className="object-contain shrink-0 aspect-[0.42] w-[94px] max-md:mt-10" /> 
              </div>
              <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full z-30">
                <div className="flex flex-col grow items-start mt-28 text-base font-bold text-orange-400 max-md:mt-10 max-md:max-w-full">
                  <h3 className="self-stretch text-3xl max-md:max-w-full">
                    We are developing a healthcare <br /> system around you
                  </h3>
                  <p className="mt-8 leading-6 text-orange-300 max-md:max-w-full ">
                    We think that everyone should have easy access to excellent
                    <br /> healthcare. Our aim is to make the procedure as simple as
                    <br /> possible for our patients and to offer treatment no matter
                    <br /> where they are — in person or at their convenience.
                  </p>
                  <button className="px-14 py-6 mt-8 text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5   hover:border-orange-600 hover:text-black hover:border-solid transition duration-300 active:bg-orange-500 active:shadow-inner hover:bg-orange-400">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
           <Image loading="lazy"
            src={health}
             alt="Healthcare professionals"
              className="object-contain grow w-full aspect-[1.17] max-md:mt-10 max-md:max-w-full" 
              /> 
        </div>
      </div>
    </section>
  );
};

export default AboutUs;