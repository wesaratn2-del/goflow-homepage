'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { COLORS } from '@/lib/constants';
import { apiClient } from '@/services/api';
import type { HeroData } from '@/types';

export default function Hero() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .getHero()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (!data && loading) {
    return (
      <section className="h-screen bg-gradient-to-b from-slate-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin mb-4">⚙️</div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-transparent rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column */}
          <motion.div variants={staggerItem} className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-7xl font-black leading-tight"
              >
                <span className="text-gradient">The AI Operating System</span>
                <br />
                for Organizations
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                {data?.description || 'One Enterprise Platform powering AI Workspace, Political Platform, Agriculture Intelligence and Future Digital Services.'}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <button className="btn btn-primary px-8 py-3.5 text-base font-semibold">
                Explore Products
              </button>
              <button className="btn btn-outline px-8 py-3.5 text-base font-semibold">
                Investor Information
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Enterprise Dashboard */}
          <motion.div
            variants={fadeInUp}
            className="glass rounded-2xl p-8 md:p-10 border"
            style={{ borderColor: COLORS.border }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Enterprise Dashboard</h3>
                <p className="text-gray-400">Real-time platform metrics</p>
              </div>

              {/* Stats Grid */}
              <div className="space-y-6">
                {[
                  { label: 'Registered Users', value: '125K+', icon: '👥' },
                  { label: 'Organizations', value: '2.3K+', icon: '🏢' },
                  { label: 'Partners', value: '450+', icon: '🤝' },
                  { label: 'Projects', value: '8.5K+', icon: '📊' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center justify-between pb-6 border-b"
                    style={{ borderColor: COLORS.border }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{stat.icon}</span>
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                    </div>
                    <span
                      className="text-2xl font-bold text-gradient"
                    >
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
