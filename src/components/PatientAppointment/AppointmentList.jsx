import React from "react";
import AppointmentItem from "./AppointmentItem";

const AppointmentList = () => {
  const appointments = [

    {
      date: { day: 21, month: "Aug" },
      doctor: "Dr. Prashant Aggarwal",
      diagnosis: "Knee Pain",
      remarks: "Excercise",
      medicines: [
        {
          name: "VITAMIN D 60K IU",
          frequency: "Once Weekly",
          instructions: "Sunday with Milk",
        },
        {
          name: "INDOMETHACIN 75 MG",
          frequency: "Once Daily",
          instructions: "Night Time",
        },
        {
          name: "TOPFENAC",
          frequency: "Twice Daily",
          instructions: "Local Application",
        },
        { name: "ARORAB DSR", frequency: "SOS", instructions: "Acidity" },
        { name: "INDOMETHACIN 25 MG", frequency: "SOS", instructions: "Pain" },
      ],
      medicalTest:
        "COMPLETE HAEMOGRAM,CRP QUANTITATIVE,CREATININE,SGOT,SGPT,RBS,ALP,URINE ROUTINE,CXR PA,X RAY PELVIS AP WITH BOTH HIPS",
    },
    {
      date: { day: 18, month: "Aug" },
      doctor: "Dr. Prashant Aggarwal",
      diagnosis: "Knee Pain",
      remarks: "Excercise",
      medicines: [
        {
          name: "VITAMIN D 60K IU",
          frequency: "Once Weekly",
          instructions: "Sunday with Milk",
        },
        {
          name: "INDOMETHACIN 75 MG",
          frequency: "Once Daily",
          instructions: "Night Time",
        },
        {
          name: "TOPFENAC",
          frequency: "Twice Daily",
          instructions: "Local Application",
        },
        { name: "ARORAB DSR", frequency: "SOS", instructions: "Acidity" },
        { name: "INDOMETHACIN 25 MG", frequency: "SOS", instructions: "Pain" },
      ],
      medicalTest:
        "COMPLETE HAEMOGRAM,CRP QUANTITATIVE,CREATININE,SGOT,SGPT,RBS,ALP,URINE ROUTINE,CXR PA,X RAY PELVIS AP WITH BOTH HIPS",
    },
    {
      date: { day: 15, month: "Aug" },
      doctor: "Dr. Prashant Aggarwal",
      diagnosis: "Knee Pain",
      remarks: "Excercise",
      medicines: [
        {
          name: "VITAMIN D 60K IU",
          frequency: "Once Weekly",
          instructions: "Sunday with Milk",
        },
        {
          name: "INDOMETHACIN 75 MG",
          frequency: "Once Daily",
          instructions: "Night Time",
        },
        {
          name: "TOPFENAC",
          frequency: "Twice Daily",
          instructions: "Local Application",
        },
        { name: "ARORAB DSR", frequency: "SOS", instructions: "Acidity" },
        { name: "INDOMETHACIN 25 MG", frequency: "SOS", instructions: "Pain" },
      ],
      medicalTest:
        "COMPLETE HAEMOGRAM,CRP QUANTITATIVE,CREATININE,SGOT,SGPT,RBS,ALP,URINE ROUTINE,CXR PA,X RAY PELVIS AP WITH BOTH HIPS",
    },
    {
      date: { day: 2, month: "Aug" },
      doctor: "Dr. Prashant Aggarwal",
      diagnosis: "Knee Pain",
      remarks: "Excercise",
      medicines: [
        {
          name: "VITAMIN D 60K IU",
          frequency: "Once Weekly",
          instructions: "Sunday with Milk",
        },
        {
          name: "INDOMETHACIN 75 MG",
          frequency: "Once Daily",
          instructions: "Night Time",
        },
        {
          name: "TOPFENAC",
          frequency: "Twice Daily",
          instructions: "Local Application",
        },
        { name: "ARORAB DSR", frequency: "SOS", instructions: "Acidity" },
        { name: "INDOMETHACIN 25 MG", frequency: "SOS", instructions: "Pain" },
      ],
      medicalTest:
        "COMPLETE HAEMOGRAM,CRP QUANTITATIVE,CREATININE,SGOT,SGPT,RBS,ALP,URINE ROUTINE,CXR PA,X RAY PELVIS AP WITH BOTH HIPS",
    },
    
  ];

  return (
    <div className="flex flex-col items-center pb-32 bg-white max-md:pb-24">
      <div className="mt-16 text-2xl font-bold text-neutral-800 max-md:mt-10">
        Appointments
      </div>
      
    
      
      
    
      <div className="relative max-w-[1350px] mt-4">
  
     <div
    className="absolute top-0 bottom-0 bottom-10 w-[3px] bg-orange-500"

    style={{
      transform: 'translateX(25px)',
    }}/>


      {appointments.map((appointment, index) => (
        <AppointmentItem key={index} appointment={appointment} />
      ))}
      </div>
    

      <button className="px-16 py-5 mt-10 max-w-full text-base font-bold text-center text-white bg-orange-400 rounded-[800px] w-[658px] max-md:px-5">
        Book an Appointment
      </button>
    </div>
  );
};

export default AppointmentList;
