import React from "react";
import AppointmentList from "./AppointmentList";
import CustomTitle from "../CustomTitle";
import prescriptionPrint from "./PrescriptionPrint";
import logo from '../../images/logo.png'
import Image from "next/image";

const AppointmentsPage = () => (
  <div className="flex overflow-hidden flex-col items-center pb-32 bg-white max-md:pb-24">
     <CustomTitle title={"APPOINTMENTS"} />
     <AppointmentList/> 
  </div>
);

export default AppointmentsPage;
