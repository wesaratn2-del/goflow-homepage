'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { COLORS } from '@/lib/constants';

const architecture = [
  { icon: '⚙️', name: 'Enterprise Core', desc: 'Unified infrastructure' },
  { icon: '🤖', name: 'AI Layer', desc: 'Native AI services' },
  { icon: '📦', name: 'Products', desc: '5 Commercial products' },
  { icon: '🛍️', name: 'Marketplace', desc: 'Creator ecosystem' },
  { icon: '🤝', name: 'Partners', desc: 'Integration network' },
  { icon: '⚡', name: 'API Platform', desc: 'Developer tools' },
];

export default function EnterpriseCore() {
  return (
    <section id="solutions" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="text-gradient">One Enterprise Core</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Five super products built on a unified platform architecture
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 border"
          style={{ borderColor: COLORS.border }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {architecture.map((item, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  variants={staggerItem}
                  className="glass rounded-xl p-6 border flex items-center gap-4 hover:border-green-500/50 transition-colors"
                  style={{ borderColor: COLORS.border }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>

                {idx < architecture.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="text-2xl text-gray-500">↓</div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
