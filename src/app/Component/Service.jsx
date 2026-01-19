import { MdLocalCarWash, MdBuild, MdSettingsSuggest } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Precision Car Wash",
    desc: "High-end detailing using pH-neutral chemicals for a long-lasting showroom finish.",
    icon: <MdLocalCarWash className="text-4xl" />,
  },
  {
    title: "Expert Mechanical Repair",
    desc: "Advanced computer diagnostics and certified professional repairs for all makes and models.",
    icon: <MdBuild className="text-4xl" />,
  },
  {
    title: "Premium Car Parts",
    desc: "Genuine OEM parts and accessories with full warranty coverage for your peace of mind.",
    icon: <MdSettingsSuggest className="text-4xl" />,
  },
];

export default function Services() {
  return (
    <section
      className="px-4 md:px-20 lg:px-40 py-16 bg-white dark:bg-slate-900/50"
      id="services"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold dark:text-white">
            Our Professional Services
          </h2>
          <div className="h-1.5 w-20 bg-primary mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-background-light dark:bg-background-dark rounded-xl border border-[#ced8e8] dark:border-slate-800 hover:border-primary transition-all hover:shadow-xl"
            >
              <div className="mb-6 inline-flex items-center justify-center size-14 bg-primary/10 rounded-lg text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-custom dark:text-slate-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
                href="#"
              >
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
