"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DoctorCard from './DoctorCard';
import img1 from '../../images/anita.png.png';
import img2 from '../../images/jane.png.png';
import img3 from '../../images/leo-mario.png.png';
import grp3 from '../../images/group3.png';
import grp4 from '../../images/group4.png';
import leftArrow from '../../images/left.png';
import rightArrow from '../../images/right.png';

const OurDoctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      image: "https://ui-avatars.com/api/?name=Elon+Musk",
      name: "Prashant Aggarwal",
      specialization: "MD DM (Immunology)",
      experience: "20+",
    },
    {
      image: img2,
      name: "Bharti Aggarwal",
      specialization: "MD Medicine PDCC",
      experience: "12",
    },
    {
      image: img3,
      name: "Vaidya Prabhu",
      specialization: "Physiotherapy, FitCare",
      experience: "25",
    },
    {
      image: img3,
      name: "Khushboo",
      specialization: "Physiotherapy, FitCare",
      experience: "25",
    },
    {
      image: img3,
      name: "Taruna",
      specialization: "Physiotherapy, FitCare",
      experience: "1",
    },
    {
      image: img3,
      name: "Harmanjot Kaur",
      specialization: "Physiotherapy, FitCare",
      experience: "1",
    },
    {
      image: img3,
      name: "Rohit K",
      specialization: "Physiotherapy, FitCare",
      experience: "1",
    }
  ];

  const itemsToShow = 3;
  const maxIndex = Math.max(0, doctors.length - itemsToShow);
  
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const visibleDoctors = doctors.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="mt-48 max-md:mt-10 max-md:max-w-full mb-20 max-w-[1350px]">

      <div className="relative">
        <h2 className="relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
          OUR DOCTORS
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
            OUR DOCTORS
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-5 justify-between items-start mt-16 w-full text-base font-bold max-w-[1450px] max-md:mt-10 max-md:max-w-full">
        <Image
          src={grp3}
          alt=""
          width={110}
          height={268}
          className=" absolute  left-11 object-contain shrink-0 self-start max-w-full aspect-[0.41] w-[110px]"
        />

        <div className="ml-5 flex gap-8 items-start self-end mt-28 max-md:mt-10 max-md:max-w-full z-50 mb-32 justify-center m-auto max-w-[1200px]">
          <Image
            src={leftArrow}
            alt="Left arrow"
            width={29}
            height={28}
            className="object-contain shrink-0 my-auto cursor-pointer
             hover:bg-slate-200 hover:border-orange-600 hover:text-black 
              transition duration-300 ease-in-out 
              active:bg-orange-500 active:shadow-inner  border-solid rounded-[20px]
              "
            onClick={handleLeftClick}
         />
          <div 
          className="flex flex-row  gap-8 "
          >
            {visibleDoctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
          <Image
            src={rightArrow}
            alt="Right arrow"
            width={29}
            height={28}
            className="object-contain shrink-0 my-auto cursor-pointer
             hover:bg-slate-200 hover:border-orange-600 hover:text-black 
              transition duration-300 ease-in-out 
              active:bg-orange-500 active:shadow-inner  border-solid rounded-[20px] "
            onClick={handleRightClick}
          />
        </div>

        <Image
          src={grp4}
          alt=""
          width={197}
          height={358}
          className=" absolute right-11 object-contain shrink-0 self-end mt-72 max-md:mt-10"
        />
      </div>
    </section>
  );
};

export default OurDoctors;
