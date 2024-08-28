import React from 'react';
import Image from 'next/image';

const DoctorCard = ({ image, name, specialization, experience }) => {
  return (
    <div className={` flex flex-col items-center self-start px-16 py-12 text-orange-400 bg-white rounded-lg shadow-[0px_8px_16px_rgba(0,0,0,0.15)] max-md:px-5  bg-orange-400'}  h-[475px] `}>
      <Image
        src={image}
        alt={name}
        width={128}
        height={127}
        className="object-contain"
      />
      <div className="mt-6 text-lg font-bold">{name}</div>
      <div className={`mt-5 text-xl text-orange-300 `}>{specialization}</div>
      <div className={`mt-7 text-neutral-500 `}> 
      {/* <span className='mt-6 font-medium text-center'>  London England</span> <br/>  */}
      {experience} years experience
      </div>
  
      <button className={`self-stretch px-10 py-6 mt-4 text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5
        hover:bg-orange-500 hover:text-white `}>
        View Profile
      </button>
    </div>
  );
};

export default DoctorCard;