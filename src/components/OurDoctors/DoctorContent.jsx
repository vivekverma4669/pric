"use client";
import React, { useState } from "react";
import arrow1 from "../../images/Arrow1.svg";
import Image from "next/image";
import drCard from '../../images/drCard.png'
let arr = [
  {
    image: drCard,
    title: "Physiotherapy",
    patientCount: " 1000+ Patients",
  },
  {
    image: drCard,
    title: "Psychology",
    patientCount: " 1000+ Patients",
  },
  {
    image: drCard,
    title: "Dietetics",
    patientCount: " 1000+ Patients",
  },
  {
    image: drCard,
    title: "Rheumatology ",
    patientCount: " 1000+ Patients",
  },

  {
    image: drCard,
    title: "card 5",
    patientCount: " 1000+ Patients",
  },

  {
    image: drCard,
    title: "card 6",
    patientCount: " 1000+ Patients",
  },
];

const DoctorsContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const maxIndex = Math.max(0, arr.length - itemsToShow);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const visibleArr = arr.slice(currentIndex, currentIndex + itemsToShow);
  const progressWidth = (currentIndex / maxIndex) * 100 ||  (1 / 4) * 100;

  return (
    <div className="flex flex-col self-center mt-8 w-full max-w-[1450px]" >
      <div className="self-start ml-36 text-3xl font-bold text-orange-400">
        Meet Our Doctors
      </div>
      <div className="self-start mt-4 ml-36 text-sm text-neutral-700">
        Meet our team of dedicated doctors who are committed to providing
        exceptional care.
      </div>

      <div className="flex  flex-row gap-10 items-center mt-10 px-4" >
        <div
          className="rounded-full border-[3px] border-orange-500 cursor-pointer
        hover:bg-orange-500  transition-all duration-300
         active:bg-orange-600 active:shadow-inner
         "
          onClick={handleLeftClick}
        >
          <Image
            loading="lazy"
            src={arrow1}
            className=" object-contain shrink-0 self-stretch my-auto max-w-full p-[8px] aspect-square w-[60px] rotate-180 hover:invert hover:brightness-0"
            alt="Doctor icon"
          />
        </div>

        <div className="flex w-[92%]">
          <div className="flex gap-5  transition-all duration-500 ease-in-out">
            {visibleArr.map((item, index) => (
             
              <div key={index} className="flex flex-col w-3/12">
                <div className="flex flex-col grow items-center w-full text-center rounded-2xl bg-neutral-100">
                  <Image
                    loading="lazy"
                    src={item.image}
                    className="object-contain max-w-full aspect-square w-[98%] px-3"
                    alt=" icon"
                  />   
                 <h3 className=" text-xl font-bold text-neutral-800">DR Gautam Dhir</h3>
                 <p className="mb-4 text-base text-neutral-700">
                  Orthologist <br /> MBBS ,MD
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-full border-[3px] border-orange-500 cursor-pointer
        hover:bg-orange-500  transition-all duration-300
        active:bg-orange-600 active:shadow-inner"
          onClick={handleRightClick}
        >
          <Image
            loading="lazy"
            src={arrow1}
            className=" object-contain shrink-0 self-stretch my-auto max-w-full   p-[8px] aspect-square w-[60px] hover:invert hover:brightness-0"
            alt="Doctor icon"
          />
        </div>
      </div>

      <div className="flex flex-col items-start self-center mt-11 max-w-full bg-amber-200 rounded-xl w-[400px]">
        <div className="w-full bg-amber-200 h-2 rounded-full">
          <div
            style={{ width: `${progressWidth}%` }}
            className="bg-orange-600 h-full rounded-full transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>

      <button className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
          Contact Us
        </span>
      </button>
    </div>
  );
};

export default DoctorsContent;