import Image from "next/image";
import yt from '../../images/yt.png';
import fb from '../../images/logos_facebook.png';


const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-24 mt-48 w-full bg-amber-200 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full " >
      <div className="flex flex-col items-center -mb-5 w-full max-w-[1350px] max-md:mb-2.5 max-md:max-w-full max-lg:max-w-full">
       
        <div className="flex flex-wrap gap-8 justify-between self-stretch mt-1.5 w-full max-md:max-w-full " >
          <div className="flex flex-col max-md:max-w-full"  >
            <div className="mr-5 text-3xl font-bold text-orange-400 max-md:mr-2.5 max-md:max-w-full">
              Get an update every week
            </div>
            <div className="mt-3 text-base leading-6 text-neutral-700 max-md:max-w-full">
              Livedoc was created in order to improve the patient experience.{" "}
              <br />
              Providing world-class tests, and a wide range of other services.
            </div>
            
          <div className="flex gap-4 mt-1.5  max-w-full text-base text-neutral-700 ">
          <Image
            src={yt}
            alt="Channel icon"
            width={32}
            height={32}
            className="object-contain shrink-0 w-8 aspect-square"
          />
          <Image
            src={fb}
            alt="Channel icon"
            width={32}
            height={32}
            className="object-contain shrink-0 w-8 aspect-square"
          />
        
        </div>
          </div>

          <div className="flex flex-wrap flex-col gap-2 my-auto text-base  max-md:max-w-full" >

          <span className="text-xl font-bold leading-none text-orange-400">
          SUBSCRIBE TO NEWSLETTER
         </span> 


          <div className="grow flex-col gap-4 my-auto text-base ">
            <input
              type="email"
              placeholder="Email"
              className="grow mb-2 px-4 py-5  font-light rounded-3xl border border-solid border-neutral-500 text-neutral-500 w-[500px] xl:w-[400px]  max-md:pr-5 max-md:max-w-full bg-transparent "
            />
            {/* <button className=" ml-2 px-12 py-5 font-bold text-center bg-orange-400 rounded-2xl border border-orange-400 border-solid text-slate-100 max-md:px-5">
              Subscribe
            </button>  */}
            <button className=" ml-2 relative px-12 py-5 overflow-hidden font-bold text-center text-slate-100 bg-orange-400 border border-orange-400 rounded-2xl shadow-inner group max-md:px-5">
  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100"></span>
  <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">Subscribe</span>
</button>


            </div>





          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Newsletter;
