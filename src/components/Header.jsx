import Link from "next/link";
const Header = () => {
  return (
    <header className="flex relative flex-col justify-center items-center px-16 py-4 w-full font-bold text-orange-400 bg-slate-50 shadow-[0px_25px_45px_rgba(47,46,65,0.075)] max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1465px] max-md:max-w-full">
        <div className="self-stretch my-auto text-xl">
        <Link href="/"> 
        PRIC
            </Link>
        </div>
        <ul className="flex gap-9 self-stretch my-auto text-base max-md:max-w-full">
          <li>
            <Link href="/#about">
          About
            </Link>
          </li>
          <li>
            <Link href="/departments">
            Departments
            </Link>
          </li>
          <li>
            <Link href="#gallery">
            Gallery
            </Link>
          </li>
          <li>
            <Link href="/#testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="appointment">
             Book Appointment
            </Link>
          </li>
        </ul>

        <Link href="/login"> 
        <button className="self-stretch px-7 py-5 text-sm text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5       hover:bg-orange-400 hover:text-white transition duration-300 active:bg-orange-500 active:shadow-inner">
          Sign In
        </button>   
        </Link>
      </nav>
    </header>
  );
};

export default Header;

