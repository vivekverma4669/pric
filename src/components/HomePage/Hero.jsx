import Image from "next/image";
import hero from '../../images/hero.png';

const Hero = () => {
  return (
    <section className="relative z-10 self-center mt-32 mb-0 w-full max-w-[75%] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col l:w-[1200px]">
        <div className="flex flex-col w-[50%]  max-md:w-full  ">
          <div className="flex relative flex-col mt-20  font-bold text-amber-200 max-md:mt-10 max-md:max-w-full">
            <h1 className="mr-2 text-5xl max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              <span className="font-light">We&apos;re</span>  determined{" "}
              <span className="font-light">for</span>
              <br/>
              <span className="font-light">your</span> better life.
            </h1>
            <p className="mt-4 text-xl leading-7 max-md:max-w-full font-normal">
              You can get the care you need 24/7 – be it online or in <br />
              person. You will be treated by caring specialist doctors.
            </p>
            <button className="self-start px-12 py-6 mt-4 text-sm text-center text-white bg-amber-200 border border-amber-200 border-solid rounded-[800px] max-md:px-5     hover:bg-white hover:border-orange-600 hover:text-black hover:border-solid transition duration-300 active:bg-orange-500 active:shadow-inner hover:border-[1.5px]">
              Make an Appointment
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full  max-xl:w-full ">
          <Image
            src={hero}
            alt="Doctor caring for a patient"
            width={740}
            height={620}
            layout="responsive"
            className="object-contain grow max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
