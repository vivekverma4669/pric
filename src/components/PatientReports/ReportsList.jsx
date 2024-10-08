"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportsItem from "@/components/PatientReports/ReportsItem";
import loadingImage from '../../images/loading.gif';
import Image from "next/image";
import { useParams } from 'next/navigation';
import Cookies from "js-cookie";

const ReportsList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams();
  const id = params.id;
  const token = Cookies.get('token') || '';

  const getReports = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/v1/patient/reports`,{
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      const reportData = res.data.payload.medical_test_reports.map((report) => {
      const [day, month, year] = report.report_date.split('-'); 
      const formattedDate = `${year}-${month}-${day}`;
  
        return {
          medicalTest: report.medical_test,
          full_name: report.patient.name,
          gender: report.patient.gender,
          reports: report.reports.map((r) => ({
            medicalTest: r.medical_test,
            value: r.value,
            min: r.min,
            max: r.max,
          })),
          report_date: formattedDate 
        };
      });
  
      setReports(reportData);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
    setLoading(false);
  };
  

  useEffect(() => {
    getReports();
  }, []);

  return (
    <div className="flex flex-col items-center pb-32 bg-white max-md:pb-24 w-full">
      {reports.length !== 0 && (
        <div className="mt-16 text-2xl font-bold text-neutral-800 max-md:mt-10">
          Test Reports
        </div>
      )}

      {loading ? (
        <Image
          src={loadingImage}
          width={200}
          height={200}
          alt="loading"
        />
      ) : (
        <div className="relative max-w-[1350px] mt-4">
          <div className="absolute top-0 bottom-10 w-[3px] bg-orange-500"
               style={{ transform: "translateX(25px)" }}
          />
          {reports.length === 0 ? (
            <h1 className="text-black font-bold text-4xl">
              No Test Reports found
              <span className="text-6xl">👩‍⚕️</span>
            </h1>
          ) : (
            reports.map((reportCategory, index) => (
              <ReportsItem key={index} report={reportCategory} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ReportsList;
