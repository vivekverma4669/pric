// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="flex flex-col self-stretch pt-32 w-full bg-orange-400 max-md:pt-24 max-md:max-w-full justify-center">
//       <div className=" m-auto flex flex-wrap gap-10 items-start self-center w-full max-w-[1350px] max-md:max-w-full">
//         <div className="flex flex-col">

//           <div className="self-start text-3xl font-bold text-orange-300">
//             PRIC
//           </div>

//           <p className="mt-9 text-base leading-6 text-slate-100">
//             The world&apos;s most trusted <br /> telehealth company.
//           </p>

//         </div>
//         <nav className="flex-auto mt-3 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col">
//             <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-start text-base leading-loose text-orange-100 max-md:mt-10">
//                 <h3 className="self-stretch text-xl leading-loose text-slate-100">
//                   Departments
//                 </h3>
//                 <a href="#" className="mt-11 max-md:mt-10">
//                   Eye care
//                 </a>
//                 <a href="#" className="mt-4">
//                   Cardiac are
//                 </a>
//                 <a href="#" className="mt-5">
//                   Heart care
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-start text-base leading-loose text-orange-100 max-md:mt-10">
//                 <h3 className="self-stretch text-xl leading-loose text-slate-100">
//                   Membership
//                 </h3>
//                 <a href="#" className="mt-11 max-md:mt-10">
//                   Free trial
//                 </a>
//                 <a href="#" className="mt-5">
//                   Silver
//                 </a>
//                 <a href="#" className="mt-5">
//                   Premium
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow items-start text-base leading-loose text-orange-100 max-md:mt-10">
//                 <h3 className="self-stretch text-xl leading-loose text-slate-100">
//                   Customer Care
//                 </h3>
//                 <a href="#" className="mt-12 max-md:mt-10">
//                   About Us
//                 </a>
//                 <a href="#" className="mt-5">
//                   Contact US
//                 </a>
//                 <a href="#" className="mt-5">
//                   Get Update
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//       {/* <div className="px-16 py-6 mt-36 w-full text-sm font-bold leading-normal text-amber-100 bg-amber-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//         All rights Reserved © PRIC, 2024
//       </div> */}
//       <div className="px-16 py-6 mt-20   text-sm font-bold  max-md:px-5 max-md:mt-10 max-md:max-w-full w-[360px] m-auto">
//         All rights Reserved © PRIC, 2024
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col   px-16 py-24 pb-4 bg-orange-400 max-md:px-5">
      <div className="flex flex-wrap gap-10 justify-between w-full  m-auto max-w-[1460px] max-md:max-w-full   "  >
      
        <div className=" flex flex-col my-auto mt-0"  >
          <div className="self-start text-3xl font-bold text-orange-300">
            PRIC
          </div>
          <div className="mt-4 text-base leading-6 text-slate-100">
            <span className="text-orange-300">
              World&apos;s Best Holistic <br/> Rheumatology Centre
            </span>
            <br />
           
           <div className='mt-5'>
            Main Ferozepur Road Near MBD <br/>

            Mall, Ludhiana (PB), India
            <br />
            9878736644, 9814267774,
            <br />
            <a
              href="mailto:punjabrheumatology@gmail.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              punjabrheumatology@gmail.com
            </a>
            </div>

          </div>
        </div>

        <div className="flex w-[55%] max-md:max-w-full justify-between ml-36 max-sm:ml-0 flex-row-reverse"  >
          <div className="flex gap-32 max-md:flex-col justify-between ml-36 max-sm:ml-0 ">

            <div className="flex flex-col  max-md:ml-0 max-md:w-full ">
              <div className="flex flex-col grow items-start text-base leading-loose text-orange-100 max-md:mt-10">
                <div className="text-xl leading-loose text-slate-100">Links</div>
                <div className="mt-12 max-md:mt-10">About</div>
                <div className="mt-1.5">In News</div>
                <div className="self-stretch mt-1.5">Conferences</div>
                <div className="mt-1.5">Videos</div>
                <div className="mt-1.5">Gallery</div>
                <div className="self-stretch mt-1.5 max-md:mr-2">Researches</div>
              </div>
            </div>

            <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full" >
              <div className="flex flex-col items-start text-base leading-8 text-orange-100 max-md:mt-10">
                <div className="text-xl leading-loose text-slate-100">Arthritis</div>
                <div className="mt-12 leading-loose max-md:mt-10">Papers</div>
                <div className="self-stretch mt-1.5">Medical Test</div>
                <div className='mt-1.5'>Jargon</div>
              </div>
            </div>

            <div className="flex flex-col  max-md:ml-0 max-md:w-full pr-0 " >
              <div className="flex flex-col items-start text-base leading-loose text-orange-100 max-md:mt-10">
                <div className="self-stretch text-xl leading-loose text-slate-100">
                 Info
                </div>
                <div className="mt-12 max-md:mt-10">About Us</div>
                <div className="mt-1.5">Contact US</div>
                <div className="mt-1.5">Get Update</div>
              </div>
            </div>

          </div>
        </div>

        
      </div>
      <div className="px-16 py-6 mt-10   text-sm font-bold  max-md:px-5 max-md:mt-10 max-md:max-w-full w-[360px] m-auto">
         All rights Reserved © PRIC, 2024
       </div>
    </footer>
  );
};

export default Footer;