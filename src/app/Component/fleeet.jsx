"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/app/lib/axios";
import { FaCar, FaArrowRight, FaTools, FaIdCard } from "react-icons/fa";

const FleetPreview = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await api.get("/vehicles");
        // শুধুমাত্র প্রথম ৫টি ডাটা নিচ্ছি
        setVehicles(response.data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaCar className="text-primary" /> Our Fleet
            </h2>
            <p className="text-sm opacity-60 mt-1">A quick look at our available vehicles</p>
          </div>
          <Link 
            href="/fleet" 
            className="group flex items-center gap-2 text-primary font-bold hover:underline transition-all"
          >
            See All Vehicles 
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal Scroll or Grid for 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <div 
                key={vehicle._id} 
                className="card bg-base-200 shadow-sm hover:shadow-md border border-base-300 transition-all overflow-hidden"
              >
                <figure className="h-32 relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.model} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute bottom-1 right-1 badge badge-xs badge-primary text-[10px]">
                    {vehicle.status}
                  </div>
                </figure>
                <div className="p-3">
                  <h3 className="font-bold text-sm truncate">{vehicle.model}</h3>
                  <div className="text-[11px] opacity-70 mt-1 space-y-1">
                    <p className="flex items-center gap-1">
                      <FaIdCard className="text-[10px]" /> {vehicle.license}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaTools className="text-[10px]" /> {vehicle.milage}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center py-10">
              <span className="loading loading-dots loading-md text-primary"></span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;