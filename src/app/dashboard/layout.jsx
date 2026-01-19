
 // আলাদা হেডার কম্পোনেন্ট

import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f5f7f8] dark:bg-[#101722]">
      {/* ফিক্সড সাইডবার */}
      <Sidebar />
      
      {/* মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 lg:ml-64 flex flex-col">
        {/* শেয়ারড হেডার (সার্চ বার, প্রোফাইল ড্রপডাউন সহ) */}
       
        
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}