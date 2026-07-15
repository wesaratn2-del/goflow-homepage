'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { COLORS } from '@/lib/constants';

const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started',
    features: ['5 Projects', 'AI Chat (limited)', 'Community Support', 'API Access'],
  },
  {
    name: 'Plus',
    price: '149',
    description: 'For growing teams',
    features: ['Unlimited Projects', 'All AI Features', 'Email Support', 'Advanced API'],
    popular: true,
  },
  {
    name: 'Pro',
    price: '499',
    description: 'For professionals',
    features: ['Everything in Plus', 'Priority Support', 'Custom Workflows', 'Marketplace'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: ['Dedicated Support', 'Custom Integration', 'SLA', 'On-premise Option'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className={`rounded-xl p-8 border relative ${
                plan.popular ? 'glass ring-2 ring-green-500/50' : 'glass'
              }`}
              style={{ borderColor: plan.popular ? COLORS.primary : COLORS.border }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-gradient-primary rounded-full text-xs font-bold text-black">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-green-400">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8 pb-8 border-b" style={{ borderColor: COLORS.border }}>
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
                  plan.popular ? 'btn btn-primary' : 'btn btn-outline'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
