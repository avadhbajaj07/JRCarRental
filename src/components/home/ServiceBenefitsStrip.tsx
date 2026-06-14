"use client"

import React from 'react'
import Link from 'next/link'
import { Sparkles, Shield, Wrench, Headphones, Car, Plane, Map, PhoneCall } from 'lucide-react'

// Desktop Benefits
const BENEFITS = [
  {
    icon: Sparkles,
    title: 'Clean & Sanitized Vehicles',
    desc: 'Well maintained and hygienic',
    color: 'text-teal bg-teal/10',
  },
  {
    icon: Shield,
    title: 'Airport Meet & Greet',
    desc: 'Professional welcome service',
    color: 'text-indigo-500 bg-indigo-50',
  },
  {
    icon: Wrench,
    title: 'Breakdown Assistance',
    desc: 'Quick help anywhere in Mauritius',
    color: 'text-teal bg-teal/10',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    desc: "We're always here to assist you",
    color: 'text-teal bg-teal/10',
  },
]

// Mobile Quick Actions
const MOBILE_ACTIONS = [
  {
    id: 'rent',
    label: 'Rent A Car',
    icon: Car,
    href: '/fleet',
    color: 'text-teal bg-teal/10',
  },
  {
    id: 'transfer',
    label: 'Airport Transfer',
    icon: Plane,
    href: '/booking?type=transfers',
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 'tours',
    label: 'Island Tours',
    icon: Map,
    href: '/booking?type=tours',
    color: 'text-amber-500 bg-amber-50',
  },
  {
    id: 'support',
    label: '24/7 Support',
    icon: Headphones,
    href: 'tel:+23059345715',
    color: 'text-purple-500 bg-purple-50',
  },
]

export default function ServiceBenefitsStrip() {
  return (
    <div className="w-full relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Desktop Layout: Overlapping Floating Strip */}
        <div className="hidden lg:grid grid-cols-4 gap-6 bg-white/95 backdrop-blur-xl border border-lightGray/80 shadow-[0_16px_40px_rgba(7,26,46,0.06)] rounded-[24px] p-6 -mt-10 relative z-30">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <div 
                key={i} 
                className="flex items-center gap-4 group transition-all duration-300 hover:translate-y-[-2px] border-r border-lightGray/50 last:border-r-0 pr-4 last:pr-0"
              >
                <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center flex-shrink-0 ${b.color} transition-transform duration-300 group-hover:scale-105`}>
                  <Icon size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="font-display font-black text-sm text-navy">{b.title}</h3>
                  <p className="text-[11px] text-mid-gray font-bold uppercase tracking-wider mt-0.5">{b.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Layout: 2x2 Grid Tiles */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
          {MOBILE_ACTIONS.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.id}
                href={action.href}
                className="flex flex-col items-center justify-center p-5 bg-white border border-lightGray rounded-[24px] shadow-[0_4px_16px_rgba(7,26,46,0.03)] text-center group active:scale-[0.98] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center mb-3 ${action.color} group-hover:scale-105 transition-transform duration-300`}>
                  <Icon size={20} className="text-teal" />
                </div>
                <span className="font-display font-black text-xs text-navy tracking-tight">
                  {action.label}
                </span>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}
