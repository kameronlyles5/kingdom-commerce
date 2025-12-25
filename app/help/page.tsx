'use client'

import { Search, Package, Truck, RotateCcw, CreditCard, HelpCircle, Mail } from 'lucide-react'
import Link from 'next/link'
import Accordion from '@/components/Accordion'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function HelpPage() {
  // FAQ data with TypeScript interface for future database mapping
  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'How do I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email. You can use this number to track your package on the carrier\'s website. You can also view your order status in your account dashboard.',
    },
    {
      id: '2',
      question: 'What is your return policy?',
      answer: 'Return policies vary by vendor. Most vendors offer a 30-day return window for unused items in original packaging. Please check the specific vendor\'s return policy on their product page before making a purchase.',
    },
    {
      id: '3',
      question: 'Do you ship internationally?',
      answer: 'Yes! Many of our vendors offer global shipping. Look for the "Global Shipping" badge on product listings. Shipping costs and delivery times vary by location and vendor.',
    },
    {
      id: '4',
      question: 'How do I pay for my order?',
      answer: 'We accept all major credit cards, debit cards, and digital payment methods through our secure Kingdom Pay system. All payments are processed securely and encrypted.',
    },
    {
      id: '5',
      question: 'How long does shipping take?',
      answer: 'Shipping times vary by vendor and destination. Domestic orders typically arrive within 5-7 business days. International orders can take 10-21 business days depending on the destination and customs processing.',
    },
    {
      id: '6',
      question: 'Can I cancel my order?',
      answer: 'You can cancel your order within 24 hours of placing it, as long as it hasn\'t been shipped yet. Once shipped, you\'ll need to follow the return process. Contact customer support for assistance.',
    },
    {
      id: '7',
      question: 'What if my item arrives damaged?',
      answer: 'If your item arrives damaged, please contact the vendor immediately through the Platform. Take photos of the damage and keep all packaging. Most vendors will offer a replacement or full refund for damaged items.',
    },
    {
      id: '8',
      question: 'How do I become a vendor?',
      answer: 'Click the "Start Selling" button in the navigation or visit our vendor registration page. You\'ll need to verify that your business is Black-owned and provide necessary documentation. Our team will review your application within 3-5 business days.',
    },
  ]

  const helpCategories = [
    {
      icon: Package,
      title: 'Orders',
      description: 'Track orders, view order history, and manage your purchases',
      link: '/help/orders',
    },
    {
      icon: Truck,
      title: 'Shipping',
      description: 'Shipping options, delivery times, and tracking information',
      link: '/help/shipping',
    },
    {
      icon: RotateCcw,
      title: 'Returns',
      description: 'Return policies, refunds, and exchange information',
      link: '/help/returns',
    },
    {
      icon: CreditCard,
      title: 'Payments',
      description: 'Payment methods, billing, and Kingdom Pay information',
      link: '/help/payments',
    },
  ]

  return (
    <div className="min-h-screen bg-royal-black text-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-black via-gray-900 to-royal-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <HelpCircle className="w-8 h-8 text-kingdom-gold" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Help <span className="text-kingdom-gold">Center</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Find answers to common questions and get the support you need
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center space-x-2 bg-gray-900 rounded-full px-6 py-4 border border-gray-800 focus-within:border-kingdom-gold transition-colors duration-200">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="bg-transparent border-none outline-none text-pure-white placeholder-gray-500 flex-1 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Browse by <span className="text-kingdom-gold">Category</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  href={category.link}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-kingdom-gold transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-kingdom-gold bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-kingdom-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-pure-white group-hover:text-kingdom-gold transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-royal-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-kingdom-gold">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to the most common questions
            </p>
          </div>

          <Accordion items={faqData} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-kingdom-gold/10 to-royal-black border-2 border-kingdom-gold rounded-2xl p-8 md:p-12 text-center">
            <Mail className="w-12 h-12 text-kingdom-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Reach out and we&apos;ll get back to you as soon as possible.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-kingdom-gold text-royal-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

