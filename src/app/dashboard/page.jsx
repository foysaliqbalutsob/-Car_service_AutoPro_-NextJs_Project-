
import Link from "next/link";
import LiveStatus from "./LiveStatus";
import ServiceTable from "./ServiceTable";
import Sidebar from "./Sidebar";
import StatCards from "./StatCards";
import VehicleGrid from "./VehicleGrid";

// export default function DashboardPage() {

//   const dashboardData = {
//     stats: { totalVehicles: 2, activeServices: 1, points: "1,250" },
//     liveStatus: {
//       type: "Detailing",
//       vehicle: "2021 BMW M4",
//       eta: "4:30 PM",
//       phase: "Cleaning Phase",
//       progress: 75,
//       mechanic: "Sarah Williams"
//     },
//     vehicles: [
//       { model: "2021 BMW M4", vin: "**** 4920", lastService: "Aug 12, 2024", statusText: "GOOD HEALTH", statusColor: "bg-green-500", image: "/bmw.jpg" },
//       { model: "2019 Audi Q7", vin: "**** 8102", lastService: "Feb 05, 2024", statusText: "DUE SOON", statusColor: "bg-amber-500", image: "/audi.jpg" }
//     ]
//   };

//   return (
//     <div className="flex min-h-screen bg-[#f5f7f8] dark:bg-[#101722]">
//       <Sidebar />
      
//       <main className="flex-1 lg:ml-64 p-4 md:p-8 space-y-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-2xl font-bold">Welcome back, Robert!</h1>
//             <p className="text-slate-500 text-sm">Your vehicles are in good hands today.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href={"/dashboard/activeBooking"} className="btn btn-primary shadow-lg shadow-primary/20">+ Book New Service</Link>
//           </div>
//         </div>

//         <StatCards data={dashboardData.stats} />

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-1">
//             <LiveStatus status={dashboardData.liveStatus} />
//           </div>
//           <div className="lg:col-span-2">
//             <VehicleGrid vehicles={dashboardData.vehicles} />
//           </div>
//         </div>

//         <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
//             <h2 className="text-xl font-bold">Recent Service History</h2>
//             <button className="text-sm text-primary font-medium">View All</button>
//           </div>
//           <ServiceTable /> 
//         </div>
//       </main>
//     </div>
//   );
// }


export default function DashboardPage() {
  const dashboardData = {
    stats: { totalVehicles: 2, activeServices: 1, points: "1,250" },
    liveStatus: {
      type: "Detailing",
      vehicle: "2021 BMW M4",
      eta: "4:30 PM",
      phase: "Cleaning Phase",
      progress: 75,
      mechanic: "Sarah Williams"
    },
    vehicles: [
      { model: "2021 BMW M4", vin: "**** 4920", lastService: "Aug 12, 2024", statusText: "GOOD HEALTH", statusColor: "bg-green-500", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400" },
      { model: "2019 Audi Q7", vin: "**** 8102", lastService: "Feb 05, 2024", statusText: "DUE SOON", statusColor: "bg-amber-500", image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=400" }
    ]
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section: মোবাইলে কলাম আর বড় স্ক্রিনে রো */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            Welcome back, Robert!
          </h1>
          <p className="text-slate-500 text-xs md:text-sm">
            Your vehicles are in good hands today.
          </p>
        </div>
        <Link 
          href="/dashboard/activeBooking" 
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20 text-center w-full sm:w-auto"
        >
          + Book New Service
        </Link>
      </div>

      {/* Stats Cards: এর ভেতরে grid-cols-1 md:grid-cols-3 থাকা উচিত */}
      <StatCards data={dashboardData.stats} />

      {/* Main Grid: মোবাইলে সব নিচে নিচে আসবে */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-1 w-full">
          <LiveStatus status={dashboardData.liveStatus} />
        </div>
        <div className="lg:col-span-2 w-full">
          <VehicleGrid vehicles={dashboardData.vehicles} />
        </div>
      </div>

      {/* History Table: মোবাইলে টেবিল ওভারফ্লো হ্যান্ডেল করা জরুরি */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h2 className="text-lg md:text-xl font-bold">Recent Service History</h2>
          <button className="text-xs md:text-sm text-primary font-medium hover:underline">View All</button>
        </div>
        
        {/* টেবিলটি রেসপন্সিভ করতে ServiceTable এর ভেতরে overflow-x-auto ক্লাসটি দিন */}
        <div className="overflow-x-auto w-full">
           <ServiceTable /> 
        </div>
      </div>
    </div>
  );
}