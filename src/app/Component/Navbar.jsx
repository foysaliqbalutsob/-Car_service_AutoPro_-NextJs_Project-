// // "use client";

// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // const Navbar = () => {
// //   const pathname = usePathname();

// //   const linkClass = (path) =>
// //     pathname === path
// //       ? "text-blue-600 font-semibold"
// //       : "text-gray-700 hover:text-blue-500";

// //   return (
// //     <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
// //       {/* Logo */}
// //       <Link href="/" className="text-xl font-bold text-blue-600">
// //         MyApp
// //       </Link>

// //       {/* Nav Links */}
// //       <div className="flex gap-6">
// //         <Link href="/" className={linkClass("/")}>
// //           Home
// //         </Link>

// //         <Link href="/login" className={linkClass("/login")}>
// //           Login
// //         </Link>

// //         <Link href="/register" className={linkClass("/register")}>
// //           Register
// //         </Link>
// //         <Link href="/" className="font-extrabold btn btn-primary text-5xl">
// //         service
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// "use client";
// import Link from "next/link";
// import { FaUser, FaSignInAlt, FaSun, FaMoon } from "react-icons/fa";
// import { useTheme } from "@/context/ThemeContext";
// import { signOut } from "next-auth/react";
// import { useAuth } from "@/context/AuthContext";

// export default function Navbar() {
//   const { theme, toggleTheme } = useTheme();
//   const { session } = useAuth();

//   return (
//     <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 ">
//       <div className="flex-1">
//         <Link href="/" className="btn btn-ghost normal-case text-xl">
//           MyApp
//         </Link>
//       </div>

//       <div className="flex-none gap-2">
//         <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
//           {theme === "light" ? <FaMoon /> : <FaSun />}
//         </button>

//         {!session ? (
//           <>
//             <Link href="/login" className="btn btn-outline btn-sm mx-2">
//               <FaSignInAlt className="mr-1" /> Login
//             </Link>
//             <Link href="/register" className="btn btn-primary btn-sm">
//               <FaUser className="mr-1" /> Register
//             </Link>
//           </>
//         ) : (
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="User Avatar"
//                   src={session.user?.image || "/default-avatar.png"}
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <Link href="/profile" className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </Link>
//               </li>
//               <li>
//                 <a>Settings</a>
//               </li>
//               <li>
//                 <a onClick={() => signOut()}>Logout</a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { FaUser, FaSignInAlt, FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { signOut } from "next-auth/react";
import { useAuth } from "@/context/AuthContext";
import LoginButton from "./LoginButton";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { session } = useAuth();

  // লগইন করার পর যে এক্সট্রা ৫টি লিংক দেখাবে
  const authLinks = (
    <>
      <li>
        <Link
          href="/dashboard"
          className="text-sm font-medium hover:text-[#0d65f2] transition-colors"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          href="/my-bookings"
          className="text-sm font-medium hover:text-[#0d65f2] transition-colors"
        >
          My Bookings
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="text-sm font-medium hover:text-[#0d65f2] transition-colors"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/fleet"
          className="text-sm font-medium hover:text-[#0d65f2] transition-colors"
        >
          Fleet Management
        </Link>
      </li>
      <li>
        <Link
          href="/Support"
          className="text-sm font-medium hover:text-[#0d65f2] transition-colors"
        >
          Support
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ecf4] dark:border-slate-700 bg-white dark:bg-slate-900 px-4 md:px-10 lg:px-20 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="dropdown md:hidden">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <FaBars className="text-lg" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-dark-custom"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              {session && authLinks}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <div className="text-[#0d65f2]">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight hidden sm:block">
              AutoPro
            </h1>
          </Link>
        </div>

        {/* Center: Desktop Nav Links (Only when Logged In) */}
        <nav className="hidden md:flex items-center gap-6">
          {session && (
            <ul className="flex items-center gap-6 list-none">{authLinks}</ul>
          )}
        </nav>

        {/* Right: Theme & Auth Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <FaMoon className="text-slate-600" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>

          {!session ? (
            <div className="flex items-center gap-2">
              <div
               
                className="text-sm font-bold hover:text-[#0d65f2] px-3 py-2 transition-colors"
              >
                       <LoginButton />
              </div>
              <Link
                href="/register"
                className="bg-[#0d65f2] hover:bg-[#0d65f2]/90 text-white px-3.5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-[#0d65f2]/20"
              >
                Register
              </Link>
            </div>
          ) : (
            /* User Profile Dropdown */
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-[#0d65f2]"
              >
                <div className="w-9 rounded-full">
                  <img
                    alt="User"
                    src={
                      session.user?.image ||
                      "https://ui-avatars.com/api/?name=" + session.user?.name
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 dark:bg-slate-800 rounded-box w-52 border border-slate-100 dark:border-slate-700"
              >
                <li className="px-4 py-2 border-b border-slate-100 dark:border-slate-700 mb-2">
                  <p className="font-bold text-xs opacity-50">Signed in as</p>
                  <p className="font-medium truncate">{session.user?.email}</p>
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => signOut()}
                  >
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
