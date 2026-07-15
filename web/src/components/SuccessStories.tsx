'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { COLORS } from '@/lib/constants';

const stories = [
  {
    product: 'GOFLOW AI',
    icon: '🤖',
    metrics: [
      { label: 'Active Users', value: '125K+' },
      { label: 'Requests/Day', value: '10M+' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
  {
    product: 'Political Platform',
    icon: '🌻',
    metrics: [
      { label: 'Organizations', value: '50+' },
      { label: 'Members', value: '2M+' },
      { label: 'Campaigns', value: '500+' },
    ],
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="text-gradient">Real Product, Real Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proven performance across enterprise deployments
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="glass rounded-xl p-8 md:p-10 border overflow-hidden group"
              style={{ borderColor: COLORS.border }}
              whileHover={{ borderColor: COLORS.primary }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{story.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{story.product}</h3>
                  <p className="text-gray-400 text-sm">Production metrics</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {story.metrics.map((metric, midx) => (
                  <motion.div
                    key={midx}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: midx * 0.1 }}
                  >
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="text-2xl font-bold text-green-400">{metric.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
