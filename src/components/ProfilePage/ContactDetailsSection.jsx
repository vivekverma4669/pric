
import React from "react";
import InputField from "./InputField";

function ContactDetailsSection() {
  return (
    <section className="mt-8">
      <h2 className="self-start text-2xl font-bold text-neutral-800">
        Contact Details
      </h2>
      <textarea
        className="px-4 pt-5 pb-16 mt-6 w-full text-base font-light bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 text-neutral-500 max-md:pr-5 max-md:max-w-full"
        placeholder="Complete Address"
      ></textarea>
      <div className="flex flex-wrap gap-10 mt-3.5 text-base font-light text-neutral-500 max-md:max-w-full">
        <InputField label="Contact Number" />
        <InputField label="Email" type="email" />
      </div>
    </section>
  );
}

export default ContactDetailsSection;
