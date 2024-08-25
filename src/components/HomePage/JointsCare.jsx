import Image from "next/image";
import eyeCare from '../../images/eye-care.png'
import grp4 from '../../images/group3.png'

const JointsCare = () => {
  return (
    <section className="flex flex-wrap gap-10 self-stretch py-16 pr-8 pl-20 mt-48 w-full bg-orange-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <Image
              src={eyeCare}
              alt="Joint care illustration"
              width={700}
              height={479}
              layout="responsive"
              className="object-contain grow max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto text-base font-bold text-slate-100 max-md:mt-10 max-md:max-w-full">
              <h2 className="self-stretch text-3xl max-md:max-w-full">
                Joints Care with top professionals in Punjab and In Budget
              </h2>
              <p className="mt-7 leading-6">
                We &apos; ve built a healthcare system that puts your needs first.{" "}
                <br />
                For us, there is nothing more important than the health of{" "}
                <br />
                you and your loved ones.
              </p>
              <button className="px-14 py-6 mt-8 text-center border border-solid bg-slate-100 border-slate-100 rounded-[800px] text-neutral-700 max-md:px-5">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={grp4}
        alt=""
        width={92}
        height={224}
        className="object-contain shrink-0 self-end mt-72 max-md:mt-10"
      />
    </section>
  );
};

export default JointsCare;
