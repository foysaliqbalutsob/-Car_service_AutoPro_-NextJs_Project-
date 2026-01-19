"use client";
import React, { useEffect, useState } from "react";
import api from "@/app/lib/axios"; // Apnar banano axios instance
import { FaCar, FaPlus, FaTools, FaUser, FaIdCard, FaTrash, FaEdit, FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2"; // Toast ba Alert er jonno (Optional)

const FleetManagement = () => {
  const [vehicles, setVehicles] = useState([]);

  // 1. Data Fetching (GET)
  const fetchVehicles = async () => {
    try {
      const response = await api.get("/vehicles");
      setVehicles(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // 2. Data Posting (POST)
  const handleAddVehicle = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    const newVehicle = {
      id: `v${vehicles.length + 1}`, // Auto generate id
      model: form.model.value,
      year: form.year.value,
      license: form.license.value,
      status: form.status.value,
      image: form.image.value || "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400",
      milage: form.milage.value + " km",
      nextService: form.nextService.value + " km",
      driver: form.driver.value,
    };

    try {
      const res = await api.post("/vehicles", newVehicle);
      if (res.status === 201) {
        document.getElementById("add_modal").close(); // Modal bondho kora
        form.reset();
        fetchVehicles(); // List refresh kora
        Swal.fire("Success", "Vehicle Added!", "success");
      }
    } catch (error) {
      console.error("Error posting vehicle:", error);
    }
  };

  // handleDelete ফাংশনটি কম্পোনেন্টের ভেতরে যোগ করুন
const handleDelete = async (id) => {
  // ডিলিট করার আগে ইউজারের কনফার্মেশন নেওয়া ভালো
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        // Axios ইন্টারসেপ্টরের কারণে অটোমেটিক গ্লোবাল লোডার আসবে
        await api.delete(`/vehicles?id=${id}`);
        
        // লিস্ট থেকে সাথে সাথে মুছে ফেলার জন্য (ডাটা রিফ্রেশ)
        setVehicles((prev) => prev.filter((v) => v._id !== id));
        
        Swal.fire("Deleted!", "Vehicle has been removed.", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to delete vehicle", "error");
      }
    }
  });
};



  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-10">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FaCar className="text-primary" /> Fleet Management
          </h1>
          <p className="text-sm opacity-60">Total Vehicles: {vehicles.length}</p>
        </div>
        <button 
          className="btn btn-primary gap-2" 
          onClick={() => document.getElementById("add_modal").showModal()}
        >
          <FaPlus /> Add New Vehicle
        </button>
      </div>

      {/* Vehicle Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <div key={vehicle._id} className="card bg-base-100 shadow-xl border border-base-300">
              <figure className="h-48 relative">
                <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
                <div className={`absolute top-2 right-2 badge font-bold ${
                  vehicle.status === 'Active' ? 'badge-success text-white' : 'badge-warning'
                }`}>
                  {vehicle.status}
                </div>
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title font-bold">
                  {vehicle.model} <span className="text-xs opacity-50">({vehicle.year})</span>
                </h2>
                <div className="space-y-2 mt-2 text-sm">
                  <p className="flex items-center gap-2"><FaIdCard className="text-primary"/> {vehicle.license}</p>
                  <p className="flex items-center gap-2"><FaTools className="text-primary"/> Milage: {vehicle.milage}</p>
                  <p className="flex items-center gap-2"><FaUser className="text-primary"/> Driver: {vehicle.driver}</p>
                </div>
                <div className="card-actions justify-end mt-4">

<button 
  className="btn btn-square btn-sm btn-outline btn-error"
  onClick={() => handleDelete(vehicle._id)} // MongoDB-র _id পাস করা হচ্ছে
>
  <FaTrash />
</button>
                  <button className="btn btn-sm btn-primary">Details</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full opacity-50 py-20">No vehicles found.</p>
        )}
      </div>

      {/* --- ADD VEHICLE MODAL --- */}
      <dialog id="add_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl bg-base-100">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <FaPlus className="text-primary" /> Add New Vehicle to Fleet
          </h3>
          <form onSubmit={handleAddVehicle} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="model" placeholder="Vehicle Model (e.g. Toyota Camry)" className="input input-bordered w-full" required />
            <input type="number" name="year" placeholder="Year" className="input input-bordered w-full" required />
            <input type="text" name="license" placeholder="License Plate" className="input input-bordered w-full" required />
            <select name="status" className="select select-bordered w-full">
              <option value="Active">Active</option>
              <option value="In Service">In Service</option>
              <option value="Inactive">Inactive</option>
            </select>
            <input type="text" name="milage" placeholder="Current Milage (km)" className="input input-bordered w-full" required />
            <input type="text" name="nextService" placeholder="Next Service (km)" className="input input-bordered w-full" required />
            <input type="text" name="driver" placeholder="Driver Name" className="input input-bordered w-full" />
            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
            
            <div className="modal-action col-span-full">
              <button type="button" className="btn btn-ghost" onClick={() => document.getElementById("add_modal").close()}>Cancel</button>
              <button type="submit" className="btn btn-primary px-10">Save Vehicle</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FleetManagement;