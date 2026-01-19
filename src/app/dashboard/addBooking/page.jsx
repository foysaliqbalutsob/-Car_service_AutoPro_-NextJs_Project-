"use client";
import React, { useState } from 'react';
import { 
  MdDirectionsCar, MdReportProblem, MdBuild, 
  MdCalendarToday, MdChevronLeft, MdChevronRight,
  MdCloudUpload, MdInfo, MdAddCircle, MdOilBarrel,
  MdMinorCrash, MdLocalCarWash, MdSettingsSuggest
} from 'react-icons/md';

const ActiveBooking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('bmw');
  const [selectedService, setSelectedService] = useState('oil');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Left Column: Form Details */}
      <div className="xl:col-span-2 space-y-8">
        
        {/* Section 1: Select Vehicle */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MdDirectionsCar className="text-primary" /> Select Vehicle
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { id: 'bmw', name: '2021 BMW M4', plate: '4920', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvquiY3V-9jF_ftIaDPbLU_imftlyVtPArMG93ZiDRpuzoujI0_GdQB_uwGphTG0EMnOozKeMmZXNQvn4oIIo_pcc9-8QNC8ye7U7PD0YG0hx0ZfSOhNutHBXoacwW9t-nCjtvbBi6cfXpxKqGq0U3LZOOwaLuYR85vX9llRgRHo2RXrbtyZSC1Q24iZuVQreh2eyJR6jE_4lPMCux7vBxUsW5OI1OoFjycbnL3nb6SNbuVu_rfW7B8wHhPNNL8gA4no5MlZwGqts' },
              { id: 'audi', name: '2019 Audi Q7', plate: '8102', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJoQQG6px1vbEdM1jXuCDV9XnqgM_Yu1skJ96eXJML4-jB_TRJoIC3WAE4aeJb-nELTlV0-aOwDfF8z2bW0e3adrW3Y8fuQ_11VpyHoLfZcdss7BPUZLyTKUOuc8XuAyRwvDIslPqq0_C7Gw1OtvpaoiTEV9tAEhT986Fdv6q4D2c-2gOfHYP6gBkVdfkrOafaRhrk_6ADatQBqQrv1Ww2wPBNSJhEel8kwXBLj_a-Q0LkKknFc5wsCt3bqmqYKqcYLEywRcpFWls' }
            ].map((car) => (
              <div 
                key={car.id}
                onClick={() => setSelectedVehicle(car.id)}
                className={`w-48 p-4 border-2 rounded-xl cursor-pointer transition-all flex-shrink-0 ${
                  selectedVehicle === car.id ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-800'
                }`}
              >
                <img className="w-full h-24 object-cover rounded-lg mb-3" src={car.img} alt={car.name} />
                <p className="font-bold text-sm">{car.name}</p>
                <p className="text-xs text-slate-500">{car.plate}</p>
              </div>
            ))}
            <button className="flex-shrink-0 w-48 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all gap-2">
              <MdAddCircle size={24} />
              <span className="text-xs font-bold uppercase">Add New</span>
            </button>
          </div>
        </section>

        {/* Section 2: Issue Description */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MdReportProblem className="text-primary" /> What seems to be the problem?
          </h2>
          <textarea 
            className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 outline-none" 
            placeholder="Describe the issue in detail (e.g., 'I hear a clicking noise when turning left...')"
          ></textarea>
          <div className="mt-6">
            <label className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <MdCloudUpload className="text-4xl text-slate-300 mb-2" />
              <p className="text-sm font-medium">Drag & drop photos or videos here</p>
              <p className="text-xs text-slate-400 mt-1">Upload dashboard lights, noises, or physical damage (Max 50MB)</p>
              <input className="hidden" type="file" />
            </label>
          </div>
        </section>

        {/* Section 3: Categories */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MdBuild className="text-primary" /> Service Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'oil', name: 'Oil Change', icon: <MdOilBarrel /> },
              { id: 'brake', name: 'Brake Repair', icon: <MdMinorCrash /> },
              { id: 'wash', name: 'Car Wash', icon: <MdLocalCarWash /> },
              { id: 'engine', name: 'Engine Diag', icon: <MdSettingsSuggest /> },
            ].map((service) => (
              <button 
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`flex flex-col items-center gap-2 p-4 border rounded-xl transition-all text-sm font-medium ${
                  selectedService === service.id ? 'bg-primary text-white border-primary' : 'border-slate-200 dark:border-slate-800 hover:bg-primary/5 hover:border-primary'
                }`}
              >
                <span className="text-2xl">{service.icon}</span>
                {service.name}
              </button>
            ))}
          </div>
        </section>

        {/* Section 4: Schedule */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <MdCalendarToday className="text-primary" /> Schedule Appointment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center px-2">
                <h3 className="font-bold">January 2026</h3>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><MdChevronLeft size={20}/></button>
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><MdChevronRight size={20}/></button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(day => <div key={day} className="text-[10px] font-bold text-slate-400 uppercase">{day}</div>)}
                {[...Array(31)].map((_, i) => (
                  <div key={i} className={`p-2 text-sm font-medium rounded-lg cursor-pointer transition-colors ${i+1 === 19 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'hover:bg-primary/10'}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold px-2">Available Slots</h3>
              <div className="grid grid-cols-2 gap-2">
                {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map(time => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 text-xs font-bold border rounded-xl transition-all ${
                      selectedTime === time ? 'bg-primary/10 border-primary text-primary' : 'border-slate-200 dark:border-slate-800 hover:border-primary'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Summary */}
      <div className="space-y-6">
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm sticky top-24">
          <h2 className="text-lg font-bold mb-6">Booking Summary</h2>
          <div className="mb-6">
            <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Preferred Mechanic</label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 py-3 outline-none">
              <option>No Preference</option>
              <option>Sarah Williams (Expert Detailer)</option>
              <option>David Miller (Engine Specialist)</option>
              <option>Alex Rivera (Brake Specialist)</option>
            </select>
          </div>
          <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Base Service Fee</span>
              <span className="font-bold">$45.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Service Kit</span>
              <span className="font-bold">$84.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Loyalty Discount</span>
              <span className="text-green-500 font-bold">-$10.00</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <span className="text-lg font-bold">Estimated Total</span>
              <span className="text-2xl font-bold text-primary">$119.00</span>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 mt-4">
              Confirm Booking
            </button>
          </div>
          <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl">
            <MdInfo className="text-amber-500 flex-shrink-0" size={20} />
            <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
              Your booking includes a complimentary 20-point safety inspection.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActiveBooking;