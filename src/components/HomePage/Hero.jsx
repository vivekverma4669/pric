'use client';
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from '../../images/hero.png';
import Ellipse33 from '../../images/Ellipse33.png'
import meeting from '../../images/meeting.svg'
import heroBottom from '../../images/heroBottom.png';
import component1 from '../../images/component1.svg';
import sliderarrow from '../../images/sliderarrow.svg';
import right from '../../images/right.png';
import doctor from '../../images/doctor.svg'
import image from '../../images/hero2.svg'

const Hero = () => {

  // Array for slides (sections)
  const slides = [
    {
      content: (
        <div className="flex gap-5 max-md:flex-col max-w-[1225px] mx-auto max-sm:gap-0 ">

          <div className="flex flex-col w-[45%] max-md:w-full max-sm:w-full">
            <div className="flex relative flex-col mt-16 font-bold text-black max-md:mt-10 max-md:max-w-full max:sm:m-auto">
              <h1 className="mr-2 text-5xl max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-sm:text-center">
                <span className=" text-[19px]  max-sm:text-[16px] font-normal" >WELCOME TO</span> <br />
                <span className="font-semibold text-7xl max-sm:text-5xl  ">PRIAC</span>
                <br />
                <span className="mt-6 text-5xl font-bold leading-none text-orange-400 max-md:text-4xl max-sm:text-3xl max-sm:text-center max-sm:m-auto">India s BIGGEST</span>
                <br />
              </h1>
              <p className="mt-4 text-3xl leading-7 max-md:max-w-full font-medium max-sm:text-1xl max:sm:text-[8px] max-sm:text-2xl max-sm:font-light max-sm:text-center max-sm:m-auto">
                RHEUMATOLOGY
                <br />
                DAY CARE CENTER
              </p>
            </div>
          </div>

          <div className="flex flex-col ml-5 w-[85%]   max-md:ml-0 max-md:w-full max-xl:w-full  max-sm:w-[90%] max-sm:m-auto">
            <Image
              src={hero}
              alt="Doctor caring for a patient"
              width={800}
              height={1200}
               layout="responsive"
              className="object-contain grow max-md:mt-10 max-md:max-w-full  z-40"
            />
            {/* <Image
              src={heroBottom}
              alt="hero bottom"
              width={400}
              height={400}
              className="object-contain -mt-1 grow max-md:max-w-full w-[448px]"
            /> */}
          </div>
        </div>
      )
    },
    { 
      content :(
        <div className="flex gap-5 max-md:flex-col max-w-[1350px] mx-auto justify-between  max-sm:w-[95%] max-sm:gap-0 " >
            <div className="flex flex-col  max-md:w-full bg-black max-sm:hidden">
          </div> 

          <div className="flex flex-row justify-between   max-md:ml-0 max-md:w-full max-xl:w-full bg-gray-100 h-[500px]  w-[90%] max-sm:gap-0 max-sm:bg-white  max-sm:flex-col " style={{borderRadius :'30px'}}>
           
           <div className=" flex flex-col py-20 pl-20 w-[65%]  gap-16 max-sm:pl-0 max-sm:gap-4 max-sm:w-full max-sm:text-center" > 
             <h1 className="text-4xl font-bold text-black" >Our <span className="text-orange-400"> Mission</span> </h1>
             <p  className=" text-black text-[22px]" >To Provide Worlds best <br/>
             Holistic Rheumatology  Care </p>
            </div> 
          

             <Image
              src={meeting}
              alt="bg"
              width={400}
              height={400}
              layout="responsive"
              className="object-contain  grow max-md:mt-10 max-md:max-w-full h-[400px] max-sm:mt-0"
            />
           
             
           </div>
        </div>
      )
    },
    {
      content: (
        
 <div className="flex gap-5 max-md:flex-col max-w-[1350px] mx-auto justify-center max-sm:mt-40  max-sm:w-[95%] max-sm:gap-0 ">
  <div className="flex flex-row justify-between max-md:ml-0 max-md:w-full max-xl:w-full bg-gray-100 h-[500px] ml-20 w-[85%] max-sm:w-[95%] max-sm:m-auto max-sm:gap-0 max-sm:flex-col-reverse max-sm:bg-white" style={{ borderRadius: '30px' }}>
    
    <Image
      src={image}
      alt="bg"
      width={400}
      height={400}
      layout="responsive"
      className="object-contain grow max-md:mt-10 max-sm:pb-6 max-md:max-w-full max-sm:mt-0 z-40 h-[500px]"
    />

    {/* Adjusted gap and padding for mobile screens */}

    <div className="flex flex-col py-20 pl-10 w-[70%] gap-16 max-sm:gap-4 max-sm-pl-0 max-sm:w-full mx-auto max-sm:pt-0 max-sm:mb-0 max-sm:text-center ">
      <h1 className="text-4xl font-bold text-black max-sm:text-center">Raise <span className="text-orange-400"> The Bar</span></h1>
      <p className="text-black text-[22px]">
        Looks For Ways of <br />
        Improvement every day <br />
      </p>
    </div>
    
    {/* Commented out extra image */}
    {/* <Image
      src={image}
      alt="bg"
      width={400}
      height={400}
      layout="responsive"
      className="object-contain grow max-md:mt-10 max-md:max-w-full max-sm:mt-0 z-40 h-[400px]"
    /> */}
    
  </div>
</div>

      )
    },
    {
        content: (
          
          <div className="flex gap-5 max-md:flex-col max-w-[1350px] mx-auto justify-between max-sm:w-[95%] max-sm:gap-0 ">
             <div className="flex flex-col  max-md:w-full bg-black max-sm:hidden">
            </div>
  
            <div className="flex flex-row justify-between   max-md:ml-0 max-md:w-full max-xl:w-full bg-gray-100 h-[500px]  max-sm:bg-white  w-[90%] max-sm:flex-col  " style={{borderRadius :'30px'}}>
             
             <div className=" flex flex-col py-20 pl-20 w-[65%]  gap-16 max-sm:gap-4 max-sm:w-full m-auto  max-sm:pl-0 text-center " > 
               <h1 className="text-4xl font-bold text-black" >Humane <span className="text-orange-400"> Approach</span> </h1>
               <p  className=" text-black text-[22px]" >We Respect snd Value <br/>
              the trust you place in us <br/></p>
              </div> 
               
               <Image
                src={doctor}
                alt="bg"
                width={400}
                height={400}
                layout="responsive"
                className="object-contain  grow max-md:mt-10 max-md:max-w-full max-sm:mt-0   z-40 h-[400px]"
              /> *
             
               
             </div>
          </div>
        )
    }

  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ref for Slider component
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: null, // Custom arrows controlled by outside buttons
    prevArrow: null
  };

  // Calculate progress based on current slide
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <section className="relative z-10 self-center mt-14 mb-0 w-full mx-auto max-md:mt-10 max-md:mb-2.5 max-md:max-w-full" >
    
    <Image  
        src={sliderarrow}
        alt="Previous"
        width={40}
        height={40}
        className="absolute left-8 bottom-[50%] cursor-pointer p-2 rounded-e-full hover:bg-slate-200 rotate-180 z-50 hidden sm:block" 
        onClick={() => sliderRef?.current?.slickPrev()} 
      />

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{ border: '2px solid black' }}>
            {slide.content}
          </div>
        ))}
      </Slider>

      <Image 
        src={component1} 
        alt="dot"
        width={200}
        height={200}
        className="object-contain absolute left-0 top-80 grow max-md:max-w-full w-[105px] max-sm:hidden " 
      /> 

      {/* Progress Bar */}
      <div className="flex flex-col items-start self-center max-w-full bg-gray-950 rounded-xl w-[240px] ml-[20%] mt-4">
        <div className="w-full bg-gray-400 h-2 rounded-full">
          <div
            style={{ width: `${progress}%` }}
            className="bg-gray-800 h-full rounded-full transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>

      {/* Right Arrow */}

      <Image  
        src={sliderarrow}
        alt="next"
        width={40}
        height={40}
        className="absolute right-8 bottom-[50%] cursor-pointer p-2 rounded-e-full hover:bg-slate-200 hidden sm:block" 
        onClick={() => sliderRef?.current?.slickNext()}
      />

    </section>
  );
};

export default Hero;
