'use client'

import { Shield, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface TableOfContentsItem {
  id: string
  title: string
}

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>('')

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Your Information' },
    { id: 'sharing', title: '4. Information Sharing' },
    { id: 'security', title: '5. Data Security' },
    { id: 'cookies', title: '6. Cookies and Tracking' },
    { id: 'rights', title: '7. Your Rights' },
    { id: 'children', title: '8. Children\'s Privacy' },
    { id: 'international', title: '9. International Transfers' },
    { id: 'changes', title: '10. Changes to Privacy Policy' },
    { id: 'contact', title: '11. Contact Us' },
  ]

  return (
    <div className="min-h-screen bg-royal-black text-pure-white">
      {/* Legal Hero Section */}
      <section className="bg-gradient-to-br from-royal-black via-gray-900 to-royal-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-kingdom-gold" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Privacy <span className="text-kingdom-gold">Policy</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Your privacy is important to us. Learn how we protect your data.
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
                <section id="introduction" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    1. Introduction
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      Kingdom Commerce (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your 
                      privacy. This Privacy Policy explains how we collect, use, disclose, and 
                      safeguard your information when you use our Platform.
                    </p>
                    <p>
                      Please read this Privacy Policy carefully. By using our Platform, you agree 
                      to the collection and use of information in accordance with this policy.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="information" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    2. Information We Collect
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Account Information:</strong> Name, email address, phone number, and password</li>
                      <li><strong>Profile Information:</strong> Profile picture, bio, and preferences</li>
                      <li><strong>Transaction Information:</strong> Payment details, billing address, and purchase history</li>
                      <li><strong>Vendor Information:</strong> Business details, tax information, and product listings</li>
                      <li><strong>Communication:</strong> Messages, reviews, and feedback you submit</li>
                    </ul>
                    <p className="mt-4">
                      We also automatically collect certain information when you use our Platform:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (pages visited, time spent, clicks)</li>
                      <li>Location data (if you enable location services)</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="usage" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    3. How We Use Your Information
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our Platform</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Personalize your experience and provide recommendations</li>
                      <li>Monitor and analyze trends and usage</li>
                      <li>Detect, prevent, and address technical issues</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="sharing" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    4. Information Sharing
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      We do not sell your personal information. We may share your information in 
                      the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>With Vendors:</strong> When you make a purchase, we share necessary information with the vendor to fulfill your order</li>
                      <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                      <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                      <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger or sale</li>
                      <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                    </ul>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="security" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    5. Data Security
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      We implement appropriate technical and organizational security measures to 
                      protect your personal information against unauthorized access, alteration, 
                      disclosure, or destruction.
                    </p>
                    <p>
                      However, no method of transmission over the Internet or electronic storage 
                      is 100% secure. While we strive to use commercially acceptable means to 
                      protect your information, we cannot guarantee absolute security.
                    </p>
                    <p>
                      We recommend that you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Use a strong, unique password</li>
                      <li>Never share your account credentials</li>
                      <li>Log out when using shared devices</li>
                      <li>Report any suspicious activity immediately</li>
                    </ul>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="cookies" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    6. Cookies and Tracking
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our 
                      Platform and hold certain information. Cookies are files with a small amount 
                      of data that may include an anonymous unique identifier.
                    </p>
                    <p>Types of cookies we use:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Essential Cookies:</strong> Required for the Platform to function</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Platform</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                    <p>
                      You can instruct your browser to refuse all cookies or to indicate when a 
                      cookie is being sent. However, if you do not accept cookies, you may not 
                      be able to use some portions of our Platform.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="rights" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    7. Your Rights
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>Depending on your location, you may have the following rights:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Objection:</strong> Object to processing of your personal information</li>
                      <li><strong>Restriction:</strong> Request restriction of processing</li>
                      <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us using the information provided 
                      in the &quot;Contact Us&quot; section.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="children" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    8. Children&apos;s Privacy
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      Our Platform is not intended for children under the age of 18. We do not 
                      knowingly collect personal information from children under 18.
                    </p>
                    <p>
                      If you are a parent or guardian and believe your child has provided us with 
                      personal information, please contact us immediately. If we become aware that 
                      we have collected personal information from a child under 18, we will take 
                      steps to delete such information.
                    </p>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="international" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    9. International Transfers
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      Your information may be transferred to and maintained on computers located 
                      outside of your state, province, country, or other governmental jurisdiction 
                      where data protection laws may differ.
                    </p>
                    <p>
                      By using our Platform, you consent to the transfer of your information to 
                      facilities located outside your jurisdiction. We will take all steps reasonably 
                      necessary to ensure that your data is treated securely and in accordance with 
                      this Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="changes" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    10. Changes to Privacy Policy
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of 
                      any changes by posting the new Privacy Policy on this page and updating the 
                      &quot;Last Updated&quot; date.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically for any changes. 
                      Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </section>

                {/* Section 11 */}
                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-kingdom-gold mb-4">
                    11. Contact Us
                  </h2>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
                    <p>
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@kingdomcommerce.com</p>
                      <p><strong>Website:</strong> kingdomcommerce.com</p>
                      <p><strong>Address:</strong> [Your Business Address]</p>
                    </div>
                    <p className="mt-4">
                      For data protection inquiries, please include &quot;Privacy Request&quot; in the 
                      subject line of your email.
                    </p>
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

