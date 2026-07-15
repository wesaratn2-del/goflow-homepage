'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          GOFLOW
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Products
          </a>
          <a href="#why" className="text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Why GOFLOW
          </a>
          <a href="#business" className="text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Business
          </a>
          <a href="#investment" className="text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Investor
          </a>
          <a href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
          <div className="px-4 py-4 space-y-4">
            <a href="#products" className="block text-slate-600 dark:text-gray-300 hover:text-blue-600">
              Products
            </a>
            <a href="#why" className="block text-slate-600 dark:text-gray-300 hover:text-blue-600">
              Why GOFLOW
            </a>
            <a href="#business" className="block text-slate-600 dark:text-gray-300 hover:text-blue-600">
              Business
            </a>
            <a href="#investment" className="block text-slate-600 dark:text-gray-300 hover:text-blue-600">
              Investor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
