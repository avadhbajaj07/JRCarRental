"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { 
  Phone, Menu, X, ChevronDown, Car, MapPin, Info, Mail, 
  LayoutDashboard, Globe, DollarSign, ArrowRight, Home, 
  Plane, Map, MessageCircle 
} from 'lucide-react';
import { useCurrencyStore } from '@/src/store/useCurrencyStore';
import { useTransition } from 'react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/', icon: Home, desc: 'Go to homepage' },
  { name: 'Cars', href: '/fleet', icon: Car, desc: 'Browse our elite cars' },
  { name: 'Airport Transfers', href: '/booking?type=transfers', icon: Plane, desc: 'Reliable airport pickups' },
  { name: 'Tours', href: '/booking?type=tours', icon: Map, desc: 'Explore Mauritius island' },
  { name: 'About Us', href: '/about', icon: Info, desc: 'Our island story' },
  { name: 'Contact', href: '/contact', icon: Mail, desc: 'Get in touch' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { data: session } = useSession();
  const { currency, setCurrency } = useCurrencyStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Transparent hero navigation on homepage
  const isTransparentPage = pathname === '/' || pathname === '/en' || pathname === '/fr';

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled
          ? "bg-navy/95 backdrop-blur-xl border-b border-navy-light/10 shadow-[0_4px_30px_rgba(7,26,46,0.15)] py-3"
          : isTransparentPage
            ? "bg-transparent py-5"
            : "bg-navy border-b border-navy-light/10 py-4"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg className="w-9 h-9 text-teal" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Custom JR stylized overlay */}
                <path d="M25 20H45V65C45 73.28 38.28 80 30 80C21.72 80 15 73.28 15 65H30C30 65 30 66 30 65V20Z" fill="#00CFC5" />
                <path d="M45 20H72C80.28 20 87 26.72 87 35C87 43.28 80.28 50 72 50H45V20ZM65 35C65 35 65 37 65 35C65 33.34 63.66 32 62 32H55V38H62C63.66 38 65 36.66 65 35Z" fill="#00CFC5" />
                <path d="M62 48L80 80H64L48 50H60L62 48Z" fill="#00CFC5" fillOpacity="0.8" />
              </svg>
              <div className="flex flex-col">
                <span className={cn(
                  "font-display font-black text-[15px] md:text-[17px] tracking-wider leading-none",
                  isScrolled || !isTransparentPage ? "text-white" : "text-white"
                )}>
                  JR <span className="text-teal">AUTO FLEET</span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.32em] text-white/50 uppercase leading-none mt-0.5">
                  MAURITIUS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[12px] font-bold tracking-[0.06em] uppercase transition-all duration-300 rounded-lg group",
                    isActive ? "text-teal" : "text-white/80 hover:text-teal"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal" />
                  )}
                  <span className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-teal rounded-full transition-all duration-300 w-0 group-hover:w-4",
                    isActive && "w-0"
                  )} />
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Icon Button */}
            <a
              href="https://wa.me/23059345715"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} fill="currentColor" />
            </a>

            {/* Call button */}
            <a
              href="tel:+23059345715"
              className={cn(
                "hidden xl:flex h-10 px-4 rounded-xl border flex items-center gap-2 text-[12px] font-bold transition-all duration-300",
                isScrolled || !isTransparentPage
                  ? "border-white/10 text-white hover:border-teal hover:text-teal bg-white/5"
                  : "border-white/20 text-white hover:border-teal hover:text-teal bg-white/5"
              )}
            >
              <Phone size={13} className="text-teal" />
              <span>+230 5934 5715</span>
            </a>

            {/* Currency Selector (Subtle layout matching) */}
            <div className={cn(
              "hidden md:flex items-center gap-1 rounded-full px-2.5 py-1 transition-all duration-300 bg-white/10"
            )}>
              <DollarSign size={13} className="text-white" />
              <select 
                className="bg-transparent text-[10px] font-bold outline-none cursor-pointer appearance-none text-white border-none p-0 pr-4 select-none focus:ring-0 focus:shadow-none"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
              >
                <option value="MUR" className="text-navy">MUR</option>
                <option value="USD" className="text-navy">USD</option>
                <option value="EUR" className="text-navy">EUR</option>
                <option value="GBP" className="text-navy">GBP</option>
              </select>
            </div>

            {/* Language Switcher */}
            <div className="hidden lg:flex items-center gap-1 rounded-full px-2.5 py-1 transition-all duration-300 bg-white/10">
              <Globe size={13} className="text-white" />
              <span className="text-[10px] font-bold text-white uppercase pr-1">EN</span>
            </div>

            {/* Book Now button */}
            <Link
              href="/booking"
              className="hidden sm:flex h-10 px-5 rounded-xl bg-teal hover:bg-teal-light text-navy text-[12px] font-black uppercase tracking-widest items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(0,207,197,0.35)] hover:shadow-[0_8px_24px_rgba(0,207,197,0.45)]"
            >
              <span>Book Now</span>
              <ArrowRight size={14} className="ml-1.5" />
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/10 text-white hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-0 left-0 right-0 bottom-0 z-[99] transition-all duration-500 lg:hidden",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-[300px] bg-navy border-l border-white/5 shadow-2xl transition-transform duration-500 flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <span className="text-lg font-display font-bold text-white">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200",
                    isActive ? "bg-teal/10 text-teal" : "hover:bg-white/5 text-white/80"
                  )}
                >
                  <div className={cn(
                    "h-9 w-9 rounded-lg flex items-center justify-center",
                    isActive ? "bg-teal text-navy" : "bg-white/10 text-white"
                  )}>
                    <link.icon size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-none">{link.name}</p>
                    <p className="text-[10px] text-white/40 mt-1">{link.desc}</p>
                  </div>
                </Link>
              );
            })}
            {!!session && (
              <Link
                href="/admin"
                className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-white/5 text-white/80 transition-all duration-200"
              >
                <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <LayoutDashboard size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">Admin</p>
                  <p className="text-[10px] text-white/40 mt-1">Dashboard & analytics</p>
                </div>
              </Link>
            )}
          </div>

          <div className="p-6 border-t border-white/5 space-y-3">
            <Link
              href="/booking"
              className="w-full h-12 rounded-xl bg-teal text-navy font-black uppercase tracking-widest flex items-center justify-center shadow-[0_4px_16px_rgba(0,207,197,0.35)] transition-all hover:bg-teal-light"
            >
              Book Now
            </Link>
            <a
              href="tel:+23059345715"
              className="w-full h-12 rounded-xl bg-white/5 text-white font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/10 border border-white/10"
            >
              <Phone size={14} className="text-teal" />
              +230 5934 5715
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
