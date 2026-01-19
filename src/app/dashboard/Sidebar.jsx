"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MdDashboard,
  MdDirectionsCar,
  MdHistory,
  MdCalendarMonth,
  MdChatBubble,
  MdSettings,
  MdMenu,
  MdClose,
} from "react-icons/md";

const menuItems = [
  { name: "Overview", icon: <MdDashboard />, href: "/dashboard" },
  {
    name: "My Vehicles",
    icon: <MdDirectionsCar />,
    href: "/dashboard/myVehicles",
  },
  { name: "Service History", icon: <MdHistory />, href: "/dashboard/history" },
  {
    name: "Active Bookings",
    icon: <MdCalendarMonth />,
    href: "/dashboard/addBooking",
  },
  { name: "Messages", icon: <MdChatBubble />, href: "/dashboard/message" },
  { name: "Settings", icon: <MdSettings />, href: "/dashboard/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 btn btn-circle btn-ghost bg-white dark:bg-slate-800 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#0d131c] border-r border-slate-200 dark:border-slate-800 flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isOpen ? "flex" : "hidden lg:flex"}`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="text-primary text-2xl">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48">
              <path
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight">AutoPro</h1>
        </div>

        <nav className="flex-1 mt-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
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
            <p className="text-xs font-bold text-primary uppercase mb-1">
              Pro Member
            </p>
            <p className="text-[10px] text-slate-500">
              Next renewal: Oct 12, 2026
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
