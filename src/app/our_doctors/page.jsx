import React from 'react'
import DoctorHeader from '@/components/OurDoctors/DoctorHeader';
import DoctorContent from '@/components/OurDoctors/DoctorContent';

const pages = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white">  
     <DoctorHeader/>
     <DoctorContent/>
    </div>
  )
}

export default pages