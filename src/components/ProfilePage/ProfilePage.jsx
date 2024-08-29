import React from 'react';
import InputField from './InputField';
import ProfileHeader from './ProfileHeader';
import dob from '../../images/dob.svg';
import edit from '../../images/edit.svg';
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-56 bg-white">
        <ProfileHeader/>
      <main className="flex flex-col self-center mt-16 max-w-full w-[1242px]">
        <section>
          <h2 className="self-start text-2xl font-bold text-neutral-800">
            Profile
          </h2>
          <div className="flex flex-wrap gap-5 justify-between mt-2 w-full">
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
          <div className="flex flex-wrap gap-10 mt-6 text-base font-light text-neutral-500">
            <InputField label="First Name" />
            <InputField label="Last Name" />
          </div>

          <div className="flex flex-wrap gap-10 mt-3.5 w-full text-base font-light text-neutral-500">
            
            <div className="flex flex-wrap flex-1 flex-auto  justify-between gap-10 items-start px-4 py-3 whitespace-nowrap bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30">
              <><label htmlFor="dob" className="my-auto">D.O.B</label>
              <input type="date" id="dob" className="sr-only" /></>

              <Image
                loading="lazy"
                src={dob}
                alt="Calendar icon"
                className="object-contain shrink-0 self-start w-9 aspect-square"
              />
            </div>

            <div className="flex flex-wrap flex-1 flex-auto gap-5">
              <InputField label="Gender" />
              <InputField label="Marital Status" />
            </div>
          </div>

        </section>
        <section className="mt-8">
          <h2 className="self-start text-2xl font-bold text-neutral-800">
            Contact Details
          </h2>
          <textarea
            className="px-4 pt-5 pb-14 mt-6 w-full text-base font-light bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 text-neutral-500"
            placeholder="Complete Address"
          ></textarea>
          <div className="flex flex-wrap gap-10 mt-3.5 text-base font-light text-neutral-500">
            <InputField label="Contact Number" />
            <InputField label="Email" type="email" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;