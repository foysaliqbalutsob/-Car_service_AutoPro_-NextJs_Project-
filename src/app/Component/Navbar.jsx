// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { FaUser, FaSignInAlt, FaSun, FaMoon, FaBars } from "react-icons/fa";
// import { useTheme } from "@/context/ThemeContext";
// import { signOut } from "next-auth/react";
// import { useAuth } from "@/context/AuthContext";
// import { useAuthStore } from "@/app/api/Store/useUserStore";
// import LoginButton from "./LoginButton";

// // Custom NavLink component for active link styling
// const NavLink = ({ href, children, className = "" }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;
//   return (
//     <Link
//       href={href}
//       className={`${className} ${isActive ? "text-[#0d65f2] font-bold" : "text-sm font-medium hover:text-[#0d65f2]"} transition-colors`}
//     >
//       {children}
//     </Link>
//   );
// };

// export default function Navbar() {
//   const { theme, toggleTheme } = useTheme();
//   const { session } = useAuth();

//   const login = useAuthStore((state) => state.login);
//   const logoutStore = useAuthStore((state) => state.logout);

//   useEffect(() => {
//     if (session?.user) {
//       // সেশন থাকলে জাস্ট্যান্ডে ইউজার ডাটা সেট করুন
//       login(session.user, session.accessToken || null);
//     } else {
//       // সেশন না থাকলে জাস্ট্যান্ড ক্লিয়ার করুন
//       logoutStore();
//     }
//   }, [session, login, logoutStore]);

//   // ৫. লগআউট হ্যান্ডলার (NextAuth এবং Zustand দুইটাই ক্লিন করবে)
//   const handleLogout = async () => {
//     logoutStore(); // Zustand ক্লিন
//     await signOut(); // NextAuth ক্লিন
//   };

//   // লগইন করার পর যে এক্সট্রা ৫টি লিংক দেখাবে
//   const authLinks = (
//     <>
//       <li>
//         <NavLink href="/dashboard">Dashboard</NavLink>
//       </li>
//       <li>
//         <NavLink href="/my-bookings">My Bookings</NavLink>
//       </li>
//       <li>
//         <NavLink href="/services">Services</NavLink>
//       </li>
//       <li>
//         <NavLink href="/fleet">Fleet Management</NavLink>
//       </li>
//       <li>
//         <NavLink href="/Support">Support</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ecf4] dark:border-slate-700 bg-white dark:bg-slate-900 px-4 md:px-10 lg:px-20 py-3">
//       <div className="max-w-[1200px] mx-auto flex items-center justify-between">
//         {/* Left: Logo & Mobile Menu */}
//         <div className="flex items-center gap-3">
//           <div className="dropdown md:hidden">
//             <label
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <FaBars className="text-lg" />
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-dark-custom"
//             >
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               {session && authLinks}
//             </ul>
//           </div>

//           <Link href="/" className="flex items-center gap-2">
//             <div className="text-[#0d65f2]">
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 viewBox="0 0 48 48"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   clipRule="evenodd"
//                   d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
//                   fill="currentColor"
//                   fillRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//             <h1 className="text-xl font-bold tracking-tight hidden sm:block">
//               AutoPro
//             </h1>
//           </Link>
//         </div>

//         {/* Center: Desktop Nav Links (Only when Logged In) */}
//         <nav className="hidden md:flex items-center gap-6">
//           {session && (
//             <ul className="flex items-center gap-6 list-none">{authLinks}</ul>
//           )}
//         </nav>

//         {/* Right: Theme & Auth Actions */}
//         <div className="flex items-center gap-3">
//           {/* Theme Toggle */}
//           <button
//             className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
//             onClick={toggleTheme}
//           >
//             {theme === "light" ? (
//               <FaMoon className="text-slate-600" />
//             ) : (
//               <FaSun className="text-yellow-400" />
//             )}
//           </button>

//           {!session ? (
//             <div className="flex items-center gap-2">
//               <div className="text-sm font-bold hover:text-[#0d65f2] px-3 py-2 transition-colors">
//                 <LoginButton />
//               </div>
//               <Link
//                 href="/register"
//                 className="bg-[#0d65f2] hover:bg-[#0d65f2]/90 text-white px-3.5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-[#0d65f2]/20"
//               >
//                 Register
//               </Link>
//             </div>
//           ) : (
//             /* User Profile Dropdown */
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar border-2 border-[#0d65f2]"
//               >
//                 <div className="w-9 rounded-full">
//                   <img
//                     alt="User"
//                     src={
//                       session.user?.image ||
//                       "https://ui-avatars.com/api/?name=" + session.user?.name
//                     }
//                   />
//                 </div>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 dark:bg-slate-800 rounded-box w-52 border border-slate-100 dark:border-slate-700"
//               >
//                 <li className="px-4 py-2 border-b border-slate-100 dark:border-slate-700 mb-2">
//                   <p className="font-bold text-xs opacity-50">Signed in as</p>
//                   <p className="font-medium truncate">{session.user?.email}</p>
//                 </li>
//                 <li>
//                   <Link href="/profile">Profile</Link>
//                 </li>
//                 <li>
//                   <a>Settings</a>
//                 </li>
//                 <li>
//                   <button
//                     className="text-red-500 font-bold"
//                     onClick={() => signOut()}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaUser, FaSignInAlt, FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { signOut } from "next-auth/react";
import { useAuth } from "@/context/AuthContext";

import LoginButton from "./LoginButton";
import { useAuthStore } from "../api/Store/useUserStore";

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "text-[#0d65f2] font-bold" : "text-sm font-medium hover:text-[#0d65f2]"} transition-colors`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { session } = useAuth();
  
  // Zustand থেকে ডাটা নেওয়া
  const { user, isAuthenticated, login, logout: logoutStore } = useAuthStore();

  // NextAuth সেশন থাকলে Zustand সিঙ্ক করা
  useEffect(() => {
    if (session?.user && !user) {
      login(session.user, session.accessToken || null);
    }
  }, [session, login, user]);

  const handleLogout = async () => {
    logoutStore(); // Zustand ক্লিন
    await signOut(); // NextAuth ক্লিন
  };

  const authLinks = (
    <>
      <li><NavLink href="/dashboard">Dashboard</NavLink></li>
      <li><NavLink href="/MyBooking">My Bookings</NavLink></li>
      <li><NavLink href="/services">Services</NavLink></li>
      <li><NavLink href="/fleetManagement">Fleet Management</NavLink></li>
      <li><NavLink href="/Support">Support</NavLink></li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7ecf4] dark:border-slate-700 bg-white dark:bg-slate-900 px-4 md:px-10 lg:px-20 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="dropdown md:hidden">
            <label tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <FaBars className="text-lg" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              {isAuthenticated && authLinks}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <div className="text-[#0d65f2]">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48"><path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path></svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight hidden sm:block">AutoPro</h1>
          </Link>
        </div>

        {/* Center Nav: Based on Zustand isAuthenticated */}
        <nav className="hidden md:flex items-center gap-6">
          {isAuthenticated && (
            <ul className="flex items-center gap-6 list-none">{authLinks}</ul>
          )}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon className="text-slate-600" /> : <FaSun className="text-yellow-400" />}
          </button>

          {!isAuthenticated ? (
            <div className="flex items-center gap-2">
              <LoginButton />
              <Link href="/register" className="bg-[#0d65f2] text-white px-3.5 py-2.5 rounded-lg font-bold text-sm">Register</Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-[#0d65f2]">
                <div className="w-9 rounded-full">
                  {/* সেশনের পরিবর্তে Zustand-এর user.image ব্যবহার */}
                  <img
                    alt="User"
                    src={user?.image || user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}`}
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 dark:bg-slate-800 rounded-box w-52 border dark:border-slate-700">
                <li className="px-4 py-2 border-b dark:border-slate-700 mb-2">
                  <p className="font-bold text-xs opacity-50">Signed in as</p>
                  <p className="font-medium truncate">{user?.email}</p>
                </li>
                <li><Link href="/profile">Profile</Link></li>
                <li><a>Settings</a></li>
                <li>
                  <button className="text-red-500 font-bold" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}