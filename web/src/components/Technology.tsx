'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { COLORS } from '@/lib/constants';

const techs = [
  { icon: '☁️', name: 'Cloud Native', desc: 'Kubernetes-ready architecture' },
  { icon: '🤖', name: 'AI Native', desc: 'Native AI capabilities' },
  { icon: '🔄', name: 'Microservices', desc: 'Modular & scalable' },
  { icon: '⚡', name: 'API First', desc: 'Developer-friendly APIs' },
  { icon: '🔒', name: 'Enterprise Security', desc: 'SOC2, ISO27001 ready' },
  { icon: '📊', name: 'Analytics', desc: 'Real-time insights' },
];

export default function Technology() {
  return (
    <section id="technology" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-full blur-3xl" />
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
            <span className="text-gradient">Enterprise Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built on modern, production-proven technologies
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-8 border text-center group cursor-pointer"
              style={{ borderColor: COLORS.border }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
