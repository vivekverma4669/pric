import React from "react";
import AppointmentList from "./AppointmentList";
import PatientHeader from "./PatientHeader";

const AppointmentsPage = () => (
  <div className="flex overflow-hidden flex-col items-center pb-32 bg-white max-md:pb-24">
    <PatientHeader/>
    <AppointmentList />
  </div>
);

export default AppointmentsPage;
