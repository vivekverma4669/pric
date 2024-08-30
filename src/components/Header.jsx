// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import profile from "../images/profile.svg";
// import { useState } from "react";
// import logout from '../images/logout.svg';
// import reports from '../images/reports.svg';
// import appointmentIcon from '../images/appointmentIconMenu.svg';
// import editIconMenu from '../images/editIconMenu.svg';
// import editProfileMenu from '../images/editProfileMenu.svg'


// const MenuItem = ({ icon, text }) => (
//   <div
//     className={`flex gap-2 mt-1 ml-1 items-center cursor-pointer hover:bg-orange-300 transition duration-200 ease-in-out  rounded-md p-1  `} 
   
//   >
//     <Image
//       loading="lazy"
//       src={icon}
//       className={`object-contain shrink-0 my-auto aspect-square w-4 hover:w-5 transition duration-200 ease-in-out`} 
//       alt="icon"
//     />
//     <div className="grow shrink w-[120px]">{text}</div>
//   </div>
// );

// const Header = () => {
//   const [toggle, setToggle] = useState(true);

//   return (
//     <header className="flex relative flex-col justify-center items-center px-16 py-4 w-full font-bold text-orange-400 bg-slate-50 shadow-[0px_25px_45px_rgba(47,46,65,0.075)] max-md:px-5 max-md:max-w-full">
//       <nav className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1465px] max-md:max-w-full">
//         <div className="self-stretch my-auto text-xl">
//           <Link href="/">PRIC</Link>
//         </div>
//         <ul className="flex gap-9 self-stretch my-auto text-base max-md:max-w-full">
//           <li>
//             <Link href="/#about">About</Link>
//           </li>
//           <li>
//             <Link href="/departments">Departments</Link>
//           </li>
//           <li>
//             <Link href="#gallery">Gallery</Link>
//           </li>
//           <li>
//             <Link href="/#testimonials">Testimonials</Link>
//           </li>
//           <li>
//             <Link href="/appointment">Book Appointment</Link>
//           </li>
//         </ul>

// {/*         
// //         <Link href="/login"> 
// //         <button className="self-stretch px-7 py-5 text-sm text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5       hover:bg-orange-400 hover:text-white transition duration-300 active:bg-orange-500 active:shadow-inner">
// //           Sign In
// //         </button>   
// //         </Link> */}


//         {toggle ? (
//           <div>
//             <Image
//             onClick={() => setToggle(!toggle)}
//               src={profile}
//               alt={"profile image"}
//               className="cursor-pointer"
//             />
//             <div className="flex flex-col text-sm leading-loose rounded-none max-w-[202px] text-neutral-700 absolute right-20 z-50">
//               <div className="flex flex-col items-start px-2 py-3.5 w-full bg-white rounded-md shadow-[0px_0px_5px_rgba(0,0,0,0.15)]">
//                 <Link href="/profile">
//                   <MenuItem
//                     icon={editProfileMenu}
//                     text="Edit Profile"
//                   />
//                 </Link>
//                 <Link href="/patient_appointments">
//                   <MenuItem
//                     icon={appointmentIcon}
//                     text="Appointments"
//                   />
//                 </Link>
//                 <Link href="/patient_reports">
//                   <MenuItem
//                     icon={reports}
//                     text="Test reports"
//                   />
//                 </Link>
//                 <Link href="/raise_query">
//                   <MenuItem
//                     icon={editIconMenu}
//                     text="Raise a query"
//                   />
//                 </Link>
//                 <Link href="/">
//                   <MenuItem
//                     icon={logout}
//                     text="Logout"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <Image
//               onClick={() => setToggle(!toggle)}
//               src={profile}
//               alt={"profile image"}
//               className="cursor-pointer"
//             />
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'; 
import profile from "../images/profile.svg";
import logout from "../images/logout.svg";
import reports from "../images/reports.svg";
import appointmentIcon from "../images/appointmentIconMenu.svg";
import editIconMenu from "../images/editIconMenu.svg";
import editProfileMenu from "../images/editProfileMenu.svg";
import styles from '../style/buttonStyle.css'

const MenuItem = ({ icon, text, href, isActive }) => (
  <Link href={href}>
    <div className={`flex gap-3.5  ml-2 ${isActive ? 'px-2 py-1.5  rounded bg-orange-400 bg-opacity-50' : 'px-2 py-1.5'}`}>
      <Image loading="lazy" src={icon} alt="" className={`object-contain shrink-0 my-auto aspect-square w-[18px] ${isActive ? 'active-filter' : ''} `}
       />
      <div className={'grow shrink w-[130px]'}>{text}</div>
    </div>
  </Link>
);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname(); 
  console.log(pathname);

  return (
    <header className="flex relative flex-col justify-center items-center px-16 py-4 w-full font-bold text-orange-400 bg-slate-50 shadow-[0px_25px_45px_rgba(47,46,65,0.075)] max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1465px] max-md:max-w-full">
        <div className="self-stretch my-auto text-xl">
          <Link href="/">PRIC</Link>
        </div>
        <ul className="flex gap-9 self-stretch my-auto text-base max-md:max-w-full">
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/departments">Departments</Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/#testimonials" >Testimonials</Link>
          </li>
          <li>
            <Link href="/appointment">Book Appointment</Link>
          </li>
        </ul>

        {toggle ? (
          <div>
            <Image
              onClick={() => setToggle(!toggle)}
              src={profile}
              alt={"profile image"}
              className="cursor-pointer"
            />
            <div className="flex flex-col text-sm leading-loose rounded-none max-w-[202px] text-neutral-700 absolute right-16 z-50">
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
                  icon={logout}
                  text="Logout"
                  href="/"
                  isActive={pathname === "/"}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Image
              onClick={() => setToggle(!toggle)}
              src={profile}
              alt={"profile image"}
              className="cursor-pointer"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
