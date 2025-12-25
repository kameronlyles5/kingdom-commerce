import { Globe, Heart, TrendingUp, Users, MapPin, Building2, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-royal-black text-pure-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-black via-gray-900 to-royal-black border-b border-gray-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23D4AF37' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3Cpath d='M0 300 Q480 200 960 300 T1920 300 L1920 1080 L0 1080 Z' fill='%23D4AF37' opacity='0.05'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Beyond Commerce:
            <br />
            <span className="text-kingdom-gold">Building a Global Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every transaction on Kingdom Commerce creates ripple effects that extend far beyond 
            the marketplace, building economic bridges and empowering communities worldwide.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-royal-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Stat 1 */}
            <div className="text-center p-8 bg-gray-900 border border-gray-800 rounded-2xl">
              <Users className="w-16 h-16 text-kingdom-gold mx-auto mb-6" />
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-kingdom-gold mb-3">
                1,000+
              </div>
              <div className="text-xl md:text-2xl font-semibold text-pure-white mb-2">
                Verified Vendors
              </div>
              <p className="text-gray-400">
                Black-owned businesses thriving on our platform
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-8 bg-gray-900 border border-gray-800 rounded-2xl">
              <Globe className="w-16 h-16 text-kingdom-gold mx-auto mb-6" />
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-kingdom-gold mb-3">
                3
              </div>
              <div className="text-xl md:text-2xl font-semibold text-pure-white mb-2">
                Continents
              </div>
              <p className="text-gray-400">
                Connecting Africa, US, and the Caribbean
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center p-8 bg-gray-900 border border-gray-800 rounded-2xl">
              <TrendingUp className="w-16 h-16 text-kingdom-gold mx-auto mb-6" />
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-kingdom-gold mb-3">
                15%
              </div>
              <div className="text-xl md:text-2xl font-semibold text-pure-white mb-2">
                Community Reinvestment
              </div>
              <p className="text-gray-400">
                Of profits reinvested into vendor growth programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Regional <span className="text-kingdom-gold">Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our presence spans three continents, each with unique opportunities and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Africa Card */}
            <div className="relative group overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl hover:border-kingdom-gold transition-all duration-300">
              {/* Background Image Placeholder */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='africa' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:%230A0A0A;stop-opacity:1'/%3E%3C/stop%3E%3C/linearGradient%3E%3Cpattern id='africa-pattern' x='0' y='0' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z' fill='%23D4AF37' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23africa)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23africa-pattern)'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative p-8 md:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-kingdom-gold" />
                  <h3 className="text-2xl md:text-3xl font-bold text-kingdom-gold">Africa</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Empowering entrepreneurs from Lagos to Nairobi, connecting African businesses 
                    to global markets and celebrating the continent&apos;s rich cultural heritage.
                  </p>
                  <div className="flex items-center space-x-4 pt-4">
                    <div>
                      <div className="text-2xl font-bold text-kingdom-gold">500+</div>
                      <div className="text-sm text-gray-400">Vendors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-kingdom-gold">25+</div>
                      <div className="text-sm text-gray-400">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* United States Card */}
            <div className="relative group overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl hover:border-kingdom-gold transition-all duration-300">
              {/* Background Image Placeholder */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='us' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:%230A0A0A;stop-opacity:1'/%3E%3C/stop%3E%3C/linearGradient%3E%3Cpattern id='us-pattern' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='3' fill='%23D4AF37' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23us)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23us-pattern)'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative p-8 md:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className="w-8 h-8 text-kingdom-gold" />
                  <h3 className="text-2xl md:text-3xl font-bold text-kingdom-gold">United States</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Amplifying Black-owned businesses nationwide, creating opportunities for growth 
                    and economic empowerment while building bridges between communities.
                  </p>
                  <div className="flex items-center space-x-4 pt-4">
                    <div>
                      <div className="text-2xl font-bold text-kingdom-gold">300+</div>
                      <div className="text-sm text-gray-400">Vendors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-kingdom-gold">50</div>
                      <div className="text-sm text-gray-400">States</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caribbean Card */}
            <div className="relative group overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl hover:border-kingdom-gold transition-all duration-300">
              {/* Background Image Placeholder */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='caribbean' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:%230A0A0A;stop-opacity:1'/%3E%3C/stop%3E%3C/linearGradient%3E%3Cpattern id='caribbean-pattern' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 30 L30 0 L60 30 L30 60 Z' fill='%23D4AF37' opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23caribbean)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23caribbean-pattern)'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative p-8 md:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-8 h-8 text-kingdom-gold" />
                  <h3 className="text-2xl md:text-3xl font-bold text-kingdom-gold">Caribbean</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Celebrating Caribbean culture and commerce, bringing unique products and services 
                    to a global audience while supporting local island economies.
                  </p>
                  <div className="flex items-center space-x-4 pt-4">
                    <div>
                      <div className="text-2xl font-bold text-kingdom-gold">200+</div>
                      <div className="text-sm text-gray-400">Vendors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-kingdom-gold">20+</div>
                      <div className="text-sm text-gray-400">Islands</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-royal-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the <span className="text-kingdom-gold">Movement</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of vendors and customers building economic empowerment, one transaction at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sell"
              className="px-8 py-4 bg-kingdom-gold text-royal-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Start Selling
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-kingdom-gold text-kingdom-gold font-bold rounded-lg hover:bg-kingdom-gold hover:text-royal-black transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

