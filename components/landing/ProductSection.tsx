"use client";

import React from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Zap,
  Package,
  BarChart2,
  FilePlus,
  FileText,
  Route,
  Bell,
} from "lucide-react";

/* ─── Dashboard Mockup ─────────────────────────────────────────── */
function DashboardMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-slate-50">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-slate-400 ml-2">Operations Dashboard</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: "Active", v: "247", c: "blue" },
            { l: "On Track", v: "191", c: "emerald" },
            { l: "Alerts", v: "8", c: "amber" },
          ].map((m) => (
            <div
              key={m.l}
              className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-center"
            >
              <div className={`text-lg font-bold text-${m.c}-600`}>{m.v}</div>
              <div className="text-xs text-slate-500">{m.l}</div>
            </div>
          ))}
        </div>
        {/* Rows */}
        {[
          { id: "LD-4821", route: "CHI → DAL", status: "Transit", sc: "emerald" },
          { id: "LD-4820", route: "ATL → MIA", status: "At Risk", sc: "amber" },
          { id: "LD-4819", route: "LA → PHX", status: "Assigned", sc: "blue" },
        ].map((r) => (
          <div
            key={r.id}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 border border-slate-100"
          >
            <span className="text-xs font-mono text-slate-400">{r.id}</span>
            <span className="text-xs font-medium text-slate-700">{r.route}</span>
            <span
              className={`px-2 py-0.5 text-xs font-medium rounded-full bg-${r.sc}-50 text-${r.sc}-700 border border-${r.sc}-200`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Communication Mockup ─────────────────────────────────────── */
function CommunicationMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-slate-50">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-slate-400 ml-2">Communication Hub</span>
      </div>
      <div className="flex h-48">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-slate-100 p-2 space-y-1">
          {[
            { from: "Broker 1", msg: "Rate confirm?", tag: "Email", unread: true },
            { from: "Driver Mike", msg: "ETA update", tag: "SMS", unread: false },
            { from: "Broker 2", msg: "New load avail", tag: "WA", unread: true },
          ].map((c) => (
            <div
              key={c.from}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                c.unread ? "bg-blue-50 border border-blue-100" : "hover:bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-800 truncate">
                  {c.from}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                  {c.tag}
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate mt-0.5">{c.msg}</p>
            </div>
          ))}
        </div>
        {/* Chat area */}
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[70%]">
                Rate is $2.45/mile confirmed
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-800 text-xs px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[70%]">
                Perfect. Sending paperwork now.
              </div>
            </div>
          </div>
          {/* AI suggestion */}
          <div className="mt-2 flex items-center gap-2 px-2 py-1.5 rounded-lg bg-blue-50 border border-blue-100">
            <Zap size={10} className="text-blue-500 shrink-0" />
            <span className="text-xs text-blue-700 font-medium truncate">
              AI: Suggested reply — "Documents sent. ETA confirmed."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Automation Mockup ────────────────────────────────────────── */
function AutomationMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-slate-50">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-slate-400 ml-2">AI Automation Engine</span>
      </div>
      <div className="p-4 space-y-2">
        {[
          { trigger: "Load created", action: "Auto-assign best driver", status: "Active", sc: "emerald" },
          { trigger: "Rate request", action: "AI negotiates +12%", status: "Running", sc: "blue" },
          { trigger: "ETA at risk", action: "Notify broker + reroute", status: "Triggered", sc: "amber" },
          { trigger: "POD received", action: "Auto-invoice generated", status: "Active", sc: "emerald" },
        ].map((rule) => (
          <div
            key={rule.trigger}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100"
          >
            <div>
              <p className="text-xs font-semibold text-slate-800">
                {rule.trigger}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{rule.action}</p>
            </div>
            <span
              className={`px-2 py-0.5 text-xs font-medium rounded-full bg-${rule.sc}-50 text-${rule.sc}-700 border border-${rule.sc}-200`}
            >
              {rule.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Features (big 3) ────────────────────────────────────── */
const mainFeatures = [
  {
    tag: "Operations Dashboard",
    title: "See everything. Act instantly.",
    description:
      "Your entire operation, in one intelligent view: active loads, alerts, pipeline status, and priorities.",
    bullets: [
      "Know what's stuck, delayed, or at risk",
      "Track activity across all stages",
      "Focus only on what needs action",
    ],
    mockup: <DashboardMockup />,
    reverse: false,
    accent: "blue",
  },
  {
    tag: "Communication Hub",
    title: "All conversations. Fully in control.",
    description:
      "Centralize all communication channels into a single context-aware inbox. AI analyzes intent and suggests responses instantly.",
    bullets: [
      "Email, WhatsApp, SMS in one place",
      "AI-suggested responses",
      "Load-linked conversations",
    ],
    mockup: <CommunicationMockup />,
    reverse: true,
    accent: "violet",
  },
  {
    tag: "AI Automation Engine",
    title: "Let the system do the work.",
    description:
      "The core of TruckDispatch Pro. Automation rules trigger instantly based on market conditions, load status, and carrier behavior.",
    bullets: [
      "Communication and follow-ups",
      "Negotiation handling",
      "Driver coordination",
    ],
    mockup: <AutomationMockup />,
    reverse: false,
    accent: "emerald",
  },
];

/* ─── More Capabilities ────────────────────────────────────────── */
const capabilities = [
  {
    icon: Package,
    title: "Load Management",
    desc: "Track stages from discovery to delivery. Detect bottlenecks instantly.",
  },
  {
    icon: BarChart2,
    title: "Details & Insights",
    desc: "Route and stop-level visibility. Profit and cost insights.",
  },
  {
    icon: FilePlus,
    title: "Load Creation",
    desc: "Structured setup in minutes. AI-powered recommendations.",
  },
  {
    icon: FileText,
    title: "Document Management",
    desc: "BOLs, PODs, invoices, contracts. Status tracking & quick access.",
  },
  {
    icon: Route,
    title: "Route Optimization",
    desc: "Route visualization. Fuel and profit insights. Smarter routing decisions.",
  },
  {
    icon: Bell,
    title: "AI Alerts",
    desc: "Stuck load detection. Priority alerts. Revenue opportunities.",
  },
];

export default function ProductSection() {
  return (
    <section id="product" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Complete Platform
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Product in Action
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Every tool you need to run a modern dispatch operation: unified,
            intelligent, and always working for you.
          </p>
        </div>

        {/* Main feature blocks */}
        <div className="space-y-24">
          {mainFeatures.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 lg:gap-16`}
            >
              {/* Text */}
              <div className="flex-1 max-w-lg w-full text-center lg:text-left">
                <span
                  className={`inline-block text-xs font-semibold text-${feature.accent}-600 uppercase tracking-widest mb-3`}
                >
                  {feature.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2.5 inline-block text-left">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                      <span className={`mt-1 w-2 h-2 rounded-full bg-${feature.accent}-500 shrink-0`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div className="flex-1 w-full max-w-xl">{feature.mockup}</div>
            </div>
          ))}
        </div>

        {/* More Capabilities */}
        <div className="mt-24">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
            More Capabilities Built for Speed
          </h3>
          <p className="text-slate-500 text-center text-sm mb-10">
            Everything your team needs, without the switching.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-slate-200 bg-white card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">
                  {title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
