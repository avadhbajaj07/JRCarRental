"use client"

import React from 'react'
import Link from 'next/link'
import { Star, ArrowRight, CheckCircle, Shield, Phone, HelpCircle } from 'lucide-react'
import SearchWidget from './SearchWidget'

export default function HeroSection() {
  return (
    <section className="relative min-h-[780px] lg:h-screen lg:min-h-[850px] bg-navy overflow-hidden flex items-center pt-[90px] lg:pt-[100px] pb-16">
      
      {/* Background Scenic Road Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506012733851-4043ce625295?q=80&w=1600"
          alt="Mauritius Coastal Road Drive"
          className="w-full h-full object-cover"
        />
        {/* Gradient dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <p className="text-teal text-[11px] font-black uppercase tracking-[0.3em] animate-[fadeIn_0.5s_ease-out]">
              Mauritius Car Rental Specialists
            </p>

            <h1 className="text-white font-display text-4xl md:text-[54px] lg:text-[72px] font-black leading-[1.05] tracking-tight max-w-2xl">
              Your Trusted Car Rental Partner In <span className="text-teal">Mauritius</span>
            </h1>

            <p className="text-white/80 text-sm md:text-[16px] max-w-xl font-medium leading-relaxed font-body">
              Affordable car rentals, airport transfers, and island tours from a trusted local provider.
            </p>

            {/* Trust Row */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-accentGold">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={15} fill="currentColor" className="text-accentGold" />
                  ))}
                </div>
                <span className="text-white font-bold text-xs">4.9/5 Google Reviews</span>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-white/60 font-bold text-[12px] uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  24/7 Support
                </span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Breakdown Assistance
                </span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Transparent Pricing
                </span>
              </div>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-wrap gap-4 pt-3">
              <Link
                href="/booking"
                className="h-[54px] px-8 rounded-[16px] bg-teal hover:bg-teal-light text-navy font-black uppercase tracking-widest text-[13px] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg shadow-teal/25"
              >
                <span>Book A Car</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/booking?type=transfers"
                className="h-[54px] px-8 rounded-[16px] border-2 border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest text-[13px] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/5"
              >
                <span>Airport Transfer</span>
              </Link>
            </div>

            {/* Mobile Car Showcase Image Container (Hidden on Desktop, Visible on Mobile/Tablet) */}
            <div className="relative w-full max-w-[420px] mx-auto block xl:hidden py-4 animate-float">
              <img
                src="/assets/imgi_40_aa80610e-a55e-4666-81d9-f5ad3adbed98.png"
                alt="White compact SUV Mauritius"
                className="w-full h-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.3)]"
              />
            </div>

          </div>

          {/* Right Side Search Widget Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SearchWidget />
          </div>

        </div>
      </div>

      {/* Absolute Desktop Car Showcase Image (Positioned center-right floating behind the widget overlay) */}
      <div className="absolute left-[34%] xl:left-[38%] bottom-[6%] w-[32%] max-w-[500px] h-auto pointer-events-none hidden xl:block z-10 animate-float">
        <img
          src="/assets/imgi_40_aa80610e-a55e-4666-81d9-f5ad3adbed98.png"
          alt="White luxury vehicle"
          className="w-full h-auto object-contain drop-shadow-[0_24px_40px_rgba(7,26,46,0.5)]"
        />
      </div>

    </section>
  )
}
