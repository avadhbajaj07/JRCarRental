"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Shield, X } from 'lucide-react'

const TRUST_BULLETS = [
  { icon: Star, label: 'Best Price Guarantee', sub: 'Competitive local rates' },
  { icon: X, label: 'Free Cancellation', sub: 'Up to 24 hours before' },
  { icon: Shield, label: 'No Hidden Charges', sub: 'Transparent pricing' },
]

export default function PromoBanner() {
  return (
    <section className="mx-4 lg:mx-6 my-8 relative overflow-hidden rounded-[24px] bg-navy">
      {/* Background SUV image - right-aligned */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury SUV Mauritius"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      {/* SUV image floated right on desktop */}
      <div className="absolute right-0 bottom-0 w-1/3 md:w-[420px] h-full hidden md:block z-10 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop"
          alt="Luxury SUV"
          className="absolute bottom-0 right-0 w-full object-cover object-center opacity-60"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 40%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side: Headline + CTA */}
          <div className="text-left space-y-5">
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-[11px] font-black uppercase tracking-[0.25em]">Limited Time Offer</span>
            </div>

            <h2 className="font-display font-black text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              Book Early &<br />
              <span className="text-teal">Save More</span>
            </h2>

            <p className="text-white/70 text-sm md:text-base font-body leading-relaxed max-w-sm">
              Reserve your Mauritius vehicle today and enjoy competitive local rates. Best prices guaranteed!
            </p>

            <Link
              href="/booking"
              className="inline-flex h-[52px] px-8 rounded-[16px] bg-teal hover:bg-teal-light text-navy font-black uppercase tracking-widest text-[13px] items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(0,207,197,0.35)]"
            >
              <span>Reserve Now</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right side: Trust bullets */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-1 lg:max-w-xs">
            {TRUST_BULLETS.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-[16px] px-5 py-4">
                  <div className="w-10 h-10 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">{item.label}</p>
                    <p className="text-white/50 text-[11px] font-medium">{item.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>

    </section>
  )
}
