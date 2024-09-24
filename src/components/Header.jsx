"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'; 
import logo from '../images/logo.png'
import logoutImg from "../images/logout.svg";
import reports from "../images/reports.svg";
import appointmentIcon from "../images/appointmentIconMenu.svg";
import editIconMenu from "../images/editIconMenu.svg";
import editProfileMenu from "../images/editProfileMenu.svg";
import styles from '../style/buttonStyle.css'
import { AuthContext } from "@/AuthContextApi/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MenuItem = ({ icon, text, href, isActive, onClick }) => (
  href ? (
    <Link href={href}>
      <div
        className={`flex gap-3.5 ml-2 cursor-pointer ${isActive ? 'px-2 py-1.5 rounded bg-orange-400 bg-opacity-50' : 'px-2 py-1.5'}
        hover:bg-orange-400 hover:bg-opacity-50 hover:border hover:border-orange-500`}
      >
        <Image loading="lazy" src={icon} alt="" className={`object-contain shrink-0 my-auto aspect-square w-[18px] ${isActive ? 'active-filter' : ''}`} />
        <div className={'grow shrink w-[130px]'}>{text}</div>
      </div>
    </Link>
  ) : (
    <div
      onClick={onClick}
      className={`flex gap-3.5 ml-2 cursor-pointer ${isActive ? 'px-2 py-1.5 rounded bg-orange-400 bg-opacity-50' : 'px-2 py-1.5'}
      hover:bg-orange-400 hover:bg-opacity-50 hover:border hover:border-orange-500`}
    >
      <Image loading="lazy" src={icon} alt="" className={`object-contain shrink-0 my-auto aspect-square w-[18px] ${isActive ? 'active-filter' : ''}`} />
      <div className={'grow shrink w-[130px]'}>{text}</div>
    </div>
  )
);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout , profile} = useContext(AuthContext); 
  const pathname = usePathname(); 
  const router = useRouter();

  const handleLogout = () => {
    logout(); 
    router.push('/'); 
  };

  

  return (
    <header className={`flex relative flex-col justify-center items-center px-48 py-4 w-full font-bold text-orange-400 bg-white  max-md:px-5 max-md:max-w-full  ${pathname === "/login"? 'hidden' :'' }`}>
       <ToastContainer/>
      <nav className="flex flex-wrap gap-6 justify-between items-center w-full max-w-[1260px] max-md:max-w-full text-black font-normal  ">

           
              
    <div className="menu text-black" onClick={() => setMenuOpen(!menuOpen)  }>
    <span className="menu text-black"></span>
    <span className="menu text-black"></span>
    <span className="menu text-black"></span>
    </div>

    {/* <ul className={menuOpen ? "open" : ""}>
      
    </ul> */}

        <ul className="flex gap-4 self-stretch my-auto text-base max-md:max-w-full flex-col md:flex-row">
          <li>
            <Link href="/" className={` ${pathname=='/'?  'rounded bg-orange-500 bg-opacity-90 text-white p-1' : 'p-1'}  rounded   hover:bg-orange-400  hover:text-white  `} >HOME</Link>
          </li>
          <li>
            <Link href="/departments"  className={` ${pathname=='/departments'?  'rounded bg-orange-500 bg-opacity-90 text-white p-1' : 'p-1'}  rounded   hover:bg-orange-400  hover:text-white  `}>DEPARTMENTS</Link>
          </li>
          <li>
            <Link href="/gallery" className={` ${pathname=='/gallery'?   'rounded bg-orange-500 bg-opacity-90 text-white p-1' : 'p-1'}  rounded   hover:bg-orange-400  hover:text-white  `}>GALLERY</Link>
          </li>
          <li>
            <Link href="/#testimonials"  className={` ${pathname=='/#testimonials'?   'rounded bg-orange-500 bg-opacity-90 text-white p-1' : 'p-1'}  rounded   hover:bg-orange-400  hover:text-white  `} >TESTIMONIALS</Link>
          </li>
          <li>
            <Link href="/appointment" className={` ${pathname=='/appointment'?   'rounded bg-orange-500 bg-opacity-90 text-white p-1' : 'p-1'}  rounded   hover:bg-orange-400  hover:text-white  `}>BOOK APPOINTMENT</Link>
          </li>
        </ul>

        {!isAuthenticated ? (
          <Link href="/login"> 
            <button className="self-stretch px-7 py-3 text-sm text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5 hover:bg-orange-400 hover:text-white transition duration-300 active:bg-orange-500 active:shadow-inner">
              Sign In
            </button>   
          </Link>
        ) : (
          <div>
            <Image
              onClick={() => setToggle(!toggle)}
              src={`https://ui-avatars.com/api/?name=${profile.full_name}`}
            
              width={50}
              height={50}
              alt={"profile image"}
              className="cursor-pointer rounded-full"
            />
             
            {toggle && (
              <div className="flex flex-col text-sm leading-loose rounded-none max-w-[202px] text-neutral-700 absolute right-16 z-40">
                <div className="flex flex-col items-start px-2 py-3.5 w-full bg-white rounded-md shadow-[0px_0px_5px_rgba(0,0,0,0.15)]">
                  <MenuItem
                    icon={editProfileMenu}
                    text="Edit Profile"
                    href="/profile"
                    isActive={pathname === "/profile"}
                  />
                  <MenuItem
                    icon={appointmentIcon}
                    text="Appointments"
                    href="/patient_appointments"
                    isActive={pathname === "/patient_appointments"}
                  />
                  <MenuItem
                    icon={reports}
                    text="Test reports"
                    href="/patient_reports"
                    isActive={pathname === "/patient_reports"}
                  />
                  <MenuItem
                    icon={editIconMenu}
                    text="Raise a query"
                    href="/raise_query"
                    isActive={pathname === "/raise_query"}
                  />
                  <MenuItem
                    icon={logoutImg}
                    text="Logout"
                    isActive={pathname === "/"}
                    onClick={handleLogout} 
                   
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
