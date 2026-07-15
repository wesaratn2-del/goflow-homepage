'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import type { EnterpriseCoreData } from '@/types';

export default function EnterpriseCore() {
  const [data, setData] = useState<EnterpriseCoreData | null>(null);

  useEffect(() => {
    apiClient.getEnterpriseCore().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">{data.title}</h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-2">{data.subtitle}</p>
          <p className="text-lg text-blue-600 dark:text-blue-400">{data.description}</p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
          <div className="space-y-4">
            {data.architecture.levels.map((level, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl">
                    {level.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{level.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{level.description}</p>
                  </div>
                </div>
                {idx < data.architecture.levels.length - 1 && (
                  <div className="text-center text-3xl text-gray-400 mb-4">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {data.message}
          </p>
        </div>
      </div>
    </section>
  );
}
