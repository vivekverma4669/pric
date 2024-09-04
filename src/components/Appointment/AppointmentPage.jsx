import AppointmentForm from "./AppointmentForm";
import CustomTitle from "../CustomTitle";

const AppointmentPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white">
      <CustomTitle title={"APPOINTMENT"}/>
      <AppointmentForm/>
    </div>
  )
}

export default AppointmentPage;
