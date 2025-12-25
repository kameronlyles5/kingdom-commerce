'use client'

import { useState } from 'react'
import { Check, Package, CreditCard, FileCheck, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface CheckoutStepsProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export default function CheckoutSteps({ currentStep, onStepChange }: CheckoutStepsProps) {
  const steps = [
    { id: 1, name: 'Shipping', icon: Package },
    { id: 2, name: 'Kingdom Pay', icon: CreditCard },
    { id: 3, name: 'Review', icon: FileCheck },
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = currentStep === step.id
          const isCompleted = currentStep > step.id

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted
                      ? 'bg-kingdom-gold border-kingdom-gold'
                      : isActive
                      ? 'border-kingdom-gold bg-kingdom-gold bg-opacity-10'
                      : 'border-gray-700 bg-gray-900'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-royal-black" />
                  ) : (
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? 'text-kingdom-gold' : 'text-gray-500'
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    isActive || isCompleted
                      ? 'text-kingdom-gold'
                      : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 ${
                    isCompleted ? 'bg-kingdom-gold' : 'bg-gray-700'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

