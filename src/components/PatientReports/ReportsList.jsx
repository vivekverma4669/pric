"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportsItem from "@/components/PatientReports/ReportsItem";
import loadingImage from '../../images/loading.gif'; 
import Image from "next/image";
import { useParams } from 'next/navigation';  
import ReportHeader from "@/components/PatientReports/ReportHeader";


const ReportsList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams();  
  const id = params.id;


  const getReports = async () => {
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
      setReports(appointmentsData);
    }
    catch (error) {
      console.error("Error fetching appointments:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <div className="flex flex-col items-center pb-32 bg-white max-md:pb-24 w-full" >
        <ReportHeader/>
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

         
          <div className="absolute top-0 bottom-10 w-[3px] bg-orange-500"
            style={{ transform: "translateX(25px)" }}
          />
           
           {reports.length === 0 ? (
            <h1 className="text-black font-bold text-4xl"> 
              No Test Reports found  
              <span className="text-6xl">👩‍⚕️</span> 
            </h1>
          ) : (
            reports.map((report, index) => (
              <ReportsItem key={index} report={report} />
            ))
          )}

        </div>
      )}


    
    </div>
  );
};

export default ReportsList;
