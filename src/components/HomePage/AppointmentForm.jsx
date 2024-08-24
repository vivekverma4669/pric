
const AppointmentForm = () => {
  return (
    <section
      className="mt-40 w-full max-w-[1448px] max-md:mt-10 max-md:max-w-full"
      id="appointment"
    >
      <h2 className="mt-12 text-8xl font-bold text-center text-orange-100 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        APPOINTMENT
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d016216460a69c8982bda39fc48045db473326e4f5ea89aa328a3e18d2c29a9?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1"
            alt="Doctor consulting with a patient"
            className="object-contain grow w-full aspect-[1.43] max-md:mt-8 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <form className="flex flex-col w-full text-base font-light text-neutral-500 max-md:mt-8 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 whitespace-nowrap max-md:max-w-full">
              <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                className="grow px-4 py-5 bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 w-fit max-md:pr-5"
              />
              <input
                type="tel"
                placeholder="Phone"
                aria-label="Phone"
                className="grow px-4 py-5 bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 w-fit max-md:pr-5"
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-4 w-full whitespace-nowrap max-md:max-w-full">
              <div className="flex flex-auto gap-10 py-4 pr-10 pl-4 rounded-3xl border border-solid border-orange-400 border-opacity-30 max-md:pr-5">
                <select aria-label="Category" className="bg-transparent">
                  <option>Category</option>
                </select>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f64bc41385cff87b7705711b9271ffe9f1dad9f580fbd71f8febd1d6899dbfb7?placeholderIfAbsent=true&apiKey=959314bec90d425ea66337d3a0b18ec1"
                  alt=""
                  className="object-contain shrink-0 my-auto w-3 aspect-square"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="grow px-4 py-5 bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 w-fit max-md:pr-5"
              />
            </div>
            <textarea
              aria-label="Additional information"
              className="flex shrink-0 mt-4 bg-white rounded-3xl border border-solid border-orange-400 border-opacity-30 h-[250px] max-md:max-w-full"
            />
            <button
              type="submit"
              className="px-16 py-5 mt-4 font-bold text-center text-white bg-orange-400 border border-orange-400 border-solid rounded-[800px] max-md:px-5 max-md:max-w-full"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
