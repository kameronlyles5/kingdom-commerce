import {
  Package,
  RotateCcw,
  Shield,
  Wallet,
  Truck,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export default function AccountPage() {
  // Mock user data (will come from auth in Phase 2)
  const userName = 'Alex'
  const memberSince = '2024'

  const quickActions = [
    {
      icon: Package,
      title: 'Your Orders',
      description: 'View and track your orders',
      href: '/account/orders',
      count: 5,
    },
    {
      icon: RotateCcw,
      title: 'Returns & Refunds',
      description: 'Manage returns and refunds',
      href: '/account/returns',
      count: 0,
    },
    {
      icon: Shield,
      title: 'Login & Security',
      description: 'Manage your account security',
      href: '/account/settings',
      badge: 'Secure',
    },
    {
      icon: Wallet,
      title: 'Your Wallet',
      description: 'Kingdom Pay and payment methods',
      href: '/account/payment',
    },
  ]

  // Mock recent order
  const recentOrder = {
    id: 'ORD-2024-001',
    item: 'Premium African Print Dashiki Shirt',
    vendor: 'AfroFashion Co.',
    status: 'In Transit',
    deliveryDate: 'December 28, 2024',
    image: '/images/products/dashiki.png',
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-br from-kingdom-gold/10 to-royal-black border border-kingdom-gold rounded-2xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome home, <span className="text-kingdom-gold">{userName}</span>.
        </h1>
        <p className="text-lg text-gray-400">
          Kingdom Member since {memberSince}
        </p>
      </div>

      {/* Quick Action Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                href={action.href}
                className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-kingdom-gold transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-kingdom-gold bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-kingdom-gold" />
                  </div>
                  {action.count !== undefined && (
                    <span className="px-2 py-1 bg-kingdom-gold text-royal-black text-xs font-bold rounded-full">
                      {action.count}
                    </span>
                  )}
                  {action.badge && (
                    <span className="px-2 py-1 bg-green-600 text-pure-white text-xs font-bold rounded-full">
                      {action.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-pure-white mb-2 group-hover:text-kingdom-gold transition-colors duration-200">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-400">{action.description}</p>
                <div className="mt-4 flex items-center text-kingdom-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Recent Order Preview */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Order</h2>
          <Link
            href="/account/orders"
            className="text-kingdom-gold hover:underline text-sm font-semibold flex items-center"
          >
            View All Orders
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Order Image */}
            <div className="w-full md:w-32 h-32 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
              <div
                className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='128' height='128' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23D4AF37' opacity='0.1'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Order Details */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-pure-white mb-2">
                    {recentOrder.item}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    {recentOrder.vendor}
                  </p>
                  <p className="text-gray-500 text-xs">Order #{recentOrder.id}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-sm font-semibold rounded-full border border-blue-600">
                    <Truck className="w-4 h-4 mr-2" />
                    {recentOrder.status}
                  </span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">
                    Expected delivery: <span className="text-kingdom-gold font-semibold">{recentOrder.deliveryDate}</span>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <Link
                  href={`/account/orders/${recentOrder.id}`}
                  className="inline-flex items-center px-4 py-2 border border-kingdom-gold text-kingdom-gold rounded-lg hover:bg-kingdom-gold hover:text-royal-black transition-all duration-300 text-sm font-semibold"
                >
                  Track Order
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

