"use client";

import React from "react";

const steps = [
  { number: 1, title: "Loads enter the system" },
  { number: 2, title: "AI initiates communication" },
  { number: 3, title: "Document & approvals handled" },
  { number: 4, title: "Drivers are assigned intelligently" },
  { number: 5, title: "Loads move in real time" },
  { number: 6, title: "Insights optimize every step" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            System Execution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            How It Works
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div
            className="hidden lg:block absolute h-px bg-slate-200 z-0"
            style={{ top: "2rem", left: "8.33%", right: "8.33%" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-2 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-4">
                {/* Numbered circle - light gray outlined */}
                <div className="w-16 h-16 rounded-full border-2 border-slate-200 bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-xl font-semibold text-slate-400">{step.number}</span>
                </div>
                {/* Title */}
                <p className="text-sm font-semibold text-slate-800 leading-snug px-1">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-blue-300" />
          <p className="text-sm font-semibold text-blue-600 text-center">
            Every step automated. Every decision optimized. Every load moving forward.
          </p>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-blue-300" />
        </div>
      </div>
    </section>
  );
}
