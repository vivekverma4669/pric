import React from "react";
import DepartmentContent from "./DepartmentContent";
import DepartmentHeader from "./DepartmentHeader";

const DepartmentPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white">     
      <DepartmentHeader/>
      <DepartmentContent />
    </div>
  );
};

export default DepartmentPage;
