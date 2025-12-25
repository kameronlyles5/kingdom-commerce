'use client'

import { Star, MapPin, Globe, Calendar, CheckCircle, Crown, Package } from 'lucide-react'
import ProductCard from './ProductCard'

interface Vendor {
  id: string
  name: string
  slug: string
  bio: string
  location: string
  joinedDate: string
  rating: number
  totalReviews: number
  totalProducts: number
  isVerified: boolean
  isYouthOwned: boolean
  bannerImage: string
  profileImage: string
  specialties: string[]
  socialLinks?: {
    website?: string
    instagram?: string
    twitter?: string
  }
}

interface VendorStorefrontProps {
  vendor: Vendor
  products: Array<{
    id: string
    name: string
    vendor: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    image: string
    badges?: string[]
    isYouthOwned?: boolean
    hasGlobalShipping?: boolean
    isVerified?: boolean
  }>
}

export default function VendorStorefront({ vendor, products }: VendorStorefrontProps) {
  return (
    <div className="min-h-screen bg-royal-black text-pure-white">
      {/* Banner Section */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="w-full h-full bg-gradient-to-br from-kingdom-gold/20 via-royal-black to-gray-900"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='banner' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:%230A0A0A;stop-opacity:1'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23banner)'/%3E%3Cpath d='M0 200 Q480 150 960 200 T1920 200 L1920 600 L0 600 Z' fill='%23D4AF37' opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-royal-black bg-opacity-60"></div>
        
        {/* Profile Image Overlay */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-royal-black bg-gray-800 overflow-hidden">
              <div
                className="w-full h-full bg-gradient-to-br from-kingdom-gold/30 to-royal-black"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23D4AF37' opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='%23D4AF37' text-anchor='middle' dominant-baseline='middle'%3E${vendor.name.charAt(0)}%3C/text%3E%3C/svg%3E")`,
                  backgroundSize: 'cover',
                }}
              />
            </div>
            {/* Verified Badge */}
            {vendor.isVerified && (
              <div className="absolute bottom-0 right-0 bg-kingdom-gold rounded-full p-2 border-4 border-royal-black">
                <CheckCircle className="w-5 h-5 text-royal-black" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vendor Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12">
        <div className="text-center mb-8">
          {/* Vendor Name */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">{vendor.name}</h1>
            {vendor.isYouthOwned && (
              <span className="px-3 py-1 bg-blue-600 text-pure-white text-sm font-bold rounded-full flex items-center gap-1">
                <Crown className="w-4 h-4" />
                Youth Owned
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-kingdom-gold fill-kingdom-gold" />
              <span className="font-semibold">{vendor.rating}</span>
              <span className="text-gray-400">({vendor.totalReviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Package className="w-5 h-5" />
              <span>{vendor.totalProducts} Products</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>{vendor.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>Joined {vendor.joinedDate}</span>
            </div>
          </div>

          {/* Specialties */}
          {vendor.specialties && vendor.specialties.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {vendor.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-kingdom-gold">About {vendor.name}</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {vendor.bio}
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-kingdom-gold">Products</span> from {vendor.name}
            </h2>
            <span className="text-gray-400">{products.length} items</span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

