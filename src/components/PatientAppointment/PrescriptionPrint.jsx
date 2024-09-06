// import React from 'react';
// import Image from 'next/image';
// import logo from '../../images/logo.png'

// const PrintPrescription = (({ reportData, patientData }, ref) => {
//   const { appointment, organization, prescription, Doctor, Medicine } = reportData;
//   const doctor = appointment.doctor.id === Doctor.parshant.id ? Doctor.bharti : appointment.doctor;

//   return (
//     <div className="pl-5" ref={ref}>
//       <div className="relative">
//         <div className="absolute left-20 top-2">
//           <Image src={logo} alt="logo" width={100} height={50} className="logo-img" />
//         </div>

//         <h2 className="text-center mt-2 mb-3">{organization.name}</h2>

//         <div className="max-w-4xl mx-auto">
//           <div className="flex justify-between">
//             {appointment.consultant.id === Doctor.parshant.id && (
//               <div>
//                 <h4>Dr Parshant Aggarwal</h4>
//                 {Doctor.parshant.details.split('\r\n').map((detail, index) => (
//                   <p key={index}>{detail}</p>
//                 ))}
//               </div>
//             )}

//             <div>
//               <h4>{doctor.full_name}</h4>
//               {doctor.details.split('\r\n').map((detail, index) => (
//                 <p key={index}>{detail}</p>
//               ))}
//             </div>
//           </div>

//           <hr className="my-2" />

//           <div className="patient-details">
//             <div className="flex justify-between mb-2">
//               <p>
//                 <strong>{patientData.full_name.toUpperCase()}</strong> ({appointment.patient.uid})
//               </p>
//               <p>Date: {new Date(appointment.visit_date).toLocaleDateString('en-GB')}</p>
//             </div>

//             <table className="w-full">
//               <tbody>
//                 <tr>
//                   <td className="flex justify-between">
//                     {appointment.weight && <p>{appointment.weight} Kg</p>}
//                     {appointment.bp_s && (
//                       <p>
//                         {appointment.bp_s} / {appointment.bp_d}
//                       </p>
//                     )}
//                     <p>
//                       YOB: {new Date(patientData.dob).getFullYear()} &nbsp; {patientData.gender}
//                     </p>
//                   </td>
//                   <td className="text-right">
//                     {appointment.new_visit_type || appointment.old_visit_type ? (
//                       <small>(Valid for 1 Revisit within 7 days)</small>
//                     ) : (
//                       <b>{appointment.visit_type}</b>
//                     )}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <div className="my-2">
//               <div className="flex">
//                 <p className="w-40">Diagnosis:</p>
//                 <p>{prescription.diagnosis.join(', ')}</p>
//               </div>
//             </div>

//             {prescription.daily_exercise ||
//             prescription.dietitian ||
//             prescription.physiotherapist ||
//             prescription.psychologist ? (
//               <div className="flex">
//                 <p>Recommendations: </p>
//                 {prescription.daily_exercise && <p>Regular Exercise</p>}
//                 {(prescription.dietitian ||
//                   prescription.physiotherapist ||
//                   prescription.psychologist) && (
//                   <p>
//                     Meet{' '}
//                     {['dietitian', 'physiotherapist', 'psychologist']
//                       .filter((field) => prescription[field])
//                       .join(', ')}
//                   </p>
//                 )}
//               </div>
//             ) : null}

//             <div className="my-2">
//               <div className="flex">
//                 <p className="w-40">Notes:</p>
//                 <p>{prescription.notes}</p>
//               </div>
//             </div>

//             <div className="medicines mb-5">
//               <h5>
//                 <b>Medicines</b>
//               </h5>
//               <table className="table-auto w-full">
//                 <tbody>
//                   {prescription.medicines.list &&
//                     prescription.medicines.list.map((med, i) => {
//                       const medicine = Medicine.find((medItem) => medItem.name === med.name);
//                       return (
//                         <tr key={i} className="text-sm mb-2">
//                           <td className="text-lg">{i + 1}</td>
//                           <td className="w-80 h-12">
//                             <p>{medicine?.form_type?.toUpperCase()} {med.name}</p>
//                             {medicine && medicine.name === med.name.trim() && (
//                               <small className="uppercase absolute">{medicine.medicine_salt.name}</small>
//                             )}
//                           </td>
//                           <td className="w-52">{med.description}</td>
//                           <td className="w-96">{med.remark}</td>
//                         </tr>
//                       );
//                     })}
//                 </tbody>
//               </table>
//             </div>

//             <table className="mb-5 w-full">
//               <tbody>
//                 <tr>
//                   <td className="w-40">
//                     <p>Special Instructions:</p>
//                   </td>
//                   <td>
//                     <p>{prescription.special_instructions?.join(', ')}</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="w-40">
//                     <p>Follow Up:</p>
//                   </td>
//                   <td>
//                     <p>{prescription.followup}</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="w-40">
//                     <p>Videos:</p>
//                   </td>
//                   <td>
//                     <p>{prescription.videos.join(', ')}</p>
//                   </td>
//                 </tr>
//                 {prescription.additional_tests && (
//                   <tr>
//                     <td className="w-40">
//                       <p>Additional Tests:</p>
//                     </td>
//                     <td>
//                       <p>{prescription.additional_tests}</p>
//                     </td>
//                   </tr>
//                 )}
//                 <tr>
//                   <td className="w-40">
//                     <p>Investigations:</p>
//                   </td>
//                   <td>
//                     <p>{prescription.medical_tests.map((test) => test.toUpperCase()).join(', ')}</p>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <footer className="absolute bottom-5 text-xs text-center w-full">
//           <hr />
//           <p>
//             Main Ferozepur Road Near MBD Mall Ludhiana (PB) 9878736644, 9814267774,
//             punjabrheumatology@gmail.com | www.praic.in. Advice given without physical checkup
//             is Provisional, pending physical evaluation by a qualified Doctor.{' '}
//             <b>Patient Can Buy Generic Medicine of Same Salt</b>
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// });

// export default PrintPrescription;

import React from 'react';
import logo from '../../images/logo.png';


const PrescriptionPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pl-5">
      <div style={{ position: 'absolute', left: '60px', right:'60px', top: '10px' }}>
        <img src={logo} alt="logo" width="100" className="logo-img" />
      </div>

      <h2 className="text-center mt-2 mb-3"> Punjab Rheumatology & Immunology centre </h2>
      <br />

      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h4>Dr Parshant Aggarwal</h4>
            <p>MD DM (Immunology) </p>
            <p>Rheumatology & Immunology</p>
            <p>EX Consultant Apollo Hospital .LDH</p>
            <p>Regn No . 29517</p>
          </div>

          <div>
            <h4>Dr Bharti</h4>
            <p>MD Medicine PDCC</p>
            <p>EULAR Fellow</p>
            <p>EX Consultant Apollo Hospital .LDH</p>
            <p>Regn No . 29517</p>
          </div>
        </div>
        <hr />

        <div className="patient-details">
          <h5 className="mb-2 d-flex justify-content-between">
            <p><b>JOHN DOE</b> (123456)</p>
            <p>Date: 05/09/2024</p>
          </h5>

          <table style={{ width: '100%' }}>
            <tr>
              <td className="d-flex justify-content-between">
                <p className="list-item d-flex">75 Kg</p>
                <p className="list-item d-flex">120 / 80</p>
                <p className="list-item d-flex">YOB: 1990 &nbsp;&nbsp;&nbsp; Male</p>
              </td>
              <td style={{ width: '50%', textAlign: 'right' }}>
                <p>
                  <small>(Valid for 1 Revisit within 7 days)</small>
                </p>
              </td>
            </tr>
          </table>

          <table style={{ width: '100%' }} className="mb-2 mt-2 mb-1">
            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}>
                <div><p>Diagnosis:</p></div>
              </td>
              <td>
                <div><p style={{ wordWrap: 'break-word' }}>Diagnosis details here</p></div>
              </td>
            </tr>
          </table>

          <table className="medicines mb-1 w-100">
            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}></td>
              <td>Regular Exercise</td>
            </tr>
          </table>

          <table style={{ width: '100%' }} className="mb-2 mt-2 mb-3">
            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}>
                <div><p>Notes:</p></div>
              </td>
              <td>
                <div><p style={{ wordWrap: 'break-word' }}>Notes content here</p></div>
              </td>
            </tr>
          </table>

          <div className="medicines medicine-print mb-5">
            <h5><b>Medicines</b></h5>
            <table>
              <tbody>
                <tr style={{ fontSize: '14px', width: '100%', marginBottom: '10px' }}>
                  <td style={{ width: '15px', fontSize: '16px' }}>1</td>
                  <td style={{ width: '325px', height: '45px' }}>
                    <p style={{ fontSize: '16px' }}>CAPSULE Medicine Name</p>
                    <small style={{ textTransform: 'uppercase', position: 'absolute', width: '100%' }}>Medicine Salt Name</small>
                  </td>
                  <td style={{ width: '200px' }}>
                    <p style={{ fontSize: '14px' }}>Description here</p>
                  </td>
                  <td style={{ width: '400px' }}>
                    <p style={{ fontSize: '14px' }}>Remarks here</p>
                  </td>
                </tr>
                <tr style={{ fontSize: '14px', width: '100%', marginBottom: '10px' }}>
                  <td style={{ width: '15px', fontSize: '16px' }}>1</td>
                  <td style={{ width: '325px', height: '45px' }}>
                    <p style={{ fontSize: '16px' }}>CAPSULE Medicine Name</p>
                    <small style={{ textTransform: 'uppercase', position: 'absolute', width: '100%' }}>Medicine Salt Name</small>
                  </td>
                  <td style={{ width: '200px' }}>
                    <p style={{ fontSize: '14px' }}>Description here</p>
                  </td>
                  <td style={{ width: '400px' }}>
                    <p style={{ fontSize: '14px' }}>Remarks here</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <table className="mb-5">
            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Spl inst:</p></div>
              </td>
              <td>
                <div><p>Special instructions content</p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Follow up:</p></div>
              </td>
              <td>
                <div><p>Follow up details</p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Videos:</p></div>
              </td>
              <td>
                <div><p>Video links here</p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}>
                <div><p>Investigations:</p></div>
              </td>
              <td style={{ wordWrap: 'break-word' }}>
                <div><p>Investigation details here</p></div>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="footer" style={{ position: 'absolute', bottom: '20px', fontSize: '12px' }}>
        <hr />
        <p className="text-center">
          Main Ferozepur Road Near MBD Mall Ludhiana (PB) 9878736644, 9814267774, punjabrheumatology@gmail.com | www.praic.in.
          Advice given without physical checkup is Provisional, pending physical evaluation by a qualified Doctor. <b>Patient Can Buy Generic Medicine of Same Salt</b>
        </p>
      </div>
    </div>
  );
});

export default PrescriptionPrint;
