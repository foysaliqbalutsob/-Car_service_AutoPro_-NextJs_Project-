import React from "react";

const Banner = () => {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-4 md:py-8">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="relative rounded-2xl md:rounded-xl overflow-hidden min-h-[450px] md:min-h-[520px] flex flex-col justify-center px-6 md:px-16 shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvquiY3V-9jF_ftIaDPbLU_imftlyVtPArMG93ZiDRpuzoujI0_GdQB_uwGphTG0EMnOozKeMmZXNQvn4oIIo_pcc9-8QNC8ye7U7PD0YG0hx0ZfSOhNutHBXoacwW9t-nCjtvbBi6cfXpxKqGq0U3LZOOwaLuYR85vX9llRgRHo2RXrbtyZSC1Q24iZuVQreh2eyJR6jE_4lPMCux7vBxUsW5OI1OoFjycbnL3nb6SNbuVu_rfW7B8wHhPNNL8gA4no5MlZwGqts")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content Wrapper */}
          <div className="max-w-2xl space-y-6 z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-[1.2] md:leading-[1.1] tracking-tight">
              Premium Care for <br className="hidden sm:block" />
              <span className="text-[#0d65f2]">Every</span> Vehicle
            </h2>

            <p className="text-base md:text-lg text-white/90 font-normal max-w-lg leading-relaxed">
              From precision detailing to expert mechanical repairs, we keep
              your car performing at its peak with factory-grade standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#0d65f2] hover:bg-[#0d65f2]/90 text-white px-8 py-4 rounded-lg font-bold text-base transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
                Schedule Service
              </button>

              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-base transition-all transform hover:scale-105 active:scale-95">
                View Pricing
              </button>
            </div>
          </div>

          {/* Decorative Overlay for extra depth (Optional) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
