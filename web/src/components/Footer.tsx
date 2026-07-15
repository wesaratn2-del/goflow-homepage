'use client';

import React from 'react';
import { COLORS } from '@/lib/constants';

const footerSections = [
  {
    title: 'Products',
    links: ['GOFLOW AI', 'Political Platform', 'Rider', 'Market', 'Agri'],
  },
  {
    title: 'Solutions',
    links: ['Enterprise', 'Government', 'Education', 'Healthcare', 'Finance'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Newsroom', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Docs', 'Support', 'Community', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Compliance', 'Cookie'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: COLORS.border }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4">
              <span className="text-gradient">GOFLOW</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The AI Operating System for Organizations
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="border-t mb-8"
          style={{ borderColor: COLORS.border }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2026 GOFLOW. All rights reserved.</p>
          <p>Built for Thailand 🇹🇭 | Enterprise Grade 🚀</p>
        </div>
      </div>
    </footer>
  );
}
