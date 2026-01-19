
"use client";
import React, { useState, useEffect } from "react";
 // Zustand Store
import { useForm } from "react-hook-form";
import Link from "next/link";
import Swal from "sweetalert2";
import { uploadImageToImgBB } from "../lib/imageUplad";
import { useAuthStore } from "../api/Store/useUserStore";
import api from "../lib/axios";


export default function ProfilePage() {
  // Zustand থেকে ডাটা এবং ফাংশন নেওয়া
  const { user, isAuthenticated, updateProfile } = useAuthStore();
  
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // ইউজার ডাটা দিয়ে ফর্ম ফিলাপ করা
  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName || user.name?.split(' ')[0]);
      setValue("lastName", user.lastName || user.name?.split(' ')[1]);
      setValue("email", user.email);
      setValue("phone", user.phone || "");
      setValue("vehicleType", user.vehicleType || "");
      setImagePreview(user.image || user.avatar);
    }
  }, [user, setValue]);

  // ইমেজের প্রিভিউ দেখানো
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // টেম্পোরারি প্রিভিউ
    }
  };
const onSubmit = async (data) => {
  setLoading(true);
  try {
    let finalImageUrl = imagePreview;

    // ১. ImgBB তে ইমেজ আপলোড
    if (selectedFile) {
      const uploadedUrl = await uploadImageToImgBB(selectedFile);
      if (uploadedUrl) finalImageUrl = uploadedUrl;
    }

    // ২. Axios PATCH রিকোয়েস্ট (সঠিক পদ্ধতি)
    // আমরা সরাসরি ডাটা অবজেক্ট পাঠাবো
    const response = await api.patch("/users", {
      email: user.email, // ফিল্টার করার জন্য ইমেইল
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      vehicleType: data.vehicleType,
      image: finalImageUrl, // নতুন আপলোড করা ইমেজ ইউআরএল
    });

    // Axios এ সফল হলে response.status চেক করতে হয়
    if (response.status === 200) {
      // ৩. Zustand Store আপডেট করা
      updateProfile({
        ...data,
        name: `${data.firstName} ${data.lastName}`,
        image: finalImageUrl
      });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        timer: 2000,
        showConfirmButton: false,
      });
      setIsEditing(false);
    }
  } catch (error) {
    console.error("Update Error:", error.response?.data || error.message);
    Swal.fire({ 
      icon: "error", 
      title: "Update Failed", 
      text: error.response?.data?.message || "Cannot save in server" 
    });
  } finally {
    setLoading(false);
  }
};

  if (!isAuthenticated) return (
    <div className="flex h-screen items-center justify-center">
        <Link href="/login" className="btn btn-primary">Please Login</Link>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <button onClick={() => setIsEditing(!isEditing)} className="btn btn-outline btn-sm">
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="card bg-base-100 shadow-xl p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* প্রোফাইল ইমেজ সেকশন */}
          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary">
                <img src={imagePreview || "/default-avatar.png"} alt="Profile" />
              </div>
            </div>
            {isEditing && (
              <input type="file" onChange={handleImageChange} className="file-input file-input-bordered w-full max-w-xs" />
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label-text font-bold">First Name</label>
              <input {...register("firstName")} className="input input-bordered" readOnly={!isEditing} />
            </div>
            <div className="form-control">
              <label className="label-text font-bold">Last Name</label>
              <input {...register("lastName")} className="input input-bordered" readOnly={!isEditing} />
            </div>
          </div>

          <div className="form-control">
            <label className="label-text font-bold">Email</label>
            <input {...register("email")} className="input input-bordered opacity-60" readOnly />
          </div>

          <div className="form-control">
            <label className="label-text font-bold">Phone</label>
            <input {...register("phone")} className="input input-bordered" readOnly={!isEditing} />
          </div>

          {isEditing && (
  <button
    type="submit"
    className="btn btn-primary w-full gap-2"
    disabled={loading}
  >
    {loading ? (
      <>
        <span className="loading loading-spinner loading-sm"></span>
        Updating Profile...
      </>
    ) : (
      "Save Changes"
    )}
  </button>
)}
        </form>
      </div>
    </div>
  );
}