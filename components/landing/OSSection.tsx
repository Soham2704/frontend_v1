"use client";

import React from "react";
import { Activity, MessageSquare, GitBranch, TrendingUp } from "lucide-react";

const features = [
  { icon: Activity, label: "Tracks every load" },
  { icon: MessageSquare, label: "Communicates automatically" },
  { icon: GitBranch, label: "Resolves bottlenecks" },
  { icon: TrendingUp, label: "Optimizes outcomes in real time" },
];

export default function OSSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-500 mb-8">
          Redefining Dispatch
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-400 tracking-tight mb-6">
          An Operating System for Modern Dispatch
        </h2>

        <div className="max-w-xl mx-auto mb-2">
          <p className="text-lg text-blue-500 font-medium">
            This is not a dashboard.
          </p>
          <p className="text-lg text-blue-500 font-medium">
            This is not a TMS.
          </p>
        </div>

        <p className="text-slate-600 text-base mb-14 max-w-lg mx-auto">
          This is a decision-making engine that:
        </p>

        {/* Feature items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon size={28} className="text-blue-400" />
              <span className="text-sm font-medium text-slate-500 text-center leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
