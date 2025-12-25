'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openItems.has(item.id)
        return (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="font-semibold text-pure-white pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-kingdom-gold flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 py-4 border-t border-gray-800">
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

