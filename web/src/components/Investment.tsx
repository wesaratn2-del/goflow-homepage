'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import type { InvestmentData } from '@/types';

export default function Investment() {
  const [data, setData] = useState<InvestmentData | null>(null);

  useEffect(() => {
    apiClient.getInvestment().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section id="investment" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-12 text-white text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">{data.title}</h2>
          <p className="text-xl mb-6 opacity-90">{data.message}</p>
          <p className="text-lg leading-relaxed">{data.description}</p>
        </div>

        {/* Roadmap */}
        <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold mb-8 text-center">Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(data.roadmap).map(([key, value], idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {idx + 1}
                </div>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {data.cta.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className="px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
            >
              {btn.text}
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6 text-center text-sm text-yellow-800 dark:text-yellow-200">
          <p>⚠️ {data.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
