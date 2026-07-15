'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/lib/constants';

const leadOptions = [
  { icon: '🎮', label: 'Request Demo', desc: 'See GOFLOW in action' },
  { icon: '🤝', label: 'Become Partner', desc: 'Join our ecosystem' },
  { icon: '💼', label: 'Investor Relations', desc: 'Investment opportunities' },
  { icon: '📞', label: 'Contact Sales', desc: 'Enterprise solutions' },
];

export default function LeadCapture() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="text-gradient">Let's Get Started</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose how you'd like to connect with GOFLOW
          </p>
        </motion.div>

        {/* Options Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {leadOptions.map((option) => (
            <motion.button
              key={option.label}
              onClick={() => setSelectedOption(option.label)}
              className="glass rounded-xl p-6 border text-left group hover:border-green-500/50 transition-all"
              style={{ borderColor: COLORS.border }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-3">{option.icon}</div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-green-400 transition-colors">
                {option.label}
              </h3>
              <p className="text-gray-400 text-sm">{option.desc}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Contact Form */}
        {selectedOption && (
          <motion.div
            className="glass rounded-xl p-8 border"
            style={{ borderColor: COLORS.border }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-6">{selectedOption}</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Company"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors resize-none"
              />
              <button type="submit" className="btn btn-primary w-full py-3">
                Submit
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
