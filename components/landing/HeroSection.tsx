"use client";

import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import ContactDialog from "./ContactDialog";

export default function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial glow top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center px-2 sm:px-0">
          {/* Badge */}
          <div className="animate-fade-in opacity-0 delay-100 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-300 bg-white mb-6">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
              AI-Powered Dispatch Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up opacity-0 delay-200 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Run Your Dispatch Like a{" "}
            <span className="text-blue-600">High-Performance System</span>
          </h1>

          {/* Sub headline */}
          <p className="animate-fade-in-up opacity-0 delay-300 mt-4 text-xl sm:text-2xl font-semibold text-slate-400 tracking-tight">
            Not a Manual Operation
          </p>

          {/* Description */}
          <p className="animate-fade-in-up opacity-0 delay-400 mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            TruckDispatch Pro automates your entire load lifecycle from
            discovery to delivery with AI that communicates, decides, and
            executes in real time.{" "}
            <span className="font-medium text-slate-800">
              Fewer delays. Faster decisions. Higher margins.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up opacity-0 delay-500 mt-8 flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto">
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all duration-200 shadow-sm w-full sm:min-w-[160px] justify-center"
            >
              Book a Demo
            </button>
            <a
              href="#product"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all duration-200 shadow-sm w-full sm:min-w-[200px] justify-center"
            >
              <PlayCircle size={16} className="text-blue-600" />
              See Product in Action
            </a>
          </div>

          {/* Dashboard mockup */}
          <div className="animate-fade-in-up opacity-0 delay-600 mt-10 w-full max-w-5xl">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-2 sm:mx-4">
                  <div className="mx-auto max-w-xs h-5 rounded bg-white border border-slate-200 flex items-center px-2 sm:px-3 overflow-hidden">
                    <span className="text-[10px] sm:text-xs text-slate-400 truncate">
                      app.truckdispatchpro.com/dashboard
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="bg-slate-50 p-3 sm:p-4">
                {/* Top metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
                  {[
                    { label: "Active Loads", val: "247", color: "blue" },
                    { label: "In Transit", val: "183", color: "emerald" },
                    { label: "At Risk", val: "12", color: "amber" },
                    { label: "Delivered Today", val: "52", color: "slate" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm"
                    >
                      <div className="text-lg sm:text-2xl font-bold text-slate-900">
                        {m.val}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {m.label}
                      </div>
                      <div
                        className={`mt-2 h-1 rounded-full bg-${m.color}-${
                          m.color === "slate" ? "200" : "400"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Load table preview */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                    <span className="text-sm font-semibold text-slate-800">
                      Live Load Pipeline
                    </span>
                    <span className="text-xs text-blue-600 font-medium">
                      View All →
                    </span>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {[
                      {
                        id: "LD-4821",
                        route: "Chicago → Dallas",
                        status: "In Transit",
                        statusColor: "emerald",
                        driver: "Mike R.",
                        eta: "4h 20m",
                      },
                      {
                        id: "LD-4820",
                        route: "Atlanta → Miami",
                        status: "At Risk",
                        statusColor: "amber",
                        driver: "Sarah K.",
                        eta: "Delayed",
                      },
                      {
                        id: "LD-4819",
                        route: "LA → Phoenix",
                        status: "Assigned",
                        statusColor: "blue",
                        driver: "Tom W.",
                        eta: "2h 10m",
                      },
                      {
                        id: "LD-4818",
                        route: "Houston → Denver",
                        status: "Delivered",
                        statusColor: "slate",
                        driver: "Ana L.",
                        eta: "Done",
                      },
                    ].map((row) => (
                      <div
                        key={row.id}
                        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-[10px] sm:text-xs font-mono text-slate-400 w-14 sm:w-16 shrink-0">
                          {row.id}
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium text-slate-700 flex-1 truncate">
                          {row.route}
                        </span>
                        <span
                          className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-${row.statusColor}-50 text-${row.statusColor}-700 border border-${row.statusColor}-200 shrink-0`}
                        >
                          {row.status}
                        </span>
                        <span className="text-[10px] text-slate-500 w-16 text-right hidden sm:block">
                          {row.driver}
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium text-slate-700 w-12 sm:w-16 text-right shrink-0">
                          {row.eta}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactDialog open={demoOpen} type="demo" onClose={() => setDemoOpen(false)} />
    </section>
  );
}
