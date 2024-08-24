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

const MainLayout = () => {
  return (

    <div className="flex overflow-hidden flex-col items-center bg-white">
     
     <div className="flex relative flex-col self-stretch w-full min-h-[870px] max-md:max-w-full ">
         <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee132a7dbe5b4ebf35346e19346204ccace7874e830749a38c2c2c619c0d8952?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1"
          alt="Background image"
          className="object-cover absolute inset-0 size-full  "
          
        /> 

<Header />
         <Hero /> 
       </div>
        <Departments />
       <JointsCare />
      <AboutUs />
      <OurDoctors />
      <Testimonials/>
      <BlogPosts />
      <Newsletter/>
      <Footer />  
    </div>
  );
};

export default MainLayout;
