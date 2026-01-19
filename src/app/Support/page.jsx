"use client";
import React, { useState } from 'react';
import { 
  MdHelpOutline, MdHeadsetMic, MdChatBubbleOutline, 
  MdEmail, MdChevronRight, MdExpandMore, MdSend,
  MdLocationOn, MdPhoneInTalk
} from 'react-icons/md';

const Support = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "How do I track my vehicle's service progress?",
      answer: "You can track real-time progress in the 'Active Bookings' section. We also send SMS and email updates at each stage of the service."
    },
    {
      question: "Can I reschedule my appointment?",
      answer: "Yes, you can reschedule up to 24 hours before your appointment through the Active Bookings tab without any extra charges."
    },
    {
      question: "What is the warranty on spare parts?",
      answer: "All genuine parts installed by AutoPro come with a 12-month or 10,000km warranty, whichever comes first."
    }
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-6xl mx-auto w-full">
      {/* --- Header Section --- */}
      <div className="text-center space-y-2 py-6">
        <h2 className="text-3xl font-bold">How can we help you?</h2>
        <p className="text-slate-500">Search our knowledge base or contact our 24/7 support team.</p>
        <div className="max-w-xl mx-auto mt-6 relative">
          <input 
            type="text" 
            placeholder="Search for help (e.g. 'warranty', 'billing')..."
            className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
      </div>

      {/* --- Quick Contact Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
            <MdChatBubbleOutline size={24} />
          </div>
          <h4 className="font-bold mb-1">Live Chat</h4>
          <p className="text-sm text-slate-500 mb-4">Average response: 2 mins</p>
          <button className="text-primary text-sm font-bold flex items-center gap-1">Start Chat <MdChevronRight /></button>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-all">
            <MdHeadsetMic size={24} />
          </div>
          <h4 className="font-bold mb-1">Call Support</h4>
          <p className="text-sm text-slate-500 mb-4">24/7 Roadside assistance</p>
          <button className="text-green-600 text-sm font-bold flex items-center gap-1">Call Now <MdChevronRight /></button>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all">
            <MdEmail size={24} />
          </div>
          <h4 className="font-bold mb-1">Email Us</h4>
          <p className="text-sm text-slate-500 mb-4">For non-urgent inquiries</p>
          <button className="text-amber-600 text-sm font-bold flex items-center gap-1">Send Email <MdChevronRight /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* --- FAQ Section --- */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <MdHelpOutline className="text-primary" /> Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-sm">{faq.question}</span>
                  <MdExpandMore className={`transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="p-4 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- Support Ticket Form --- */}
        <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Submit a Ticket</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Subject</label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm p-2.5 outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Billing Issue</option>
                  <option>Technical Problem</option>
                  <option>Vehicle Service Query</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Urgency</label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm p-2.5 outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase">Message</label>
              <textarea 
                rows="4" 
                placeholder="Describe your issue in detail..."
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm p-2.5 outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              <MdSend /> Submit Ticket
            </button>
          </form>
        </section>
      </div>

      {/* --- Footer Info --- */}
      <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-sm">
            <MdLocationOn className="text-primary" size={24} />
          </div>
          <div>
            <p className="text-sm font-bold">Main Service Center</p>
            <p className="text-xs text-slate-500">123 Auto Plaza, New York, NY 10001</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-sm">
            <MdPhoneInTalk className="text-primary" size={24} />
          </div>
          <div>
            <p className="text-sm font-bold">+1 (555) 000-1234</p>
            <p className="text-xs text-slate-500">Mon - Sat: 8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;