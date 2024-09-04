import React from "react";
import DepartmentContent from "./DepartmentContent";
import CustomTitle from "../CustomTitle";

const DepartmentPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white">
      <CustomTitle title={"OUR DEPARTMENTS"}/>
      <DepartmentContent />
    </div>
  );
};

export default DepartmentPage;
