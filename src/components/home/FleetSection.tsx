"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, User, Luggage, Gauge, Fuel, Check, ArrowRight, Star } from 'lucide-react'
import { useCurrencyStore } from '@/src/store/useCurrencyStore'
import { formatPrice } from '@/src/lib/currency'

// Mock cars as fallback
const FALLBACK_CARS = [
  {
    id: 'kia-picanto-2023',
    name: 'Kia Picanto 2024',
    img: '/assets/imgi_4_vehicle_type_1594813619.png',
    category: 'MINI',
    transmission: 'Automatic',
    seats: 5,
    engineCC: 1000,
    priceDay: 15000,
    tag: 'Best Value',
    tagColor: 'bg-blue-500',
  },
  {
    id: 'toyota-yaris-2023',
    name: 'Suzuki Swift GLX 2025',
    img: '/assets/imgi_40_aa80610e-a55e-4666-81d9-f5ad3adbed98.png',
    category: 'ECONOMY',
    transmission: 'Automatic',
    seats: 5,
    engineCC: 1200,
    priceDay: 18000,
    tag: 'Popular',
    tagColor: 'bg-teal',
  },
  {
    id: 'toyota-corolla-2023',
    name: 'Suzuki Fronx Hybrid 2024',
    img: '/assets/imgi_19_vehicle_type_1631009911.png',
    category: 'COMPACT',
    transmission: 'Automatic',
    seats: 5,
    engineCC: 1500,
    priceDay: 20000,
    tag: 'Hybrid',
    tagColor: 'bg-emerald-500',
  },
  {
    id: 'hyundai-i10-2022',
    name: 'Suzuki Celerio 2022',
    img: '/assets/imgi_5_vehicle_type_1594813683.png',
    category: 'MINI',
    transmission: 'Automatic',
    seats: 5,
    engineCC: 1000,
    priceDay: 15000,
    tag: 'Best Price',
    tagColor: 'bg-indigo-500',
  },
]

export default function FleetSection() {
  const { currency } = useCurrencyStore()
  const [vehicles, setVehicles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState<string[]>([])

  // Toggle wishlist state
  const toggleWishlist = (id: string) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    fetch('/api/cars')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          // Take first 4 available cars, map them to standard format
          const mapped = data.slice(0, 4).map((v: any, index: number) => ({
            id: v.id || v.slug,
            name: v.make && v.model ? `${v.make} ${v.model}` : v.name,
            img: v.img || '/assets/imgi_40_aa80610e-a55e-4666-81d9-f5ad3adbed98.png',
            category: v.category || 'COMPACT',
            transmission: v.transmission || 'Automatic',
            seats: v.seats || 5,
            engineCC: v.engineCC || 1200,
            priceDay: v.priceDay || v.pricePerDay || 1500,
            tag: index === 0 ? 'Popular' : '',
            tagColor: 'bg-teal',
          }))
          setVehicles(mapped)
        } else {
          setVehicles(FALLBACK_CARS)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching public cars:', err)
        setVehicles(FALLBACK_CARS)
        setLoading(false)
      })
  }, [])

  return (
    <section className="py-24 bg-softWhite border-t border-lightGray/80 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left space-y-3">
            <p className="text-teal text-[11px] font-black uppercase tracking-[0.3em]">
              Premium Selection
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-black text-navy">
              Popular Rental Cars
            </h2>
            <p className="text-mid-gray font-bold text-sm">
              Automatic vehicles perfect for exploring Mauritius.
            </p>
          </div>
          <Link
            href="/fleet"
            className="group inline-flex items-center gap-2 text-teal font-black text-xs uppercase tracking-widest hover:text-teal-dark transition-colors duration-300"
          >
            <span>View All Cars</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Popular Cars Slider/Grid (col-span-8) */}
          <div className="lg:col-span-8">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-teal/30 scrollbar-track-transparent snap-x snap-mandatory">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="min-w-[280px] md:min-w-[320px] flex-1 bg-white border border-lightGray rounded-[24px] p-6 h-[400px] animate-pulse space-y-4">
                    <div className="w-full h-40 bg-lightGray rounded-[16px]" />
                    <div className="w-2/3 h-5 bg-lightGray rounded-md" />
                    <div className="w-1/2 h-4 bg-lightGray rounded-md" />
                  </div>
                ))
              ) : (
                vehicles.map((car) => {
                  const isWishlisted = wishlist.includes(car.id)
                  return (
                    <div
                      key={car.id}
                      className="min-w-[290px] md:min-w-[320px] flex-1 bg-white border border-lightGray rounded-[24px] shadow-[0_4px_20px_rgba(7,26,46,0.03)] hover:shadow-hover hover:-translate-y-2 transition-all duration-500 group snap-start flex flex-col overflow-hidden"
                    >
                      {/* Image & Badges */}
                      <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0 bg-lightGray/20">
                        {car.tag && (
                          <span className={`absolute top-4 left-4 z-10 text-white text-[9px] font-black tracking-wider px-3 py-1.5 rounded-full uppercase ${car.tagColor}`}>
                            {car.tag}
                          </span>
                        )}
                        {/* Wishlist Button */}
                        <button
                          onClick={() => toggleWishlist(car.id)}
                          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-navy/40 hover:text-rose-500 hover:scale-110 shadow-md transition-all duration-300"
                        >
                          <Heart size={15} fill={isWishlisted ? '#f43f5e' : 'transparent'} className={isWishlisted ? 'text-rose-500' : ''} />
                        </button>
                        
                        <img
                          src={car.img}
                          alt={car.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/imgi_40_aa80610e-a55e-4666-81d9-f5ad3adbed98.png'
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1 text-left">
                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-[10px] font-extrabold uppercase bg-lightGray text-navy/70 px-2.5 py-1 rounded-full">
                            {car.transmission}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase bg-lightGray text-navy/70 px-2.5 py-1 rounded-full">
                            {car.seats} Seats
                          </span>
                          <span className="text-[10px] font-extrabold uppercase bg-lightGray text-navy/70 px-2.5 py-1 rounded-full">
                            {car.engineCC}cc
                          </span>
                        </div>

                        <h3 className="font-display font-black text-lg text-navy mb-3">
                          {car.name}
                        </h3>

                        {/* Price Row */}
                        <div className="flex items-baseline gap-1 mt-auto">
                          <span className="text-xl font-display font-black text-teal">
                            {formatPrice(car.priceDay, currency)}
                          </span>
                          <span className="text-[10px] text-mid-gray font-bold uppercase tracking-wider">/day</span>
                        </div>

                        {/* CTA */}
                        <Link
                          href={`/booking?car=${car.id}`}
                          className="mt-5 w-full h-[46px] rounded-[16px] border border-teal text-teal hover:bg-teal hover:text-white font-black uppercase tracking-widest text-[11px] flex items-center justify-center transition-all duration-300"
                        >
                          Quick Book
                        </Link>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>

          {/* Right Side: Double Promo Cards (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Promo Card 1: Airport Pickup */}
            <div className="relative rounded-[24px] overflow-hidden bg-navy min-h-[200px] flex flex-col p-6 text-white group border border-white/5 shadow-md">
              {/* Background image & gradient overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=600"
                  alt="Airport Transfer Mauritius"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col text-left">
                <h3 className="font-display font-black text-xl mb-3">
                  Airport Pickup Made Easy
                </h3>
                
                {/* Checklist */}
                <ul className="space-y-2 mb-6">
                  {['Flight Monitoring', 'Professional Drivers', 'Luggage Assistance', '24/7 Availability'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-bold text-white/80">
                      <Check size={12} className="text-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking?type=transfers"
                  className="mt-auto h-[46px] w-full rounded-[16px] bg-teal hover:bg-teal-light text-navy font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-1.5 transition-all duration-300 shadow-lg shadow-teal/20"
                >
                  <span>Book Airport Transfer</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Promo Card 2: Discover Mauritius Tours */}
            <div className="relative rounded-[24px] overflow-hidden bg-navy min-h-[200px] flex flex-col p-6 text-white group border border-white/5 shadow-md">
              {/* Background image & gradient overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600"
                  alt="Discover Mauritius Tour"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col text-left">
                <h4 className="text-teal text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                  Discover Mauritius
                </h4>
                <h3 className="font-display font-black text-xl mb-3">
                  Northern Charm Tour
                </h3>

                <ul className="space-y-1 text-xs text-white/70 mb-5 font-bold pl-2 list-disc list-inside">
                  <li>Grand Baie</li>
                  <li>Cap Malheureux</li>
                  <li>Pamplemousses Botanical Garden</li>
                </ul>

                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Starting From</span>
                  <span className="text-lg font-display font-black text-white">
                    {formatPrice(8000, currency)}
                  </span>
                </div>

                <Link
                  href="/booking?type=tours"
                  className="mt-auto h-[46px] w-full rounded-[16px] bg-teal hover:bg-teal-light text-navy font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-1.5 transition-all duration-300 shadow-lg shadow-teal/20"
                >
                  <span>Explore Tours</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
