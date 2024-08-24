import React from 'react';
import Image from 'next/image';

const DoctorCard = ({ image, name, specialization, experience, isActive }) => {
  return (
    <div className={`flex flex-col items-center self-start px-16 py-12 text-orange-400 bg-white rounded-lg shadow-[0px_8px_16px_rgba(0,0,0,0.15)] max-md:px-5 ${isActive ? 'text-white bg-orange-400' : ''}`}>
      <Image
        src={image}
        alt={name}
        width={128}
        height={127}
        className="object-contain"
      />
      <div className="mt-6 text-lg font-bold">{name}</div>
      <div className={`mt-5 text-xl ${isActive ? 'text-white' : 'text-orange-300'}`}>{specialization}</div>
      <div className={`mt-7 ${isActive ? 'text-white' : 'text-neutral-500'}`}>{experience} years experience</div>
      <button className={`self-stretch px-10 py-8 mt-4 text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5 ${isActive ? 'text-orange-400 bg-white' : 'text-white bg-orange-400'}`}>
        View Profile
      </button>
    </div>
  );
};

export default DoctorCard;