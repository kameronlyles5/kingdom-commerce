import Link from 'next/link'
import { Globe, Heart, Users, TrendingUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-royal-black border-t border-gray-800 text-pure-white">
      {/* Global Impact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-kingdom-gold">Global</span> Impact
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering entrepreneurs and building economic bridges across continents
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Globe className="w-8 h-8 text-kingdom-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-1">
              3
            </div>
            <div className="text-sm md:text-base text-gray-400">Continents</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-kingdom-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-1">
              50+
            </div>
            <div className="text-sm md:text-base text-gray-400">Countries</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Heart className="w-8 h-8 text-kingdom-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-1">
              1000+
            </div>
            <div className="text-sm md:text-base text-gray-400">Vendors</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-kingdom-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-1">
              $1M+
            </div>
            <div className="text-sm md:text-base text-gray-400">Revenue</div>
          </div>
        </div>

        {/* Regions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-kingdom-gold mb-4">
              Africa
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Supporting entrepreneurs across the continent, from Lagos to Nairobi, 
              connecting African businesses to global markets.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-kingdom-gold mb-4">
              United States
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Amplifying Black-owned businesses nationwide, creating opportunities 
              for growth and economic empowerment.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-kingdom-gold mb-4">
              Caribbean
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Celebrating Caribbean culture and commerce, bringing unique products 
              and services to a global audience.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-kingdom-gold font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/categories" className="hover:text-kingdom-gold transition-colors duration-200">
                    Browse Categories
                  </Link>
                </li>
                <li>
                  <Link href="/vendors" className="hover:text-kingdom-gold transition-colors duration-200">
                    Find Vendors
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className="hover:text-kingdom-gold transition-colors duration-200">
                    Special Deals
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-kingdom-gold font-semibold mb-4">For Vendors</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/sell" className="hover:text-kingdom-gold transition-colors duration-200">
                    Start Selling
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-guide" className="hover:text-kingdom-gold transition-colors duration-200">
                    Vendor Guide
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-kingdom-gold transition-colors duration-200">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-kingdom-gold font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-kingdom-gold transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="hover:text-kingdom-gold transition-colors duration-200">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-kingdom-gold transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-kingdom-gold transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-kingdom-gold transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-kingdom-gold font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-kingdom-gold transition-colors duration-200">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-kingdom-gold transition-colors duration-200">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-kingdom-gold transition-colors duration-200">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kingdom Commerce. Building the future of commerce, one vendor at a time.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Support the Culture. Build the Kingdom.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

