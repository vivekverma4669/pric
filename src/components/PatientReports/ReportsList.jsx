
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportsItem from "./ReportsItem";
import loadingImage from '../../images/loading.gif'
import Image from "next/image";
import { useParams } from 'next/navigation';

const ReportsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams();  
  const id = params.id;


  const getAppointments = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
          `${API_URL}/api/v1/patient/reports?patient_id=${id || 1}`
      );
   
      const appointmentsData = res.data.payload.appointments.map((appointment) => ({
        date: {
          day: new Date(appointment.visit_date).getDate(),
          month: new Date(appointment.visit_date).toLocaleString('default', { month: 'short' })
        },
        doctor: appointment.doctor_name,
        diagnosis: appointment.prescription.diagnosis || "   ",
        remarks: appointment.prescription.remarks || "No Remarks",
        medicines: appointment.prescription.medicines.map((medicine) => ({
          name: medicine.name,
          frequency: medicine.description,
          instructions: medicine.remark,
        })),
        medicalTest: appointment.prescription.medical_tests?.join(", ") || "No Medical Tests",
      }));
      setAppointments(appointmentsData);
    }
    catch (error) {
      console.error("Error fetching appointments:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="flex flex-col items-center pb-32 bg-white max-md:pb-24">
      <div className="mt-16 text-2xl font-bold text-neutral-800 max-md:mt-10">
        Test Reports
      </div>

       

      {loading ? (
        <Image 
          src={loadingImage} 
          width={200}
          height={200}
          alt="loading"
        />
      ) : (
        <div className="relative max-w-[1350px] mt-4">
          <div
            className="absolute top-0 bottom-10 w-[3px] bg-orange-500"
            style={{ transform: "translateX(25px)" }}
          />
          {appointments.map((appointment, index) => (
            <ReportsItem key={index} appointment={appointment} />
          ))}
        </div>
      )}


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

export default ReportsList;
