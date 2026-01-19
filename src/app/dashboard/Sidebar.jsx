"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MdDashboard, MdDirectionsCar, MdHistory, 
  MdCalendarMonth, MdChatBubble, MdSettings 
} from "react-icons/md";

const menuItems = [
  { name: "Overview", icon: <MdDashboard />, href: "/dashboard" },
  { name: "My Vehicles", icon: <MdDirectionsCar />, href: "/dashboard/myVehicles" },
  { name: "Service History", icon: <MdHistory />, href: "/dashboard/history" },
  { name: "Active Bookings", icon: <MdCalendarMonth />, href: "/dashboard/addBooking" },
  { name: "Messages", icon: <MdChatBubble />, href: "/dashboard/message" },
  { name: "Settings", icon: <MdSettings />, href: "/dashboard/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 bg-white dark:bg-[#0d131c] border-r border-slate-200 dark:border-slate-800 flex-col fixed h-full z-40">
      <div className="p-6 flex items-center gap-3">
        <div className="text-primary text-2xl">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48">
            <path d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold tracking-tight">AutoPro</h1>
      </div>
      
      <nav className="flex-1 mt-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-6 py-3 text-sm font-medium transition-all ${
              pathname === item.href 
              ? "bg-primary/10 text-primary border-r-4 border-primary" 
              : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-primary/5 rounded-xl p-4">
          <p className="text-xs font-bold text-primary uppercase mb-1">Pro Member</p>
          <p className="text-[10px] text-slate-500">Next renewal: Oct 12, 2026</p>
        </div>
      </div>
    </aside>
  );
}