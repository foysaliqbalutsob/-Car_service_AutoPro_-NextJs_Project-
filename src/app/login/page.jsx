"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success alert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome, ${data.email}`,
        timer: 2000,
        showConfirmButton: false,
      });

      console.log("Login Data:", data);
    } catch (error) {
      console.error(error);

      // Error alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAACjlAk9o9O-WYu2R1AY_V2jEzUk_zkDQZ3iTbwY3KZhHE0BBPku5IOwqid4tEeO2t3vE5ldShItUSbLKzcz3dkoJeLKBP4k63Dzj97ZluK95KhovPS2u_STmrhfBJTAhFJLhF56mc_bMlnsRUKvlMXRpab7upoMVo1nghqjfc1x8aH7Rn2cWEw4PEWzBroepEd5Krt3BgHc50_eYyCyLj1VKC0_0GRdwHyvjmU37mOJr0n4in55wJIMP1WgvV7Qhhgivox1GO5MM')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* Login Container */}
      <div className="relative z-10 flex flex-col w-full max-w-[480px] p-8 m-4 rounded-xl glass-panel shadow-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 pb-4">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-symbols-outlined text-white text-2xl">
              directions_car
            </span>
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">
            AutoFlow
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col px-4 pb-6">
          <h1 className="text-base-content text-[32px] font-bold leading-tight pb-1">
            Welcome Back
          </h1>
          <p className="text-base-content/70 text-base">
            Log in to manage your fleet and performance.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-4"
        >
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-base-content text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`form-input w-full rounded-lg p-4 text-white bg-white/5 border border-white/10 placeholder:text-white/30 focus:ring-2 focus:ring-primary focus:outline-none ${errors.email && "border-red-500"}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`form-input w-full rounded-lg p-4 text-white bg-white/5 border border-white/10 placeholder:text-white/30 focus:ring-2 focus:ring-primary focus:outline-none ${errors.password && "border-red-500"}`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg flex justify-center items-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading && <FaSpinner className="animate-spin" />}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-base-content/60 text-sm pt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-primary font-semibold hover:underline"
          >
            Register now
          </a>
        </p>
      </div>
    </div>
  );
}
