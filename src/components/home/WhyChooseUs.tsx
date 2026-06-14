"use client"

import React from 'react'
import { Tag, Compass, Plane, Headphones, Wrench, Shield } from 'lucide-react'

const ADVANTAGES = [
  {
    icon: Tag,
    title: 'Affordable Rates',
    desc: 'Best prices guaranteed',
  },
  {
    icon: Compass,
    title: 'Automatic Vehicles',
    desc: 'Comfortable & easy driving',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    desc: 'Reliable pickup & drop-off',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: "We're always here",
  },
  {
    icon: Wrench,
    title: 'Breakdown Assistance',
    desc: 'Help when you need it',
  },
  {
    icon: Shield,
    title: 'Local Expertise',
    desc: 'Trusted local partner',
  },
]

export default function WhyChooseUs() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <p className="text-teal text-[11px] font-black uppercase tracking-[0.3em]">
          Our Advantage
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black text-navy">
          Why Choose JR Auto Fleet?
        </h2>
      </div>

      {/* Grid: 6 Advantages Horizontal Row on Desktop, Grid on Mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8 border-y border-lightGray/80">
        {ADVANTAGES.map((adv, i) => {
          const Icon = adv.icon
          return (
            <div 
              key={i} 
              className="flex flex-col items-center text-center space-y-3 group border-r border-lightGray/40 last:border-r-0 md:odd:border-r lg:even:border-r pr-2 last:pr-0"
            >
              {/* Minimal Circle Icon */}
              <div className="w-12 h-12 rounded-full border border-teal/20 flex items-center justify-center text-teal bg-teal/5 transition-all duration-300 group-hover:bg-teal group-hover:text-white group-hover:scale-105">
                <Icon size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-black text-[13px] md:text-sm text-navy leading-tight whitespace-nowrap">
                  {adv.title}
                </h4>
                <p className="text-[11px] text-mid-gray font-medium">
                  {adv.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
