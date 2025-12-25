import { Globe, Heart, Users, TrendingUp, Target, Crown } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-royal-black text-pure-white">
      {/* Legal Hero Section */}
      <section className="bg-gradient-to-br from-royal-black via-gray-900 to-royal-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="text-kingdom-gold">Kingdom Commerce</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Empowering Black-Owned Businesses Globally
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="w-8 h-8 text-kingdom-gold" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12 mb-12">
            <p className="text-2xl md:text-3xl font-light text-kingdom-gold mb-6 leading-relaxed">
              Support the Culture. Build the Kingdom.
            </p>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Kingdom Commerce was born from a vision to create a world-class marketplace that celebrates, 
                empowers, and amplifies Black-owned businesses across the globe. We believe that economic 
                empowerment is the foundation of lasting change, and commerce is the vehicle that drives it.
              </p>
              <p>
                Our mission is simple yet powerful: to provide a platform where Black entrepreneurs can thrive, 
                where their products and services reach global audiences, and where every purchase directly 
                supports economic growth in our communities.
              </p>
              <p>
                We&apos;re not just building a marketplace—we&apos;re building a movement. A movement that connects 
                Africa, the United States, and the Caribbean through commerce. A movement that celebrates 
                our culture while building our economic future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-royal-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-kingdom-gold" />
              <h2 className="text-3xl md:text-4xl font-bold">Global Impact</h2>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connecting entrepreneurs across three continents, one transaction at a time
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
            <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl">
              <Globe className="w-10 h-10 text-kingdom-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-2">3</div>
              <div className="text-sm md:text-base text-gray-400">Continents</div>
            </div>
            <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl">
              <Users className="w-10 h-10 text-kingdom-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-400">Countries</div>
            </div>
            <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl">
              <Crown className="w-10 h-10 text-kingdom-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-2">1000+</div>
              <div className="text-sm md:text-base text-gray-400">Vendors</div>
            </div>
            <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl">
              <TrendingUp className="w-10 h-10 text-kingdom-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-kingdom-gold mb-2">$1M+</div>
              <div className="text-sm md:text-base text-gray-400">Revenue</div>
            </div>
          </div>

          {/* Regional Focus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-kingdom-gold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Africa
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Supporting entrepreneurs across the continent, from Lagos to Nairobi, connecting 
                African businesses to global markets and celebrating the rich diversity of African 
                products and services.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-kingdom-gold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                United States
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Amplifying Black-owned businesses nationwide, creating opportunities for growth 
                and economic empowerment while building bridges between communities.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-kingdom-gold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Caribbean
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Celebrating Caribbean culture and commerce, bringing unique products and services 
                to a global audience while supporting local economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Kingdom CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-kingdom-gold/10 to-royal-black border-2 border-kingdom-gold rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the <span className="text-kingdom-gold">Kingdom</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a vendor ready to grow your business or a customer looking to support 
              Black-owned brands, you&apos;re welcome here.
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
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

