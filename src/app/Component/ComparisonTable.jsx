import React from 'react';
import { MdCheckCircle, MdRemove, MdNoPhotography } from 'react-icons/md';

const ComparisonTable = () => {
  const features = [
    { name: "Oil & Filter Change", basic: true, standard: true, premium: true },
    { name: "Tire Rotation", basic: false, standard: true, premium: true },
    { name: "Full Brake Check", basic: false, standard: true, premium: true },
    { name: "Engine Diagnostics", basic: false, standard: "partial", premium: true },
    { name: "Full Interior Detailing", basic: false, standard: false, premium: true },
  ];

  return (
    <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800">
        <h3 className="text-xl font-bold">Package Comparison</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-xs font-black uppercase text-slate-400">Feature</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-slate-400 text-center">Basic Care</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-slate-400 text-center text-primary">Standard</th>
              <th className="px-6 py-4 text-xs font-black uppercase text-slate-400 text-center">Premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {features.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 text-sm font-medium">{row.name}</td>
                <td className="px-6 py-4 text-center">
                  {row.basic ? <MdCheckCircle className="text-green-500 inline" size={20} /> : <MdRemove className="text-slate-300 inline" />}
                </td>
                <td className="px-6 py-4 text-center">
                  {row.standard === true ? <MdCheckCircle className="text-green-500 inline" size={20} /> : 
                   row.standard === "partial" ? <MdNoPhotography className="text-slate-400 inline" /> : 
                   <MdRemove className="text-slate-300 inline" />}
                </td>
                <td className="px-6 py-4 text-center">
                  {row.premium ? <MdCheckCircle className="text-green-500 inline" size={20} /> : <MdRemove className="text-slate-300 inline" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;