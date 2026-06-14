"use client"

import React from 'react'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Sarah J.',
    rating: 5,
    date: '2 weeks ago',
    text: 'Excellent service! The car was clean, the pickup was smooth, and the team was very friendly. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop',
  },
  {
    name: 'Michael T.',
    rating: 5,
    date: '1 month ago',
    text: 'Highly reliable airport transfer. Driver was punctual and very professional. Great experience!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
  },
  {
    name: 'Emma L.',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best car rental in Mauritius! Affordable rates and top-notch customer support.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-softWhite border-t border-lightGray/80 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="text-left space-y-2">
            <p className="text-teal text-[11px] font-black uppercase tracking-[0.3em]">
              Real Reviews
            </p>
            <h2 className="text-2xl md:text-4xl font-display font-black text-navy">
              What Our Customers Say
            </h2>
          </div>
          <button className="group inline-flex items-center gap-1.5 text-navy/60 hover:text-teal font-bold text-xs uppercase tracking-widest transition-colors duration-300">
            <span>View All Reviews</span>
            <span className="text-teal font-extrabold">&rarr;</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div 
              key={i} 
              className="bg-white border border-lightGray rounded-[24px] p-6 shadow-[0_4px_20px_rgba(7,26,46,0.03)] hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative text-left"
            >
              
              {/* Top Row: User Avatar & Info */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={r.avatar} 
                  alt={r.name} 
                  className="w-10 h-10 rounded-full object-cover border border-lightGray"
                />
                <div className="flex-grow">
                  <h4 className="font-display font-black text-sm text-navy">{r.name}</h4>
                  <p className="text-[10px] text-mid-gray font-bold">{r.date}</p>
                </div>
                
                {/* Google Icon Badge */}
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-lightGray/50">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.87-4.53-5.84-4.53z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              {/* Stars Rating */}
              <div className="flex items-center gap-0.5 text-accentGold mb-3">
                {Array(r.rating).fill(0).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-accentGold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-navy/70 leading-relaxed font-body">
                &ldquo;{r.text}&rdquo;
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
