'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, MapPin, CreditCard, Shield, Lock } from 'lucide-react'
import CheckoutSteps from '@/components/CheckoutSteps'

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Mock cart data
  const cartItems = [
    { id: '1', name: 'Premium African Print Dashiki Shirt', price: 49.99, quantity: 1 },
    { id: '3', name: 'Natural Hair Care Bundle', price: 39.99, quantity: 2 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-royal-black text-pure-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-kingdom-gold">Checkout</span>
          </h1>
          <p className="text-gray-400">Complete your purchase securely</p>
        </div>

        {/* Steps */}
        <CheckoutSteps currentStep={currentStep} onStepChange={setCurrentStep} />

        {/* Step 1: Shipping */}
        {currentStep === 1 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-6 h-6 text-kingdom-gold" />
              <h2 className="text-2xl font-bold">Shipping Information</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    State/Province *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    ZIP/Postal Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                  required
                >
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                  <option value="NG">Nigeria</option>
                  <option value="JM">Jamaica</option>
                  <option value="GH">Ghana</option>
                  <option value="ZA">South Africa</option>
                  <option value="KE">Kenya</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Kingdom Pay Preview */}
        {currentStep === 2 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center space-x-2 mb-6">
              <CreditCard className="w-6 h-6 text-kingdom-gold" />
              <h2 className="text-2xl font-bold">Kingdom Pay</h2>
            </div>

            <div className="space-y-6">
              {/* Payment Method Preview */}
              <div className="bg-gradient-to-br from-kingdom-gold/10 to-royal-black border border-kingdom-gold rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-kingdom-gold rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-royal-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-pure-white">Kingdom Pay</h3>
                      <p className="text-sm text-gray-400">Secure payment powered by Kingdom Commerce</p>
                    </div>
                  </div>
                  <Shield className="w-8 h-8 text-kingdom-gold" />
                </div>

                <div className="space-y-4 pt-4 border-t border-kingdom-gold/20">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-start space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg">
                <Lock className="w-5 h-5 text-kingdom-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Your payment information is encrypted and secure. We never store your full card details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {currentStep === 3 && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-800">
                    <div>
                      <h3 className="font-semibold text-pure-white">{item.name}</h3>
                      <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <span className="text-kingdom-gold font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 pt-4 border-t border-gray-800">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-pure-white font-bold text-xl pt-4 border-t border-gray-800">
                  <span>Total</span>
                  <span className="text-kingdom-gold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <p className="text-gray-300">
                {formData.firstName} {formData.lastName}
                <br />
                {formData.address}
                <br />
                {formData.city}, {formData.state} {formData.zipCode}
                <br />
                {formData.country}
              </p>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-6 h-6 text-kingdom-gold" />
                <div>
                  <p className="text-pure-white font-semibold">Kingdom Pay</p>
                  <p className="text-sm text-gray-400">
                    **** **** **** {formData.cardNumber.slice(-4) || '1234'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 border border-gray-700 rounded-lg font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'text-gray-600 border-gray-800 cursor-not-allowed'
                : 'text-pure-white hover:border-kingdom-gold hover:text-kingdom-gold'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          {currentStep < 3 ? (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-6 py-3 bg-kingdom-gold text-royal-black rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              <span>Continue</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                // Handle order placement
                alert('Order placed successfully! (This is a demo)')
              }}
              className="flex items-center space-x-2 px-8 py-3 bg-kingdom-gold text-royal-black rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              <Lock className="w-5 h-5" />
              <span>Place Order</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

