"use client";
import React, { useState } from "react";
import DateBadge from "./DateBadge";
import Image from "next/image";
import arrowUp from '../../images/arrowUp.svg';
import download from '../../images/download.svg';
import editRaise from '../../images/raise-query.svg';
import Link from "next/link";

const ReportsItem = ({ report }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-wrap gap-2 mb-4 max-w-full w-[658px]">
    <DateBadge 
      day={new Date(report.report_date).getDate()} 
      month={new Date(report.report_date).toLocaleString('default', { month: 'short' })} 
/>

      <div className="flex flex-col grow shrink-0 rounded-2xl basis-0 bg-neutral-100 w-fit max-md:max-w-full">
        <div
          className="flex flex-wrap gap-5 justify-between px-6 py-3.5 text-base font-semibold rounded-2xl bg-zinc-300 bg-opacity-50 text-neutral-800 max-md:px-5 max-md:max-w-full cursor-pointer"
          onClick={toggleOpen}
        >
          <div>{report.medicalTest}</div>
          <Image
            loading="lazy"
            src={arrowUp}
            className={`object-contain shrink-0 my-auto aspect-[1.8] stroke-[2px] stroke-neutral-800 w-[18px] transition-transform ${
              isOpen ? "transform " : "rotate-180"
            }`}
            alt="Toggle details"
          />
        </div>

        {isOpen && report.medicalTest && (
          <div className="flex flex-col px-6 mt-6 w-full text-xs text-neutral-700 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between text-sm max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-center">
                  <span className="font-semibold text-neutral-800">
                    Patient Name:{" "}
                  </span>
                  {report.full_name}
                </div>
                <div className="mt-2 max-md:mr-2.5">
                  <span className="font-semibold text-neutral-800">
                    Sex:{" "}
                  </span>
                  {report.gender}
                </div>
                <div className="self-start mt-4 font-semibold text-neutral-800">
                  Reports
                </div>
              </div>

              <Image
                loading="lazy"
                src={download}
                className="object-contain shrink-0 self-start w-9 p-2  bg-orange-200 rounded-xl aspect-square"
                alt="download icon"
              />
            </div>

            {report.reports.map((item, index) => (
              <div key={index} className="flex flex-wrap gap-5 justify-between px-6 py-3.5 mt-2 bg-white rounded-xl max-md:px-5 max-md:max-w-full hover:border-l hover:border-orange-600">
                <div className="text-[15px] font-semibold">
                  {item.medicalTest} <br />
                  <span className="font-normal text-[12px] m-1">
                    {item.min} - {item.max}
                  </span>
                </div>
                <div>{item.value}</div>
              </div>
            ))}

            <div className="flex gap-1 self-end mt-5 mb-5 font-semibold text-orange-400">
              <Image
                loading="lazy"
                src={editRaise}
                className="object-contain shrink-0 aspect-square w-[18px]"
                alt="Query icon"
              />
              <Link href={'/raise_query'}>
                <div>Raise a Query</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsItem;
