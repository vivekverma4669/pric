import React from "react";
import InputField from "./InputField";
import edit from '../../images/edit.svg'
import dob from '../../images/dob.svg'
import Image from "next/image";


function ProfileSection() {
  return (
    <section>
      <h2 className="self-start text-2xl font-bold text-neutral-800">
        Profile
      </h2>
      <div className="flex flex-wrap gap-5 justify-between mt-2 w-full max-md:max-w-full">
        <div className="text-2xl font-bold text-neutral-800">
          Patient ID: <span className="">123456789</span>
        </div>
        <button className="flex gap-2 self-start mt-4 text-base leading-none text-zinc-800">
          <Image
            loading="lazy"
            src={edit}
            alt=""
            className="object-contain shrink-0 aspect-square w-[21px]"
          />
          <span>Edit Profile</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-10 mt-6 text-base font-light text-neutral-500 max-md:max-w-full">
        <InputField label="First Name" />
        <InputField label="Last Name" />
      </div>
      <div className="flex flex-wrap gap-10 mt-3.5 w-full text-base font-light text-neutral-500 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 flex-auto gap-10 items-start px-4 py-3 whitespace-nowrap bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 max-md:max-w-full">
          <label htmlFor="dob">D.O.B</label>
          <input type="date" id="dob" className="bg-transparent border-none" />
          <Image
            loading="lazy"
            src={dob}
            alt="Calendar icon"
            className="object-contain shrink-0 self-start w-9 aspect-square"
          />
        </div>
        <div className="flex flex-wrap flex-1 flex-auto gap-5 max-md:max-w-full">
          <InputField label="Gender" />
          <InputField label="Marital Status" />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
