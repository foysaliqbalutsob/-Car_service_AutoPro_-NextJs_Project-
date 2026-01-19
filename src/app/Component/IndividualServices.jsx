import React from 'react';
import { 
  MdLocalCarWash, MdConstruction, MdMonitorHeart, 
  MdMinorCrash, MdPublishedWithChanges, MdAddShoppingCart 
} from 'react-icons/md';

const IndividualServices = () => {
  const services = [
    { icon: <MdLocalCarWash />, title: "Precision Car Wash", desc: "Complete exterior & interior vacuum.", price: "29" },
    { icon: <MdConstruction />, title: "Full Mech Repair", desc: "Expert diagnosis and mechanical fix.", price: "120" },
    { icon: <MdMonitorHeart />, title: "Engine Diagnostics", desc: "OBD-II scanning and sensor checks.", price: "75" },
    { icon: <MdMinorCrash />, title: "Brake Services", desc: "Pad replacement and fluid flush.", price: "99" },
    { icon: <MdPublishedWithChanges />, title: "Tire Rotation", desc: "Extend tire life and improve grip.", price: "45" },
  ];

  return (
    <div className="pt-8 pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold">Individual Services</h2>
          <p className="text-slate-500 text-sm">A la carte options for specific needs.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          {['All', 'Washing', 'Repairs'].map((cat, i) => (
            <button key={cat} className={`px-4 py-2 text-xs font-bold rounded-full ${i === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              {React.cloneElement(service.icon, { size: 24 })}
            </div>
            <h4 className="font-bold mb-1">{service.title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{service.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-bold text-slate-600 dark:text-slate-300">From ${service.price}</span>
              <button className="p-2 bg-slate-50 dark:bg-slate-800 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                <MdAddShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualServices;