'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EnterpriseCore from '@/components/EnterpriseCore';
import Products from '@/components/Products';
import Technology from '@/components/Technology';
import BusinessModel from '@/components/BusinessModel';
import SuccessStories from '@/components/SuccessStories';
import Pricing from '@/components/Pricing';
import LeadCapture from '@/components/LeadCapture';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <EnterpriseCore />
      <Products />
      <Technology />
      <BusinessModel />
      <SuccessStories />
      <Pricing />
      <LeadCapture />
      <Footer />
    </main>
  );
}
