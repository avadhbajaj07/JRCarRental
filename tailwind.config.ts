import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00CFC5',
          light: '#36FFE6',
          dark: '#00A8A0',
        },
        navy: {
          DEFAULT: '#071A2E',
          light: '#1B2D4A',
          dark: '#030E1B',
        },
        successGreen: '#00D27A',
        accentGold: '#FFC857',
        softWhite: '#F8FAFC',
        lightGray: '#EEF2F6',
        // Alias legacy names for backward compatibility
        gold: {
          DEFAULT: '#00CFC5',
          light: '#36FFE6',
          dark: '#00A8A0',
        },
        offWhite: '#F8FAFC',
        'mid-gray': '#94A3B8',
        'light-gray': '#EEF2F6',
        'dark-gray': '#334155',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(7, 26, 46, 0.05)',
        hover: '0 12px 48px rgba(7, 26, 46, 0.12)',
        luxury: '0 32px 80px rgba(7, 26, 46, 0.25), 0 0 0 1px rgba(0, 207, 197, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.2s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slow-zoom': 'slow-zoom 12s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.12)' },
        },
      },
    },
  },
  plugins: [forms, typography],
};
export default config;
