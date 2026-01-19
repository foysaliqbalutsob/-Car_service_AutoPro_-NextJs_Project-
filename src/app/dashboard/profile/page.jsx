"use client";
import React, { useState } from 'react';
import { 
  MdPhotoCamera, MdNotifications, MdDelete, 
  MdAdd, MdSecurity, MdPayment, MdPerson,
  MdFileDownload
} from 'react-icons/md';

const Settings = () => {
  // Toggle states এর জন্য সিম্পল স্টেট
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsNotif, setSmsNotif] = useState(true);

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
      
      {/* --- Profile Section --- */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg">Profile Information</h3>
          <p className="text-sm text-slate-500">Update your photo and personal details.</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 border-4 border-slate-50 dark:border-slate-800">
                <img 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWh9r6z6yw-ShndvFwseo2WNLWBtCPxmHtQT31RiXTAKDvHh_M44utE0cGPfr7-QRHivNwh_vbZ_IAW3_i59LFhDee1f1HV8XTuOj8FyIG9bvon5WoJRWuvK24HjFfcXEqgIKtVny6XDqvNxOVfWmBQT8IFEWyyyzMgFatlZWoD1yp_PII8d7kJpF8H3raBsUJTUwB-LJodyfscP8hfpvwDYQ1_WfE-8NkHEpyT9FFgJrc6QSzwZ5oXPlr-W0iIdDI4MaoxGhGLA"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                <MdPhotoCamera size={18} />
              </button>
            </div>
            <div>
              <h4 className="font-bold text-lg">Robert James</h4>
              <p className="text-sm text-slate-500 mb-2">robert.james@example.com</p>
              <button className="text-xs font-bold text-primary hover:underline">Remove photo</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Full Name</label>
              <input 
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary outline-none p-2.5" 
                type="text" 
                defaultValue="Robert James"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email Address</label>
              <input 
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary outline-none p-2.5" 
                type="email" 
                defaultValue="robert.james@example.com"
              />
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Save Changes
            </button>
          </div>
        </div>
      </section>

      {/* --- Notifications Section --- */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg">Notification Preferences</h3>
          <p className="text-sm text-slate-500">Control how you receive alerts and updates.</p>
        </div>
        <div className="p-6 divide-y divide-slate-100 dark:divide-slate-800">
          {/* Email Alert Toggle */}
          <div className="py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">Email Alerts</p>
              <p className="text-xs text-slate-500">Receive service confirmations and receipts via email.</p>
            </div>
            <button 
              onClick={() => setEmailAlerts(!emailAlerts)}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${emailAlerts ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${emailAlerts ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
          
          {/* SMS Toggle */}
          <div className="py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">SMS Notifications</p>
              <p className="text-xs text-slate-500">Get real-time updates about your vehicle's status.</p>
            </div>
            <button 
              onClick={() => setSmsNotif(!smsNotif)}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${smsNotif ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${smsNotif ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </section>

      {/* --- Billing Section --- */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">Billing & Payments</h3>
            <p className="text-sm text-slate-500">Manage your payment methods.</p>
          </div>
          <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-xs hover:bg-primary/20 transition-colors">
            Manage Subscription
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded flex items-center justify-center font-bold text-[10px] shadow-sm">VISA</div>
                <div>
                  <p className="text-sm font-bold">•••• 4242</p>
                  <p className="text-xs text-slate-500">Expires 12/26</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-red-500 transition-colors">
                <MdDelete size={20} />
              </button>
            </div>
            <button className="p-4 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-slate-500 hover:border-primary hover:text-primary transition-all">
              <MdAdd />
              <span className="text-sm font-bold">Add New Card</span>
            </button>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Recent Invoices</h4>
            <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl">
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-sm font-medium">Aug 12, 2024</td>
                    <td className="p-4 text-sm text-slate-500">Full Detailing</td>
                    <td className="p-4 text-sm font-bold">$129.00</td>
                    <td className="p-4 text-right">
                      <button className="text-primary hover:underline text-xs font-bold inline-flex items-center gap-1">
                        <MdFileDownload size={16}/> Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* --- Security Section --- */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-10">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg">Security Settings</h3>
          <p className="text-sm text-slate-500">Keep your account secure.</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Change Password</h4>
              <input 
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm p-2.5 outline-none focus:ring-2 focus:ring-primary/20" 
                placeholder="Current Password" 
                type="password" 
              />
              <input 
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm p-2.5 outline-none focus:ring-2 focus:ring-primary/20" 
                placeholder="New Password" 
                type="password" 
              />
              <button className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg font-bold text-xs hover:bg-slate-200 transition-colors">
                Update Password
              </button>
            </div>
            <div className="space-y-4 p-4 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <MdSecurity className="text-amber-600" /> Two-Factor Authentication
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Add an extra layer of security to your account by requiring a code from your phone.
              </p>
              <button className="text-primary font-bold text-xs hover:underline uppercase tracking-wider">
                Enable 2FA Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;