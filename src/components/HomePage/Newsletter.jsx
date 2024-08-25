import Image from "next/image";
import yt from '../../images/yt.png';

const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-24 mt-48 w-full bg-amber-200 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center -mb-5 w-full max-w-[1447px] max-md:mb-2.5 max-md:max-w-full">
        <div className="ml-28 text-xl leading-none text-orange-400">
          SUBSCRIBE TO NEWSLETTER
        </div>
        <div className="flex flex-wrap gap-5 justify-between self-stretch mt-1.5 w-full max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="mr-5 text-3xl font-bold text-orange-400 max-md:mr-2.5 max-md:max-w-full">
              Get an update every week
            </div>
            <div className="mt-3 text-base leading-6 text-neutral-700 max-md:max-w-full">
              Livedoc was created in order to improve the patient experience.{" "}
              <br />
              Providing world-class tests, and a wide range of other services.
            </div>
          </div>
          <div className="flex flex-wrap gap-2 my-auto text-base whitespace-nowrap max-md:max-w-full">
            <input
              type="email"
              placeholder="Email"
              className="grow px-4 py-5 font-light rounded-3xl border border-solid border-neutral-500 text-neutral-500 w-fit max-md:pr-5 max-md:max-w-full max-h-[500px]"
            />
            <button className="px-12 py-6 font-bold text-center bg-orange-400 rounded-2xl border border-orange-400 border-solid text-slate-100 max-md:px-5">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex gap-4 mt-1.5 ml-24 max-w-full text-base text-neutral-700 w-[151px]">
          <Image
            src={yt}
            alt="Channel icon"
            width={32}
            height={32}
            className="object-contain shrink-0 w-8 aspect-square"
          />
          <div className="grow shrink my-auto w-[150px]">Channel Name</div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
