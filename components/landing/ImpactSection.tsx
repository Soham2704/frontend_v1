"use client";

import React from "react";
import { UserMinus, Zap, TrendingUp, Users } from "lucide-react";

const impacts = [
  {
    icon: UserMinus,
    title: "Reduce manual work and follow-ups",
    description:
      "Eliminate repetitive tasks and let AI handle communication across every channel and every load.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Increase speed of operations",
    description:
      "Move loads faster with automated workflows and instant decisions that don't wait on humans.",
    color: "amber",
  },
  {
    icon: TrendingUp,
    title: "Improve load profitability",
    description:
      "Optimize routes, reduce delays, and capture more margin with real-time AI recommendations.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Scale without increasing team size",
    description:
      "Handle more volume with the same resources through automation that multiplies your team's output.",
    color: "violet",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; num: string }> = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-100",
    num: "text-blue-200",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    border: "border-amber-100",
    num: "text-amber-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-100",
    num: "text-emerald-200",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    border: "border-violet-100",
    num: "text-violet-200",
  },
};

export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Real Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Impact
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Real operators. Measurable results. From day one.
          </p>
        </div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impacts.map(({ icon: Icon, title, description, color }, idx) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`relative p-8 rounded-2xl border ${c.border} ${c.bg} card-hover overflow-hidden`}
              >
                {/* Large index number in background */}
                <span
                  className={`absolute top-4 right-5 text-7xl font-black ${c.num} select-none leading-none`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-white border ${c.border} flex items-center justify-center mb-5 shadow-sm`}
                  >
                    <Icon size={22} className={c.icon} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 pr-10">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
