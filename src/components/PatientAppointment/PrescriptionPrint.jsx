import React from 'react';
import logo from '../../images/logo.png';
import Image from 'next/image';

const PrescriptionPrint = React.forwardRef((props, ref) => {
  const { prescription } = props;

  if (!prescription || !prescription.payload) return null;

  const {
    patient_full_name,
    patient_uid,
    patient_dob,
    followup,
    diagnosis,
    medical_tests_list,
    medicines,
    notes,
    special_instructions,
    vedios = '',
  } = prescription.payload; 

  const {
    weight,
    visit_type,
    visit_date: originalVisitDate, 
  }= prescription.payload.appointment;
  let visit_date = originalVisitDate.split('-').reverse().join('/');

  const {
    investigation,
  } = prescription

  const dobYear = new Date(patient_dob).getFullYear();
  // console.log("weight: ", weight);



  return ( 
     <div  ref={ref} className="pl-10 pr-10 ml-5 mr-5 mt-5 w-[1000px]  min-h-[1400px]">
      <div className="relative  left-0 top-12" >
        <Image src={logo} alt="logo" width="95"  height='95' className="logo-img" />
      </div>

      <h1 className="text-center mt-2 mb-3 text-[27px]"> Punjab Rheumatology & Immunology centre </h1>
      <br />

      <div style={{ maxWidth: '1300px', margin: 'auto',}}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h1 className="text-[24px] mb-2">Dr Parshant Aggarwal</h1>
            
            <p>MD DM (Immunology) </p>
            <p>Rheumatologist  & Immunology</p>
            <p>EX Consultant Apollo Hospital. LDH</p>
            <p>EX Asstt. prof DMC & H, LDH</p>
            <p>Regn No. PMC 29517</p>
          </div>

          <div className='mr-[10px]'>
            <h4 className="text-[24px] mb-2">Dr Bharti Aggarwal</h4>
           
            <p>MD Medicine PDCC</p>
            <p>EULAR Fellow</p>
            <p>Physician & Rheumatologist</p>
            <p>EX Asstt. prof DMC & H, LDH</p>
            <p>Regn No . PMC 31277</p>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>

        <div className="patient-details">
          <div className="mb-2 flex justify-between ">
            <p className='text-[24px]'><span className='font-semibold' >{patient_full_name}</span> ({patient_uid})</p>
            <p className='text-[18px]'>Date: {visit_date}</p>
          </div>

          <div style={{ width: '100%'  }} className="flex justify-between mb-3">
                <span className="">weight :&nbsp;{weight}</span>
                <span  className="">YOB: {dobYear} &nbsp;&nbsp;&nbsp; Male</span>
                {visit_type === 'New' || visit_type === 'Old' ? 'Valid for 1 Revisit within 7 days' : visit_type}
          </div>
              
       

          <table style={{ width: '100%' }} className=" mt-2 mb-1">
            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}>
                <div><p>Diagnosis:</p></div>
              </td>
              <td>
              {diagnosis.map((daig)=>(
                <div><p style={{ wordWrap: 'break-word' }}>{daig} </p></div>
              ))}
              </td>
            </tr>
          </table>

          {/* <table className="medicines mb-1 w-100">
            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}></td>
              <td>Regular Exercise</td>
            </tr>
          </table> */}

          <div className="mt-2"><span className="mr-24">Notes: </span>  {notes}  </div>
            
               
             

          <div className="medicines medicine-print mb-20 mt-5">
            <h5 className='mb-5'><b>Medicines</b></h5>
             <table>
              <tbody>
                {medicines.map((medi,index)=>(
                 <tr key={index} style={{ fontSize: '14px', width: '100%', marginBottom: '6px', marginLeft :'5px', margin:medi.salt? '5px' :""}}>
                 <td style={{ width: '15px', fontSize: '16px' }}>{index+1}</td>

                 <td className='min-w-[350px]' style={{  height: '25px' }}>
                   <p style={{ fontSize: '16px'}}>{medi.name}</p>
                   <small style={{ fontSize: '14px',  marginTop:'2px'}}>{medi.salt}</small>
                 </td>
                
                 <td style={{ width: '200px' }}>
                   <p style={{ fontSize: '14px' }}>{medi.description}</p>
                 
                 </td>
                 <td style={{ width: '400px' }}>
                   <p style={{ fontSize: '14px' }}>{medi.remark}</p>
                 </td>
               </tr>


                ))}
              </tbody>
            </table>
          </div>

          <table className="mb-5">
            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Spl instructions:</p> </div>
              </td>
              <td>
                <div><p>{special_instructions}</p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Follow up:</p></div>
              </td>
              <td>
                <div><p>{followup}</p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Videos:</p></div>
              </td>
              <td>
                <div><p> <a href={vedios}> </a> </p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}>
                <div><p>Investigations:</p></div>
              </td>
              <td style={{ wordWrap: 'break-word' }}>
                <div><p>COMPLETE HAEMOGRAM, CRP QUANTITATIVE, CREATININE, SGOT, SGPT, ALP, RBS, URINE ROUTINE, CXR PA, X
                RAY PELVIS AP WITH BOTH HIPS, ANA IF, CPK, LDH, RHEUMATOID FACTOR, X RAY BOTH HANDS WITH WRISTS A</p></div>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="footer pb-5   max-w-[1200px] "  style={{ position: 'absolute', bottom: '0', left: '0', right: '0', width: '100%'}}>
        <hr />
        <p className="text-center pt-3  text-[12px]">
          Main Ferozepur Road Near MBD Mall Ludhiana (PB) 9878736644, 9814267774, punjabrheumatology@gmail.com | www.praic.in.
          Advice given without physical checkup is Provisional, pending physical evaluation by a qualified Doctor. <b>Patient Can Buy Generic Medicine of Same Salt</b>
        </p>
      </div>

    </div>
  );
});
PrescriptionPrint.displayName = 'PrescriptionPrint';
export default PrescriptionPrint;



// import React from 'react';
// import logo from '../../images/logo.png';
// import Image from 'next/image';

// const PrescriptionPrint = React.forwardRef(({ prescription }, ref) => {
//   if (!prescription) return null; // Prevent rendering if no prescription is passed

//   const {
//     patient_full_name,
//     patient_id,
//     patient_dob,
//     weight,
//     diagnosis_list,
//     medical_tests_list,
//     medicines,
//     notes,
//     special_instructions,
//     vedios,
//   } = prescription;
//   console.log("pres: ", prescription);
//   const dobYear = new Date(patient_dob).getFullYear();

//   return (
//     <div ref={ref} className="pl-10 ml-5 mr-5 mt-5 pr-10 min-h-[1400px]">
//       <div className="relative left-0 top-12">
//         <Image src={logo} alt="logo" width={95} height={95} className="logo-img" />
//       </div>

//       <h1 className="text-center mt-2 mb-3 text-[27px]">Punjab Rheumatology & Immunology Centre</h1>
//       <br />

//       <div style={{ maxWidth: '1200px', margin: 'auto' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <div>
//             <h1 className="text-[24px] mb-2">Dr Parshant Aggarwal</h1>
//             <p>MD DM (Immunology)</p>
//             <p>Rheumatologist & Immunology</p>
//             <p>EX Consultant Apollo Hospital. LDH</p>
//             <p>EX Asstt. Prof DMC & H, LDH</p>
//             <p>Regn No. PMC 29517</p>
//           </div>

//           <div className='ml-[5px]'>
//             <h4 className="text-[24px] mb-2">Dr Bharti Aggarwal</h4>
//             <p>MD Medicine PDCC</p>
//             <p>EULAR Fellow</p>
//             <p>Physician & Rheumatologist</p>
//             <p>EX Asstt. Prof DMC & H, LDH</p>
//             <p>Regn No. PMC 31277</p>
//           </div>
//         </div>
//         <br />
//         <hr />
//         <br />

//         <div className="patient-details">
//           <div className="mb-2 flex justify-between">
//             <p className='text-[24px]'><span className='font-semibold'>{patient_full_name}</span> ({patient_id})</p>
//             <p className='text-[18px]'>Date: {new Date().toLocaleDateString()}</p>
//           </div>

//           <div style={{ width: '100%' }} className="flex justify-between mb-3">
//             <span>Weight in Kg: {weight || 'N/A'}</span>
//             <span>YOB: {dobYear}</span>
//             <span>(Valid for 1 Revisit within 7 days)</span>
//           </div>

//           <table style={{ width: '100%' }} className="mt-2 mb-1">
//             <tbody>
//               <tr>
//                 <td style={{ width: '150px', verticalAlign: 'top' }}>
//                   <p>Diagnosis:</p>
//                 </td>
//                 <td>
//                   <p style={{ wordWrap: 'break-word' }}>{diagnosis_list || 'N/A'}</p>
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <table className="medicines mb-1 w-100">
//             <tbody>
//               <tr>
//                 <td style={{ width: '150px', verticalAlign: 'top' }}></td>
//                 <td>Regular Exercise</td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="mt-2">
//             <span className="mr-24">Notes: </span>{notes || 'No additional notes'}
//           </div>

//           <div className="medicines medicine-print mb-20 mt-5">
//             <h5><b>Medicines</b></h5>
//             <table>
//               <tbody>
//                 {medicines && medicines.length > 0 ? (
//                   medicines.map((medicine, index) => (
//                     <tr key={index} style={{ fontSize: '14px', width: '100%', marginBottom: '10px' }}>
//                       <td style={{ width: '15px', fontSize: '16px' }}>{index + 1}</td>
//                       <td style={{ width: '325px', height: '45px' }}>
//                         <p style={{ fontSize: '16px' }}>{medicine.name}</p>
//                         <small style={{ textTransform: 'uppercase', position: 'absolute', width: '100%' }}>{medicine.salt_name}</small>
//                       </td>
//                       <td style={{ width: '200px' }}>
//                         <p style={{ fontSize: '14px' }}>{medicine.description}</p>
//                       </td>
//                       <td style={{ width: '400px' }}>
//                         <p style={{ fontSize: '14px' }}>{medicine.remarks}</p>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4">No medicines prescribed.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <table className="mb-5">
//             <tbody>
//               <tr>
//                 <td style={{ width: '150px' }}>
//                   <p>Special Instructions:</p>
//                 </td>
//                 <td>
//                   <p>{special_instructions || 'None'}</p>
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ width: '150px' }}>
//                   <p>Follow Up:</p>
//                 </td>
//                 <td>
//                   <p>100 Days</p>
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ width: '150px' }}>
//                   <p>Videos:</p>
//                 </td>
//                 <td>
//                   <p>{vedios || 'No videos available'}</p>
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ width: '150px', verticalAlign: 'top' }}>
//                   <p>Investigations:</p>
//                 </td>
//                 <td style={{ wordWrap: 'break-word' }}>
//                   <p>COMPLETE HAEMOGRAM, CRP QUANTITATIVE, CREATININE, SGOT, SGPT, ALP, RBS, URINE ROUTINE, CXR PA, X RAY PELVIS AP WITH BOTH HIPS, ANA IF, CPK, LDH, RHEUMATOID FACTOR, X RAY BOTH HANDS WITH WRISTS A</p>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="footer pb-5 max-w-[1200px]" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', width: '100%' }}>
//         <hr />
//         <p className="text-center pt-3 text-[12px]">
//           Main Ferozepur Road Near MBD Mall Ludhiana (PB) 9878736644, 9814267774, punjabrheumatology@gmail.com | www.praic.in.
//           Advice given without physical checkup is Provisional, pending physical evaluation by a qualified Doctor. <b>Patient Can Buy Generic Medicine of Same Salt</b>
//         </p>
//       </div>
//     </div>
//   );
// });

// PrescriptionPrint.displayName = 'PrescriptionPrint';
// export default PrescriptionPrint;
