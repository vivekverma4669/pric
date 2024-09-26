"use client";
import React, { useState, useRef, useEffect } from "react";
import DateBadge from "./DateBadge";
import Image from "next/image";
import arrowUp from '../../images/arrowUp.svg';
import download from '../../images/download.svg';
import editRaise from '../../images/raise-query.svg';
import Link from "next/link";
import PrescriptionPrint from './PrescriptionPrint';
import { useReactToPrint } from 'react-to-print';
import Cookies from "js-cookie";
import axios from "axios";

const AppointmentItem = ({ appointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState(null);
  const componentRef = useRef(null); 
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Prescription Print',
    onAfterPrint: () => console.log('Print job finished') 
  });


  const toggleOpen = () => setIsOpen(!isOpen);
  const token = Cookies.get('token');
 
  const prescriptionId = appointment?.prescriptionId;
  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/v1/prescriptions/${prescriptionId}`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      console.log(res.data , '<- prescription');
      setPrescriptionData(res?.data);
    }
    catch (error) {
      console.error("Error fetching appointments: ", error);
    }
  };


  useEffect(() => {
    fetchAppointments();
  }, [prescriptionId, token, API_URL]);

 
  return (
    <div className="flex flex-wrap gap-2 mb-4 max-w-full w-[658px]">
      <DateBadge day={appointment?.date?.day} month={appointment?.date?.month} />

      <div className="flex flex-col grow shrink-0 rounded-2xl basis-0 bg-neutral-100 w-fit max-md:max-w-full">
        <div
          className="flex flex-wrap gap-5 justify-between px-6 py-3.5 text-base font-semibold rounded-2xl bg-zinc-300 bg-opacity-50 text-neutral-800 max-md:px-5 max-md:max-w-full cursor-pointer"
          onClick={toggleOpen}
        >
          <div>{appointment?.doctor}</div>
          <Image
            loading="lazy"
            src={arrowUp}
            className={`object-contain shrink-0 my-auto aspect-[1.8] stroke-[2px] stroke-neutral-800 w-[18px] transition-transform ${
              isOpen ? "transform " : "rotate-180"
            }`}
            alt="Toggle details"
          />
        </div>
        {isOpen && appointment?.diagnosis && (
          <div className="flex flex-col px-6 mt-6 w-full text-xs text-neutral-700 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-sm max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-center">
                  <span className="font-semibold text-neutral-800">
                    Diagnosis:{" "}
                  </span>
                  {appointment?.diagnosis}
                </div>
                {/* <div className="mt-2 max-md:mr-2.5">
                  <span className="font-semibold text-neutral-800">
                    Remarks:{" "}
                  </span>
                  {appointment?.remarks}
                </div> */}
                <div className="self-start mt-4 font-semibold text-neutral-800">
                  Medicines
                </div>
              </div>

              { <Image
                 onClick={handlePrint}
                loading="lazy"
                src={download}
                className="object-contain cursor-pointer shrink-0 self-start w-9 p-2 bg-orange-200 rounded-xl aspect-square"
                alt="Download icon"
              />
              }
             
            </div>
             
            {appointment?.medicines?.map((medicine, index) => (
              <div
                key={index}
                className="flex flex-wrap gap-5 justify-between px-6 py-3.5 mt-2 bg-white rounded-xl max-md:px-5 max-md:max-w-full hover:border-l hover:border-orange-600"
              >
                <div className="w-[51%] overflow-x-auto">{medicine?.name}</div>
                <div className="w-[20%]">{medicine?.frequency}</div>
                <div className="w-[20%]">{medicine?.instructions}</div>
              </div>
            ))}

            <div className="self-start mt-4 text-sm font-semibold text-neutral-800">
              Medical Test
            </div>
            <div className="self-start mt-2">{appointment?.medicalTest}</div>

            <div className="flex gap-1 self-end mt-5 mb-5 font-semibold text-orange-400">
              <Image
                loading="lazy"
                src={editRaise}
                className="object-contain shrink-0 aspect-square w-[18px]"
                alt="Query icon"
              />
              <Link href={"/raise_query"}>
                <div>Raise a Query</div>
              </Link>
            </div>
          </div>
        )}
      </div>

      
       <div style={{ display: "none" }}>
        <PrescriptionPrint ref={componentRef} prescription={prescriptionData} />
       </div>
    </div>
  );
};

export default AppointmentItem;



// for direct print 

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import DateBadge from "./DateBadge";
// import Image from "next/image";
// import arrowUp from '../../images/arrowUp.svg';
// import download from '../../images/download.svg';
// import editRaise from '../../images/raise-query.svg';
// import Link from "next/link";
// import PrescriptionPrint from './PrescriptionPrint';
// import Cookies from "js-cookie";
// import axios from "axios";
// import html2pdf from 'html2pdf.js'; 
// const AppointmentItem = ({ appointment }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [prescriptionData, setPrescriptionData] = useState(null);
//   const componentRef = useRef(null); 
//   const API_URL = process.env.NEXT_PUBLIC_API_URL;

//   const toggleOpen = () => setIsOpen(!isOpen);
//   const token = Cookies.get('token');
 
//   const prescriptionId = appointment.prescriptionId;
  
//   const fetchAppointments = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/v1/prescriptions/${prescriptionId}`, {
//         headers: {
//           'Authorization': `Token ${token}`
//         }
//       });
//       setPrescriptionData(res.data);
//     }
//     catch (error) {
//       console.error("Error fetching appointments: ", error);
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, [prescriptionId, token, API_URL]);

//   const handleDownload = () => {
//     setTimeout(() => {
//       const element = componentRef.current;
  
//       const opt = {
//         margin: [10, 10], 
//         filename: 'Prescription_Print.pdf', 
//         image: { type: 'png', quality: 1 }, 
//         html2canvas: { scale: 2 }, 
//         jsPDF: { unit: 'mm', format: 'A3', orientation: 'Portrait'  } 
//       };
  
//       html2pdf()
//         .from(element)
//         .set(opt)
//         .save();
//     }, 500); 
//   };
  

//   return (
//     <div className="flex flex-wrap gap-2 mb-4 max-w-full w-[658px]">
//       <DateBadge day={appointment.date.day} month={appointment.date.month} />

//       <div className="flex flex-col grow shrink-0 rounded-2xl basis-0 bg-neutral-100 w-fit max-md:max-w-full">
//         <div
//           className="flex flex-wrap gap-5 justify-between px-6 py-3.5 text-base font-semibold rounded-2xl bg-zinc-300 bg-opacity-50 text-neutral-800 max-md:px-5 max-md:max-w-full cursor-pointer"
//           onClick={toggleOpen}
//         >
//           <div>{appointment.doctor}</div>
//           <Image
//             loading="lazy"
//             src={arrowUp}
//             className={`object-contain shrink-0 my-auto aspect-[1.8] stroke-[2px] stroke-neutral-800 w-[18px] transition-transform ${
//               isOpen ? "transform " : "rotate-180"
//             }`}
//             alt="Toggle details"
//           />
//         </div>

//         {isOpen && appointment.diagnosis && (
//           <div className="flex flex-col px-6 mt-6 w-full text-xs text-neutral-700 max-md:px-5 max-md:max-w-full">
//             <div className="flex flex-wrap gap-5 justify-between text-sm max-md:max-w-full">
//               <div className="flex flex-col">
//                 <div className="text-center">
//                   <span className="font-semibold text-neutral-800">
//                     Diagnosis:{" "}
//                   </span>
//                   {appointment.diagnosis}
//                 </div>
//                 <div className="mt-2 max-md:mr-2.5">
//                   <span className="font-semibold text-neutral-800">
//                     Remarks:{" "}
//                   </span>
//                   {appointment.remarks}
//                 </div>
//                 <div className="self-start mt-4 font-semibold text-neutral-800">
//                   Medicines
//                 </div>
//               </div>

//               { <Image
//                 onClick={handleDownload} 
//                 loading="lazy"
//                 src={download}
//                 className="object-contain cursor-pointer shrink-0 self-start w-9 p-2 bg-orange-200 rounded-xl aspect-square"
//                 alt="Download icon"
//               />
//               }
//             </div>

//             {appointment.medicines.map((medicine, index) => (
//               <div
//                 key={index}
//                 className="flex flex-wrap gap-5 justify-between px-6 py-3.5 mt-2 bg-white rounded-xl max-md:px-5 max-md:max-w-full hover:border-l hover:border-orange-600"
//               >
//                 <div className="w-[51%] overflow-x-auto">{medicine.name}</div>
//                 <div className="w-[20%]">{medicine.frequency}</div>
//                 <div className="w-[20%]">{medicine.instructions}</div>
//               </div>
//             ))}

//             <div className="self-start mt-4 text-sm font-semibold text-neutral-800">
//               Medical Test
//             </div>
//             <div className="self-start mt-2">{appointment.medicalTest}</div>

//             <div className="flex gap-1 self-end mt-5 mb-5 font-semibold text-orange-400">
//               <Image
//                 loading="lazy"
//                 src={editRaise}
//                 className="object-contain shrink-0 aspect-square w-[18px]"
//                 alt="Query icon"
//               />
//               <Link href={"/raise_query"}>
//                 <div>Raise a Query</div>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
      
      
//        <div style={{ display: "none" }}>
//         <PrescriptionPrint ref={componentRef} prescription={prescriptionData} />
//        </div>
//     </div>
//   );
// };

// export default AppointmentItem;
