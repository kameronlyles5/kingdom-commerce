import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import ProductGrid from '@/components/ProductGrid'

export default function Home() {
  return (
    <main className="bg-royal-black text-pure-white">
      <Hero />
      <ValueProposition />
      <ProductGrid />
    </main>
  )
}

