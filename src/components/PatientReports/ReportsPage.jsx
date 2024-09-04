import ReportsList from "./ReportsList";
import CustomTitle from "../CustomTitle";


const ReportsPage = () => (
  <div className="flex overflow-hidden flex-col pb-20 bg-white"> 
    <CustomTitle title={'TEST REPORTS'}/>
    <ReportsList/>
  </div>
);

export default ReportsPage;
