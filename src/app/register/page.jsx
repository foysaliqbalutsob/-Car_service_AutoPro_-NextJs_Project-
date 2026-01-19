"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // toggle state
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Auto-login after successful registration
        const signInResult = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (signInResult?.ok) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: `Welcome, ${data.firstName} ${data.lastName}`,
            timer: 2000,
            showConfirmButton: false,
          });
          // Redirect to homepage after successful registration and login
          setTimeout(() => {
            router.push("/");
            router.refresh(); // Refresh to update session
          }, 1500);
        } else {
          // Registration successful but login failed
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "Please log in with your credentials",
            timer: 2000,
            showConfirmButton: false,
          });
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
      } else {
        throw new Error(result.error || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-base-100 relative overflow-hidden min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#1973f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Registration Card */}
      <div className="layout-content-container flex flex-col max-w-[640px] w-full bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 relative z-10">
        {/* Header */}
        <div className="pt-10 pb-6 px-8 md:px-12 text-center">
          <h1 className="text-slate-900 dark:text-white font-display text-4xl font-bold leading-tight tracking-tight">
            Join the Fleet
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal mt-2">
            Create your vehicle profile to start managing your assets today.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 md:px-12 pb-12 space-y-5"
        >
          {/* Name Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-white text-sm font-semibold mb-1.5 font-display uppercase tracking-wider">
                First Name
              </span>
              <input
                type="text"
                placeholder="Enter first name"
                className={`form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all ${errors.firstName && "border-red-500"}`}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </label>

            <label className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-white text-sm font-semibold mb-1.5 font-display uppercase tracking-wider">
                Last Name
              </span>
              <input
                type="text"
                placeholder="Enter last name"
                className={`form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all ${errors.lastName && "border-red-500"}`}
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </label>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-white text-sm font-semibold mb-1.5 font-display uppercase tracking-wider">
                Email Address
              </span>
              <input
                type="email"
                placeholder="name@company.com"
                className={`form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all ${errors.email && "border-red-500"}`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>

            <label className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-white text-sm font-semibold mb-1.5 font-display uppercase tracking-wider">
                Phone Number
              </span>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className={`form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all ${errors.phone && "border-red-500"}`}
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>

          {/* Password */}
          <label className="flex flex-col w-full relative">
            <span className="text-slate-900 dark:text-white text-sm font-semibold mb-1.5 font-display uppercase tracking-wider">
              Password
            </span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                className={`form-input w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all pr-12 ${errors.password && "border-red-500"}`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </label>

          {/* Vehicle Type */}
          <label className="flex flex-col w-full">
            <span className="text-slate-900 dark:text-white text-sm font-semibold mb-1.5 font-display uppercase tracking-wider">
              Primary Vehicle Type
            </span>
            <select
              className={`form-select w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all ${errors.vehicleType && "border-red-500"}`}
              {...register("vehicleType", {
                required: "Vehicle type is required",
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Select vehicle type
              </option>
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
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all font-display text-lg uppercase tracking-widest flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading && <FaSpinner className="animate-spin" />}
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <div className="bg-slate-50 dark:bg-slate-800/50 py-6 text-center border-t border-slate-100 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?
            <a
              href="/login"
              className="text-primary font-bold hover:underline ml-1"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
