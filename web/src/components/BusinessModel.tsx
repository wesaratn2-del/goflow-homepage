'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { COLORS } from '@/lib/constants';
import { apiClient } from '@/services/api';
import type { BusinessModelData } from '@/types';

export default function BusinessModel() {
  const [data, setData] = useState<BusinessModelData | null>(null);

  useEffect(() => {
    apiClient.getBusinessModel().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="text-gradient">Multiple Revenue Streams</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Diversified and sustainable business model
          </p>
        </motion.div>

        {/* Revenue Cards */}
        <motion.div
          className="grid md:grid-cols-5 gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.revenueStreams.map((stream, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 border text-center group cursor-pointer"
              style={{ borderColor: COLORS.border }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {stream.icon}
              </div>
              <h3 className="font-bold mb-1 text-green-400">{stream.percentage}%</h3>
              <h4 className="text-sm font-bold mb-2">{stream.name}</h4>
              <p className="text-xs text-gray-400">{stream.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart Visualization */}
        <motion.div
          className="glass rounded-xl p-8 border"
          style={{ borderColor: COLORS.border }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-end justify-center gap-2 h-64">
            {data.revenueStreams.map((stream, idx) => (
              <motion.div
                key={idx}
                className="flex-1 bg-gradient-to-t from-green-500 to-cyan-400 rounded-lg hover:from-green-400 hover:to-cyan-300 transition-all cursor-pointer"
                style={{
                  height: `${(stream.percentage / 40) * 100}%`,
                }}
                whileHover={{ scale: 1.05 }}
                title={`${stream.name}: ${stream.percentage}%`}
              />
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-5 gap-4 text-center">
            {data.revenueStreams.map((stream, idx) => (
              <div key={idx}>
                <p className="text-xs text-gray-400 mb-1">{stream.name}</p>
                <p className="font-bold text-green-400">{stream.percentage}%</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
