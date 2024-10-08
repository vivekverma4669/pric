import React from 'react';
import Image from 'next/image';

const DoctorCard = ({ image, name, specialization, experience }) => {
  return (
    <div className={` flex flex-col items-center self-start px-10 py-12 text-orange-400 bg-white rounded-lg shadow-[0px_8px_16px_rgba(0,0,0,0.15)] max-md:px-5  bg-orange-400'} w-[320px]  h-[400px] `}>
      <Image
        src={`https://ui-avatars.com/api/?name=${name}&_size=130×130`}
        alt={name}
        width={130}
        height={130}
        className="object-contain"
        style={{borderRadius:'52%'}}
      />
      <div className="mt-6 text-lg font-bold">{name}</div>
      <div className={`mt-5 text-xl text-orange-300 `}>{specialization}</div>
      
      <div className={`mt-2 text-neutral-500 `}> 
        MBBS , MD
      </div>

      <div className={`mt-5 text-neutral-500 `}>  
      {experience} years experience
      </div>
  
      {/* <button className={`self-stretch px-10 py-6 mt-4 text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5
        hover:bg-orange-500 hover:text-white  active:bg-orange-700 active:shadow-inner`}>
        View Profile
      </button> */}
    </div>
  );
};

export default DoctorCard;