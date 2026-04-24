'use client';
import React, { useState } from 'react';
import ContactDialog from '../components/landing/ContactDialog';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  Play, ArrowRight, Check, X, Clock, RefreshCw, AlertCircle,
  Zap, Layers, Shield, TrendingUp, Activity, MessageSquare,
  LayoutDashboard, Search, Settings, FileText, Map, Bell,
  MessageCircle, Sparkles, SlidersHorizontal, Plus, Folder, Truck, Twitter, Linkedin, Github,
  ChevronDown, AlertTriangle, Users
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DASHBOARD SCREENSHOT MOCKUP
───────────────────────────────────────────── */
function DashboardMockup() {
  const navItems = [
    { label: 'Dashboard', active: true },
    { label: 'Load Assignment' },
    { label: 'Load Cloning' },
    { label: 'Communications' },
    { label: 'P&L Systems' },
    { label: 'Scheduling' },
    { label: 'Live Monitoring' },
    { label: 'Reports' },
    { label: 'Sales' },
    { label: 'Email' },
    { label: 'Budget' },
    { label: 'Documents' },
    { label: 'Customer Portal' },
    { label: 'Driver App' },
    { label: 'Configuration' },
  ];

  const conversations = [
    { name: 'Miranda Logistics', time: '10:12 am', msg: 'Hi, we need an update on Load #8654A. It shows delayed in our system.', unread: true, dot: 'red' },
    { name: 'Baron Brown', time: '9 am', msg: 'Please confirm, I make automatics Loads to Load #9821', unread: false, dot: '' },
    { name: 'Driver Blueprint Mem', time: '8:50 am', msg: 'Fuel receipt attached, currently in Amarillo TX', unread: false, dot: '' },
    { name: 'Supreme Freight', time: '8:38 am', msg: 'Following up on our load offer.', unread: false, dot: 'red' },
    { name: 'Cargo Masters', time: '8:24 am', msg: 'Load confirmation request', unread: false, dot: '' },
    { name: 'Skyline Transport', time: '8:14 am', msg: 'Driver not responding, need immediate update', unread: false, dot: '' },
    { name: 'Freight Solutions', time: '7:54 am', msg: 'Pickup delayed by 30 min', unread: false, dot: '' },
    { name: 'Rush Hauling', time: '7:40 am', msg: 'Issue with consignee, requesting instructions', unread: false, dot: '' },
  ];

  const pipeline = [
    { stage: 'Received', val: 2, sub: 'Last Waiting', n: 2 },
    { stage: 'Gross Attn', val: 2, sub: 'Action Applied', n: 1 },
    { stage: 'Driver App', val: 1, sub: 'In Final', n: 3 },
    { stage: 'Negotiating', val: 1, sub: 'Approvals', n: 1 },
    { stage: 'Contracted', val: 2, sub: 'Confirmed Pending', n: 2 },
  ];

  const loads = [
    { id: 'AB01', status: 'ACTIVE', route: 'Chicago, IL → Atlanta, GA', detail: 'Pending for 24mins', price: '$1,700', action1: 'Save Summary', action2: 'View Agreement' },
    { id: 'WJ19', status: 'ISSUE', route: 'Topeka, KS → Dallas, TX', detail: 'Check in Deadline Pending for 5h', price: '$1,038', action1: 'Update Now', action2: '' },
    { id: 'Skyline Transport', status: 'ACTIVE', route: 'TX → Glendale Ariz, AZ', detail: 'Load active 3 stops', price: '$1,700', action1: 'Save Summary', action2: 'View Agreement' },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#F8FAFC] overflow-hidden" style={{ fontSize: '10px' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#0f172a] rounded flex items-center justify-center">
            <div className="w-2 h-2 grid grid-cols-2 gap-[1px]">
              <div className="bg-white rounded-[0.5px]"></div>
              <div className="bg-white rounded-[0.5px]"></div>
              <div className="bg-white rounded-[0.5px]"></div>
              <div className="bg-white rounded-[0.5px]"></div>
            </div>
          </div>
          <span className="font-bold text-[9px] text-[#0f172a]">TruckDispatch Pro</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 bg-gray-100 rounded px-2 py-0.5">
            <Search className="w-2.5 h-2.5 text-gray-400" />
            <span className="text-[8px] text-gray-400">Search loads, drivers...</span>
          </div>
          <div className="w-5 h-5 flex items-center justify-center rounded text-gray-400 bg-gray-100 cursor-pointer">
            <Settings className="w-3 h-3" />
          </div>
          <div className="w-5 h-5 bg-[#0f172a] rounded-full flex items-center justify-center text-white text-[7px] font-bold">U</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[130px] bg-[#0f172a] flex flex-col shrink-0 overflow-y-auto py-2">
          {navItems.map((item, i) => (
            <div key={i} className={`px-3 py-[5px] text-[8px] font-semibold cursor-pointer ${item.active ? 'text-white bg-white/10 border-l-2 border-blue-400' : 'text-gray-400'}`}>
              {item.label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shrink-0">
            <div>
              <div className="text-[10px] font-bold text-[#0f172a]">Load Operations Dashboard</div>
              <div className="text-[8px] text-gray-400">Friday, February 21, 2025 • Full Process visibility and critical alerts</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="bg-[#0f172a] text-white text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1"><Plus className="w-2.5 h-2.5" /> Create Load</div>
              <div className="border border-gray-300 text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1 text-gray-600"><Plus className="w-2.5 h-2.5" /> Assign Load</div>
            </div>
          </div>

          {/* Stats */}
          <div className="px-3 pt-2 grid grid-cols-5 gap-1.5 shrink-0">
            {[
              { label: "Group Summary", val: "8", sub: "Completed" },
              { label: "Contribution Summary", val: "5", sub: "" },
              { label: "Load Unit Operations", val: "3", sub: "" },
              { label: "Active Rims", val: "17", sub: "" },
              { label: "Needs Action", val: "3", sub: "", red: true },
            ].map((s, i) => (
              <div key={i} className={`rounded border p-2 text-center ${s.red ? 'bg-red-50 border-red-200' : 'bg-white border-gray-100'}`}>
                <div className="text-[7px] text-gray-400 leading-tight mb-0.5">{s.label}</div>
                <div className={`text-base font-bold leading-none ${s.red ? 'text-red-500' : 'text-[#0f172a]'}`}>{s.val}</div>
                {s.sub && <div className="text-[6px] text-gray-400">{s.sub}</div>}
              </div>
            ))}
          </div>

          {/* Second stats row */}
          <div className="px-3 pt-1.5 grid grid-cols-5 gap-1.5 shrink-0">
            {['19', '17', '3', '4', ''].map((v, i) => (
              <div key={i} className="rounded border border-gray-100 bg-white p-1.5 text-center">
                <div className="text-xs font-bold text-[#0f172a]">{v}</div>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="flex gap-2 px-3 pt-2 pb-2 flex-1 overflow-hidden min-h-0">
            {/* Left: Conversations */}
            <div className="w-[38%] bg-white rounded border border-gray-200 flex flex-col overflow-hidden shrink-0">
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-gray-100 shrink-0">
                <span className="text-[9px] font-bold text-[#0f172a]">Inbox Messages</span>
                <span className="text-[7px] text-gray-400">Conversations</span>
              </div>
              <div className="overflow-y-auto flex-1">
                {conversations.map((c, i) => (
                  <div key={i} className={`flex items-start gap-1.5 px-2 py-1.5 border-b border-gray-50 ${i === 0 ? 'bg-[#f0f9ff]' : ''}`}>
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[7px] font-bold shrink-0">{c.name[0]}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold text-[#0f172a] truncate">{c.name}</span>
                        <span className="text-[6px] text-gray-400 shrink-0 ml-1">{c.time}</span>
                      </div>
                      <div className="text-[7px] text-gray-400 truncate">{c.msg}</div>
                    </div>
                    {c.dot === 'red' && <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-1"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pipeline + Loads */}
            <div className="flex-1 flex flex-col gap-2 min-w-0 overflow-hidden">
              {/* Pipeline */}
              <div className="bg-white rounded border border-gray-200 p-2 shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold text-[#0f172a]">Load Lifecycle Pipeline</span>
                  <span className="text-[7px] text-blue-500 cursor-pointer">All time ▾</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {pipeline.map((p, i) => (
                    <div key={i} className="text-center">
                      <div className="text-[7px] text-gray-400 mb-0.5">{p.stage}</div>
                      <div className="text-xs font-bold text-[#0f172a]">{p.val}</div>
                      <div className="text-[6px] text-gray-300">{p.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loads */}
              <div className="flex-1 bg-white rounded border border-gray-200 overflow-hidden flex flex-col">
                <div className="px-2 py-1.5 border-b border-gray-100 shrink-0 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-[#0f172a]">Boost Loads — Immediate Attention Required</span>
                  <span className="text-[7px] text-red-500 font-bold">URGENT</span>
                </div>
                {loads.map((l, i) => (
                  <div key={i} className="px-2 py-1.5 border-b border-gray-50 flex items-center justify-between gap-2">
                    <div className="shrink-0">
                      <span className="text-[8px] font-bold text-[#0f172a]">{l.id}</span>
                      <span className={`ml-1 text-[6px] font-bold px-1 py-0.5 rounded ${l.status === 'ACTIVE' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{l.status}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[7px] text-gray-600 truncate">{l.route}</div>
                      <div className="text-[6px] text-gray-400">{l.detail}</div>
                    </div>
                    <div className="shrink-0 text-[8px] font-bold text-[#0f172a]">{l.price}</div>
                    <div className="flex gap-1 shrink-0">
                      <div className="text-[6px] bg-[#0f172a] text-white px-1.5 py-0.5 rounded cursor-pointer whitespace-nowrap">{l.action1}</div>
                      {l.action2 && <div className="text-[6px] border border-gray-300 text-gray-600 px-1.5 py-0.5 rounded cursor-pointer whitespace-nowrap">{l.action2}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COMMUNICATION HUB MOCKUP
───────────────────────────────────────────── */
function CommsMockup() {
  const convs = [
    { name: 'AKS Logistics', time: '11 min', msg: 'Hi, we need an update on Load #8624 drives delayed in our system.', badge: 'URGENT', color: 'red' },
    { name: 'ATC Freight', time: '14 min', msg: 'Load #9824, need immediate update', badge: 'OVERDUE', color: 'orange' },
    { name: 'Global Shipping Co', time: '17 min', msg: "Let's check the status of Load #9824", badge: '', color: '' },
    { name: 'Rapid Transport', time: '22 min', msg: 'Rate confirmation for new lane request', badge: '', color: '' },
    { name: 'Prime Freight Services', time: '24 min', msg: 'Tracking update needed for load in transit', badge: '', color: '' },
    { name: 'Delta Cargo', time: '30 min', msg: 'Invoice verification required', badge: '', color: '' },
  ];

  const suggestions = [
    'Load #8624 is currently 45 minutes delayed due to traffic. ETA updated to 2:30 PM.',
    "I'll have driver availability and get back to you within 15 minutes.",
    'We can provide a capacity of $2,500 for Chicago to Dallas lane with a 2-day delivery.',
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#F8FAFC] overflow-hidden" style={{ fontSize: '10px' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#0f172a] rounded flex items-center justify-center">
            <div className="w-2 h-2 grid grid-cols-2 gap-[1px]">
              <div className="bg-white rounded-[0.5px]"></div>
              <div className="bg-white rounded-[0.5px]"></div>
              <div className="bg-white rounded-[0.5px]"></div>
              <div className="bg-white rounded-[0.5px]"></div>
            </div>
          </div>
          <span className="font-bold text-[9px] text-[#0f172a]">TruckDispatch Pro</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 bg-gray-100 rounded px-2 py-0.5">
            <Search className="w-2.5 h-2.5 text-gray-400" />
            <span className="text-[8px] text-gray-400">Search loads, drivers...</span>
          </div>
          <div className="w-5 h-5 bg-[#0f172a] rounded-full flex items-center justify-center text-white text-[7px] font-bold">U</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[130px] bg-[#0f172a] flex flex-col shrink-0 py-2">
          {['Dashboard', 'Load Management', 'Communications', 'P&L Systems', 'Scheduling', 'Live Monitoring', 'Reports', 'Sales', 'Email', 'Budget', 'Documents', 'Customer Portal', 'Driver App', 'Configuration'].map((item, i) => (
            <div key={i} className={`px-3 py-[5px] text-[8px] font-semibold cursor-pointer ${i === 2 ? 'text-white bg-white/10 border-l-2 border-blue-400' : 'text-gray-400'}`}>
              {item}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left panel: stats + conversation list */}
          <div className="w-[200px] bg-white border-r border-gray-200 flex flex-col shrink-0 overflow-hidden">
            {/* Stats */}
            <div className="px-3 pt-3 pb-2 border-b border-gray-100 shrink-0">
              <div className="text-[9px] font-bold text-[#0f172a] mb-2">Communication Hub</div>
              <div className="grid grid-cols-3 gap-1">
                {[['13', 'Total'], ['2', 'Inbox', true], ['4', 'Pending Resp'], ['7', 'Hours']].slice(0,3).map(([n, l, red], i) => (
                  <div key={i} className={`rounded border p-1 text-center ${red ? 'border-red-200 bg-red-50' : 'border-gray-100 bg-gray-50'}`}>
                    <div className={`text-xs font-bold ${red ? 'text-red-500' : 'text-[#0f172a]'}`}>{n}</div>
                    <div className="text-[6px] text-gray-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="px-2 py-1.5 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-1 bg-gray-100 rounded px-2 py-1">
                <Search className="w-2.5 h-2.5 text-gray-400" />
                <span className="text-[7px] text-gray-400">Search conversations...</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex px-2 py-1 gap-1 border-b border-gray-100 shrink-0">
              {['All', 'Inbox', 'Sending', 'Bot'].map((t, i) => (
                <div key={i} className={`text-[7px] px-1.5 py-0.5 rounded font-semibold cursor-pointer ${i === 1 ? 'bg-[#0f172a] text-white' : 'text-gray-500'}`}>{t}</div>
              ))}
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {convs.map((c, i) => (
                <div key={i} className={`px-2 py-2 border-b border-gray-50 cursor-pointer ${i === 0 ? 'bg-[#f0f9ff]' : ''}`}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8px] font-bold text-[#0f172a]">{c.name}</span>
                    <span className="text-[6px] text-gray-400">{c.time}</span>
                  </div>
                  {c.badge && (
                    <span className={`text-[6px] font-bold px-1 py-0.5 rounded mr-1 ${c.color === 'red' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>{c.badge}</span>
                  )}
                  <div className="text-[7px] text-gray-400 truncate">{c.msg}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Chat */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 shrink-0">
              <div>
                <div className="text-[9px] font-bold text-[#0f172a]">AKS Logistics</div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-[7px] text-red-500 font-bold">URGENT</span>
                  <span className="text-[7px] text-gray-400">• Load #8624</span>
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[7px] border border-gray-200 rounded px-2 py-0.5 text-gray-500 cursor-pointer">Request Status Update</div>
                <div className="text-[7px] border border-gray-200 rounded px-2 py-0.5 text-gray-500 cursor-pointer">Share Document</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-t-xl rounded-br-xl px-3 py-2 max-w-[70%]">
                  <div className="text-[8px] text-[#0f172a]">Hi, we need an update on Load #8624. It shows delayed in our system. Can you check the current status for us?</div>
                  <div className="text-[6px] text-gray-400 mt-0.5 text-right">10:42 am</div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#0f172a] rounded-t-xl rounded-bl-xl px-3 py-2 max-w-[70%]">
                  <div className="text-[8px] text-white">Let me check the current status for you</div>
                  <div className="text-[6px] text-gray-400 mt-0.5 text-right">10:43 am</div>
                </div>
              </div>

              {/* AI Suggested Responses */}
              <div className="bg-[#f0f9ff] rounded-lg p-2 border border-blue-100 mt-1">
                <div className="text-[7px] font-bold text-blue-600 mb-1.5">⚡ AI Suggested Responses</div>
                {suggestions.map((s, i) => (
                  <div key={i} className="text-[7px] text-gray-600 bg-white border border-gray-200 rounded p-1.5 mb-1 cursor-pointer hover:border-blue-300">{i + 1}. {s}</div>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="px-3 pb-3 shrink-0">
              <div className="border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-2 bg-white">
                <span className="text-[8px] text-gray-300 flex-1">Type your message...</span>
                <div className="w-5 h-5 bg-[#0f172a] rounded-full flex items-center justify-center cursor-pointer">
                  <ArrowRight className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-[140px] bg-[#F8FAFC] border-l border-gray-200 p-2 shrink-0 overflow-y-auto">
            <div className="text-[8px] font-bold text-[#0f172a] mb-2">TruckDispatch Report</div>
            <div className="text-[7px] text-gray-500 mb-3">Load #8624 status analysis and AI recommendation</div>
            <div className="space-y-1">
              {[
                ['Load Status', 'Delayed'],
                ['Current ETA', '2:30 PM'],
                ['Origin', 'Chicago, IL'],
                ['Destination', 'Dallas, TX'],
                ['Driver', 'John Martinez'],
                ['Current City', 'St. Louis, MO'],
                ['Revenue', '$1,850'],
              ].map(([k, v], i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-[6px] text-gray-400">{k}</span>
                  <span className="text-[6px] font-bold text-[#0f172a]">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-1">
              {['Customer Status Update', 'Request Proof of Delivery', 'Escalate to Manager'].map((a, i) => (
                <div key={i} className="text-[7px] border border-gray-200 text-gray-600 rounded px-1.5 py-1 cursor-pointer bg-white">{a}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AI AUTOMATION ENGINE MOCKUP
───────────────────────────────────────────── */
function AutomationMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F8FAFC] overflow-hidden" style={{ fontSize: '10px' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#0f172a] rounded flex items-center justify-center">
            <div className="w-2 h-2 grid grid-cols-2 gap-[1px]">
              <div className="bg-white rounded-[0.5px]"></div><div className="bg-white rounded-[0.5px]"></div>
              <div className="bg-white rounded-[0.5px]"></div><div className="bg-white rounded-[0.5px]"></div>
            </div>
          </div>
          <span className="font-bold text-[9px] text-[#0f172a]">TruckDispatch Pro</span>
        </div>
        <div className="flex items-center gap-1">
          <Search className="w-3 h-3 text-gray-400" />
          <Settings className="w-3 h-3 text-gray-400" />
          <div className="w-5 h-5 bg-[#0f172a] rounded-full flex items-center justify-center text-white text-[7px] font-bold">U</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[130px] bg-[#0f172a] flex flex-col shrink-0 py-2">
          {['Dashboard', 'Load Planning', 'Communications', 'P&L Systems', 'Scheduling', 'Live Monitoring', 'Reports', 'Sales', 'Email', 'Budget', 'Documents', 'Customer Portal', 'Driver App', 'Configuration'].map((item, i) => (
            <div key={i} className={`px-3 py-[5px] text-[8px] font-semibold cursor-pointer ${i === 13 ? 'text-white bg-white/10 border-l-2 border-blue-400' : 'text-gray-400'}`}>
              {item}
            </div>
          ))}
        </div>

        {/* Main Config area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Config sidebar */}
          <div className="w-[130px] bg-white border-r border-gray-200 shrink-0 overflow-y-auto py-2">
            <div className="px-3 pb-2 text-[9px] font-bold text-[#0f172a]">Configuration</div>
            {['Overview', 'Company Info', 'Email', 'Drivers', 'Load Models', 'Broker Stations', 'Mobile Areas', 'Budget', 'Notifications', 'Configuration', 'AI Automation', 'Customer Portal'].map((item, i) => (
              <div key={i} className={`px-3 py-[5px] text-[8px] cursor-pointer flex items-center gap-1.5 ${i === 10 ? 'text-[#0f172a] font-bold bg-gray-100 border-l-2 border-blue-500' : 'text-gray-400'}`}>
                {i === 10 && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>}
                {item}
              </div>
            ))}
          </div>

          {/* AI Automation Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[11px] font-bold text-[#0f172a]">AI Automation Control Room</div>
                <div className="text-[8px] text-gray-400">Configure AI behavior across your entire dispatch workflow. You're in control.</div>
              </div>
              <div className="text-[7px] border border-gray-200 rounded px-2 py-1 text-gray-500 cursor-pointer">Send AI Feedback</div>
            </div>

            {/* Global AI Control */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                    <Zap className="w-3 h-3 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#0f172a]">Global AI Control</div>
                    <div className="text-[7px] text-gray-400">Master switch for all automations</div>
                  </div>
                </div>
                {/* Toggle ON */}
                <div className="flex items-center gap-1">
                  <span className="text-[7px] text-green-600 font-bold">ACTIVE</span>
                  <div className="w-8 h-4 bg-green-500 rounded-full relative cursor-pointer">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Behaviors table */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <div className="text-[9px] font-bold text-[#0f172a] mb-2">AI Behaviors</div>
              <div className="grid grid-cols-3 gap-1 mb-2">
                <div className="text-[7px] font-bold text-gray-400">For Sender</div>
                <div className="text-[7px] font-bold text-blue-500 bg-blue-50 px-1 py-0.5 rounded text-center">Guided Mode</div>
                <div className="text-[7px] font-bold text-gray-400 text-center">Enable All</div>
              </div>
              {[
                ['AI detects 3 drafts in drafts-to-complete', '2 Actions 2 min', true],
                ['5 Items 2 min only', '3 Items 2 min', false],
              ].map(([desc, sub, active], i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-t border-gray-100">
                  <div className="flex-1">
                    <div className="text-[7px] text-gray-600">{desc}</div>
                    <div className="text-[6px] text-gray-400">{sub}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-[7px] border border-gray-200 rounded px-1.5 py-0.5 text-gray-500 cursor-pointer">Automate</div>
                    <div className={`w-6 h-3 rounded-full relative cursor-pointer ${active ? 'bg-green-500' : 'bg-gray-200'}`}>
                      <div className={`w-2 h-2 bg-white rounded-full absolute top-0.5 shadow ${active ? 'right-0.5' : 'left-0.5'}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rate Negotiation Automation */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="text-[9px] font-bold text-[#0f172a] mb-1">Rate Negotiation Automation</div>
              <div className="text-[7px] text-gray-400 mb-3">AI negotiates automatically within your defined limits</div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-center">
                  <div className="text-[7px] text-gray-400">Fair Border</div>
                  <div className="text-[9px] font-bold text-gray-600">$1,900</div>
                </div>
                <div className="text-center">
                  <div className="text-[7px] text-gray-400">Sweet Spot</div>
                  <div className="text-[9px] font-bold text-blue-500">$2,200</div>
                </div>
                <div className="text-center">
                  <div className="text-[7px] text-gray-400">Max Limit</div>
                  <div className="text-[9px] font-bold text-[#0f172a]">$2,700</div>
                </div>
              </div>
              {/* Slider */}
              <div className="relative h-2 bg-gray-200 rounded-full mb-2">
                <div className="absolute left-0 h-full bg-blue-500 rounded-full" style={{ width: '55%' }}></div>
                <div className="absolute w-3 h-3 bg-white border-2 border-blue-500 rounded-full top-1/2 -translate-y-1/2 shadow" style={{ left: '55%' }}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-[6px] text-gray-400">0%</span>
                <span className="text-[6px] text-gray-400">Negotiation Range</span>
                <span className="text-[6px] text-gray-400">+5%</span>
              </div>
              <div className="mt-2 bg-gray-50 rounded p-2 text-[7px] text-gray-500">
                A prospect negotiating outside $1,900 — $2,700
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
type DialogType = "demo" | "trial";

export default function Home() {
  const [dialog, setDialog] = useState<{ open: boolean; type: DialogType }>({ open: false, type: "demo" });

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-blue-100">

      {/* ── 1. NAVIGATION ── */}
      <Nav />

      {/* ── 2. HERO ── */}
      <section className="pt-16 sm:pt-24 pb-14 sm:pb-20 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-blue-100/80 text-[10px] font-bold tracking-[0.05em] text-[#64748b] uppercase mb-6 sm:mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></div> SYSTEM OPERATIONAL
          </div>

          <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold tracking-[-0.03em] sm:tracking-[-0.04em] leading-[1.05] sm:leading-[1] text-[#0f172a] mb-0 px-2 sm:px-0">
            Run Your Dispatch Like a<br className="hidden sm:block" />{" "}High-Performance System
          </h1>
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold tracking-[-0.03em] sm:tracking-[-0.04em] text-[#94a3b8] leading-[1.05] sm:leading-[1] mb-10 sm:mb-16 px-2 sm:px-0">
            Not a Manual Operation
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            {/* Left: Illustration */}
            <div className="flex-1 flex justify-center w-full">
              <img
                src="/hero_illustration.png"
                alt="Dispatch Illustration"
                className="w-full max-w-[340px] sm:max-w-[480px] h-auto object-contain"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  const sibling = el.nextElementSibling as HTMLElement | null;
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              {/* Fallback SVG illustration */}
              <div className="w-full max-w-[340px] sm:max-w-[480px] h-[240px] sm:h-[340px] hidden items-end justify-center relative">
                <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* desk */}
                  <rect x="60" y="220" width="280" height="12" rx="4" fill="#e2e8f0"/>
                  <rect x="80" y="232" width="8" height="70" rx="3" fill="#cbd5e1"/>
                  <rect x="320" y="232" width="8" height="70" rx="3" fill="#cbd5e1"/>
                  {/* monitor */}
                  <rect x="140" y="140" width="160" height="100" rx="8" fill="#0f172a"/>
                  <rect x="148" y="148" width="144" height="84" rx="4" fill="#1e293b"/>
                  {/* screen content lines */}
                  <rect x="156" y="156" width="60" height="6" rx="2" fill="#3b82f6" opacity="0.8"/>
                  <rect x="156" y="168" width="128" height="4" rx="2" fill="#334155"/>
                  <rect x="156" y="176" width="100" height="4" rx="2" fill="#334155"/>
                  <rect x="156" y="184" width="80" height="4" rx="2" fill="#10b981" opacity="0.7"/>
                  <rect x="156" y="196" width="128" height="18" rx="3" fill="#1e3a5f"/>
                  <rect x="160" y="200" width="50" height="4" rx="2" fill="#60a5fa" opacity="0.8"/>
                  <rect x="160" y="207" width="80" height="4" rx="2" fill="#475569"/>
                  <rect x="218" y="148" width="1" height="84" fill="#334155"/>
                  {/* monitor stand */}
                  <rect x="212" y="240" width="16" height="8" rx="2" fill="#334155"/>
                  <rect x="200" y="246" width="40" height="4" rx="2" fill="#334155"/>
                  {/* keyboard */}
                  <rect x="150" y="256" width="140" height="20" rx="3" fill="#e2e8f0"/>
                  <rect x="156" y="260" width="128" height="12" rx="2" fill="#f1f5f9"/>
                  {/* person */}
                  <circle cx="110" cy="145" r="22" fill="#fde68a"/>
                  <ellipse cx="110" cy="210" rx="35" ry="45" fill="#1e40af"/>
                  <rect x="75" y="175" width="70" height="10" rx="5" fill="#1e40af"/>
                  <rect x="55" y="183" width="55" height="10" rx="5" fill="#1e40af"/>
                  <rect x="130" y="183" width="40" height="10" rx="5" fill="#1e40af"/>
                  <ellipse cx="90" cy="295" rx="20" ry="8" fill="#334155"/>
                  <ellipse cx="130" cy="295" rx="20" ry="8" fill="#334155"/>
                  {/* truck */}
                  <rect x="350" y="230" width="80" height="40" rx="4" fill="#3b82f6"/>
                  <rect x="390" y="220" width="42" height="50" rx="4" fill="#2563eb"/>
                  <circle cx="365" cy="272" r="8" fill="#1e293b"/>
                  <circle cx="365" cy="272" r="4" fill="#64748b"/>
                  <circle cx="415" cy="272" r="8" fill="#1e293b"/>
                  <circle cx="415" cy="272" r="4" fill="#64748b"/>
                  <rect x="395" y="230" width="30" height="20" rx="2" fill="#93c5fd"/>
                  {/* plants */}
                  <rect x="40" y="240" width="12" height="35" rx="3" fill="#64748b"/>
                  <ellipse cx="46" cy="210" rx="22" ry="28" fill="#10b981"/>
                  <ellipse cx="30" cy="225" rx="16" ry="20" fill="#059669"/>
                  <rect x="36" y="210" width="8" height="3" rx="1" fill="#059669"/>
                </svg>
              </div>
            </div>

            {/* Right: Copy & Buttons */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-2 sm:px-4 lg:px-8">
              <p className="text-[15px] sm:text-[17px] text-[#475569] mb-8 sm:mb-12 leading-[1.7] font-medium max-w-[480px]">
                TruckDispatch Pro automates your entire load lifecycle from discovery
                to delivery with AI that communicates, decides, and executes in real time.
              </p>
              <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 w-full max-w-[500px]">
                <div className="w-6 sm:w-8 h-px bg-[#0ea5e9] shrink-0"></div>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.1em] text-[#0f172a] uppercase">
                  Fewer Delays. Faster Decisions. Higher Margins.
                </span>
                <div className="w-6 sm:w-8 h-px bg-[#0ea5e9] shrink-0"></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setDialog({ open: true, type: "demo" })}
                  className="w-full sm:w-auto bg-[#0f172a] text-white px-7 py-3.5 rounded-md font-bold text-[14px] hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => document.getElementById('product-in-action')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-white text-[#0f172a] border border-gray-200 px-7 py-3.5 rounded-md font-bold text-[14px] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Play className="w-4 h-4 text-[#0ea5e9] fill-current" /> See Product in Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PARADIGM SHIFT ── */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20 px-2 sm:px-4">
            <div className="inline-block px-3 py-1 border border-gray-200 text-[10px] font-bold tracking-[0.1em] text-gray-400 uppercase mb-6 sm:mb-8 rounded-sm">The Paradigm Shift</div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold mb-4 sm:mb-5 tracking-tight text-[#0f172a]">Dispatch Hasn't Evolved. <span className="text-[#0ea5e9]">Until Now.</span></h2>
            <p className="text-[15px] sm:text-[17px] text-[#475569] font-medium leading-relaxed">TruckDispatch Pro doesn't just help you manage loads. It actively moves them forward.</p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-6 relative">
            {/* Arrow */}
            <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-sm z-10 hidden md:flex items-center justify-center w-10 h-10">
              <ArrowRight className="text-gray-400 w-5 h-5" />
            </div>

            {/* Manual Era */}
            <div className="flex-1 bg-[#FAFAFA] rounded-xl p-10 w-full">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200/80">
                <div className="bg-gray-200/50 p-1.5 rounded-md text-gray-500"><X className="w-4 h-4" /></div>
                <h3 className="text-[20px] font-bold text-[#0f172a]">The Manual Era</h3>
              </div>
              <ul className="space-y-6">
                {[
                  [<FileText className="w-4 h-4" />, 'Chasing brokers'],
                  [<RefreshCw className="w-4 h-4" />, 'Switching between tools'],
                  [<AlertCircle className="w-4 h-4" />, 'Reacting to issues late'],
                  [<Clock className="w-4 h-4" />, 'Losing time in follow-ups'],
                ].map(([icon, text], i) => (
                  <li key={i} className="flex items-center gap-5 text-gray-500 font-semibold text-[15px]">
                    <div className="border border-gray-200 bg-white p-2 text-gray-400 rounded">{icon}</div> {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Era */}
            <div className="flex-1 border border-blue-100 bg-white rounded-xl w-full flex flex-col shadow-sm">
              <div className="p-10 flex-1">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-blue-50">
                  <div className="bg-[#0ea5e9] p-1.5 rounded-md text-white"><Check className="w-4 h-4" /></div>
                  <h3 className="text-[20px] font-bold text-[#0f172a]">The AI Powered System Era</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    [<Zap className="w-4 h-4" />, 'Automated negotiation'],
                    [<Layers className="w-4 h-4" />, 'Unified single platform'],
                    [<Shield className="w-4 h-4" />, 'Proactive issue resolution'],
                    [<TrendingUp className="w-4 h-4" />, 'Instant communication'],
                  ].map(([icon, text], i) => (
                    <li key={i} className="flex items-center gap-5 text-[#0f172a] font-bold text-[15px]">
                      <div className="border border-blue-100 bg-white p-2 rounded text-[#0ea5e9]">{icon}</div> {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0f172a] text-white p-5 rounded-b-xl text-[13px] font-bold flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] ml-2"></div> A system that runs your operations for you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DARK OS SECTION ── */}
      <section className="bg-[#111827] py-20 sm:py-32 text-center text-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold tracking-[0.1em] uppercase rounded-full mb-6 sm:mb-8">Redefining Dispatch</div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold mb-8 sm:mb-10 tracking-tight text-white leading-tight">An Operating System for Modern <br /> Dispatch</h2>
          <div className="mb-10 sm:mb-14">
            <p className="text-[17px] sm:text-[20px] text-[#94a3b8] mb-2 font-medium">This is not a dashboard.</p>
            <p className="text-[17px] sm:text-[20px] text-[#94a3b8] font-medium">This is not a TMS.</p>
          </div>
          <p className="text-[15px] sm:text-[17px] font-bold text-white mb-8 sm:mb-10">This is a decision-making engine that:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {[
              [<Activity className="text-[#10b981] w-5 h-5" key="a" />, 'tracks every load'],
              [<MessageSquare className="text-[#10b981] w-5 h-5" key="b" />, 'communicates\nautomatically'],
              [<Zap className="text-[#10b981] w-5 h-5" key="c" />, 'resolves bottlenecks'],
              [<TrendingUp className="text-[#10b981] w-5 h-5" key="d" />, 'optimizes outcomes in\nreal time'],
            ].map(([icon, text], i) => (
              <div key={i} className="bg-[#1e293b] border border-gray-700/50 p-4 sm:p-6 rounded-xl flex flex-col items-center min-h-[120px] sm:min-h-[150px] shadow-lg">
                <div className="bg-[#0d9488]/20 p-2.5 rounded-lg mb-3 sm:mb-5 flex items-center justify-center">{icon}</div>
                <span className="text-gray-200 text-[12px] sm:text-[13px] font-semibold tracking-wide whitespace-pre-line">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT IN ACTION ── */}
      <section id="product-in-action" className="py-20 sm:py-32 bg-[#F8FAFC]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 text-[10px] font-bold tracking-[0.1em] text-[#3b82f6] uppercase mb-5 sm:mb-6 bg-white rounded-sm shadow-sm">
              <TrendingUp className="w-3 h-3 text-[#3b82f6]" /> COMPLETE PLATFORM
            </div>
            <h2 className="text-[32px] sm:text-[42px] md:text-5xl font-extrabold text-[#0f172a] mb-4 sm:mb-6 tracking-tight">Product in Action</h2>
            <p className="text-[#475569] text-[15px] sm:text-[17px] font-medium max-w-2xl mx-auto">Every tool you need to run a modern dispatch operation: unified, intelligent, and always working for you.</p>
          </div>

          <div className="space-y-40">

            {/* Feature 1: Operations Dashboard */}
            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
              <div className="w-full lg:w-1/3 shrink-0 text-center lg:text-left">
                <div className="border border-gray-200 bg-white p-2.5 w-12 h-12 flex items-center justify-center rounded-md mb-6 sm:mb-8 shadow-sm mx-auto lg:mx-0">
                  <LayoutDashboard className="text-[#3b82f6]" />
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f172a] mb-2 tracking-tight">Operations Dashboard</h3>
                <h4 className="text-[15px] sm:text-[17px] font-bold text-[#0ea5e9] mb-6 sm:mb-8">See everything. Act instantly.</h4>
                <p className="text-[#475569] mb-8 sm:mb-10 text-[14px] sm:text-[15px] leading-[1.8] font-medium">Your entire operation, in one intelligent view: active loads, alerts, pipeline status, and priorities.</p>
                <ul className="space-y-3 sm:space-y-4 inline-block text-left">
                  {["Know what's stuck, delayed, or at risk", 'Track activity across all stages', 'Focus only on what needs action'].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-[#334155] text-[13px] sm:text-[14px]">
                      <div className="w-[5px] h-[5px] bg-[#0ea5e9] rounded-[1px] shrink-0"></div> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-2/3 bg-white border border-gray-200 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] overflow-hidden mockup-container">
                <div className="mockup-inner">
                  <DashboardMockup />
                </div>
              </div>
            </div>

            {/* Feature 2: Communication Hub */}
            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
              <div className="w-full lg:w-1/3 shrink-0 text-center lg:text-left">
                <div className="border border-gray-200 bg-white p-2.5 w-12 h-12 flex items-center justify-center rounded-md mb-6 sm:mb-8 shadow-sm mx-auto lg:mx-0">
                  <MessageCircle className="text-[#3b82f6]" />
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f172a] mb-2 tracking-tight">Communication Hub</h3>
                <h4 className="text-[15px] sm:text-[17px] font-bold text-[#0ea5e9] mb-6 sm:mb-8">All conversations. Fully in control.</h4>
                <p className="text-[#475569] mb-8 sm:mb-10 text-[14px] sm:text-[15px] leading-[1.8] font-medium">Centralize all communication channels into a single context-aware inbox. AI analyzes intent and suggests responses instantly.</p>
                <ul className="space-y-3 sm:space-y-4 inline-block text-left">
                  {['Email, WhatsApp, SMS in one place', 'AI-suggested responses', 'Load-linked conversations'].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-[#334155] text-[13px] sm:text-[14px]">
                      <div className="w-[5px] h-[5px] bg-[#0ea5e9] rounded-[1px] shrink-0"></div> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-2/3 bg-white border border-gray-200 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] overflow-hidden mockup-container">
                <div className="mockup-inner">
                  <CommsMockup />
                </div>
              </div>
            </div>

            {/* Feature 3: AI Automation Engine */}
            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
              <div className="w-full lg:w-1/3 shrink-0 text-center lg:text-left">
                <div className="border border-gray-200 bg-white p-2.5 w-12 h-12 flex items-center justify-center rounded-md mb-6 sm:mb-8 shadow-sm mx-auto lg:mx-0">
                  <Sparkles className="text-[#3b82f6]" />
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#0f172a] mb-2 tracking-tight">AI Automation Engine</h3>
                <h4 className="text-[15px] sm:text-[17px] font-bold text-[#0ea5e9] mb-6 sm:mb-8">Let the system do the work.</h4>
                <p className="text-[#475569] mb-8 sm:mb-10 text-[14px] sm:text-[15px] leading-[1.8] font-medium">The core of TruckDispatch Pro. Automation rules trigger instantly based on market conditions, load status, and carrier behavior.</p>
                <ul className="space-y-3 sm:space-y-4 inline-block text-left">
                  {['Communication and follow-ups', 'Negotiation handling', 'Driver coordination'].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-[#334155] text-[13px] sm:text-[14px]">
                      <div className="w-[5px] h-[5px] bg-[#0ea5e9] rounded-[1px] shrink-0"></div> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-2/3 bg-white border border-gray-200 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] overflow-hidden mockup-container">
                <div className="mockup-inner">
                  <AutomationMockup />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. CAPABILITIES GRID ── */}
      <section id="features" className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <h2 className="text-[26px] sm:text-[32px] font-bold text-center text-[#0f172a] mb-10 sm:mb-16 tracking-tight">More Capabilities Built for Speed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <SlidersHorizontal size={18} strokeWidth={1.5} />, title: 'Load Management', items: ['Track stages from discovery to delivery', 'Detect bottlenecks instantly', 'Take action without switching screens'] },
              { icon: <FileText size={18} strokeWidth={1.5} />, title: 'Details & Insights', items: ['Route and stop-level visibility', 'Profit and cost insights', 'Lifecycle progress tracking'] },
              { icon: <Plus size={18} strokeWidth={1.5} />, title: 'Load Creation', items: ['Structured setup in minutes', 'AI-powered recommendations', 'Workflow starts immediately'] },
              { icon: <Folder size={18} strokeWidth={1.5} />, title: 'Document Management', items: ['BOLs, PODs, invoices, contracts', 'Status tracking & quick access', 'Load-linked documentation'] },
              { icon: <Map size={18} strokeWidth={1.5} />, title: 'Route Optimization', items: ['Route visualization', 'Fuel and profit insights', 'Smarter routing decisions'] },
              { icon: <Bell size={18} strokeWidth={1.5} />, title: 'AI Alerts', items: ['Stuck load detection', 'Priority alerts', 'Revenue opportunities'] },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 pt-10 rounded shadow-sm h-full flex flex-col">
                <div className="border border-gray-200 w-10 h-10 flex items-center justify-center rounded mb-8 text-[#64748b] bg-white">{card.icon}</div>
                <h3 className="font-bold text-[#0f172a] text-[17px] mb-5">{card.title}</h3>
                <ul className="space-y-3 text-[13px] text-[#64748b] font-medium">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-[5px] h-[5px] bg-gray-300 rounded-[1px] shrink-0"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. HOW IT WORKS ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-[#dcfce7] text-[#16a34a] text-[10px] font-bold tracking-[0.1em] uppercase rounded-full mb-6">
            System Execution
          </div>
          <h2 className="text-5xl font-extrabold text-[#0f172a] mb-24 tracking-tight">How It Works</h2>

          <div className="relative flex flex-wrap justify-center items-start gap-x-0 gap-y-8 w-full mx-auto mb-20 px-4 sm:flex-nowrap sm:justify-between">
            <div className="absolute left-[30px] right-[30px] top-[18px] h-[1px] bg-gray-200 -z-10 hidden sm:block"></div>
            {[
              { n: 1, title: 'Loads enter the\nsystem' },
              { n: 2, title: 'AI initiates\ncommunication' },
              { n: 3, title: 'Document &\napprovals handled' },
              { n: 4, title: 'Drivers are assigned\nintelligently' },
              { n: 5, title: 'Loads move in real\ntime' },
              { n: 6, title: 'Insights optimize\nevery step' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative w-[calc(33%-8px)] sm:w-[130px]">
                <div className="w-9 h-9 bg-[#0f172a] text-white rounded-full flex items-center justify-center font-bold text-[14px] mb-5 shadow-[0_0_0_10px_white]">
                  {step.n}
                </div>
                <p className="text-[12px] font-bold text-[#334155] whitespace-pre-line text-center leading-[1.4]">{step.title}</p>
                {i < 5 && (
                  <div className="absolute top-[18px] text-gray-300 right-[-30px] transform -translate-y-1/2 bg-white px-2 hidden sm:block">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-[14px] sm:text-[16px] font-bold text-[#475569] px-4">Every step automated. Every decision optimized. Every load moving forward.</p>
        </div>
      </section>

      {/* ── 8. WHY THIS WINS ── */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA]">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0f172a] mb-4 tracking-tight">Why This Wins</h2>
          <p className="text-[16px] sm:text-[20px] text-[#475569] font-semibold mb-10 sm:mb-16">Built to Execute, Not Just Manage</p>
          <div className="space-y-4 mb-12 sm:mb-16">
            {[
              ['Manual workflows', 'Automated execution'],
              ['Disconnected tools', 'One unified system'],
              ['Reactive decisions', 'Real-time intelligence'],
              ['Data visibility', 'Actionable outcomes'],
            ].map((pair, i) => (
              <div key={i} className="flex items-center justify-between p-4 sm:p-6 px-5 sm:px-10 rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                <div className="flex-1 text-right pr-3 sm:pr-6">
                  <div className="text-[10px] sm:text-[12px] font-bold text-gray-400 tracking-wide mb-1 opacity-80">Others</div>
                  <div className="text-[13px] sm:text-[15px] font-semibold text-[#475569]">{pair[0]}</div>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#dcfce7] rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#16a34a]" />
                </div>
                <div className="flex-1 text-left pl-3 sm:pl-6">
                  <div className="text-[10px] sm:text-[12px] font-bold text-[#16a34a] tracking-wide mb-1">TruckDispatch Pro</div>
                  <div className="text-[13px] sm:text-[15px] font-extrabold text-[#0f172a]">{pair[1]}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="inline-flex items-center px-4 sm:px-5 py-2.5 bg-[#dcfce7] border border-[#bbf7d0] text-[#166534] font-bold text-[12px] sm:text-[13px] rounded">
            <span className="w-2 h-2 bg-[#16a34a] rounded-full mr-3"></span> The difference is execution. Every time.
          </div>
        </div>
      </section>

      {/* ── 9. IMPACT ── */}
      <section className="py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#dcfce7] text-[#166534] text-[10px] font-bold tracking-[0.1em] uppercase rounded-full mb-6">Real Results</div>
            <h2 className="text-5xl font-extrabold text-[#0f172a] tracking-tight">Impact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <TrendingUp className="text-[#334155] w-5 h-5" />, title: 'Reduce manual work and follow-ups', desc: 'Eliminate repetitive tasks and let AI handle communication' },
              { icon: <Zap className="text-[#334155] w-5 h-5" />, title: 'Increase speed of operations', desc: 'Move loads faster with automated workflows and instant decisions' },
              { icon: <TrendingUp className="text-[#334155] w-5 h-5" />, title: 'Improve load profitability', desc: 'Optimize routes, reduce delays, and capture more margin' },
              { icon: <Users className="text-[#334155] w-5 h-5" />, title: 'Scale without increasing team size', desc: 'Handle more volume with the same resources through automation' },
            ].map((card, i) => (
              <div key={i} className="border border-gray-200 bg-[#FAFAFA] rounded-2xl p-8 pb-10">
                <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center rounded-lg mb-6 shadow-sm">{card.icon}</div>
                <h3 className="font-extrabold text-[#0f172a] text-[16px] mb-3">{card.title}</h3>
                <p className="text-[#64748b] text-[14px] leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 10. CTA ── */}
      <section className="bg-gradient-to-b from-[#0f172a] to-[#0A1128] pt-20 sm:pt-32 pb-16 sm:pb-24 text-center">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <h2 className="text-[28px] sm:text-[40px] md:text-[52px] font-extrabold mb-5 sm:mb-6 tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
            Stop Managing Dispatch. <br />Start Running It Like a System.
          </h2>
          <p className="text-[#94a3b8] text-[15px] sm:text-[17px] mb-8 sm:mb-12 font-medium">
            See how TruckDispatch Pro transforms your operations from day one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <button
              onClick={() => setDialog({ open: true, type: "demo" })}
              className="w-full sm:w-auto bg-white text-[#0f172a] px-8 py-3.5 rounded-md font-bold text-[14px] hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              Book a Demo <ArrowRight className="w-4 h-4 text-[#0f172a]" />
            </button>
            <button
              onClick={() => setDialog({ open: true, type: "trial" })}
              className="w-full sm:w-auto bg-transparent border border-gray-600 text-[#e2e8f0] px-8 py-3.5 rounded-md font-bold text-[14px] hover:bg-gray-800 transition-all"
            >
              Start Free Trial
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[12px] sm:text-[13px] text-gray-400 font-bold tracking-wide">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div> No credit card required</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div> 14-day free trial</span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div> Setup in minutes</span>
          </div>
        </div>
      </section>

      {/* ── 11. FOOTER ── */}
      <Footer />

      <ContactDialog
        open={dialog.open}
        type={dialog.type}
        onClose={() => setDialog((d) => ({ ...d, open: false }))}
      />
    </div>
  );
}