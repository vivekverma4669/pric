import React from 'react';
// import logo from '../../images/logo.png';
import Image from 'next/image';

const PrescriptionPrint = React.forwardRef((props, ref) => {
  const { prescription } = props;
   if (!prescription || !prescription.payload) return null;

  const {
    visit_date: originalVisitDate, 
  }= prescription.payload.appointment;

  let visit_date = originalVisitDate.split('-').reverse().join('/');
  const dobYear = new Date(prescription?.payload?.patient_dob).getFullYear();
 

  return ( 
     <div  ref={ref} className="px-28 pt-1  w-[1170px]  min-h-[1560px] text-black flex flex-col justify-between">
      <div>
      <div className="relative  left-0 top-12" >
        <Image src={prescription?.payload?.organization?.logo} alt="logo" width="95"  height='95' className="logo-img" />
      </div>

      <h1 className="text-center mt-1 mb-3 text-[32px]"> {prescription?.payload?.organization?.name} </h1>
      <br />

      <div style={{ maxWidth: '1300px', margin: 'auto',}}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h1 className="text-[24px] mb-2">{prescription?.payload?.appointment?.doctor?.full_name}</h1>
            
            <p>MD DM (Immunology) </p>
            <p>Rheumatologist  & Immunology</p>
            <p>EX Consultant Apollo Hospital. LDH</p>
            <p>EX Asstt. prof DMC & H, LDH</p>
            <p>Regn No. PMC 29517</p>
          </div>

          <div className='mr-[10px]'>
            <h4 className="text-[24px] mb-2">{prescription?.payload?.appointment?.consultant_doctor?.full_name}</h4>
                      
            {prescription?.payload?.appointment?.consultant_doctor ? (
              <div>
                <p>MD Medicine PDCC</p>
                <p>EULAR Fellow</p>
                <p>Physician & Rheumatologist</p>
                <p>EX Asstt. Prof DMC & H, LDH</p>
                <p>Regn No. PMC 31277</p>
              </div>
            ) : ""}
          </div>
        </div>
        <br/>
        <hr/>
        <br/>

        <div className="patient-details">
          <div className="mb-2 flex justify-between ">
            <p className='text-[22px]'><span className='font-semibold' >{prescription?.payload?.patient_full_name}</span> ({prescription?.payload?.patient_uid})</p>
            <p className='text-[18px] '>Date: {visit_date}</p>
          </div>

          <div style={{ width: '100%'  }} className="flex justify-between mb-3">
                <span className="">&nbsp;{prescription?.payload?.weight}</span>
                <span  className="">YOB: {dobYear} &nbsp;&nbsp;&nbsp; {prescription?.payload?.patient_gender} </span>
                {prescription?.payload?.visit_type === 'New' || prescription?.payload?.visit_type === 'Old' ? '(Valid for 1 Revisit within 7 days)' : prescription?.payload?.visit_type}
          </div>
              
       

          <table style={{ width: '100%' }} className=" mt-2 mb-1">
            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}>
                <div><p>Diagnosis:</p></div>
              </td>
              <td>
              {prescription?.payload?.diagnosis?.map((daig,index)=>(
                <div key={index}>
                  <p style={{ wordWrap: 'break-word' }}>{daig} </p>
                  </div>
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

          <div className="mt-2"><span className="mr-24">Notes: </span>  {prescription?.payload?.notes}  </div>
            
               
             

          <div className="medicines medicine-print mb-20 mt-5">

            <h5 className='mb-5'><b>Medicines</b></h5>
           

                {prescription?.payload?.medicines.map((medi,index)=>(
               
                 <div key={index} className={`w-[100%] flex justify-between mt-1  `} >
                 
                 <div className='mr-3 text-[16px]'> {index+1}</div>

                
                 <div className='min-w-[400px] '>
                   <p style={{ fontSize: '16px'}} >{medi.name}</p>
                   <small className=' block w-[950px] text-[12px]'>{medi.salt} </small>
                 </div>
                   
               
                
                 <div style={{ width: '250px' }}>
                   <p style={{ fontSize: '16px' }}>{medi.description}</p>
                 </div>

                 <div style={{ width: '350px' }}>
                   <p style={{ fontSize: '16px' }}>{medi.remark}</p>
                 </div>

               </div>
                ))}

              </div>

      


          <table className="mb-5">
            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Spl instructions:</p> </div>
              </td>
              <td>
                <div><p>{prescription?.payload?.special_instructions}</p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Follow up:</p></div>
              </td>
              <td>
                <div><p>{prescription?.payload?.followup}</p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px' }}>
                <div><p>Videos:</p></div>
              </td>
              <td>
                <div><p> <a href={prescription?.payload?.vedios}> </a> </p></div>
              </td>
            </tr>

            <tr>
              <td style={{ width: '150px', verticalAlign: 'top' }}>
                <div><p>Investigations:</p></div>
              </td>
              <td style={{ wordWrap: 'break-word' }}>
                <div><p>
                {prescription?.payload?.appointment?.investigations.map(item => item.toUpperCase()).join(', ')}
                 </p></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
          
      </div>
  
      <div className="footer">
        <hr />
        <p className="text-center pt-3  text-[12px]">
          {prescription?.payload?.organization?.address} {prescription?.payload?.organization?.city} ({prescription?.payload?.organization?.state}) {prescription?.payload?.organization?.contact_number} {prescription?.payload?.organization?.email} | {prescription?.payload?.organization?.website} &nbsp;
          Advice given without physical checkup is Provisional, pending physical evaluation by a qualified Doctor. <b>Patient Can Buy Generic Medicine of Same Salt</b>
        </p>
      </div>

    </div>
  );
});
PrescriptionPrint.displayName = 'PrescriptionPrint';
export default PrescriptionPrint;


