'use client'

import { useState } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

interface CartItem {
  id: string
  name: string
  vendor: string
  price: number
  quantity: number
  image: string
}

export default function Cart() {
  const { isOpen, closeCart } = useCart()
  // Mock cart items
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Premium African Print Dashiki Shirt',
      vendor: 'AfroFashion Co.',
      price: 49.99,
      quantity: 1,
      image: '/products/dashiki.jpg',
    },
    {
      id: '3',
      name: 'Natural Hair Care Bundle',
      vendor: 'Crown Beauty',
      price: 39.99,
      quantity: 2,
      image: '/products/hair-care.jpg',
    },
  ])

  const updateQuantity = (id: string, delta: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Slide-over Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-royal-black border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-kingdom-gold" />
              <h2 className="text-xl font-bold text-pure-white">Shopping Cart</h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-gray-400 hover:text-pure-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-gray-700 mb-4" />
                <p className="text-gray-400 mb-2">Your cart is empty</p>
                <Link
                  href="/"
                  onClick={closeCart}
                  className="text-kingdom-gold hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-lg bg-gray-800 flex-shrink-0">
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23D4AF37' opacity='0.1'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-pure-white truncate mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400 mb-2">{item.vendor}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-kingdom-gold font-bold">
                          ${item.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-center justify-between">
                      <div className="flex items-center space-x-2 border border-gray-700 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-gray-400 hover:text-pure-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 text-pure-white font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-gray-400 hover:text-pure-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-gray-400 mt-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Summary */}
          {items.length > 0 && (
            <div className="border-t border-gray-800 p-6 space-y-4 bg-gray-900">
              {/* Summary */}
              <div className="space-y-2 text-sm">
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
                <div className="flex justify-between text-pure-white font-bold text-lg pt-2 border-t border-gray-800">
                  <span>Total</span>
                  <span className="text-kingdom-gold">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                onClick={closeCart}
                className="block w-full px-6 py-3 bg-kingdom-gold text-royal-black font-bold rounded-lg text-center hover:bg-opacity-90 transition-all duration-300"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="block w-full px-6 py-3 border border-gray-700 text-pure-white font-semibold rounded-lg hover:border-kingdom-gold hover:text-kingdom-gold transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

