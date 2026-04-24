"use client";

import React from "react";
import { X, Check } from "lucide-react";

const manualItems = [
  "Chasing brokers",
  "Switching between tools",
  "Reacting to issues late",
  "Losing time in follow-ups",
];

const aiItems = [
  "Automated negotiation",
  "Unified single platform",
  "Proactive issue resolution",
  "Instant communication",
];

export default function ParadigmSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            The Paradigm Shift
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Dispatch Hasn't Evolved.{" "}
            <span className="text-blue-600">Until Now.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            TruckDispatch Pro doesn't just help you manage loads. It actively
            moves them forward.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Manual Era */}
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 card-hover">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              The Manual Era
            </div>
            <ul className="space-y-3">
              {manualItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <X size={12} className="text-red-500" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            {/* Faded effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-slate-100/50 pointer-events-none" />
          </div>

          {/* AI Powered Era */}
          <div className="relative rounded-2xl border border-blue-200 bg-[var(--brand-navy)] p-8 card-hover overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-xs font-semibold text-blue-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-dot" />
                The AI Powered System Era
              </div>
              <ul className="space-y-3">
                {aiItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-blue-400" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-center mt-10 text-sm font-semibold text-slate-500">
          A system that runs your operations for you.
        </p>
      </div>
    </section>
  );
}
