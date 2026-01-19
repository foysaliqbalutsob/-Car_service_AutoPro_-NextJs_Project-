"use client";
import React, { useState, useEffect } from "react";
import api from "@/app/lib/axios"; // আপনার Axios instance
import { FaCalendarCheck, FaClock, FaCheckCircle, FaTimesCircle, FaCarSide, FaEllipsisV } from "react-icons/fa";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  // ডাটা ফেচিং (এখানে আপনার এপিআই কল হবে)
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get("/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    // fetchBookings(); // এপিআই রেডি হলে আনকমেন্ট করুন
  }, []);

  // স্যাম্পল ডাটা (ডিজাইন দেখার জন্য)
  const sampleBookings = [
    {
      id: "BK-101",
      service: "Full Car Wash",
      vehicle: "Toyota Camry (DH-A-1234)",
      date: "22 Jan, 2026",
      time: "10:30 AM",
      status: "Confirmed",
      price: "$45.00"
    },
    {
      id: "BK-102",
      service: "Engine Checkup",
      vehicle: "Honda Civic (CH-B-5612)",
      date: "25 Jan, 2026",
      time: "02:15 PM",
      status: "Pending",
      price: "$120.00"
    },
    {
      id: "BK-103",
      service: "Oil Change",
      vehicle: "Ford Fusion (DH-C-9901)",
      date: "15 Jan, 2026",
      time: "09:00 AM",
      status: "Completed",
      price: "$60.00"
    }
  ];

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FaCalendarCheck className="text-primary" /> My Bookings
            </h1>
            <p className="text-sm opacity-60">Track and manage your service appointments</p>
          </div>
          <div className="stats shadow bg-base-100 stats-vertical lg:stats-horizontal">
            <div className="stat py-2 px-4">
              <div className="stat-title text-xs">Total Bookings</div>
              <div className="stat-value text-lg text-primary">{sampleBookings.length}</div>
            </div>
            <div className="stat py-2 px-4">
              <div className="stat-title text-xs">Pending</div>
              <div className="stat-value text-lg text-warning">1</div>
            </div>
          </div>
        </div>

        {/* Table View for Desktop / Card View for Mobile */}
        <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-xl border border-base-300">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-base-200">
              <tr>
                <th className="font-bold">Booking Info</th>
                <th className="font-bold">Vehicle & Service</th>
                <th className="font-bold">Date & Time</th>
                <th className="font-bold">Status</th>
                <th className="font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {sampleBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-base-200/50 transition-colors">
                  <td>
                    <div className="font-bold text-primary">{booking.id}</div>
                    <div className="text-xs opacity-50">{booking.price}</div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10 bg-primary/10 flex items-center justify-center">
                          <FaCarSide className="text-primary text-xl ml-2" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{booking.service}</div>
                        <div className="text-xs opacity-60">{booking.vehicle}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col text-sm">
                      <span className="flex items-center gap-1"><FaCalendarCheck className="text-[10px]" /> {booking.date}</span>
                      <span className="flex items-center gap-1 opacity-60"><FaClock className="text-[10px]" /> {booking.time}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`badge badge-sm font-semibold py-3 px-4 ${
                      booking.status === "Confirmed" ? "badge-success text-white" : 
                      booking.status === "Pending" ? "badge-warning" : "badge-ghost"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <th className="text-right">
                    <div className="dropdown dropdown-left">
                      <label tabIndex={0} role="button" className="btn btn-ghost btn-xs">
                        <FaEllipsisV />
                      </label>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 text-sm">
                        <li><a>View Details</a></li>
                        <li className="text-error"><a>Cancel Booking</a></li>
                      </ul>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Friendly Message */}
        <div className="mt-4 md:hidden text-center text-xs opacity-50">
          * Swipe left to see all details
        </div>
      </div>
    </div>
  );
};

export default MyBooking;