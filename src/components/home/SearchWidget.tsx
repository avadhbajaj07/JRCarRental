"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Clock, Car, Plane, Map, ChevronDown, Check, ArrowRight } from 'lucide-react'
import { useBookingStore } from '@/src/store/bookingStore'
import { useGooglePlaces } from '@/src/hooks/useGooglePlaces'
import Script from 'next/script'

const LOCATIONS = [
  'Sir Seewoosagur Ramgoolam International Airport, Plaine Magnien, Maurice',
  'Port Louis City Centre, Mauritius',
  'Grand Baie, Mauritius',
  'Flic en Flac, Mauritius',
  'Le Morne, Mauritius',
  'Belle Mare, Mauritius',
  'Tamarin, Mauritius',
]

const VEHICLE_TYPES = [
  { label: 'Any Vehicle Type', value: '' },
  { label: 'Automatic Vehicle', value: 'automatic' },
  { label: 'Manual Vehicle', value: 'manual' },
  { label: 'Luxury & Sports', value: 'luxury' },
  { label: 'SUVs & 4x4', value: 'suv' },
  { label: '7-Seaters & Vans', value: '7-seater' },
]

const TOURS = [
  { label: 'Northern Charm Tour (Grand Baie, Botanical Garden)', value: 'north' },
  { label: 'Wild South Tour (Chamarel, Grand Bassin)', value: 'south' },
  { label: 'Scenic East Tour (Belle Mare, Ile aux Cerfs)', value: 'east' },
  { label: 'Sunset West Tour (Flic en Flac, Le Morne)', value: 'west' },
]

export default function SearchWidget() {
  const router = useRouter()
  const { setSearchParams, setStep } = useBookingStore()

  // Tab State
  const [activeTab, setActiveTab] = useState<'car' | 'transfer' | 'tour'>('car')

  // Search Fields
  const [pickup, setPickup] = useState('Sir Seewoosagur Ramgoolam International Airport, Plaine Magnien, Maurice')
  const [dropoff, setDropoff] = useState('Sir Seewoosagur Ramgoolam International Airport, Plaine Magnien, Maurice')
  const [pickupDate, setPickupDate] = useState('2026-06-15')
  const [pickupTime, setPickupTime] = useState('18:30')
  const [returnDate, setReturnDate] = useState('2026-06-25')
  const [returnTime, setReturnTime] = useState('19:00')
  
  // Custom dropdown fields
  const [vehicleType, setVehicleType] = useState('')
  const [selectedTour, setSelectedTour] = useState('north')

  // Autocomplete Suggestions
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false)
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false)
  const { fetchPredictions, initService } = useGooglePlaces()
  const [pickupPredictions, setPickupPredictions] = useState<{description: string}[]>([])
  const [dropoffPredictions, setDropoffPredictions] = useState<{description: string}[]>([])

  const handlePickupChange = (val: string) => {
    setPickup(val)
    setShowPickupSuggestions(true)
    fetchPredictions(val, setPickupPredictions)
  }

  const handleDropoffChange = (val: string) => {
    setDropoff(val)
    setShowDropoffSuggestions(true)
    fetchPredictions(val, setDropoffPredictions)
  }

  const handleSearch = () => {
    setSearchParams({
      pickupLocation: pickup,
      dropoffLocation: activeTab === 'transfer' ? dropoff : pickup,
      pickupDate,
      pickupTime,
      dropoffDate: returnDate,
      dropoffTime: returnTime,
    })
    setStep(1)

    // Append filter query parameters
    let query = ''
    if (activeTab === 'car' && vehicleType) {
      if (vehicleType === 'automatic' || vehicleType === 'manual') {
        query = `?transmission=${vehicleType === 'automatic' ? 'Automatic' : 'Manual'}`
      } else {
        query = `?category=${vehicleType}`
      }
    } else if (activeTab === 'transfer') {
      query = '?type=transfers'
    } else if (activeTab === 'tour') {
      query = `?type=tours&tour=${selectedTour}`
    }

    router.push(`/booking${query}`)
  }

  return (
    <>
      <Script 
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        onLoad={initService}
        strategy="lazyOnload"
      />

      <div className="w-full max-w-[420px] bg-white/95 backdrop-blur-xl border border-white/20 shadow-luxury rounded-[24px] overflow-hidden flex flex-col p-6 text-navy">
        
        {/* Tabs Row */}
        <div className="flex border-b border-lightGray/80 pb-4 mb-5 justify-between">
          {[
            { id: 'car', label: 'Car Rental', icon: Car },
            { id: 'transfer', label: 'Airport Transfer', icon: Plane },
            { id: 'tour', label: 'Tours', icon: Map },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex flex-col items-center gap-1.5 flex-1 py-1.5 text-center transition-all duration-300 relative ${
                  isActive ? 'text-teal font-extrabold' : 'text-navy/55 hover:text-navy font-bold'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-teal' : 'text-navy/50'} />
                <span className="text-[11px] uppercase tracking-wider whitespace-nowrap">{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-teal rounded-t-full" />
                )}
              </button>
            )
          })}
        </div>

        {/* Tab content inputs */}
        <div className="space-y-4 flex-1">
          {/* Pickup Address */}
          <div className="relative">
            <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5 flex items-center gap-1.5">
              <MapPin size={12} className="text-teal" />
              <span>Pickup Location</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={pickup}
                onChange={(e) => handlePickupChange(e.target.value)}
                onFocus={() => setShowPickupSuggestions(true)}
                onBlur={() => setTimeout(() => setShowPickupSuggestions(false), 200)}
                placeholder="Airport, Hotel, or Town..."
                className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-4 py-3 text-xs font-bold text-navy transition-all"
              />
              {showPickupSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-lightGray rounded-[14px] shadow-lg z-50 max-h-48 overflow-y-auto">
                  {pickupPredictions.length > 0 ? pickupPredictions.map((pred, i) => (
                    <button
                      key={i}
                      onClick={() => { setPickup(pred.description); setShowPickupSuggestions(false) }}
                      className="w-full text-left px-4 py-2.5 text-xs text-navy/80 hover:bg-teal/10 hover:text-teal font-bold transition-colors flex items-center gap-2"
                    >
                      <MapPin size={10} className="text-teal flex-shrink-0" />
                      {pred.description}
                    </button>
                  )) : LOCATIONS.map((loc, i) => (
                    <button
                      key={i}
                      onClick={() => { setPickup(loc); setShowPickupSuggestions(false) }}
                      className="w-full text-left px-4 py-2.5 text-xs text-navy/80 hover:bg-teal/10 hover:text-teal font-bold transition-colors flex items-center gap-2"
                    >
                      <MapPin size={10} className="text-teal flex-shrink-0" />
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Drop-off Address (Only visible in Airport Transfer) */}
          {activeTab === 'transfer' && (
            <div className="relative animate-[fadeIn_0.3s_ease-out]">
              <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5 flex items-center gap-1.5">
                <MapPin size={12} className="text-rose-500" />
                <span>Drop-off Destination</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={dropoff}
                  onChange={(e) => handleDropoffChange(e.target.value)}
                  onFocus={() => setShowDropoffSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowDropoffSuggestions(false), 200)}
                  placeholder="Hotel or Airport..."
                  className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-4 py-3 text-xs font-bold text-navy transition-all"
                />
                {showDropoffSuggestions && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-lightGray rounded-[14px] shadow-lg z-50 max-h-48 overflow-y-auto">
                    {dropoffPredictions.length > 0 ? dropoffPredictions.map((pred, i) => (
                      <button
                        key={i}
                        onClick={() => { setDropoff(pred.description); setShowDropoffSuggestions(false) }}
                        className="w-full text-left px-4 py-2.5 text-xs text-navy/80 hover:bg-teal/10 hover:text-teal font-bold transition-colors flex items-center gap-2"
                      >
                        <MapPin size={10} className="text-rose-500 flex-shrink-0" />
                        {pred.description}
                      </button>
                    )) : LOCATIONS.map((loc, i) => (
                      <button
                        key={i}
                        onClick={() => { setDropoff(loc); setShowDropoffSuggestions(false) }}
                        className="w-full text-left px-4 py-2.5 text-xs text-navy/80 hover:bg-teal/10 hover:text-teal font-bold transition-colors flex items-center gap-2"
                      >
                        <MapPin size={10} className="text-rose-500 flex-shrink-0" />
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Dates Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5 flex items-center gap-1.5">
                <Calendar size={12} className="text-teal" />
                <span>{activeTab === 'tour' ? 'Tour Date' : 'Pickup Date'}</span>
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-3 py-3 text-xs font-bold text-navy transition-all"
              />
            </div>

            {activeTab !== 'tour' ? (
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5 flex items-center gap-1.5">
                  <Calendar size={12} className="text-rose-500" />
                  <span>Return Date</span>
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-3 py-3 text-xs font-bold text-navy transition-all"
                />
              </div>
            ) : (
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5 flex items-center gap-1.5">
                  <Clock size={12} className="text-teal" />
                  <span>Pickup Time</span>
                </label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-3 py-3 text-xs font-bold text-navy transition-all"
                />
              </div>
            )}
          </div>

          {/* Times Row for Car Rental and Transfer */}
          {activeTab !== 'tour' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5 flex items-center gap-1.5">
                  <Clock size={12} className="text-teal" />
                  <span>Pickup Time</span>
                </label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-3 py-3 text-xs font-bold text-navy transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5 flex items-center gap-1.5">
                  <Clock size={12} className="text-rose-500" />
                  <span>Return Time</span>
                </label>
                <input
                  type="time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-3 py-3 text-xs font-bold text-navy transition-all"
                />
              </div>
            </div>
          )}

          {/* Dropdown Options */}
          {activeTab === 'car' && (
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5">
                Vehicle Type
              </label>
              <div className="relative">
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-4 py-3 text-xs font-bold text-navy appearance-none pr-10 cursor-pointer"
                >
                  {VEHICLE_TYPES.map((vt) => (
                    <option key={vt.value} value={vt.value}>
                      {vt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40">
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tour' && (
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-navy/40 mb-1.5">
                Select Island Tour
              </label>
              <div className="relative">
                <select
                  value={selectedTour}
                  onChange={(e) => setSelectedTour(e.target.value)}
                  className="w-full bg-lightGray/50 border border-lightGray hover:border-teal/30 focus:border-teal rounded-[14px] px-4 py-3 text-xs font-bold text-navy appearance-none pr-10 cursor-pointer"
                >
                  {TOURS.map((tour) => (
                    <option key={tour.value} value={tour.value}>
                      {tour.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40">
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleSearch}
          className="mt-6 w-full h-[52px] bg-teal hover:bg-teal-light text-white font-black uppercase tracking-widest text-[13px] rounded-[16px] flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,207,197,0.4)] active:scale-[0.98]"
        >
          <span>Find Availability</span>
          <ArrowRight size={16} />
        </button>

      </div>
    </>
  )
}
