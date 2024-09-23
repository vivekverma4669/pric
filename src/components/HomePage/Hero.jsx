import Image from "next/image";
import hero from '../../images/hero.png';
import heroBottom from '../../images/heroBottom.png'
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative z-10 self-center mt-24 mb-0 w-full max-w-[75%] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-w-[1350px]">
        <div className="flex flex-col w-[50%]  max-md:w-full  ">
          <div className="flex relative flex-col mt-20  font-bold text-black max-md:mt-10 max-md:max-w-full max-sm:ml-2">
            <h1 className="mr-2 text-5xl max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              <span className="font-light text-2xl">Welcome To</span> <br/>
            <span className="font-light text-7xl ">PRIAC </span> 
              <br/>
              <span className="mt-6 text-5xl font-bold leading-none text-orange-400 max-md:text-4xl">India's BIGGEST </span>
              <br/>
            </h1>
            <p className="mt-4 text-2xl leading-7 max-md:max-w-full font-normal" >
            RHEUMATOLOGY 
            <br />
            DAY CARE CENTER
            </p>
            <Link href={'/appointment'}>
            <button className="self-start px-12 py-6 mt-4 text-sm text-center text-black bg-orange-400 border border-orange-400 border-solid rounded-[800px] max-md:px-5     hover:bg-orange-300 hover:border-orange-600 hover:text-black hover:border-solid transition duration-300 active:bg-orange-500 active:shadow-inner hover:border-[1.5px]">
              Make an Appointment
            </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full  max-xl:w-full">
         <Image
            src={hero}
            alt="Doctor caring for a patient"
            width={800}
            height={800}
            layout="responsive"
            className="object-contain grow max-md:mt-10 max-md:max-w-full -mb-52 z-40 "
          />
      
          <Image src={heroBottom}
          alt="hero bottom"
           width={400}
           height={400}
          //  layout="responsive" 
           className="object-contain  grow max-md:max-w-full w-[445px]   " 
          /> 
        </div>
      </div>

    </section>
  );
};
export default Hero;
