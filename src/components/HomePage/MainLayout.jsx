import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import Departments from "./Departments";
import AboutUs from "../AboutUs";
import OurDoctors from "./OurDoctors";
import Testimonials from "./Testimonials";
import BlogPosts from "./BlogPosts";
import Newsletter from "./Newsletter";
import Footer from "../Footer";
import JointsCare from "./JointsCare";
import Image from "next/image";
import BG from "../../images/BG.svg"

const MainLayout = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">    
    
     <div className="flex relative flex-col self-stretch w-full min-h-[870px] max-md:max-w-full ">
         <Image
          loading="lazy"
          src={BG}
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        /> 
         <Header/>
         <Hero/> 
       </div>
        <Departments/>
       <JointsCare/>
      <AboutUs/>
      <OurDoctors/>
      <Testimonials/>
      <BlogPosts/>
      <Newsletter/>
      <Footer/>  
    </div>
  );
};

export default MainLayout;
