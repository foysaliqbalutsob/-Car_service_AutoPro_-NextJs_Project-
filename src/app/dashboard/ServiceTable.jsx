import { MdDownload, MdVisibility } from "react-icons/md";

const dummyHistory = [
  { id: 1, date: "Aug 12, 2024", type: "Full Detailing", vehicle: "2021 BMW M4", mechanic: "Sarah Williams", cost: "$129.00", status: "Completed" },
  { id: 2, date: "May 10, 2024", type: "Oil Change", vehicle: "2019 Audi Q7", mechanic: "David Miller", cost: "$85.50", status: "Completed" },
  { id: 3, date: "Feb 05, 2024", type: "Brake Pad Replace", vehicle: "2019 Audi Q7", mechanic: "Alex Rivera", cost: "$340.00", status: "Completed" },
];

export default function ServiceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 dark:bg-slate-800/50">
          <tr>
            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-400">Date</th>
            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-400">Service Type</th>
            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-400">Vehicle</th>
            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-400">Cost</th>
            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {dummyHistory.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium">{item.date}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${
                  item.type === 'Full Detailing' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                }`}>
                  {item.type}
                </span>
              </td>
              <td className="px-6 py-4 text-sm">{item.vehicle}</td>
              <td className="px-6 py-4 text-sm font-bold">{item.cost}</td>
              <td className="px-6 py-4 flex gap-3">
                <button title="Download Invoice" className="text-primary hover:text-primary/70 transition-colors">
                  <MdDownload size={20} />
                </button>
                <button title="View Details" className="text-slate-400 hover:text-primary transition-colors">
                  <MdVisibility size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}