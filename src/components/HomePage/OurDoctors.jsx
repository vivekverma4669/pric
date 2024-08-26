import React from 'react';
import Image from 'next/image';
import DoctorCard from './DoctorCard';
import img1 from '../../images/anita.png.png';
import img2 from '../../images/jane.png.png';
import img3 from '../../images/leo-mario.png.png';
import grp3 from '../../images/group3.png';
import grp4 from '../../images/group4.png';
import leftArrow from '../../images/left.png';
import rightArrow from '../../images/right.png';

const OurDoctors = () => {
  const doctors = [
    {
      image: img1,
      name: "Prashant Aggarwal",
      specialization: "MD DM (Immunology)",
      experience: "20+",
      isActive: true
    },
    {
      image: img2,
      name: "Bharti Aggarwal",
      specialization: "MD Medicine PDCC",
      experience: "12",
      isActive: true
    },
    {
      image: img3,
      name: "Leo Mario",
      specialization: "Physiotherapy, FitCare",
      experience: "25",
      isActive: false
    }
  ];

  return (
    <section className="mt-48 max-md:mt-10 max-md:max-w-full mb-20">
      
      <div className="relative">
        <h2 className="relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
        OUR DOCTORS
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
          OUR DOCTORS
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-5 justify-between items-start mt-16 w-full text-base font-bold max-w-[1769px] max-md:mt-10 max-md:max-w-full">
        
        <div className="flex gap-8 items-start self-end mt-28 max-md:mt-10 max-md:max-w-full z-50">
        <Image
          src={grp3}
          alt=""
          width={110}
          height={268}
          className="object-contain shrink-0 self-start max-w-full aspect-[0.41] w-[110px]"
        />
          <Image
            src={leftArrow}
            alt=""
            width={29}
            height={28}
            className="object-contain shrink-0 my-auto"
          />
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
          <Image
            src={rightArrow}
            alt=""
            width={29}
            height={28}
            className="object-contain shrink-0 my-auto"
          />
          <Image
            src={grp4}
            alt=""
            width={197}
            height={358}
            className="object-contain shrink-0 self-end mt-72 max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;

// import React from 'react';
// import DoctorCard from './DoctorCard';

// const doctorsData = [
//   {
//     imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aa2624e0660b5a57000ad23327d03ab3cd2f0c0e3f070d4ce0c1dcc70c06297?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1",
//     name: "Prashant Aggarwal",
//     specialization: "MD DM (Immunology)",
//     experience: "20+ years experience",
//     isActive: false
//   },
//   {
//     imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0f47f9a8adfc30306356efa6e5413e2999b7d41cb44a32b0f3c6b18757ebe4a?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1",
//     name: "Bharti Aggarwal",
//     specialization: "MD Medicine PDCC",
//     experience: "12 years experience",
//     isActive: false
//   },
//   {
//     imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/79e1477d37229f82ccf7798632b4808e8a666eacc142bcb0c451ad6982fa5219?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1",
//     name: "Leo Mario",
//     specialization: "Physiotherapy, FitCare",
//     experience: "25 years experience",
//     isActive: true
//   }
// ];

// function DoctorProfiles() {
//   return (
//     <main className="flex flex-wrap gap-10 items-start text-base font-bold">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/01630eb15c5e356260de9920a93742a0c013d1ba0373aea84f6d32f32cd25c8e?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1"
//         alt=""
//         className="object-contain shrink-0 self-start max-w-full aspect-[0.41] w-[110px]"
//       />
//       <section className="flex gap-8 items-start self-end mt-28 max-md:mt-10 max-md:max-w-full">
//         <button
//           aria-label="Previous"
//           className="object-contain shrink-0 my-auto aspect-[1.04] w-[29px]"
//         >
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3199caf1f99379492ff9d5bdb7926e3f904fffa2378420e6a2538373cd962584?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1" alt="" />
//         </button>
//         {doctorsData.map((doctor, index) => (
//           <DoctorCard key={index} {...doctor} />
//         ))}
//         <button
//           aria-label="Next"
//           className="object-contain shrink-0 my-auto aspect-[1.04] w-[29px]"
//         >
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/85a30bb8d9c4315f2ba7cdefcb3fff6da553d094c77c42133094357c299205d2?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1" alt="" />
//         </button>
//       </section>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/d34a923c1949be06db9c162b1b0a6ddc7c9cb5898717806d85b048c31cf4ca60?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1"
//         alt=""
//         className="object-contain shrink-0 self-end mt-40 max-w-full aspect-[0.55] w-[197px] max-md:mt-10"
//       />
//     </main>
//   );
// }

// export default DoctorProfiles;