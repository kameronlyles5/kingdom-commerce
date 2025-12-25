'use client'

import { Star, ShoppingCart, Heart } from 'lucide-react'
import Link from 'next/link'

interface ProductCardProps {
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
}

export default function ProductCard({
  id,
  name,
  vendor,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badges = [],
  isYouthOwned = false,
  hasGlobalShipping = false,
  isVerified = false,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <Link
      href={`/product/${id}`}
      className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-kingdom-gold transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-kingdom-gold/10"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-800">
        {/* Placeholder Image */}
        <div
          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:0.1'/%3E%3Cstop offset='100%25' style='stop-color:%230A0A0A;stop-opacity:1'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' fill='%23D4AF37' text-anchor='middle' opacity='0.3'%3EProduct Image%3C/text%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {isVerified && (
            <span className="px-2 py-1 bg-kingdom-gold text-royal-black text-xs font-bold rounded-md">
              ✓ Verified Vendor
            </span>
          )}
          {isYouthOwned && (
            <span className="px-2 py-1 bg-blue-600 text-pure-white text-xs font-bold rounded-md">
              👑 Youth Owned
            </span>
          )}
          {hasGlobalShipping && (
            <span className="px-2 py-1 bg-green-600 text-pure-white text-xs font-bold rounded-md">
              🌍 Global Shipping
            </span>
          )}
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-kingdom-gold bg-opacity-80 text-royal-black text-xs font-bold rounded-md"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-600 text-pure-white px-2 py-1 rounded-md text-xs font-bold">
            -{discount}%
          </div>
        )}

        {/* Quick Actions (on hover) */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="p-2 bg-royal-black bg-opacity-80 text-kingdom-gold rounded-full hover:bg-kingdom-gold hover:text-royal-black transition-all duration-200"
            onClick={(e) => {
              e.preventDefault()
              // Add to wishlist
            }}
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            className="p-2 bg-kingdom-gold text-royal-black rounded-full hover:bg-opacity-90 transition-all duration-200"
            onClick={(e) => {
              e.preventDefault()
              // Add to cart
            }}
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        {/* Vendor Name */}
        <p className="text-xs text-gray-400 truncate">{vendor}</p>

        {/* Product Name */}
        <h3 className="text-pure-white font-semibold line-clamp-2 group-hover:text-kingdom-gold transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating)
                    ? 'fill-kingdom-gold text-kingdom-gold'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 pt-2">
          <span className="text-xl font-bold text-kingdom-gold">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

