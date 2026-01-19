"use client";
import React, { useState } from 'react';
import { 
  MdSearch, MdNotifications, MdSupportAgent, MdCall, 
  MdDescription, MdAddCircle, MdImage, MdAttachFile, 
  MdSend, MdZoomIn 
} from 'react-icons/md';

const Message = () => {
  const [activeChat, setActiveChat] = useState('sarah');

  return (
    <div className="flex h-[calc(100vh-120px)] overflow-hidden bg-white dark:bg-[#0d131c] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      
      {/* --- Chat List Sidebar --- */}
      <div className="w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-slate-50/50 dark:bg-slate-900/20">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <input 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
              placeholder="Search chats..." 
              type="text"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Active Chat Item */}
          <div 
            onClick={() => setActiveChat('sarah')}
            className={`p-4 flex gap-4 cursor-pointer transition-colors border-l-4 ${activeChat === 'sarah' ? 'bg-white dark:bg-slate-800 border-primary shadow-sm' : 'border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/40'}`}
          >
            <div className="relative flex-shrink-0">
              <img alt="Sarah" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWh9r6z6yw-ShndvFwseo2WNLWBtCPxmHtQT31RiXTAKDvHh_M44utE0cGPfr7-QRHivNwh_vbZ_IAW3_i59LFhDee1f1HV8XTuOj8FyIG9bvon5WoJRWuvK24HjFfcXEqgIKtVny6XDqvNxOVfWmBQT8IFEWyyyzMgFatlZWoD1yp_PII8d7kJpF8H3raBsUJTUwB-LJodyfscP8hfpvwDYQ1_WfE-8NkHEpyT9FFgJrc6QSzwZ5oXPlr-W0iIdDI4MaoxGhGLA" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold truncate">Sarah Williams</h4>
                <span className="text-[10px] text-slate-400">2:45 PM</span>
              </div>
              <p className="text-xs text-primary font-medium mb-1 truncate">Head Mechanic</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">I've attached a photo of the brake pads...</p>
            </div>
          </div>

          {/* Other Chat Items */}
          <div className="p-4 hover:bg-slate-100 dark:hover:bg-slate-800/40 flex gap-4 cursor-pointer transition-colors border-b border-slate-100 dark:border-slate-800/50">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
              <MdSupportAgent className="text-slate-400 text-2xl" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold truncate">Front Desk</h4>
                <span className="text-[10px] text-slate-400">11:20 AM</span>
              </div>
              <p className="text-xs text-slate-400 font-medium mb-1 truncate">Service Inquiry</p>
              <p className="text-xs text-slate-500 truncate">Booking confirmed for Tuesday.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Chat Window --- */}
      <div className="flex-1 flex flex-col bg-white dark:bg-[#0d131c]">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img alt="Sarah" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWh9r6z6yw-ShndvFwseo2WNLWBtCPxmHtQT31RiXTAKDvHh_M44utE0cGPfr7-QRHivNwh_vbZ_IAW3_i59LFhDee1f1HV8XTuOj8FyIG9bvon5WoJRWuvK24HjFfcXEqgIKtVny6XDqvNxOVfWmBQT8IFEWyyyzMgFatlZWoD1yp_PII8d7kJpF8H3raBsUJTUwB-LJodyfscP8hfpvwDYQ1_WfE-8NkHEpyT9FFgJrc6QSzwZ5oXPlr-W0iIdDI4MaoxGhGLA" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
            </div>
            <div>
              <h3 className="text-sm font-bold">Sarah Williams</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Head Mechanic</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] text-green-500 font-medium">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <MdCall /> Call
            </button>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
              <MdDescription /> View Order Details
            </button>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 dark:bg-slate-900/10 custom-scrollbar">
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">Today</span>
          </div>

          {/* Received Message */}
          <div className="flex items-start gap-3 max-w-[80%]">
            <img className="w-8 h-8 rounded-full flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWh9r6z6yw-ShndvFwseo2WNLWBtCPxmHtQT31RiXTAKDvHh_M44utE0cGPfr7-QRHivNwh_vbZ_IAW3_i59LFhDee1f1HV8XTuOj8FyIG9bvon5WoJRWuvK24HjFfcXEqgIKtVny6XDqvNxOVfWmBQT8IFEWyyyzMgFatlZWoD1yp_PII8d7kJpF8H3raBsUJTUwB-LJodyfscP8hfpvwDYQ1_WfE-8NkHEpyT9FFgJrc6QSzwZ5oXPlr-W0iIdDI4MaoxGhGLA" alt="Sarah" />
            <div>
              <div className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed shadow-sm">
                Hi Robert! I'm currently working on your BMW M4's detailing. I noticed something while inspecting the front wheels.
              </div>
              <span className="text-[10px] text-slate-400 mt-1 inline-block">2:30 PM</span>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex items-start justify-end gap-3 ml-auto max-w-[80%]">
            <div>
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed shadow-lg shadow-primary/10">
                Thanks for the update Sarah. What did you find?
              </div>
              <span className="text-[10px] text-slate-400 mt-1 text-right block">2:32 PM</span>
            </div>
            <img className="w-8 h-8 rounded-full flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWh9r6z6yw-ShndvFwseo2WNLWBtCPxmHtQT31RiXTAKDvHh_M44utE0cGPfr7-QRHivNwh_vbZ_IAW3_i59LFhDee1f1HV8XTuOj8FyIG9bvon5WoJRWuvK24HjFfcXEqgIKtVny6XDqvNxOVfWmBQT8IFEWyyyzMgFatlZWoD1yp_PII8d7kJpF8H3raBsUJTUwB-LJodyfscP8hfpvwDYQ1_WfE-8NkHEpyT9FFgJrc6QSzwZ5oXPlr-W0iIdDI4MaoxGhGLA" alt="Me" />
          </div>

          {/* Image Message */}
          <div className="flex items-start gap-3 max-w-[80%]">
            <img className="w-8 h-8 rounded-full flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWh9r6z6yw-ShndvFwseo2WNLWBtCPxmHtQT31RiXTAKDvHh_M44utE0cGPfr7-QRHivNwh_vbZ_IAW3_i59LFhDee1f1HV8XTuOj8FyIG9bvon5WoJRWuvK24HjFfcXEqgIKtVny6XDqvNxOVfWmBQT8IFEWyyyzMgFatlZWoD1yp_PII8d7kJpF8H3raBsUJTUwB-LJodyfscP8hfpvwDYQ1_WfE-8NkHEpyT9FFgJrc6QSzwZ5oXPlr-W0iIdDI4MaoxGhGLA" alt="Sarah" />
            <div className="space-y-2">
              <div className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-4 rounded-2xl rounded-tl-none text-sm shadow-sm">
                Your front brake pads are getting thin. Look at this:
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm max-w-xs group relative cursor-pointer">
                <img className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvquiY3V-9jF_ftIaDPbLU_imftlyVtPArMG93ZiDRpuzoujI0_GdQB_uwGphTG0EMnOozKeMmZXNQvn4oIIo_pcc9-8QNC8ye7U7PD0YG0hx0ZfSOhNutHBXoacwW9t-nCjtvbBi6cfXpxKqGq0U3LZOOwaLuYR85vX9llRgRHo2RXrbtyZSC1Q24iZuVQreh2eyJR6jE_4lPMCux7vBxUsW5OI1OoFjycbnL3nb6SNbuVu_rfW7B8wHhPNNL8gA4no5MlZwGqts" alt="Brake pad" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MdZoomIn className="text-white text-3xl" />
                </div>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 inline-block">2:45 PM</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-end gap-3 bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl">
            <div className="flex gap-1 mb-1 px-1">
              <button className="p-2 text-slate-500 hover:text-primary transition-colors"><MdAddCircle size={20}/></button>
              <button className="p-2 text-slate-500 hover:text-primary transition-colors"><MdImage size={20}/></button>
              <button className="p-2 text-slate-500 hover:text-primary transition-colors"><MdAttachFile size={20}/></button>
            </div>
            <textarea 
              className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-3 text-sm max-h-32 outline-none" 
              placeholder="Type your message here..." 
              rows="1"
            ></textarea>
            <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex-shrink-0 mb-1">
              <MdSend size={20} />
            </button>
          </div>
          <div className="flex gap-4 mt-2 px-4">
            <button className="text-[10px] font-bold text-slate-400 hover:text-primary uppercase tracking-widest flex items-center gap-1">
              <MdDescription size={14} /> Diagnostic_Report.pdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;