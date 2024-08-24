import Link from "next/link";

const Header = () => {
  return (
    <header className="flex relative flex-col justify-center items-center px-16 py-4 w-full font-bold text-orange-400 bg-slate-50 shadow-[0px_25px_45px_rgba(47,46,65,0.075)] max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1465px] max-md:max-w-full">
        <div className="self-stretch my-auto text-xl">PRIC</div>
        <ul className="flex gap-8 self-stretch my-auto text-base max-md:max-w-full">
          <li>
            <Link href="#about">
          About Us
            </Link>
          </li>
          <li>
            <Link href="#departments">
            Departments
            </Link>
          </li>
          <li>
            <Link href="#membership">
            Membership
            </Link>
          </li>
          <li>
            <Link href="#help">
              Help
            </Link>
          </li>
          <li>
            <Link href="#contact">
            Contact
            </Link>
          </li>
        </ul>
        <button className="self-stretch px-7 py-5 text-sm text-center border border-orange-400 border-solid rounded-[800px] max-md:px-5">
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;

