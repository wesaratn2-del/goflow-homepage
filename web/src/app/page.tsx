'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EnterpriseCore from '@/components/EnterpriseCore';
import Products from '@/components/Products';
import WhyGoflow from '@/components/WhyGoflow';
import BusinessModel from '@/components/BusinessModel';
import Investment from '@/components/Investment';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <Navigation />
      <Hero />
      <EnterpriseCore />
      <Products />
      <WhyGoflow />
      <BusinessModel />
      <Investment />
      <Footer />
    </main>
  );
}
