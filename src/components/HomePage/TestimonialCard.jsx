import React from 'react';
import Image from 'next/image';
const TestimonialCard = ({ content, name, role, avatarSrc }) => {
  return (
    <div className="flex flex-col px-6 py-5 w-full bg-amber-200 rounded-2xl border-2 border-orange-400 border-solid max-md:px-5 max-md:max-w-full">
      <p className="text-base leading-6 text-neutral-700 max-md:max-w-full">
        {content}
      </p>
      <div className="flex gap-2 self-start mt-8 text-xs text-center">
        <Image loading="lazy"
         src={avatarSrc} 
         alt={name} 
         className="object-contain shrink-0 w-10 aspect-square" />
        <div className="flex flex-col self-start mt-2">
          <div className="font-bold text-orange-400">{name}</div>
          <div className="self-start mt-2 leading-loose text-slate-100">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;