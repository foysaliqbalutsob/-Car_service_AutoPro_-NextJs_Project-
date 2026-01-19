import React from 'react';
import { 
  MdLocalCarWash, MdConstruction, MdMonitorHeart, 
  MdMinorCrash, MdPublishedWithChanges, MdAddShoppingCart,
  MdCalendarAddOn, MdCheckCircle, MdRemove, MdNoPhotography
} from 'react-icons/md';

import Services from '../Component/Service';

const Service = () => {
  return (
    <div className="flex-1 min-h-screen p-8 space-y-10 bg-background-light dark:bg-background-dark font-display">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-dark-custom dark:text-white">Our Services & Maintenance Packages</h2>
          <p className="text-slate-500">Choose from individual services or bundled value packages.</p>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
          <button className="px-6 py-2 text-sm font-bold rounded-lg transition-all">Individual Services</button>
          <button className="px-6 py-2 text-sm font-bold rounded-lg bg-white dark:bg-slate-900 shadow-sm text-primary transition-all">Value Packages</button>
        </div>
      </div>

      {/* --- আলাদা করা Packages কম্পোনেন্ট এখানে কল করা হয়েছে --- */}
      
      <Services></Services>

      {/* Comparison Table এবং Individual Services এর বাকি কোড এখানে থাকবে... */}
      {/* (আগের কোডের মতো একই থাকবে) */}

    </div>
  );
};

export default Service;


