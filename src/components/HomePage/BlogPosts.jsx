import React from "react";
import Image from "next/image";
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
import blog4 from '../../images/blog4.png'
import cIcon from '../../images/cIcon.png'

const BlogPostCard = ({ image, category, date, title }) => (
  <div className="flex flex-col grow pb-6 w-full text-orange-400 bg-white rounded-2xl shadow-[0px_8px_16px_rgba(0,0,0,0.15)] max-md:mt-8
   hover:bg-orange-400 hover:text-white cursor-pointer hover:shadow-[rgba(0, 0, 0, 0.35) 0px 5px 15px]  transform transition-all duration-300">
    <Image
      loading="lazy"
      src={image}
      alt={title}
      layout="responsive"
      className="object-contain w-full rounded-lg aspect-[1.09] 
      transform transition-all duration-300 hover:scale-95"
    />
    <div className="flex flex-col items-start pr-12 pl-4 mt-6 w-full max-md:pr-5">
      <div className="flex gap-5 text-sm leading-normal">
        <div>{category}</div>
        <div className="flex gap-2">
          <Image
            loading="lazy"
            src={cIcon}
            alt="Calendar icon"
            className="object-contain shrink-0 w-3 aspect-square"
          />
          <div>{date}</div>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold leading-6">{title}</h3>
       <a href="#" className="mt-6 text-base text-neutral-500">
        read full article
      </a> 
    </div>
  </div>
);

const blogPosts = [
  {
    image: blog1,
    category: "Health",
    date: "Nov 21, 2021",
    title: "COVID-19: The Most Up-to-Date Information",
  },
  {
    image: blog2,
    category: "Lifestyle",
    date: "Nov 25, 2021",
    title: "Importance of Accreditation for Laboratories",
  },
  {
    image: blog3,
    category: "Health",
    date: "Nov 28, 2021",
    title: "The dangers of nicotine are addressed in depth",
  },
  {
    image: blog4,
    category: "Health",
    date: "Nov 30, 2021",
    title: "Treatment of patients with diabetes during COVID-19",
  },
];

const BlogPosts = () => {
  return (
    <section className="mt-48 max-md:mt-10 max-md:max-w-full max-w-[1350px]">
     
      <div className="relative">
        <h2 className="relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
        BLOGPOSTS
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
          BLOGPOSTS
          </span>
        </h2>
      </div>
    
      <div className="mt-[80px] w-full max-w-[1400px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col m-2">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12  max-lg:w-w-full  max-md:ml-0 max-md:w-full"
            >
              <BlogPostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
