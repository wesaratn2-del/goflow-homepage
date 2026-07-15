'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import type { BusinessModelData } from '@/types';

export default function BusinessModel() {
  const [data, setData] = useState<BusinessModelData | null>(null);

  useEffect(() => {
    apiClient.getBusinessModel().then(setData).catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section id="business" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">{data.title}</h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          {data.message}
        </p>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {data.revenueStreams.map((stream, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">{stream.icon}</div>
              <h3 className="text-xl font-bold mb-2">{stream.name}</h3>
              <p className="text-gray-300 mb-4">{stream.description}</p>
              <div className="text-3xl font-bold text-blue-400">{stream.percentage}%</div>
            </div>
          ))}
        </div>

        {/* Visualization */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="grid md:grid-cols-5 gap-3 h-64">
            {data.revenueStreams.map((stream, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-lg opacity-80 hover:opacity-100 transition"
                style={{
                  height: `${(stream.percentage / 100) * 100}%`,
                  alignSelf: 'flex-end',
                }}
                title={`${stream.name}: ${stream.percentage}%`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
