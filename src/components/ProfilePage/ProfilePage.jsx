
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "./InputField";
import ProfileHeader from "./ProfileHeader";
import dob from "../../images/dob.svg";
import edit from "../../images/edit.svg";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    id: 1,
    uid: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    address: "",
    contactNumber: "",
    email: ""
  });
  const [isEditing, setIsEditing] = useState(true);
  const [loading, setLoading] = useState(false);

 

  const getProfileDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/v1/patient?patient_id=${profile.id}`);
      const data = res.data.payload;
      setProfile({
        id: data.id,
        uid: data.uid || "",
        firstName: data.first_name || "",
        lastName: data.last_name || "",
        dob: data.dob || "D.O.B",
        gender: data.gender || "",
        maritalStatus: data.marital_status || "",
        address: data.address || "",
        contactNumber: "", 
        email: data.email || "",
      });
    } catch (error) {
      console.log("Error fetching profile details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  

  const handleSaveClick = async () => {
    setLoading(true);
    try {
      await axios.patch(`${API_URL}/api/v1/patient/${profile.id}`, {
        first_name: profile.firstName,
        last_name: profile.lastName,
        dob: profile.dob,
        gender: profile.gender,
        marital_status: profile.maritalStatus,
        address: profile.address,
        contact_number: profile.contactNumber,
        email: profile.email
      });
      setIsEditing(false);
    } catch (error) {
      console.log("Error saving profile details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col pb-56 bg-white">
      <ProfileHeader />
      <main className="flex flex-col self-center mt-10 max-w-full w-[1242px]">
        <section>
        <h1 className="self-start text-3xl font-bold text-orange-400 max-md:max-w-full mb-10">
        EDIT  YOUR PROFILE
        </h1>

          <div className="flex flex-wrap gap-5 justify-between mt-2 w-full">
            <div className="text-2xl font-bold text-neutral-800">
              Patient ID: <span>{profile.uid}</span>
            </div>

          
          </div>
          <div className="flex flex-wrap gap-10 mt-6 text-base font-light text-neutral-500">
            <InputField
              label="First Name"
              value={profile.firstName}
              name="firstName"
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <InputField
              label="Last Name"
              value={profile.lastName}
              name="lastName"
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-wrap gap-10 mt-3.5 w-full text-base font-light text-neutral-500">
 

    
    <div className="grow px-4 py-4 bg-white rounded-2xl border border-solid border-orange-400 border-opacity-30 w-fit">
      <label htmlFor="dob" className="sr-only">Date of Birth</label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={profile.dob}
        onChange={handleInputChange}
        disabled={!isEditing}
        
        className="w-full bg-transparent outline-none text-[18px] "

      />
      
    </div>

 

   <div className="flex flex-wrap flex-1 flex-auto gap-5">
   
    <div className="grow px-4 py-4 bg-white rounded-2xl border border-solid border-orange-400 border-opacity-30 w-fit">
      <label className="sr-only" htmlFor="gender">Gender</label>
      <select
        id="gender"
        name="gender"
        value={profile.gender}
        onChange={handleInputChange}
        disabled={!isEditing}
        className="w-full bg-transparent outline-none"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

              
    <div className="grow px-4 py-4 bg-white rounded-2xl border border-solid border-orange-400 border-opacity-30 w-fit">
      <label className="sr-only" htmlFor="maritalStatus">Marital Status</label>
      <select
        id="maritalStatus"
        name="maritalStatus"
        value={profile.maritalStatus}
        onChange={handleInputChange}
        disabled={!isEditing}
        className="w-full bg-transparent outline-none"
      >
        <option value="">Select Marital Status</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
      </select>
    </div>

            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="self-start text-2xl font-bold text-neutral-800">Contact Details</h2>
          <textarea
            className="px-4 pt-5 pb-14 mt-6 w-full text-base font-semibold bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 text-neutral-500 "
            placeholder="Complete Address"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            disabled={!isEditing}
          ></textarea>
          <div className="flex flex-wrap gap-10 mt-3.5 text-base font-light text-neutral-500">
            <InputField
              label="Contact Number"
              value={profile.contactNumber}
              name="contactNumber"
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <InputField
              label="Email"
              type="email"
              value={profile.email}
              name="email"
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </section>

        {isEditing && (
          <button className="relative self-center px-14 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[650px] group overflow-hidden transition-transform transform active:scale-95">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
           Save Details
          </span>
        </button>
        )}

        {loading && <p>Loading...</p>} {}
      </main>
    </div>
  );
};

export default ProfilePage;
