import React from "react";
import ReportsList from "./ReportsList";
import ReportHeader from "./ReportHeader";


const ReportsPage = () => (
  <div className="flex overflow-hidden flex-col pb-20 bg-white"> 
    <ReportHeader/>
    <ReportsList />
  </div>
);

export default ReportsPage;
