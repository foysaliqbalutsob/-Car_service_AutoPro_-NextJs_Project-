"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d131c] text-white px-4 md:px-20 lg:px-40 py-12">
      <div className="max-w-[1200px] mx-auto border-t border-white/10 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#0d65f2]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    clipRule="evenodd" 
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" 
                    fill="currentColor" 
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h1 className="text-xl font-bold tracking-tight">AutoPro Services</h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Defining the future of car maintenance through technology and artisan craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-bold mb-6">Quick Links</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#services">Our Services</a></li>
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#packages">Maintenance Plans</a></li>
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#mechanics">Meet the Team</a></li>
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="font-bold mb-6">Support</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#">FAQ</a></li>
              <li><a className="hover:text-[#0d65f2] transition-colors" href="#contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="font-bold mb-6">Newsletter</h6>
            <p className="text-sm text-slate-400 mb-4">Get seasonal maintenance tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                className="bg-white/5 border border-white/10 rounded-lg text-sm flex-1 focus:ring-1 focus:ring-[#0d65f2] outline-none px-3 py-2" 
                placeholder="Your email" 
                type="email"
              />
              <button className="bg-[#0d65f2] hover:bg-[#0d65f2]/90 px-4 rounded-lg transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-white">send</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
       <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
  © {new Date().getFullYear()} AutoPro Services Inc. All rights reserved. Precision in every turn.
</div>
      </div>
    </footer>
  );
};

export default Footer;