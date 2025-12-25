'use client'

import { useState } from 'react'
import { Search, Menu, X, ChevronDown, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const { openCart } = useCart()

  const categories = [
    'Fashion & Apparel',
    'Beauty & Personal Care',
    'Home & Living',
    'Electronics',
    'Food & Beverages',
    'Art & Crafts',
    'Books & Media',
    'Health & Wellness',
  ]

  return (
    <nav className="sticky top-0 z-50 bg-royal-black border-b border-gray-800 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold">
              <span className="text-kingdom-gold">Kingdom</span>{' '}
              <span className="text-pure-white">Commerce</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center space-x-1 text-pure-white hover:text-kingdom-gold transition-colors duration-200"
              >
                <span>Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCategoryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isCategoryOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-royal-black border border-gray-800 rounded-lg shadow-xl py-2 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-pure-white hover:bg-gray-800 hover:text-kingdom-gold transition-colors duration-200"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-2 bg-gray-900 rounded-full px-4 py-2 border border-gray-800 focus-within:border-kingdom-gold transition-colors duration-200">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none text-pure-white placeholder-gray-500 w-64"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={openCart}
              className="relative p-2 text-pure-white hover:text-kingdom-gold transition-colors duration-200"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-kingdom-gold text-royal-black rounded-full flex items-center justify-center text-xs font-bold">
                2
              </span>
            </button>
            <button className="px-6 py-2 bg-kingdom-gold text-royal-black font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Start Selling
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-pure-white hover:text-kingdom-gold transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center space-x-2 bg-gray-900 rounded-full px-4 py-2 border border-gray-800">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none text-pure-white placeholder-gray-500 flex-1"
              />
            </div>

            {/* Mobile Categories */}
            <div className="space-y-2">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center justify-between w-full text-pure-white hover:text-kingdom-gold transition-colors duration-200 py-2"
              >
                <span>Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCategoryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isCategoryOpen && (
                <div className="pl-4 space-y-1">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 text-gray-400 hover:text-kingdom-gold transition-colors duration-200"
                      onClick={() => {
                        setIsCategoryOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Cart Button */}
            <button
              onClick={openCart}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 border-2 border-kingdom-gold text-kingdom-gold font-semibold rounded-full hover:bg-kingdom-gold hover:text-royal-black transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Cart (2)</span>
            </button>

            {/* Mobile Start Selling Button */}
            <button className="w-full px-6 py-3 bg-kingdom-gold text-royal-black font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300">
              Start Selling
            </button>
          </div>
        )}
      </div>

      {/* Click outside to close dropdown (desktop only) */}
      {isCategoryOpen && (
        <div
          className="hidden md:block fixed inset-0 z-40"
          onClick={() => setIsCategoryOpen(false)}
        />
      )}
    </nav>
  )
}

