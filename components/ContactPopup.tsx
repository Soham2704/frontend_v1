import React from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPopup({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full transition-colors"
        >
          <X size={18} />
        </button>
        <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Contact Us</h3>
        <p className="text-slate-500 mb-6 text-sm">We'd love to hear from you. Get in touch with our team.</p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
            <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
              <Mail size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Email</div>
              <a href="mailto:hello@truckdispatchpro.com" className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors">hello@truckdispatchpro.com</a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
            <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
              <Phone size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Phone</div>
              <a href="tel:+18005550199" className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors">+1 (800) 555-0199</a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
            <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
              <MapPin size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Office</div>
              <span className="text-sm font-semibold text-slate-800 block">100 Tech Corridor, Suite 400</span>
              <span className="text-sm text-slate-500">Austin, TX 78701</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
