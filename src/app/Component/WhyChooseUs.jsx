import { MdVerifiedUser, MdPayments, MdSpeed, MdHistory } from "react-icons/md";

const features = [
  { icon: <MdVerifiedUser />, title: "Certified Mechanics", desc: "Every team member is ASE certified with specialized brand training." },
  { icon: <MdPayments />, title: "Fair Pricing", desc: "Transparent quotes with no hidden fees or unnecessary upsells." },
  { icon: <MdSpeed />, title: "Fast Service", desc: "Optimized workflows to get you back on the road safely and quickly." },
  { icon: <MdHistory />, title: "20+ Years Experience", desc: "A legacy of excellence in automotive maintenance and repair since 2004." },
];

export default function WhyChooseUs() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-20" id="why-us">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Choose AutoPro?</h2>
        <p className="text-slate-custom dark:text-slate-400">Engineering excellence meets customer satisfaction.</p>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="text-primary text-5xl">{item.icon}</div>
            <h4 className="font-bold text-lg">{item.title}</h4>
            <p className="text-sm text-slate-custom dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}