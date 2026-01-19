"use client";
import React, { useState } from 'react';
import { 
  MdAdd, MdSearch, MdEdit, MdDirectionsCar, 
  MdCheckCircle, MdWarning, MdError 
} from 'react-icons/md';

const vehicleData = [
  {
    id: 1,
    model: "2021 BMW M4",
    vin: "WBA53AZ01MXXXX4920",
    plate: "B-9421-PR",
    mileage: "12,450 km",
    lastService: "Aug 12, 2024",
    status: "HEALTHY",
    statusColor: "bg-green-500",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    model: "2019 Audi Q7",
    vin: "WA1VAAF75KXXXX8102",
    plate: "NY-882-QX",
    mileage: "45,120 km",
    lastService: "Feb 05, 2024",
    status: "DUE SOON",
    statusColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=600"
  }
];

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">My Vehicles</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Manage your fleet and track health status.
          </p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
          <MdAdd size={24} />
          Add New Vehicle
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-4 items-center shadow-sm">
        <div className="relative flex-1 w-full">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
          <input 
            type="text" 
            placeholder="Search by plate or model..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Filter Status:</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800/30 whitespace-nowrap">Good</button>
            <button className="px-4 py-2 rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 text-xs font-bold border border-amber-100 dark:border-amber-800/30 whitespace-nowrap">Due Soon</button>
            <button className="px-4 py-2 rounded-lg bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 text-xs font-bold border border-red-100 dark:border-red-800/30 whitespace-nowrap">Critical</button>
          </div>
        </div>
      </div>

      {/* Vehicle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {vehicleData.map((vehicle) => (
          <div key={vehicle.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden group hover:shadow-xl transition-all flex flex-col">
            <div className="h-48 bg-slate-200 relative overflow-hidden">
              <img 
                src={vehicle.image} 
                alt={vehicle.model} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className={`absolute top-4 right-4 px-3 py-1 ${vehicle.statusColor} text-white text-[10px] font-black rounded-full shadow-lg`}>
                {vehicle.status}
              </div>
            </div>
            
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-xl">{vehicle.model}</h3>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <MdEdit size={20} />
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6 uppercase tracking-tight">
                VIN: {vehicle.vin}
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 mb-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">License Plate</p>
                  <p className="text-sm font-bold">{vehicle.plate}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Mileage</p>
                  <p className="text-sm font-bold">{vehicle.mileage}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Last Service Date</p>
                  <p className="text-sm font-bold">{vehicle.lastService}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                <button className="bg-primary text-white py-2.5 rounded-lg text-xs font-bold hover:bg-primary/90 transition-colors">
                  Book Service
                </button>
                <button className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-2.5 rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Vehicle Card Placeholder */}
        <button className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 hover:bg-white dark:hover:bg-slate-900 hover:border-primary/50 transition-all group min-h-[400px]">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <MdAdd size={32} />
          </div>
          <h4 className="font-bold text-lg mb-1">Add Another Vehicle</h4>
          <p className="text-sm text-slate-500 text-center max-w-[200px]">
            Expand your garage and keep track of your other cars.
          </p>
        </button>
      </div>
    </div>
  );
};

export default Vehicles;