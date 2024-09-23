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
      <Hero/> 
      {/* <Departments/> */}
      {/* <JointsCare/> */}
      {/* <AboutUs/> */}
      {/* <OurDoctors/> */}
      <Testimonials/>
      {/* <BlogPosts/> */}
      {/* <Newsletter/> */}
    </div>
  );
};

export default MainLayout;
