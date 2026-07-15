'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { COLORS } from '@/lib/constants';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Technology', href: '#technology' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Investor', href: '#investor' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${COLORS.border}` : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gradient font-black">GOFLOW</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="btn btn-outline text-sm px-6 py-2.5">Login</button>
          <button className="btn btn-primary text-sm px-6 py-2.5">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="w-6 h-0.5 bg-white transition-transform"
            style={{
              transform: isOpen ? 'rotate(45deg) translateY(10px)' : 'none',
            }}
          />
          <div
            className="w-6 h-0.5 bg-white transition-opacity"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <div
            className="w-6 h-0.5 bg-white transition-transform"
            style={{
              transform: isOpen ? 'rotate(-45deg) translateY(-10px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 glass border-t"
          style={{ borderColor: COLORS.border }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t" style={{ borderColor: COLORS.border }}>
              <button className="btn btn-primary w-full py-2.5 text-sm">Get Started</button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
