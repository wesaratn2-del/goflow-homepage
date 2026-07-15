'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import type { HeroData } from '@/types';

export default function Hero() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .getHero()
      .then((heroData) => {
        setData(heroData);
        setError(null);
      })
      .catch((err) => {
        console.error('Failed to fetch hero data:', err);
        setError('Failed to load hero data');
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-red-400 text-lg">⚠️ {error}</p>
          <p className="text-gray-400 mt-2">Make sure the backend server is running on port 3000</p>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center pt-20">
        <div className="text-white text-center">
          <div className="animate-spin mb-4">⚙️</div>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {data.headline}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {data.cta.map((button, idx) => (
                <a
                  key={idx}
                  href={button.href}
                  className={`px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                    idx === 0
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/50'
                      : 'border-2 border-white hover:bg-white hover:text-slate-900 text-white'
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl animate-fade-in-delay">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span>📊</span> Enterprise Dashboard
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Registered Users', value: data.dashboard.registeredUsers, icon: '👥' },
                { label: 'Active Projects', value: data.dashboard.projects, icon: '📁' },
                { label: 'Organizations', value: data.dashboard.organizations, icon: '🏢' },
                { label: 'Partners', value: data.dashboard.partners, icon: '🤝' },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between pb-6 border-b border-slate-700 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{stat.icon}</span>
                    <span className="text-gray-400">{stat.label}</span>
                  </div>
                  <span className="text-3xl font-bold text-blue-400">
                    {(stat.value / 1000).toFixed(stat.value < 1000 ? 0 : 1)}k+
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
