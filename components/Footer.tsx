"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, X, Mail, Phone, MapPin } from 'lucide-react';
import ContactPopup from './ContactPopup';

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/4">
          <div className="text-[17px] font-extrabold mb-4 text-[#0f172a]">TruckDispatch Pro</div>
          <p className="text-[13px] text-[#64748b] leading-relaxed font-medium">
            The operating system for modern dispatch operations. Built for scale, designed for execution.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4 text-[13px]">
          {[
            { title: 'Product', links: [{ label: 'Features', href: '/platform#features' }, { label: 'Pricing', href: '/platform#pricing' }, { label: 'Security', href: '/security' }, { label: 'Roadmap', href: '/roadmap' }] },
            { title: 'Company', links: [{ label: 'About', href: 'https://primustechnologiesai.com' }, { label: 'Customers', href: '/platform#customers' }, { label: 'Careers', href: '/careers' }, { label: 'Contact', href: '#', isContact: true }] },
            { title: 'Resources', links: [{ label: 'Documentation', href: '#' }, { label: 'API Reference', href: '#' }, { label: 'Support', href: '/platform#resources' }, { label: 'Status', href: '#' }] },
            { title: 'Legal', links: [{ label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }, { label: 'Compliance', href: '/compliance' }] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-5 text-[#0f172a]">{col.title}</h4>
              <ul className="space-y-3 text-[#64748b] font-medium">
                {col.links.map((link: any, j) => (
                  <li key={j}>
                    {link.isContact ? (
                      <button 
                        onClick={(e) => { e.preventDefault(); setContactOpen(true); }}
                        className="hover:text-[#0f172a] transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : link.href.startsWith("http") ? (
                      <a 
                        href={link.href} 
                        className="hover:text-[#0f172a] transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="hover:text-[#0f172a] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[13px] text-[#64748b] font-medium">© 2026 TruckDispatch Pro. All rights reserved.</div>
        <div className="flex gap-4">
          <Twitter className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <Linkedin className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <Github className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>

      <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
}
