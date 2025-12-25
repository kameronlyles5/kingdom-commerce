import { Globe, Shield, TrendingUp, Heart, Users, Award } from 'lucide-react'

export default function ValueProposition() {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with customers across Africa, the US, and the Caribbean',
    },
    {
      icon: Shield,
      title: 'Verified Vendors',
      description: 'Every seller is verified to ensure quality and authenticity',
    },
    {
      icon: TrendingUp,
      title: 'Economic Impact',
      description: 'Every purchase directly supports Black-owned businesses',
    },
    {
      icon: Heart,
      title: 'Cultural Celebration',
      description: 'Showcase and celebrate diverse cultural products and services',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by the community, for the community',
    },
    {
      icon: Award,
      title: 'Youth Owned',
      description: 'Supporting the next generation of entrepreneurs',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-royal-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-kingdom-gold">Kingdom Commerce</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A marketplace designed to empower, connect, and celebrate Black-owned businesses worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-kingdom-gold transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-kingdom-gold bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-kingdom-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-pure-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 bg-kingdom-gold bg-opacity-10 border border-kingdom-gold rounded-lg">
            <p className="text-kingdom-gold font-semibold text-lg">
              Support the Culture. Build the Kingdom.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

