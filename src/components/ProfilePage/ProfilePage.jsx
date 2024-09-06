"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import InputField from "./InputField";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomTitle from "../CustomTitle";
import { AuthContext } from "@/AuthContextApi/AuthContext";
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ProfilePage = () => {
  const { isAuthenticated, profile, setProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    setLoading(true);
    const token = Cookies.get('token');
    if (!token) {
      toast.error("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      await axios.put(
        `${API_URL}/api/v1/patient`,
        {
          first_name: profile.first_name,
          last_name: profile.last_name,
          dob: profile.dob,
          gender: profile.gender,
          marital_status: profile.marital_status,
          address: profile.address,
          contact_number: profile.contact_number,
          email: profile.email,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      toast.success('Profile details updated successfully!');
    } catch (error) {
      console.log("Error saving profile details:", error);
      toast.error('Failed to update profile details!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col pb-56 bg-white">
      <CustomTitle title={"PROFILE"} />
      <main className="flex flex-col self-center mt-10 max-w-full w-[1242px]">
        <section>
          <div className="flex flex-wrap gap-5 justify-between mt-2 w-full">
            <div className="text-2xl font-bold text-neutral-800">
              Patient ID: <span>{profile.uid}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 mt-6 text-base font-light text-neutral-500">
            <InputField
              label="First Name"
              value={profile.first_name}
              name="first_name"
              onChange={handleInputChange}
            />
            <InputField
              label="Last Name"
              value={profile.last_name}
              name="last_name"
              onChange={handleInputChange}
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
                className="w-full bg-transparent outline-none text-[18px]"
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
                  className="w-full bg-transparent outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grow px-4 py-4 bg-white rounded-2xl border border-solid border-orange-400 border-opacity-30 w-fit">
                <label className="sr-only" htmlFor="marital_status">Marital Status</label>
                <select
                  id="marital_status"
                  name="marital_status"
                  value={profile.marital_status}
                  onChange={handleInputChange}
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
            className="px-4 pt-5 pb-14 mt-6 w-full text-base font-semibold bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 text-neutral-500"
            placeholder="Complete Address"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
          ></textarea>
          <div className="flex flex-wrap gap-10 mt-3.5 text-base font-light text-neutral-500">
            <InputField
              label="Contact Number"
              value={profile.contact_number}
              name="contact_number"
              onChange={handleInputChange}
            />
            <InputField
              label="Email"
              value={profile.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
        </section>

        <button
          onClick={handleSaveClick}
          disabled={loading}
          className="relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden transition-transform transform active:scale-95"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </main>
    </div>
  );
};

export default ProfilePage;
