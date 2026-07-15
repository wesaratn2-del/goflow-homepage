'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import type { WhyGoflowData } from '@/types';

export default function WhyGoflow() {
  const [data, setData] = useState<WhyGoflowData | null>(null);

  useEffect(() => {
    apiClient.getWhyGoflow().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section id="why" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">{data.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 border border-blue-200 dark:border-slate-600 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
