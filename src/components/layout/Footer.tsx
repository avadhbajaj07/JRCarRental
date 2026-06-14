"use client"

import React from 'react'
import Link from 'next/link'
import { Car, Facebook, Instagram, Phone, Mail, MapPin, Shield, Star, Lock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden pt-20 pb-28 lg:pb-12 border-t border-white/5">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-teal/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-navy-light/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 text-left">
          
          {/* Column 1: Brand & Description (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-teal" viewBox="0 0 100 100" fill="currentColor">
                <path d="M25 20H45V65C45 73.28 38.28 80 30 80C21.72 80 15 73.28 15 65H30C30 65 30 66 30 65V20Z" fill="#00CFC5" />
                <path d="M45 20H72C80.28 20 87 26.72 87 35C87 43.28 80.28 50 72 50H45V20ZM65 35C65 35 65 37 65 35C65 33.34 63.66 32 62 32H55V38H62C63.66 38 65 36.66 65 35Z" fill="#00CFC5" />
                <path d="M62 48L80 80H64L48 50H60L62 48Z" fill="#00CFC5" fillOpacity="0.8" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display font-black text-[16px] tracking-wider leading-none text-white">
                  JR <span className="text-teal">AUTO FLEET</span>
                </span>
                <span className="text-[7.5px] font-bold tracking-[0.32em] text-white/50 uppercase leading-none mt-0.5">
                  MAURITIUS
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm font-body">
              Your trusted partner for car rentals, airport transfers, and island tours across Mauritius. Experience premium local hospitality since 2010.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-teal hover:text-navy hover:border-teal flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-teal hover:text-navy hover:border-teal flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://wa.me/23059345715" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-teal hover:text-navy hover:border-teal flex items-center justify-center transition-all duration-300"
              >
                {/* Whatsapp custom svg or mail */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.371a9.936 9.936 0 004.779 1.229h.004c5.505 0 9.988-4.478 9.989-9.985a9.97 9.97 0 00-2.925-7.064A9.929 9.929 0 0012.012 2zm5.795 14.223c-.248.699-1.246 1.341-1.713 1.4a4.34 4.34 0 01-2.268-.535 9.704 9.704 0 01-3.957-3.955 4.348 4.348 0 01-.536-2.27c.06-.467.702-1.465 1.401-1.713.2-.07.41-.08.6-.08.19 0 .38.01.55.39.2.46.68 1.65.74 1.77.06.12.1.25.02.4-.08.15-.17.3-.28.42-.11.12-.23.25-.33.37-.11.12-.22.25-.09.47.13.22.58.96 1.25 1.56.86.77 1.58 1.01 1.8 1.12.22.11.35.09.47-.05.12-.14.54-.63.69-.85.14-.21.29-.18.49-.1.2.08 1.26.59 1.48.7.22.11.36.16.42.26.06.09.06.54-.19 1.24z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40">Company</h4>
            <ul className="space-y-2.5 text-xs text-white/60 font-medium font-body">
              <li><Link href="/about" className="hover:text-teal transition-colors">About Us</Link></li>
              <li><Link href="/fleet" className="hover:text-teal transition-colors">Fleet</Link></li>
              <li><Link href="/about" className="hover:text-teal transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-teal transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Airport Transfers (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40">Airport Transfers</h4>
            <ul className="space-y-2.5 text-xs text-white/60 font-medium font-body">
              <li><Link href="/booking?type=transfers" className="hover:text-teal transition-colors">Airport Pickup</Link></li>
              <li><Link href="/booking?type=transfers" className="hover:text-teal transition-colors">Hotel Transfers</Link></li>
              <li><Link href="/booking?type=transfers" className="hover:text-teal transition-colors">Private Transfers</Link></li>
              <li><Link href="/booking?type=transfers" className="hover:text-teal transition-colors">Group Transfers</Link></li>
            </ul>
          </div>

          {/* Column 4: Tours (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40">Tours</h4>
            <ul className="space-y-2.5 text-xs text-white/60 font-medium font-body">
              <li><Link href="/booking?type=tours&tour=north" className="hover:text-teal transition-colors">North Tours</Link></li>
              <li><Link href="/booking?type=tours&tour=south" className="hover:text-teal transition-colors">South Tours</Link></li>
              <li><Link href="/booking?type=tours&tour=east" className="hover:text-teal transition-colors">East Tours</Link></li>
              <li><Link href="/booking?type=tours&tour=west" className="hover:text-teal transition-colors">West Tours</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40">Contact</h4>
            <ul className="space-y-3 text-xs text-white/60 font-medium font-body">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-teal flex-shrink-0 mt-0.5" />
                <span>D&apos;Epinay, Pamplemousses, Mauritius</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-teal flex-shrink-0" />
                <a href="tel:+23059345715" className="hover:text-teal transition-colors">+230 5934 5715</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-teal flex-shrink-0" />
                <a href="mailto:starstuffcompany@gmail.com" className="hover:text-teal transition-colors overflow-hidden text-ellipsis whitespace-nowrap">starstuffcompany@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 w-full mb-8" />

        {/* Bottom Trust & Payments Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-left">
          
          {/* Left Side: We Accept Payment Vendor Logos */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-white/40 block">We Accept</span>
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Visa */}
              <div className="bg-[#1A1F71] text-white text-[9px] font-extrabold px-3 py-1.5 rounded-[6px] italic tracking-wider border border-white/10 select-none">
                VISA
              </div>
              
              {/* Mastercard */}
              <div className="bg-[#1C1C1C] px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 border border-white/10 select-none">
                <div className="flex items-center -space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EB001B]" />
                  <div className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-80" />
                </div>
                <span className="text-white text-[8px] font-black tracking-tighter">mastercard</span>
              </div>
              
              {/* American Express */}
              <div className="bg-[#007cc4] text-white text-[8px] font-extrabold px-3 py-1.5 rounded-[6px] tracking-wide border border-white/10 select-none">
                AMEX
              </div>
              
              {/* MCB Juice */}
              <div className="bg-teal text-navy text-[8px] font-black px-3 py-1.5 rounded-[6px] tracking-widest uppercase border border-white/10 select-none">
                Juice
              </div>

              {/* Apple Pay */}
              <div className="bg-white text-black text-[9px] font-black px-3 py-1.5 rounded-[6px] flex items-center gap-1 border border-white/10 select-none">
                <span></span>
                <span>Pay</span>
              </div>

            </div>
          </div>

          {/* Right Side: Security Badges */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-white/40 block">Trusted & Verified</span>
            <div className="flex flex-wrap items-center gap-4">
              
              {/* SSL Secured */}
              <div className="flex items-center gap-1.5 text-xs text-white/80 font-bold">
                <Lock size={12} className="text-teal" />
                <span>SSL Secured</span>
              </div>

              {/* Google Reviews */}
              <div className="flex items-center gap-1.5 text-xs text-white/80 font-bold border-l border-white/10 pl-4">
                <span className="text-[#4285F4] font-black">G</span>
                <span>Reviews</span>
                <div className="flex items-center text-accentGold">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={10} fill="currentColor" className="text-accentGold" />
                  ))}
                </div>
              </div>

              {/* Secure Payments */}
              <div className="flex items-center gap-1.5 text-xs text-white/80 font-bold border-l border-white/10 pl-4">
                <Shield size={12} className="text-teal" />
                <span>Secure Payments</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-body">
          <p>© {new Date().getFullYear()} JR Auto Fleet Mauritius. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/terms" className="hover:text-teal transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
