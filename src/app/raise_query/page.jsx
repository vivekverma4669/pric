import QueryHeader from '@/components/RaiseQuery/QueryHeader'
import RaiseQuery from '@/components/RaiseQuery/RaiseQuery'
import React from 'react'

const page = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center pb-32 bg-white max-md:pb-24">
    <QueryHeader/>
    <RaiseQuery/>
   </div>


  )
}

export default page