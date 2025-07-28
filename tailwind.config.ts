import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-open-sans)'],
        headline: ['var(--font-montserrat)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        pulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'scroll-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'scroll-vertical-reverse': {
            '0%': { transform: 'translateY(-50%)' },
            '100%': { transform: 'translateY(0)' },
        },
        'shape-blur': {
          '0%, 100%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: '0.2'
          },
          '50%': {
            transform: 'scale(1.5) rotate(45deg)',
            opacity: '0.4'
          }
        },
        'shape-blur-hover': {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: '0.4'
          },
          '50%': {
            transform: 'scale(1.5) rotate(45deg)',
            opacity: '0.6'
          },
          '100%': {
            transform: 'scale(1) rotate(90deg)',
            opacity: '0.4'
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-vertical': 'scroll-vertical 120s linear infinite',
        'scroll-vertical-reverse': 'scroll-vertical-reverse 120s linear infinite',
        'shape-blur': 'shape-blur 10s ease-in-out infinite',
        'shape-blur-hover': 'shape-blur-hover 8s ease-in-out infinite alternate'
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
