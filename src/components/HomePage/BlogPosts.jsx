import React from "react";
import Image from "next/image";

const BlogPostCard = ({ image, category, date, title }) => (
  <div className="flex flex-col grow pb-6 w-full text-orange-400 bg-white rounded-2xl shadow-[0px_8px_16px_rgba(0,0,0,0.15)] max-md:mt-8">
    <img
      loading="lazy"
      src={image}
      alt={title}
      className="object-contain w-full rounded-lg aspect-[1.09]"
    />
    <div className="flex flex-col items-start pr-12 pl-4 mt-6 w-full max-md:pr-5">
      <div className="flex gap-5 text-sm leading-normal">
        <div>{category}</div>
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/211e7c247343fea7d962b2ac5d75fb5dce3700ddbf64af5ee70306a4221bf836?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1"
            alt="Calendar icon"
            className="object-contain shrink-0 w-3 aspect-square"
          />
          <div>{date}</div>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold leading-6">{title}</h3>
      {/* <a href="#" className="mt-6 text-base text-neutral-500">
        read full article
      </a> */}
    </div>
  </div>
);

const blogPosts = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4140116609d530a9e80881989e76cc9cf9ddc92a263cfd73d1987070c6e12e36?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1",
    category: "Health",
    date: "Nov 21, 2021",
    title: "COVID-19: The Most Up-to-Date Information",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bc56966d52b67aff0a4c80dcc3cc65ea02b34a6f363dbba7a4d4ddb3e751901?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1",
    category: "Lifestyle",
    date: "Nov 25, 2021",
    title: "Importance of Accreditation for Laboratories",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a17c0ceb2a075ae4dc1abb929142bc529a9e8b4f4559afd394e6f6ee5441ca18?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1",
    category: "Health",
    date: "Nov 28, 2021",
    title: "The dangers of nicotine are addressed in depth",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d01d4509c4ee8e0f2bf5826149333a98baee07b811ef19122b4fd4a62889c97f?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1",
    category: "Health",
    date: "Nov 30, 2021",
    title: "Treatment of patients with diabetes during COVID-19",
  },
];

const BlogPosts = () => {
  return (
    <section className="mt-48 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-8xl font-bold text-center text-orange-100 max-md:max-w-full max-md:text-4xl">
        BLOGPOSTS
      </h2>
      <div className="mt-44 w-full max-w-[1448px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
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

/**
 * This code was generated by Builder.io.
 */
// import React from "react";
// import Image from "next/image";

// const BlogPost = ({ image, category, date, title }) => (
//   <div className="flex flex-col grow pb-6 w-full text-orange-400 bg-white rounded-2xl shadow-[0px_8px_16px_rgba(0,0,0,0.15)] max-md:mt-8">
//     <Image
//       src={image}
//       alt={title}
//       width={350}
//       height={321}
//       className="object-contain w-full rounded-lg aspect-[1.09]"
//     />
//     <div className="flex flex-col items-start pr-12 pl-4 mt-6 w-full max-md:pr-5">
//       <div className="flex gap-5 text-sm leading-normal">
//         <div>{category}</div>
//         <div className="flex gap-2">
//           <Image
//             src="/images/calendar-icon.svg"
//             alt="Calendar"
//             width={12}
//             height={12}
//             className="object-contain shrink-0 w-3 aspect-square"
//           />
//           <div>{date}</div>
//         </div>
//       </div>
//       <div className="mt-6 text-xl font-bold leading-6">{title}</div>
//       <div className="mt-6 text-base text-neutral-500">read full article</div>
//     </div>
//   </div>
// );

// const BlogPosts = () => {
//   const posts = [
//     {
//       image: "/images/blog-post-1.jpg",
//       category: "Health",
//       date: "Nov 21, 2021",
//       title: "COVID-19: The Most Up-to-Date Information",
//     },
//     {
//       image: "/images/blog-post-2.jpg",
//       category: "Lifestyle",
//       date: "Nov 25, 2021",
//       title: "Importance of Accreditation for Laboratories",
//     },
//     {
//       image: "/images/blog-post-3.jpg",
//       category: "Health",
//       date: "Nov 28, 2021",
//       title: "The dangers of nicotine are addressed in depth",
//     },
//     {
//       image: "/images/blog-post-4.jpg",
//       category: "Health",
//       date: "Nov 30, 2021",
//       title: "Treatment of patients with diabetes during COVID-19",
//     },
//   ];

//   return (
//     <section className="mt-48 max-md:mt-10 max-md:max-w-full">
//       <h2 className="text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
//         BLOGPOSTS
//       </h2>
//       <div className="flex flex-wrap gap-5 justify-between mt-28 w-full max-w-[1448px] max-md:mt-10 max-md:max-w-full">
//         {posts.map((post, index) => (
//           <BlogPost key={index} {...post} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogPosts;

