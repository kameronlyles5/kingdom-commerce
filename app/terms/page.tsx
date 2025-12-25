'use client'

import { Scale, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface TableOfContentsItem {
  id: string
  title: string
}

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>('')

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'use', title: '2. Use of the Platform' },
    { id: 'accounts', title: '3. User Accounts' },
    { id: 'vendors', title: '4. Vendor Terms' },
    { id: 'products', title: '5. Products and Services' },
    { id: 'payments', title: '6. Payments and Fees' },
    { id: 'orders', title: '7. Orders and Shipping' },
    { id: 'returns', title: '8. Returns and Refunds' },
    { id: 'intellectual', title: '9. Intellectual Property' },
    { id: 'prohibited', title: '10. Prohibited Activities' },
    { id: 'liability', title: '11. Limitation of Liability' },
    { id: 'changes', title: '12. Changes to Terms' },
    { id: 'contact', title: '13. Contact Information' },
  ]

  return (
    <div className="min-h-screen bg-royal-black text-pure-white">
      {/* Legal Hero Section */}
      <section className="bg-gradient-to-br from-royal-black via-gray-900 to-royal-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Scale className="w-8 h-8 text-kingdom-gold" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Terms of <span className="text-kingdom-gold">Service</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Please read these terms carefully before using our platform
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Table of Contents Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-lg font-bold text-kingdom-gold mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center text-sm py-2 px-3 rounded-lg transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'bg-kingdom-gold text-royal-black font-semibold'
                          : 'text-gray-400 hover:text-kingdom-gold hover:bg-gray-800'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 max-w-4xl">
              <div className="prose prose-invert max-w-none space-y-8">
                {/* Section 1 */}
                <section id="acceptance" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      By accessing and using Kingdom Commerce (&quot;the Platform&quot;), you accept and agree 
                      to be bound by the terms and provision of this agreement. If you do not agree 
                      to abide by the above, please do not use this service.
                    </p>
                    <p>
                      These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, 
                      mobile applications, and services provided by Kingdom Commerce.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="use" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    2. Use of the Platform
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      You may use our Platform to browse and purchase products from verified 
                      Black-owned businesses. You agree to use the Platform only for lawful 
                      purposes and in accordance with these Terms.
                    </p>
                    <p>
                      You agree not to use the Platform:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>In any way that violates any applicable law or regulation</li>
                      <li>To transmit any malicious code or harmful content</li>
                      <li>To impersonate or attempt to impersonate another user or entity</li>
                      <li>To interfere with or disrupt the Platform or servers</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="accounts" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    3. User Accounts
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      To access certain features of the Platform, you may be required to create an 
                      account. You are responsible for maintaining the confidentiality of your 
                      account credentials and for all activities that occur under your account.
                    </p>
                    <p>
                      You agree to provide accurate, current, and complete information during 
                      registration and to update such information to keep it accurate, current, 
                      and complete.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="vendors" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    4. Vendor Terms
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      Vendors must be verified Black-owned businesses. By becoming a vendor, you 
                      represent and warrant that your business is Black-owned and that all 
                      information provided is accurate.
                    </p>
                    <p>
                      Vendors are responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Accurate product descriptions and pricing</li>
                      <li>Timely order fulfillment and shipping</li>
                      <li>Customer service and support</li>
                      <li>Compliance with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="products" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    5. Products and Services
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      All products listed on the Platform are sold by independent vendors. Kingdom 
                      Commerce does not manufacture, store, or ship products. We are a marketplace 
                      platform connecting buyers and sellers.
                    </p>
                    <p>
                      Product descriptions, images, and prices are provided by vendors. We strive 
                      for accuracy but do not warrant that product descriptions or other content 
                      is accurate, complete, or error-free.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="payments" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    6. Payments and Fees
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      All payments are processed securely through our payment partners. You agree 
                      to provide current, complete, and accurate purchase and account information 
                      for all purchases made on the Platform.
                    </p>
                    <p>
                      Kingdom Commerce may charge transaction fees to vendors. These fees will be 
                      clearly disclosed before you become a vendor.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="orders" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    7. Orders and Shipping
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      When you place an order, you are making an offer to purchase products from 
                      the vendor. The vendor reserves the right to accept or reject your order.
                    </p>
                    <p>
                      Shipping terms, including costs and delivery times, are set by individual 
                      vendors. Global shipping options are available where indicated.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="returns" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    8. Returns and Refunds
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      Return and refund policies are set by individual vendors. Please review the 
                      vendor&apos;s return policy before making a purchase.
                    </p>
                    <p>
                      If you are not satisfied with your purchase, contact the vendor directly 
                      through the Platform. Kingdom Commerce may assist in resolving disputes 
                      but is not responsible for vendor return policies.
                    </p>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="intellectual" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    9. Intellectual Property
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      The Platform and its original content, features, and functionality are owned 
                      by Kingdom Commerce and are protected by international copyright, trademark, 
                      and other intellectual property laws.
                    </p>
                    <p>
                      You may not reproduce, distribute, modify, or create derivative works of 
                      any content from the Platform without our express written permission.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="prohibited" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    10. Prohibited Activities
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      You agree not to engage in any of the following prohibited activities:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Violating any laws or regulations</li>
                      <li>Infringing on intellectual property rights</li>
                      <li>Harassing, abusing, or harming others</li>
                      <li>Transmitting spam or unsolicited communications</li>
                      <li>Attempting to gain unauthorized access to the Platform</li>
                    </ul>
                  </div>
                </section>

                {/* Section 11 */}
                <section id="liability" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    11. Limitation of Liability
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      To the maximum extent permitted by law, Kingdom Commerce shall not be liable 
                      for any indirect, incidental, special, consequential, or punitive damages, 
                      or any loss of profits or revenues.
                    </p>
                    <p>
                      Our total liability for any claims arising from your use of the Platform 
                      shall not exceed the amount you paid to us in the twelve months preceding 
                      the claim.
                    </p>
                  </div>
                </section>

                {/* Section 12 */}
                <section id="changes" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    12. Changes to Terms
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      We reserve the right to modify these Terms at any time. We will notify users 
                      of any material changes by posting the new Terms on this page and updating 
                      the &quot;Last Updated&quot; date.
                    </p>
                    <p>
                      Your continued use of the Platform after any changes constitutes acceptance 
                      of the new Terms.
                    </p>
                  </div>
                </section>

                {/* Section 13 */}
                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    13. Contact Information
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> legal@kingdomcommerce.com</p>
                      <p><strong>Website:</strong> kingdomcommerce.com</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

