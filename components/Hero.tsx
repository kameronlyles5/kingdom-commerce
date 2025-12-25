'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-royal-black">
      {/* Background Image Placeholder with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* High-resolution placeholder for Black-owned brand imagery */}
        <div 
          className="w-full h-full bg-gradient-to-br from-royal-black via-gray-900 to-royal-black"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:0.1'/%3E%3Cstop offset='100%25' style='stop-color:%230A0A0A;stop-opacity:1'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Cpath d='M0 400 Q480 300 960 400 T1920 400 L1920 1080 L0 1080 Z' fill='%23D4AF37' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-royal-black bg-opacity-70"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-kingdom-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-kingdom-gold opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-kingdom-gold bg-opacity-10 border border-kingdom-gold rounded-full">
              <Sparkles className="w-4 h-4 text-kingdom-gold" />
              <span className="text-kingdom-gold font-semibold text-sm tracking-wide">
                COMING SOON
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-kingdom-gold">Support</span>{' '}
                <span className="text-pure-white">the Culture.</span>
                <br />
                <span className="text-pure-white">Build</span>{' '}
                <span className="text-kingdom-gold">the Kingdom.</span>
              </h1>
              <div className="w-24 h-1 bg-kingdom-gold"></div>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                A world-class marketplace empowering{' '}
                <span className="text-kingdom-gold font-semibold">Black-owned businesses</span>{' '}
                across the globe.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Connect with entrepreneurs from Africa, the United States, and the Caribbean. 
                Every purchase supports economic empowerment and cultural celebration.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/sell"
                className="group inline-flex items-center justify-center px-8 py-4 bg-kingdom-gold text-royal-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-kingdom-gold/20"
              >
                Start Selling
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-kingdom-gold text-kingdom-gold font-bold rounded-lg hover:bg-kingdom-gold hover:text-royal-black transition-all duration-300"
              >
                Join the Waitlist
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-kingdom-gold rounded-full"></div>
                <span>Verified Vendors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-kingdom-gold rounded-full"></div>
                <span>Global Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-kingdom-gold rounded-full"></div>
                <span>Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-kingdom-gold/20 shadow-2xl">
              {/* High-resolution placeholder for Black-owned brand imagery */}
              <div 
                className="w-full h-full bg-gradient-to-br from-kingdom-gold/10 via-royal-black to-gray-900"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:0.2'/%3E%3Cstop offset='50%25' style='stop-color:%230A0A0A;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%231a1a1a;stop-opacity:1'/%3E%3C/stop%3E%3C/linearGradient%3E%3Cpattern id='pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23D4AF37' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='%23D4AF37' text-anchor='middle' opacity='0.3'%3EBlack-Owned%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='%23D4AF37' text-anchor='middle' opacity='0.3'%3EBrands%3C/text%3E%3C/svg%3E")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-transparent to-transparent"></div>
              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-kingdom-gold/30 rounded-2xl"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-kingdom-gold text-royal-black px-6 py-3 rounded-lg shadow-xl transform rotate-3">
              <p className="font-bold text-sm">1000+ Vendors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-kingdom-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-kingdom-gold rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

