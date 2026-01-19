import { MdDirectionsCar, MdSettingsSuggest, MdStars } from "react-icons/md";

export default function StatCards({ data }) {
  const stats = [
    { label: "Total Vehicles", value: data.totalVehicles, icon: <MdDirectionsCar />, color: "blue" },
    { label: "Active Service", value: data.activeServices, icon: <MdSettingsSuggest />, color: "green" },
    { label: "Loyalty Points", value: data.points, icon: <MdStars />, color: "amber" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl 
            ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
              stat.color === 'green' ? 'bg-green-50 text-green-600' : 
              'bg-amber-50 text-amber-500'}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}