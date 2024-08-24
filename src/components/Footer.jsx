
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col self-stretch pt-32 w-full bg-orange-400 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start self-center w-full max-w-[1385px] max-md:max-w-full">
        <div className="flex flex-col">
          <div className="self-start text-3xl font-bold text-orange-300">
            PRIC
          </div>
          <p className="mt-9 text-base leading-6 text-slate-100">
            The world's most trusted <br /> telehealth company.
          </p>
        </div>
        <nav className="flex-auto mt-3 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-base leading-loose text-orange-100 max-md:mt-10">
                <h3 className="self-stretch text-xl leading-loose text-slate-100">
                  Departments
                </h3>
                <a href="#" className="mt-11 max-md:mt-10">
                  Eye care
                </a>
                <a href="#" className="mt-4">
                  Cardiac are
                </a>
                <a href="#" className="mt-5">
                  Heart care
                </a>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-base leading-loose text-orange-100 max-md:mt-10">
                <h3 className="self-stretch text-xl leading-loose text-slate-100">
                  Membership
                </h3>
                <a href="#" className="mt-11 max-md:mt-10">
                  Free trial
                </a>
                <a href="#" className="mt-5">
                  Silver
                </a>
                <a href="#" className="mt-5">
                  Premium
                </a>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-base leading-loose text-orange-100 max-md:mt-10">
                <h3 className="self-stretch text-xl leading-loose text-slate-100">
                  Customer Care
                </h3>
                <a href="#" className="mt-12 max-md:mt-10">
                  About Us
                </a>
                <a href="#" className="mt-5">
                  Contact US
                </a>
                <a href="#" className="mt-5">
                  Get Update
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="px-16 py-10 mt-36 w-full text-sm font-bold leading-normal text-amber-100 bg-amber-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        All rights Reserved © PRIC, 2024
      </div>
    </footer>
  );
};

export default Footer;
