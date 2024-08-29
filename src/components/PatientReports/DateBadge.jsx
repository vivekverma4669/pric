import React from "react";

const DateBadge = ({ day, month }) => (
  <div className="self-start px-3.5 py-2 text-xs text-center align-center whitespace-nowrap bg-orange-300 rounded-full border border-orange-400 border-solid fill-orange-300 h-[50px] stroke-[1px] stroke-orange-400 text-neutral-700 w-[50px] z-50" >
    {day}
    <br />
    {month}
  </div>
);

export default DateBadge;
