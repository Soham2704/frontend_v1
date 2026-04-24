"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

type DialogType = "demo" | "trial";

interface ContactDialogProps {
  open: boolean;
  type: DialogType;
  onClose: () => void;
}

export default function ContactDialog({ open, type, onClose }: ContactDialogProps) {
  const [result, setResult] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Reset state when dialog opens
  useEffect(() => {
    if (open) setResult("idle");
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const isDemo = type === "demo";
  const title = isDemo ? "Book a Demo" : "Start Your Free Trial";
  const subtitle = isDemo
    ? "See TruckDispatch Pro in action — our team will walk you through a personalized demo."
    : "Get started with a 14-day free trial. No credit card required.";
  const subject = isDemo ? "Demo Request - TruckDispatch Pro" : "Free Trial Request - TruckDispatch Pro";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "257bb0a6-6327-4ca4-bd06-23c08f7f656c");
    formData.append("subject", subject);
    formData.append("from_name", "TruckDispatch Pro Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.success ? "success" : "error");
    } catch {
      setResult("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {result === "success" ? (
            <div className="flex flex-col items-center text-center py-6 gap-3">
              <CheckCircle className="w-12 h-12 text-emerald-500" />
              <h3 className="text-lg font-semibold text-slate-900">
                {isDemo ? "Demo request received!" : "You're on the list!"}
              </h3>
              <p className="text-sm text-slate-500 max-w-xs">
                {isDemo
                  ? "Our team will reach out within 1 business day to schedule your personalized demo."
                  : "Check your inbox — we'll send your free trial access shortly."}
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="John"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Smith"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Acme Logistics"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  {isDemo ? "What would you like to see in the demo?" : "Anything else we should know?"}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={isDemo ? "E.g. load assignment, AI communications, P&L reporting..." : "Fleet size, current challenges, etc."}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              {result === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Hidden field for form type */}
              <input type="hidden" name="form_type" value={type} />

              <button
                type="submit"
                disabled={result === "loading"}
                className="w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {result === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : isDemo ? (
                  "Request Demo"
                ) : (
                  "Start Free Trial"
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to our{" "}
                <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
