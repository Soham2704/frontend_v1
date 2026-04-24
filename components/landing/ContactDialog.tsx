"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

type DialogType = "demo" | "trial";

interface ContactDialogProps {
  open: boolean;
  type: DialogType;
  onClose: () => void;
}

export default function ContactDialog({ open, type, onClose }: ContactDialogProps) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] max-h-[800px] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-white z-10 shrink-0">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {type === "demo" ? "Book a Demo" : "Start Your Free Trial"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Schedule a time with our team below.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body - Calendly Iframe */}
        <div className="flex-1 w-full bg-slate-50 overflow-hidden relative">
          <iframe
            src="https://calendly.com/ashakya-primustechnologiesai/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            className="absolute inset-0"
            title="Schedule a meeting"
          />
        </div>
      </div>
    </div>
  );
}
