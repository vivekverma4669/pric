import Header from "@/components/Header";
import React from "react";
import subBG from '../../images/subBG.svg'
import Image from "next/image";

const ProfileHeader = () => {
  return (
    <div className="flex relative flex-col  w-full font-bold min-h-[240px] max-md:max-w-full">
      <Image
        loading="lazy"
        src={subBG}
        className="object-cover absolute inset-0 size-full h-[240px] "
        alt="Department background"
      />
      <Header/>
   
      <h2 className=" mt-4 relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
        PROFILE
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
        PROFILE
          </span>
        </h2>
    </div>
  );
};

export default ProfileHeader;
