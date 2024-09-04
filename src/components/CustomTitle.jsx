import rectangle5 from '../images/Rectangle5.png'
import group3T from '../images/group3T.png'
import group4T from '../images/group4T.png'
import Image from "next/image";


const CustomTitle = ( {title}) => {
  return (
    <div className="flex relative  flex-col top-0   w-full font-bold min-h-[160px] max-md:max-w-full">
      <Image src={group3T} 
       alt=""
      className="absolute inset-0  z-10  max-md:hidden "
      />
      
      <Image
        loading="lazy"
        src={rectangle5}
        className="object-cover absolute inset-0 size-full h-[160px] "
        alt="Department background"
      />
       <h2 className=" mt-4 relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl z-10">
       {title}
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl z-50" >
          {title}
          </span>
        </h2> 

      <Image src={group4T} 
      alt=""
      className="absolute right-0 top-4 max-md:hidden"
      />
    
    </div>
  );
};

export default CustomTitle;


