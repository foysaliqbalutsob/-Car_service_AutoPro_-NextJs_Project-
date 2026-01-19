import { MdLocationOn, MdCall, MdSchedule, MdStar } from "react-icons/md";

export default function Contact() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-20" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MdLocationOn className="text-primary text-2xl mt-1" />
                <div>
                  <h6 className="font-bold dark:text-white">Our Location</h6>
                  <p className="text-slate-custom dark:text-gray-300">
                    123 Mechanic Lane, Tech City, TC 90210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdCall className="text-primary text-2xl mt-1" />
                <div>
                  <h6 className="font-bold dark:text-white">Phone Number</h6>
                  <p className="text-slate-custom dark:text-gray-300">
                    +1 (555) 012-3456
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdSchedule className="text-primary text-2xl mt-1" />
                <div>
                  <h6 className="font-bold dark:text-white">Opening Hours</h6>
                  <p className="text-slate-custom dark:text-gray-300">
                    Mon - Sat: 8:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden border border-slate-200 h-64 grayscale contrast-125">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz2zKNmnwgRTV97yyKIurTfQf7ZAKz4ZllwsaoR_8hdc54xGuZpNIWUP5As4cJ08tOQPAhy2XVA8cxmFO-KO2ZwZylDYLEkgUvXnG8_feR4jARTia4qku5yLFYGbv0-g_mwPTqBNa1fOGBEgRVRMTBOeWcjD18zzMcHjEOKjA8hZEMlN3wt02TIEyf0nH1Sruq5dKtVKPisMPOJF3i9_Xccjtq1oTEzbeZ-sV8lcpZZ7vIvjK8ZtgfyosA2b8JvI8MN0clwrY51eA"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white dark:bg-slate-800 p-10 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Quick Appointment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="input input-bordered w-full dark:bg-slate-700"
                  placeholder="Full Name"
                />
                <input
                  className="input input-bordered w-full dark:bg-slate-700"
                  placeholder="Phone"
                />
              </div>
              <select
                className="select select-bordered w-full dark:bg-slate-700"
                defaultValue=""
              >
                <option disabled value="">
                  Service Type
                </option>
                <option>General Maintenance</option>
                <option>Detailing & Wash</option>
                <option>Engine Repair</option>
              </select>
              <input
                className="input input-bordered w-full dark:bg-slate-700"
                placeholder="Vehicle Details (Make, Model)"
              />
              <textarea
                className="textarea textarea-bordered w-full dark:bg-slate-700"
                placeholder="Message (Optional)"
                rows="3"
              ></textarea>
              <button className="btn btn-primary w-full text-white font-bold py-4 rounded-lg shadow-lg">
                Book Appointment Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
