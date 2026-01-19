"use client";
import React from 'react';
import { 
  MdSearch, MdPayments, MdTaskAlt, MdExpandMore, 
  MdFilterListOff, MdDescription, MdPictureAsPdf, MdAdd 
} from 'react-icons/md';

const ServiceHistory = () => {
  // ডেমো ডাটা (পরবর্তীতে API থেকে আসবে)
  const historyData = [
    {
      date: "Oct 12, 2024",
      vehicle: "2021 BMW M4",
      plate: "ABC-1234",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvquiY3V-9jF_ftIaDPbLU_imftlyVtPArMG93ZiDRpuzoujI0_GdQB_uwGphTG0EMnOozKeMmZXNQvn4oIIo_pcc9-8QNC8ye7U7PD0YG0hx0ZfSOhNutHBXoacwW9t-nCjtvbBi6cfXpxKqGq0U3LZOOwaLuYR85vX9llRgRHo2RXrbtyZSC1Q24iZuVQreh2eyJR6jE_4lPMCux7vBxUsW5OI1OoFjycbnL3nb6SNbuVu_rfW7B8wHhPNNL8gA4no5MlZwGqts",
      type: "Detailing",
      mechanic: "Sarah Williams",
      cost: "$129.00",
      status: "Completed",
      typeColor: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
      date: "Sep 05, 2024",
      vehicle: "2019 Audi Q7",
      plate: "XYZ-7890",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJoQQG6px1vbEdM1jXuCDV9XnqgM_Yu1skJ96eXJML4-jB_TRJoIC3WAE4aeJb-nELTlV0-aOwDfF8z2bW0e3adrW3Y8fuQ_11VpyHoLfZcdss7BPUZLyTKUOuc8XuAyRwvDIslPqq0_C7Gw1OtvpaoiTEV9tAEhT986Fdv6q4D2c-2gOfHYP6gBkVdfkrOafaRhrk_6ADatQBqQrv1Ww2wPBNSJhEel8kwXBLj_a-Q0LkKknFc5wsCt3bqmqYKqcYLEywRcpFWls",
      type: "Oil Change",
      mechanic: "David Miller",
      cost: "$95.00",
      status: "Completed",
      typeColor: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
    },
    {
      date: "Aug 20, 2024",
      vehicle: "2021 BMW M4",
      plate: "ABC-1234",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvquiY3V-9jF_ftIaDPbLU_imftlyVtPArMG93ZiDRpuzoujI0_GdQB_uwGphTG0EMnOozKeMmZXNQvn4oIIo_pcc9-8QNC8ye7U7PD0YG0hx0ZfSOhNutHBXoacwW9t-nCjtvbBi6cfXpxKqGq0U3LZOOwaLuYR85vX9llRgRHo2RXrbtyZSC1Q24iZuVQreh2eyJR6jE_4lPMCux7vBxUsW5OI1OoFjycbnL3nb6SNbuVu_rfW7B8wHhPNNL8gA4no5MlZwGqts",
      type: "Repair",
      mechanic: "Alex Rivera",
      cost: "$450.00",
      status: "Cancelled",
      typeColor: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
    }
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-[1600px] mx-auto">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-1">Service History</h2>
          <p className="text-slate-500 text-sm">Manage and review your vehicle's maintenance records</p>
        </div>
        
        {/* Stats Cards */}
        <div className="flex gap-4">
          <div className="bg-white dark:bg-slate-900 px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
              <MdPayments size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Lifetime Cost</p>
              <p className="text-xl font-bold">$4,852.20</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500/10 text-green-600 rounded-lg flex items-center justify-center">
              <MdTaskAlt size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Total Services</p>
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Filters Bar --- */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 shadow-sm">
        <div className="flex-1 min-w-[240px] relative">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
            placeholder="Filter by keyword or vehicle..." 
            type="text"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {['Date Range', 'All Vehicles', 'Service Type'].map((filter, idx) => (
            <div key={idx} className="relative">
              <select className="appearance-none pl-4 pr-10 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 cursor-pointer outline-none">
                <option>{filter}</option>
              </select>
              <MdExpandMore className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium">
            <MdFilterListOff size={18} /> Reset
          </button>
        </div>
      </div>

      {/* --- Data Table --- */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Vehicle</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Service Type</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Mechanic</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Total Cost</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Status</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {historyData.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                        <img src={item.img} alt="car" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{item.vehicle}</p>
                        <p className="text-[10px] text-slate-400">{item.plate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 ${item.typeColor} text-[10px] font-bold rounded uppercase tracking-wide`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{item.mechanic}</td>
                  <td className="px-6 py-4 text-sm font-bold">{item.cost}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase ${item.status === 'Completed' ? 'text-green-600 dark:text-green-400' : 'text-slate-400'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Completed' ? 'bg-green-500' : 'bg-slate-400'}`}></span> 
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg" title="View Report">
                        <MdDescription size={20} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg" title="Download PDF">
                        <MdPictureAsPdf size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Pagination --- */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <p className="text-sm text-slate-400">Showing <span className="font-bold text-slate-700 dark:text-slate-200">1-10</span> of <span className="font-bold text-slate-700 dark:text-slate-200">24</span> records</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-400 cursor-not-allowed transition-all">Previous</button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">Next</button>
          </div>
        </div>
      </div>

      {/* --- Floating Action Button --- */}
      <button className="fixed bottom-10 right-10 bg-primary hover:bg-primary/90 text-white w-16 h-16 rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center transition-all hover:scale-110 z-50 group">
        <MdAdd size={32} />
        <div className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity border border-slate-100 dark:border-slate-700">
          Book New Service
        </div>
      </button>
    </div>
  );
};

export default ServiceHistory;