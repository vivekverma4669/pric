"use client"
import React, { useState } from "react";
function RaiseQuery() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query submitted:", query);
    setQuery("");
  };

  return (
    <main className="flex overflow-hidden flex-col pb-56 bg-white max-md:pb-24">
      
      <section className="flex flex-col self-center mt-8 max-w-full text-base font-bold w-[1242px] max-md:mt-10">
        <h2 className="self-start text-2xl text-neutral-800">Raise Query</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <label htmlFor="queryInput" className="sr-only">
            Describe your issue
          </label>
          <textarea
            id="queryInput"
            className="px-4 pt-5 pb-60 w-full font-light bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 text-neutral-500 max-md:pr-5 max-md:pb-28 max-md:max-w-full"
            placeholder="Describe your issue"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            aria-required="true"
          ></textarea>


        </form>
        
<button type="submit" className=" relative self-center px-16 py-5 lg:px-10 mt-11 max-w-full text-base font-bold text-center text-white bg-orange-400 border border-orange-400 rounded-[800px] w-[650px] group overflow-hidden transition-transform transform active:scale-95">
  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-500 opacity-0 group-hover:opacity-100 rounded-[800px]"></span>
  <span className="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
    SEND
  </span>
</button>

      </section>
    </main>
  );
}

export default RaiseQuery;
