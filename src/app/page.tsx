import React from 'react';
import HeroSection from '@/src/components/home/HeroSection';
import ServiceBenefitsStrip from '@/src/components/home/ServiceBenefitsStrip';
import FleetSection from '@/src/components/home/FleetSection';
import WhyChooseUs from '@/src/components/home/WhyChooseUs';
import TestimonialsSection from '@/src/components/home/TestimonialsSection';
import PromoBanner from '@/src/components/home/PromoBanner';

export const metadata = {
  title: `JR Auto Fleet Mauritius | Car Rental, Airport Transfers & Island Tours`,
  description:
    'Affordable car rentals, airport transfers, and island tours from a trusted local provider in Mauritius. Book your vehicle online today — transparent pricing, 24/7 support.',
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'JR Auto Fleet Mauritius',
    image: 'https://images.unsplash.com/photo-1506012733851-4043ce625295?q=80&w=1200',
    description: 'Mauritius trusted car rental service — airport transfers, island tours and more.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://jrautofleet.mu',
    telephone: '+23059345715',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "D'Epinay",
      addressLocality: 'Pamplemousses',
      addressRegion: 'Pamplemousses',
      addressCountry: 'MU',
    },
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <HeroSection />

      {/* ── SERVICE BENEFITS STRIP ────────────────────────── */}
      <div className="bg-softWhite py-6 lg:py-0">
        <ServiceBenefitsStrip />
      </div>

      {/* ── POPULAR RENTAL CARS + PROMO SIDE CARDS ────────── */}
      <FleetSection />

      {/* ── WHY CHOOSE JR AUTO FLEET ──────────────────────── */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <WhyChooseUs />
        </div>
      </section>

      {/* ── WHAT CUSTOMERS SAY ────────────────────────────── */}
      <TestimonialsSection />

      {/* ── BOOK EARLY PROMO BANNER ───────────────────────── */}
      <PromoBanner />
    </div>
  );
}
