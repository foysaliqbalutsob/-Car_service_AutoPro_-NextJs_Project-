import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const packages = [
  { name: "Basic Maintenance", price: "49", features: ["Oil & Filter Change", "21-Point Inspection", "Tire Pressure Check"], unavailable: ["Engine Diagnostics"] },
  { name: "Full Detailing", price: "129", popular: true, features: ["Interior Deep Clean", "Exterior Wax & Polish", "Wheel & Rim Shine", "Ceramic Coating Base"] },
  { name: "Engine Overhaul", price: "299", features: ["Full Diagnostics", "Part Reconditioning", "Performance Tuning", "12-Month Warranty"] },
];

export default function Pricing() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-20 bg-[#f0f4f8] dark:bg-slate-900" id="packages">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Popular Maintenance Packages</h2>
        <p className="text-slate-custom">Designed to keep your vehicle in prime condition.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-end">
          {packages.map((pkg, i) => (
            <div key={i} className={`${pkg.popular ? 'bg-primary scale-105 shadow-2xl text-white' : 'bg-white dark:bg-[#101722]'} rounded-xl p-8 relative border border-slate-200 dark:border-slate-800`}>
              {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black px-4 py-1 rounded-full">Most Popular</div>}
              <h4 className="text-lg font-bold mb-2">{pkg.name}</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">${pkg.price}</span>
                <span className="opacity-70">/visit</span>
              </div>
              <ul className="space-y-4 mb-8 text-left">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm"><FaCheckCircle className={pkg.popular ? "text-white" : "text-green-500"} /> {f}</li>
                ))}
                {pkg.unavailable?.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm opacity-50"><FaTimesCircle /> {f}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold ${pkg.popular ? 'bg-white text-primary' : 'border border-primary text-primary'}`}>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}