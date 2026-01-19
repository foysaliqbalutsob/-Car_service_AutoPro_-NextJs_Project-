"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Swal from "sweetalert2";

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      fetchUserData();
    }
  }, [isAuthenticated, user]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`/api/users?email=${user.email}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        // Set form values
        setValue("firstName", data.firstName);
        setValue("lastName", data.lastName);
        setValue("email", data.email);
        setValue("phone", data.phone);
        setValue("vehicleType", data.vehicleType);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          ...data,
          image: imagePreview,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your profile has been updated successfully!",
          timer: 2000,
          showConfirmButton: false,
        });
        setIsEditing(false);
        fetchUserData(); // Refresh data
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message || "Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="mb-4">You need to be logged in to view this page.</p>
          <Link href="/login" className="btn btn-primary">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">User Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="btn btn-outline btn-primary"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              {/* Profile Image */}
              <div className="avatar mx-auto mb-6">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      imagePreview ||
                      userData?.image ||
                      user?.image ||
                      "/default-avatar.png"
                    }
                    alt="Profile"
                  />
                </div>
                {isEditing && (
                  <div className="mt-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                    />
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        First Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="input input-bordered"
                      readOnly={!isEditing}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Last Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="input input-bordered"
                      readOnly={!isEditing}
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="input input-bordered"
                    readOnly={!isEditing}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="input input-bordered"
                    readOnly={!isEditing}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Vehicle Type */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Vehicle Type
                    </span>
                  </label>
                  <select
                    {...register("vehicleType", {
                      required: "Vehicle type is required",
                    })}
                    className="select select-bordered"
                    disabled={!isEditing}
                  >
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck / Pickup</option>
                    <option value="van">Van</option>
                    <option value="coupe">Coupe / Sports Car</option>
                    <option value="electric">Electric / Hybrid</option>
                  </select>
                  {errors.vehicleType && (
                    <span className="text-red-500 text-sm">
                      {errors.vehicleType.message}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-between mt-6">
                  <Link href="/" className="btn btn-outline">
                    Back to Home
                  </Link>
                  {isEditing && (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
