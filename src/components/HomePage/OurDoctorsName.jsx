import React from 'react'
import TestimonialCard from './TestimonialCard'

const OurDoctorsName = () => {
  return (
    <>

    <div className="relative  self-center mt-40 mb-0 w-full mx-auto max-md:mt-10 max-md:mb-2.5 max-md:max-w-ful max-w-[1350px] px-10" >

        <h2 className=" text-5xl font-light text-black max-md:text-4xl">
        Our <span className='text-orange-400 font-bold'  >  Doctors</span>   </h2>
       
        <section className=" w-[90%]  mt-24 mx-auto flex  justify-center gap-24 bg-gray-100 px-12 pt-8 pb-8  4 max-md:px-5  " style={{borderRadius :'30px', boxShadow :'rgb(38, 57, 77) 0px 20px 30px -10px' }}>
        
          <div className='text-black flex flex-col '>
            <div className='m-auto' >
            <h1 className='text-3xl font-bold '> PRASHANT </h1>
            <h1 className='text-3xl font-bold '> AGGARWAL </h1>
            </div>
            <div className='m-auto text-center mt-4 flex flex-col  gap-0'>
                <p className='text-[22px] font-light p-1 -m-2' >MD DM (Immunology)</p>
                <p className='text-[22px] font-light  p-1 -m-2'> MBBS ,MD </p>
                <p className='text-[22px] font-light  p-1 -m-2'>20+ years experience</p>
            </div>
        </div>

        <div style={{borderLeft :'2px solid gray' , height:'120px'}}> </div>    
           
        <div className='text-black flex flex-col '>
            <div className='m-auto' >
            <h1 className='text-3xl font-bold '> PRASHANT </h1>
            <h1 className='text-3xl font-bold '> AGGARWAL </h1>
            </div>
            <div className='m-auto text-center mt-4 flex flex-col  gap-0'>
                <p className='text-[22px] font-light p-1 -m-2' >MD Medicine PDCC </p>
                <p className='text-[22px] font-light  p-1 -m-2'> MBBS ,MD </p>
                <p className='text-[22px] font-light  p-1 -m-2'>12 year experience</p>
            </div>
        </div>

        </section>


      <section className=" w-[90%]  mt-24 mx-auto flex flex-wrap   justify-center gap-10 bg-gray-100 px-12 pt-8 pb-8  4 max-md:px-5  " style={{borderRadius :'30px'}}>
        
        <div className='text-black flex flex-col w-[280px]'>
          <div className='m-auto' >
          <h1 className='text-3xl font-bold '> VAIDYA PRABHU </h1>
          </div>
          <div className='m-auto text-center mt-4 flex flex-col  gap-0'>
              <p className='text-[22px] font-light p-1 -m-2' >MD DM (Immunology)</p>
              <p className='text-[22px] font-light  p-1 -m-2'> MBBS ,MD </p>
          </div>
        </div>

       <div style={{borderLeft :'2px solid gray' , height:'120px'}}> </div> 

        <div className='text-black flex flex-col   w-[280px]'>
          <div className='m-auto' >   
          <h1 className='text-3xl font-bold '>KHUSHBOO</h1>
          </div>
          <div className='m-auto text-center mt-4 flex flex-col  gap-0'>
              <p className='text-[22px] font-light p-1 -m-2' >MD Medicine PDCC </p>
              <p className='text-[22px] font-light  p-1 -m-2'> MBBS ,MD </p>
          </div>
      </div>

      <div style={{borderLeft :'2px solid gray' , height:'120px'}}> </div>   

      <div className='text-black flex flex-col  w-[280px] '>
          <div className='m-auto' >   
          <h1 className='text-3xl font-bold '>KHUSHBOO</h1>
          </div>
          <div className='m-auto text-center mt-4 flex flex-col  gap-0'>
              <p className='text-[22px] font-light p-1 -m-2' >MD Medicine PDCC </p>
              <p className='text-[22px] font-light  p-1 -m-2'> MBBS ,MD </p>     
          </div>
      </div>



      <div className='text-black flex flex-col  w-[280px] '>
          <div className='m-auto' >   
          <h1 className='text-3xl font-bold '>TARUNA</h1>
          </div>
      </div>

      <div style={{borderLeft :'2px solid gray' , height:'120px'}}> </div> 

      <div className='text-black flex flex-col  w-[290px] '>
          <div className='m-auto' >   
          <h1 className='text-3xl font-bold '>HARMANJOT KAUR</h1>
          </div>
         
      </div>

      <div style={{borderLeft :'2px solid gray' , height:'120px'}}> </div> 
      <div className='text-black flex flex-col  w-[280px] '>
          <div className='m-auto' >   
          <h1 className='text-3xl font-bold '>ROHIT K</h1>
          </div>
          
      </div>



      </section>
    </div> 
      
  </>
  )
}
 
export default OurDoctorsName