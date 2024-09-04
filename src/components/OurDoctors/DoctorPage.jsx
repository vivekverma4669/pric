import DoctorsContent from "./DoctorContent";
import CustomTitle from "../CustomTitle";

const DoctorPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white">
      <CustomTitle title={"OUR DOCTORS"}/>
      <DoctorsContent/>
    </div>
  )
}

export default DoctorPage;
