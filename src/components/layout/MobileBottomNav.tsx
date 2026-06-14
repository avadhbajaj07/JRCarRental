"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Car, Plane, Map, User } from 'lucide-react'
import { cn } from '@/src/lib/utils'

const bottomLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Cars', href: '/fleet', icon: Car },
  { name: 'Transfers', href: '/booking?type=transfers', icon: Plane },
  { name: 'Tours', href: '/booking?type=tours', icon: Map },
  { name: 'Profile', href: '/admin', icon: User }, // Directs to dashboard/profile
]

export default function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 lg:hidden pointer-events-none">
      <div className="max-w-md mx-auto bg-navy/95 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(7,26,46,0.25)] rounded-[24px] px-6 py-3 flex items-center justify-between pointer-events-auto">
        {bottomLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('?')[0]))
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-1 flex-1 py-1 group transition-all"
            >
              <Icon 
                size={20} 
                className={cn(
                  "transition-colors duration-300",
                  isActive ? "text-teal scale-105" : "text-white/60 group-hover:text-white"
                )} 
              />
              <span 
                className={cn(
                  "text-[9px] font-bold tracking-wider uppercase transition-colors duration-300",
                  isActive ? "text-teal" : "text-white/50 group-hover:text-white/80"
                )}
              >
                {link.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
