import VendorStorefront from '@/components/VendorStorefront'

// Mock vendor data - Example template
const exampleVendor = {
  id: '1',
  name: 'AfroFashion Co.',
  slug: 'afrofashion-co',
  bio: `Welcome to AfroFashion Co., where tradition meets modern style! 

We are a Black-owned fashion brand dedicated to celebrating African heritage through contemporary clothing designs. Our mission is to bring authentic African prints and patterns to the global fashion scene while supporting artisans across the continent.

Founded in 2020 by a young entrepreneur passionate about cultural representation, we've grown from a small online store to a recognized brand serving customers in over 30 countries. Every piece in our collection tells a story, connecting wearers to the rich cultural tapestry of Africa.

We source our fabrics directly from African textile manufacturers, ensuring fair trade practices and supporting local economies. Our designs blend traditional patterns with modern silhouettes, creating pieces that are both culturally significant and fashion-forward.

Join us in celebrating African culture, one garment at a time!`,
  location: 'Lagos, Nigeria',
  joinedDate: 'January 2020',
  rating: 4.8,
  totalReviews: 234,
  totalProducts: 12,
  isVerified: true,
  isYouthOwned: true,
  bannerImage: '/vendor-banner.jpg',
  profileImage: '/vendor-profile.jpg',
  specialties: ['Fashion & Apparel', 'African Prints', 'Contemporary Design', 'Cultural Wear'],
  socialLinks: {
    website: 'https://afrofashion.co',
    instagram: '@afrofashionco',
    twitter: '@afrofashionco',
  },
}

// Mock products for this vendor
const exampleProducts = [
  {
    id: '1',
    name: 'Premium African Print Dashiki Shirt',
    vendor: 'AfroFashion Co.',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 234,
    image: '/images/products/dashiki.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['New'],
  },
  {
    id: '2',
    name: 'Ankara Print Maxi Dress',
    vendor: 'AfroFashion Co.',
    price: 64.99,
    rating: 4.9,
    reviews: 189,
    image: '/images/products/ankara-dress.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Best Seller'],
  },
  {
    id: '3',
    name: 'Kente Pattern Blazer',
    vendor: 'AfroFashion Co.',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 156,
    image: '/images/products/kente-blazer.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
  },
  {
    id: '4',
    name: 'African Print Headwrap Set',
    vendor: 'AfroFashion Co.',
    price: 24.99,
    rating: 5.0,
    reviews: 98,
    image: '/images/products/headwrap.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Premium'],
  },
  {
    id: '5',
    name: 'Modern Dashiki Jumpsuit',
    vendor: 'AfroFashion Co.',
    price: 74.99,
    rating: 4.6,
    reviews: 201,
    image: '/images/products/jumpsuit.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
  },
  {
    id: '6',
    name: 'African Print Scarf Collection',
    vendor: 'AfroFashion Co.',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 178,
    image: '/images/products/scarf-collection.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Limited'],
  },
  {
    id: '7',
    name: 'Traditional Agbada Set',
    vendor: 'AfroFashion Co.',
    price: 149.99,
    rating: 4.8,
    reviews: 87,
    image: '/images/products/agbada.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
  },
  {
    id: '8',
    name: 'African Print Tote Bag',
    vendor: 'AfroFashion Co.',
    price: 34.99,
    rating: 4.7,
    reviews: 145,
    image: '/images/products/tote-bag.jpg',
    isYouthOwned: true,
    hasGlobalShipping: true,
    isVerified: true,
    badges: ['Eco-Friendly'],
  },
]

export default function VendorTemplatePage() {
  return <VendorStorefront vendor={exampleVendor} products={exampleProducts} />
}

