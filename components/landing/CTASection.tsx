"use client";

import React, { useState } from "react";
import ContactDialog from "./ContactDialog";

type DialogType = "demo" | "trial";

export default function CTASection() {
  const [dialog, setDialog] = useState<{ open: boolean; type: DialogType }>({ open: false, type: "demo" });

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-slate-400">Stop Managing Dispatch.</span>
          <br />
          <span className="text-blue-600">
            Start Running It Like a System.
          </span>
        </h2>

        <p className="mt-6 text-lg text-slate-500 max-w-xl mx-auto">
          See how TruckDispatch Pro transforms your operations from day one.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setDialog({ open: true, type: "demo" })}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-600 font-medium text-sm hover:bg-slate-50 transition-all duration-200 shadow-sm min-w-[160px]"
          >
            Book a Demo
          </button>
          <button
            onClick={() => setDialog({ open: true, type: "trial" })}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-600 font-medium text-sm hover:bg-slate-50 transition-all duration-200 shadow-sm min-w-[160px]"
          >
            Start Free Trial
          </button>
        </div>

        {/* Guarantees */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {["No credit card required", "14-day free trial", "Setup in minutes"].map((g) => (
            <span key={g} className="text-sm text-slate-400">{g}</span>
          ))}
        </div>
      </div>

      <ContactDialog
        open={dialog.open}
        type={dialog.type}
        onClose={() => setDialog((d) => ({ ...d, open: false }))}
      />
    </section>
  );
}
