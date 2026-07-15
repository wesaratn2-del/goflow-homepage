'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import type { ProductsData, Product } from '@/types';

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/20 transition">
      <div className="text-5xl mb-4">{product.icon}</div>
      <h3 className="text-2xl font-bold mb-2 dark:text-white">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
      
      <div className="mb-4">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 border border-blue-300 dark:border-blue-700">
          {product.statusLabel}
        </span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {product.features.slice(0, 4).map((feature, idx) => (
          <span key={idx} className="text-xs px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full">
            {feature}
          </span>
        ))}
        {product.features.length > 4 && (
          <span className="text-xs px-3 py-1 text-gray-600 dark:text-gray-400">+{product.features.length - 4} more</span>
        )}
      </div>

      {product.cta && (
        <div className="flex gap-3 flex-wrap">
          {product.cta.map((button, idx) => (
            <a
              key={idx}
              href={button.href}
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
            >
              {button.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  const [data, setData] = useState<ProductsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .getProducts()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="py-20 text-center">Loading products...</div>;
  if (!data) return null;

  return (
    <section id="products" className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Our Products</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          GOFLOW Platform มี 5 ผลิตภัณฑ์เชิงพาณิชย์ที่สร้างบน Enterprise Core เดียวกัน
        </p>

        {/* Featured Products */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span>⭐</span> Available Now
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span>🔜</span> Coming Soon
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {data.comingSoon.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
