import Image from "next/image";
import physicotheraphy from '../../images/physicotheraphy.png'
import psycology from '../../images/Layer_1.png'
import radiology from '../../images/radiology.png'
import dietetics from '../../images/dietetics.png'
import rheumatology from '../../images/rheumatology.png'

const DepartmentItem = ({ icon, name }) => (
  <div className="flex flex-col">
    <Image
      src={icon}
      alt={`${name} icon`}
      width={75}
      height={75}
 
      className="object-contain self-center"
    />
    <div className="mt-4">{name}</div>
  </div>
);

const Departments = () => {
  const departments = [
    { icon: physicotheraphy, name: "Physiotherapy" },
    { icon: psycology, name: "Psychology" },
    { icon: dietetics, name: "Dietetics" },
    { icon: rheumatology, name: "Rheumatology" },
    { icon: radiology, name: "Radiology" },
  ];

  return (
    <section id="departments" className="mt-64 max-md:mt-10 max-md:max-w-full">
        <div className="relative">
        <h2 className="relative text-8xl font-bold text-center text-orange-100 max-md:text-4xl">
          OUR DEPARTMENTS
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-400 text-3xl max-md:text-2xl">
          OUR DEPARTMENTS
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-28 max-w-full text-2xl leading-normal text-center text-gray-400 whitespace-nowrap w-[1272px] max-md:mt-10">
        {departments.map((dept, index) => (
          <DepartmentItem key={index} icon={dept.icon} name={dept.name} />
        ))}
      </div>
    </section>
  );
};

export default Departments;
