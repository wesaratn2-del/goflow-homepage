'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { COLORS } from '@/lib/constants';
import { apiClient } from '@/services/api';
import type { ProductsData, Product } from '@/types';

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      className="glass rounded-xl p-8 border group cursor-pointer"
      style={{ borderColor: COLORS.border }}
    >
      <div className="space-y-4">
        <div className="text-5xl">{product.icon}</div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-400">{product.description}</p>
        </div>

        {/* Status */}
        <div>
          <span
            className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{
              background:
                product.status === 'available'
                  ? `${COLORS.primary}20`
                  : `${COLORS.secondary}20`,
              color: product.status === 'available' ? COLORS.primary : COLORS.secondary,
            }}
          >
            {product.statusLabel}
          </span>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <p className="text-xs text-gray-500 font-semibold">KEY FEATURES</p>
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 5).map((feature, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-xs text-gray-300">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        {product.cta && (
          <div className="pt-4 border-t" style={{ borderColor: COLORS.border }}>
            <a href={product.cta[0].href} className="text-sm font-semibold text-green-400 hover:text-green-300 transition-colors">
              Explore →
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [data, setData] = useState<ProductsData | null>(null);

  useEffect(() => {
    apiClient.getProducts().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section id="products" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="text-gradient">Commercial Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade solutions built for scale
          </p>
        </motion.div>

        {/* Featured Products */}
        <motion.div
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-3xl">⭐</span> Available Now
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.featured.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-3xl">🔜</span> Coming Soon
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {data.comingSoon.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx + 2} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
