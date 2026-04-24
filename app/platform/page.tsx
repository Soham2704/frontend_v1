'use client';

import React, { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ContactDialog from '../../components/landing/ContactDialog';
import ContactPopup from '../../components/ContactPopup';

export default function PlatformPage() {
  const [dialog, setDialog] = useState({ open: false, type: 'trial' as 'demo' | 'trial' });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-blue-100 flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="pt-24 pb-10 bg-[#F8FAFC]">
          <div className="max-w-[1240px] mx-auto px-6 text-center">
            <h1 className="text-[48px] md:text-[64px] font-extrabold tracking-tight text-[#0f172a] mb-6">
              The Platform
            </h1>
            <p className="text-[18px] text-[#475569] max-w-2xl mx-auto font-medium">
              Everything you need to run your dispatch operations at scale.
            </p>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="py-20 sm:py-28 bg-white border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0f172a] mb-4 tracking-tight">Features</h2>
              <p className="text-[#475569] text-[16px] sm:text-[18px] font-medium max-w-2xl mx-auto">Powerful capabilities built for speed and automation.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: AI Configuration */}
              <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-[#3b82f6] font-bold text-xl">⚙️</div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#0f172a]">Tenant AI Configuration</h3>
                <p className="text-[#475569] leading-relaxed">Customize your AI's behavior per tenant. Toggle between full automation or semi-automated modes where AI drafts responses for human approval.</p>
              </div>

              {/* Feature 2: AI Email Response */}
              <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-[#3b82f6] font-bold text-xl">✉️</div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#0f172a]">AI Email Suggestions</h3>
                <p className="text-[#475569] leading-relaxed">Our email listener instantly parses incoming messages, understands context, and auto-drafts perfect rate confirmations and negotiation replies.</p>
              </div>

              {/* Feature 3: WhatsApp Chatbot */}
              <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#ecfdf5] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-[#10b981] font-bold text-xl">💬</div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#0f172a]">WhatsApp Driver Bot</h3>
                <p className="text-[#475569] leading-relaxed">Communicate with drivers seamlessly via WhatsApp. Instantly broadcast load details, track locations, and receive POD documents automatically.</p>
              </div>

              {/* Feature 4: Voicebot Assistance */}
              <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#f5f3ff] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-[#8b5cf6] font-bold text-xl">🎙️</div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#0f172a]">Voicebot Assistance</h3>
                <p className="text-[#475569] leading-relaxed">Deploy an intelligent voice agent to handle check calls, verify driver availability, and negotiate basic terms over the phone, hands-free.</p>
              </div>

              {/* Feature 5: Load Management */}
              <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#fffbeb] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-[#f59e0b] font-bold text-xl">🚚</div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#0f172a]">Intelligent Load Tracking</h3>
                <p className="text-[#475569] leading-relaxed">A unified fleet and load dashboard. Track shipments in real time, monitor driver Hours of Service (HOS), and detect bottlenecks instantly.</p>
              </div>

              {/* Feature 6: Document Parsing */}
              <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#fef2f2] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-[#ef4444] font-bold text-xl">📄</div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#0f172a]">Smart Document Vault</h3>
                <p className="text-[#475569] leading-relaxed">Stop manual data entry. Upload BOLs, rate cons, and invoices to S3, while our AI automatically extracts and structures critical load data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0f172a] mb-4 tracking-tight">Pricing</h2>
              <p className="text-[#475569] text-[16px] sm:text-[18px] font-medium max-w-2xl mx-auto">Simple, transparent pricing that scales with your fleet.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {/* Starter Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Starter</h3>
                <p className="text-[#64748b] text-sm mb-6">Perfect for small fleets getting started.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#0f172a]">$49</span>
                  <span className="text-[#64748b]">/user/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center text-sm text-[#475569]"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Up to 5 trucks</li>
                  <li className="flex items-center text-sm text-[#475569]"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Basic Load Management</li>
                  <li className="flex items-center text-sm text-[#475569]"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Standard Support</li>
                </ul>
                <button 
                  onClick={() => setDialog({ open: true, type: 'trial' })}
                  className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-[#0f172a] font-bold hover:bg-gray-50 transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
              {/* Pro Card */}
              <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0ea5e9] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <p className="text-[#94a3b8] text-sm mb-6">For growing fleets needing automation.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">$99</span>
                  <span className="text-[#94a3b8]">/user/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Up to 50 trucks</li>
                  <li className="flex items-center text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> AI Automation Engine</li>
                  <li className="flex items-center text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Advanced Analytics</li>
                  <li className="flex items-center text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Priority 24/7 Support</li>
                </ul>
                <button 
                  onClick={() => setDialog({ open: true, type: 'trial' })}
                  className="w-full py-3 px-4 bg-[#0ea5e9] rounded-lg text-white font-bold hover:bg-blue-500 transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
              {/* Enterprise Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Enterprise</h3>
                <p className="text-[#64748b] text-sm mb-6">Custom solutions for massive scale.</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#0f172a]">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center text-sm text-[#475569]"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Unlimited trucks</li>
                  <li className="flex items-center text-sm text-[#475569]"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Custom AI Workflows</li>
                  <li className="flex items-center text-sm text-[#475569]"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> Dedicated Account Manager</li>
                  <li className="flex items-center text-sm text-[#475569]"><span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mr-2"></span> API Access & Integration</li>
                </ul>
                <button 
                  onClick={() => setContactOpen(true)}
                  className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-[#0f172a] font-bold hover:bg-gray-50 transition-colors"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CUSTOMERS ── */}
        <section id="customers" className="py-20 sm:py-28 bg-white border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0f172a] mb-4 tracking-tight">Customers</h2>
              <p className="text-[#475569] text-[16px] sm:text-[18px] font-medium max-w-2xl mx-auto">Join the fastest growing dispatch operations using TruckDispatch Pro.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">John Smith</h4>
                    <p className="text-sm text-[#64748b]">CEO, Apex Freight</p>
                  </div>
                </div>
                <p className="text-[#475569] italic">"TruckDispatch Pro completely changed how we handle our loads. We've scaled our volume by 3x without hiring a single new dispatcher."</p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">Sarah Jenkins</h4>
                    <p className="text-sm text-[#64748b]">Operations Manager, Horizon Logistics</p>
                  </div>
                </div>
                <p className="text-[#475569] italic">"The AI automation engine is like having a team working 24/7. It catches issues before they happen and negotiates exactly within our parameters."</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESOURCES ── */}
        <section id="resources" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#0f172a] mb-4 tracking-tight">Resources</h2>
              <p className="text-[#475569] text-[16px] sm:text-[18px] font-medium max-w-2xl mx-auto">Everything you need to learn about modern dispatching.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-gray-100">
                  <span className="text-slate-400 font-medium">Image Placeholder</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider mb-2">Guide</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 leading-snug">The Ultimate Guide to Automated Load Negotiation</h3>
                  <p className="text-sm text-[#64748b] mb-4 flex-1">Learn how top fleets are using AI to instantly negotiate the best rates without manual back-and-forth.</p>
                  <span className="text-sm font-bold text-[#0f172a] hover:text-[#0ea5e9] transition-colors">Read Guide →</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-gray-100">
                  <span className="text-slate-400 font-medium">Image Placeholder</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-[#10b981] uppercase tracking-wider mb-2">Webinar</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 leading-snug">Scaling Operations Without Adding Headcount</h3>
                  <p className="text-sm text-[#64748b] mb-4 flex-1">Watch our on-demand webinar featuring Apex Freight's CEO on doing 3x volume with the same team.</p>
                  <span className="text-sm font-bold text-[#0f172a] hover:text-[#0ea5e9] transition-colors">Watch Now →</span>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-gray-100">
                  <span className="text-slate-400 font-medium">Image Placeholder</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-[#8b5cf6] uppercase tracking-wider mb-2">Blog</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2 leading-snug">Why Traditional TMS Systems Are Failing Modern Fleets</h3>
                  <p className="text-sm text-[#64748b] mb-4 flex-1">A deep dive into the limitations of legacy management systems and the shift towards execution engines.</p>
                  <span className="text-sm font-bold text-[#0f172a] hover:text-[#0ea5e9] transition-colors">Read Article →</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ContactDialog
        open={dialog.open}
        type={dialog.type}
        onClose={() => setDialog((d) => ({ ...d, open: false }))}
      />
      
      <ContactPopup 
        open={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />
    </div>
  );
}
