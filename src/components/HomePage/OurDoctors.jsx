import React from 'react';
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
  const doctors = [
    {
      image: img1,
      name: "Prashant Aggarwal",
      specialization: "MD DM (Immunology)",
      experience: "20+",
      isActive: true
    },
    {
      image: img2,
      name: "Bharti Aggarwal",
      specialization: "MD Medicine PDCC",
      experience: "12",
      isActive: true
    },
    {
      image: img3,
      name: "Leo Mario",
      specialization: "Physiotherapy, FitCare",
      experience: "25",
      isActive: false
    }
  ];

  return (
    <section className="mt-48 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
        OUR DOCTORS
      </h2>
      <div className="flex flex-wrap gap-5 justify-between items-start mt-16 w-full text-base font-bold max-w-[1769px] max-md:mt-10 max-md:max-w-full">
        <Image
          src={grp3}
          alt=""
          width={110}
          height={268}
          className="object-contain shrink-0 self-start"
        />
        <div className="flex gap-8 items-start self-end mt-28 max-md:mt-10 max-md:max-w-full">
          <Image
            src={leftArrow}
            alt=""
            width={29}
            height={28}
            className="object-contain shrink-0 my-auto"
          />
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
          <Image
            src={rightArrow}
            alt=""
            width={29}
            height={28}
            className="object-contain shrink-0 my-auto"
          />
          <Image
            src={grp4}
            alt=""
            width={197}
            height={358}
            className="object-contain shrink-0 self-end mt-72 max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;