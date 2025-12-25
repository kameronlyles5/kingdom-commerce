import ProductCard from './ProductCard'

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Premium African Print Dashiki Shirt',
    vendor: 'AfroFashion Co.',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 234,
    image: '/products/dashiki.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['New'],
  },
  {
    id: '2',
    name: 'Handcrafted Caribbean Spice Blend',
    vendor: 'Island Flavors',
    price: 24.99,
    rating: 4.9,
    reviews: 156,
    image: '/products/spice-blend.jpg',
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Best Seller'],
  },
  {
    id: '3',
    name: 'Natural Hair Care Bundle',
    vendor: 'Crown Beauty',
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviews: 412,
    image: '/products/hair-care.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
  },
  {
    id: '4',
    name: 'African Artisan Coffee Beans',
    vendor: 'Ethiopian Roasters',
    price: 18.99,
    rating: 5.0,
    reviews: 89,
    image: '/products/coffee.jpg',
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Premium'],
  },
  {
    id: '5',
    name: 'Handwoven Kente Cloth Scarf',
    vendor: 'Ghana Textiles',
    price: 34.99,
    rating: 4.6,
    reviews: 201,
    image: '/products/kente-scarf.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
  },
  {
    id: '6',
    name: 'Caribbean Rum Cake Collection',
    vendor: 'Tropical Treats',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 178,
    image: '/products/rum-cake.jpg',
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Limited'],
  },
  {
    id: '7',
    name: 'Black-Owned Book Collection',
    vendor: 'Literary Kingdom',
    price: 45.99,
    rating: 4.8,
    reviews: 312,
    image: '/products/books.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
  },
  {
    id: '8',
    name: 'Artisan Shea Butter Soap',
    vendor: 'Natural Essentials',
    price: 12.99,
    rating: 4.7,
    reviews: 445,
    image: '/products/shea-butter.jpg',
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Eco-Friendly'],
  },
]

export default function ProductGrid() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-royal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover <span className="text-kingdom-gold">Amazing Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Shop from verified Black-owned businesses across the globe
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-kingdom-gold text-kingdom-gold font-bold rounded-lg hover:bg-kingdom-gold hover:text-royal-black transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

