"use client";
import { MdPerson, MdLocalCarWash } from "react-icons/md";

export default function LiveStatus({ status }) {
  return (
    <div className="bg-primary text-white p-4 md:p-8 rounded-2xl shadow-xl relative overflow-hidden h-full min-h-[250px]">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
          <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest self-start">
            Live Status
          </span>
        </div>
        <h3 className="text-lg md:text-2xl font-bold mb-2">{status.type}</h3>
        <p className="text-white/70 text-xs md:text-sm mb-4 md:mb-8">
          {status.vehicle} • Expected: {status.eta}
        </p>

        <div className="space-y-4">
          <div className="flex justify-between text-xs font-bold uppercase">
            <span>{status.phase}</span>
            <span>{status.progress}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-1000"
              style={{ width: `${status.progress}%` }}
            ></div>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <MdPerson />
            </div>
            <p className="text-xs md:text-sm">
              Assigned: <span className="font-bold">{status.mechanic}</span>
            </p>
          </div>
        </div>
      </div>
      <MdLocalCarWash className="absolute -right-4 md:-right-8 -bottom-4 md:-bottom-8 text-[80px] md:text-[120px] opacity-10" />
    </div>
  );
}
