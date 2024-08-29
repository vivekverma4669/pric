import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ content, author, role, imageSrc }) => {
  return (
    <article className="flex flex-col px-6 py-5 w-full bg-white rounded-2xl border-2 border-orange-400 border-solid max-md:px-5 max-md:max-w-full">
      <p className="text-base leading-6 text-neutral-700 max-md:max-w-full overflow-hidden">
        {content}
      </p>
      <div className="flex gap-2 self-start mt-8 text-xs text-center">
        <Image loading="lazy" src={imageSrc} alt={`${author}'s profile`} className="object-contain shrink-0 w-10 aspect-square" />
        <div className="flex flex-col self-start mt-2">
          <h3 className="font-bold text-orange-400">{author}</h3>
          <p className="self-start mt-2 leading-loose text-neutral-700">{role}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;