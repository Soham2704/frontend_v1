import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 bg-[#F8FAFC] border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="bg-[#0f172a] p-1.5 rounded-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          </svg>
        </div>
        <Link href="/">
          <span className="text-[16px] sm:text-[19px] font-bold tracking-tight text-[#0f172a]">TruckDispatch Pro</span>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-10 text-[14px] font-semibold text-[#475569]">
        <Link href="/platform#features" className="hover:text-[#0f172a] transition-colors">Features</Link>
        <Link href="/platform#pricing" className="hover:text-[#0f172a] transition-colors">Pricing</Link>
        <Link href="/platform#customers" className="hover:text-[#0f172a] transition-colors">Customers</Link>
        <Link href="/platform#resources" className="hover:text-[#0f172a] transition-colors">Resources</Link>
      </div>
    </nav>
  );
}
