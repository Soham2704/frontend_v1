"use client";

import React from "react";
import { X, Check } from "lucide-react";

const comparisons = [
  { others: "Manual workflows", pro: "Automated execution" },
  { others: "Disconnected tools", pro: "One unified system" },
  { others: "Reactive decisions", pro: "Real-time intelligence" },
  { others: "Data visibility", pro: "Actionable outcomes" },
];

export default function WhyThisWins() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Why This Wins
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Built to Execute, Not Just Manage
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-6 mb-4 px-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-500">
                <X size={12} className="text-slate-400" />
                Others
              </span>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-500">
                TruckDispatch Pro
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {comparisons.map((row) => (
              <div
                key={row.others}
                className="grid grid-cols-2 rounded-2xl border border-slate-200 overflow-hidden"
              >
                <div className="flex items-center gap-2.5 px-5 py-4 border-r border-slate-200">
                  <X size={14} className="text-red-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{row.others}</span>
                </div>
                <div className="flex items-center gap-2.5 px-5 py-4">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-500">{row.pro}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm font-bold text-slate-800">
            The difference is execution.{" "}
            <span className="text-blue-600">Every time.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
