'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Package,
  RotateCcw,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

interface SidebarLink {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export default function AccountSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const links: SidebarLink[] = [
    { href: '/account', label: 'Overview', icon: LayoutDashboard },
    { href: '/account/orders', label: 'Orders', icon: Package },
    { href: '/account/returns', label: 'Returns', icon: RotateCcw },
    { href: '/account/payment', label: 'Kingdom Pay', icon: CreditCard },
    { href: '/account/settings', label: 'Settings', icon: Settings },
  ]

  const isActive = (href: string) => {
    if (href === '/account') {
      return pathname === '/account'
    }
    return pathname?.startsWith(href)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-royal-black border-b border-gray-800 px-4 py-3">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center space-x-2 text-pure-white hover:text-kingdom-gold transition-colors"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
          <span className="font-semibold">Account Menu</span>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-24 h-screen lg:h-[calc(100vh-6rem)] w-64 bg-royal-black border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Sidebar Header */}
          <div className="mb-8 pb-6 border-b border-gray-800">
            <h2 className="text-xl font-bold text-pure-white">
              <span className="text-kingdom-gold">Kingdom</span> Account
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {links.map((link) => {
              const Icon = link.icon
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-kingdom-gold bg-opacity-10 text-kingdom-gold border border-kingdom-gold'
                      : 'text-gray-400 hover:text-kingdom-gold hover:bg-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout Button */}
          <div className="pt-6 border-t border-gray-800">
            <button
              onClick={() => {
                // Handle logout
                alert('Logout functionality will be implemented in Phase 2')
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-900 hover:bg-opacity-10 transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

