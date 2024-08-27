import React from 'react';
import arrow1 from '../../images/Arrow1.png'
import Image from 'next/image';
import image1 from '../../images/phisiotheraphy.png'
import image2 from '../../images/Layer_1 (1).png'
import image3 from '../../images/Capa_1.png'
import image4 from '../../images/r.png'

const DepartmentContent = () => {
  return (
    <div className="flex flex-col self-center mt-16 w-full max-w-[1520px]">
      <div className="self-start ml-36 text-3xl font-bold text-orange-400">
        Meet Our Doctors
      </div>
      <div className="self-start mt-4 ml-36 text-sm text-neutral-700">
        Meet our team of dedicated doctors who are committed to providing exceptional care.
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-10 w-full">
        <Image
          loading="lazy"
          src={arrow1}
          className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-square w-[50px]"
          alt="Doctor icon"
        />
        <div className="flex-auto self-stretch">
          <div className="flex gap-5">
            <div className="flex flex-col w-3/12">
              <div className="flex flex-col grow items-center px-14 py-24 w-full text-center rounded-2xl bg-neutral-100">
                <Image
                  loading="lazy"
                  src={image1}
                  className="object-contain max-w-full aspect-square w-[100px]"
                  alt="Physiotherapy icon"
                />
                <div className="mt-6 text-xl font-bold text-neutral-800">Physiotherapy</div>
                <div className="mt-3.5 text-base text-neutral-700">1000+ Patients</div>
              </div>
            </div>
            <div className="flex flex-col w-3/12">
              <div className="flex flex-col grow items-center px-14 py-24 w-full text-center rounded-2xl bg-neutral-100">
                <Image
                  loading="lazy"
                  src={image2}
                  className="object-contain aspect-[0.86] w-[86px]"
                  alt="Psychology icon"
                />
                <div className="mt-7 text-xl font-bold text-neutral-800">Psychology</div>
                <div className="mt-3 text-base text-neutral-700">1000+ Patients</div>
              </div>
            </div>
            <div className="flex flex-col w-3/12">
              <div className="flex flex-col grow items-center px-14 py-24 w-full text-center rounded-2xl bg-neutral-100">
                <Image
                  loading="lazy"
                  src={image3}
                  className="object-contain max-w-full aspect-square w-[100px]"
                  alt="Dietetics icon"
                />
                <div className="mt-6 text-xl font-bold text-neutral-800">Dietetics</div>
                <div className="mt-5 text-base text-neutral-700">1000+ Patients</div>
              </div>
            </div>
            <div className="flex flex-col w-3/12">
              <div className="flex flex-col grow items-center px-14 py-24 w-full text-center rounded-2xl bg-neutral-100">
                <Image
                  loading="lazy"
                  src={image4}
                  className="object-contain max-w-full aspect-square w-[100px]"
                  alt="Rheumatology icon"
                />
                <div className="mt-7 text-xl font-bold text-neutral-800">Rheumatology</div>
                <div className="mt-3 text-base text-neutral-700">1000+ Patients</div>
              </div>
            </div>
          </div>
        </div>
        <Image
          loading="lazy"
          src={arrow1}
          className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-square w-[50px] rotate-180"
          alt="Doctor icon"
        />
        
      </div>
      <div className="flex flex-col items-start self-center mt-11 max-w-full bg-amber-200 rounded-xl w-[400px]">

      </div>
    
<button className="relative self-center px-16 py-5 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[708px] group overflow-hidden">
  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
  <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Contact Us</span>
</button>

    </div>
  );
};

export default DepartmentContent;