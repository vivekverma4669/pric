import React from 'react'
import RaiseQuery from './RaiseQuery';
import CustomTitle from '../CustomTitle';

const RaiseQueryPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white w-full">
    <CustomTitle title={"RAISE QUERY"}/>
    <RaiseQuery/>
  </div>
  )
}

export default RaiseQueryPage