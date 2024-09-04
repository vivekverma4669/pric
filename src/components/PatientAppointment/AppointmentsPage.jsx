import React from "react";
import AppointmentList from "./AppointmentList";
import CustomTitle from "../CustomTitle";

const AppointmentsPage = () => (
  <div className="flex overflow-hidden flex-col items-center pb-32 bg-white max-md:pb-24">
     <CustomTitle title={"APPOINTMENTS"} />
    <AppointmentList/>
  </div>
);

export default AppointmentsPage;
