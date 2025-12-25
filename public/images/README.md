# Images Directory

This folder contains all static images for the Kingdom Commerce marketplace.

## Folder Structure

```
images/
├── products/      # Product images (dashikis, hair care, etc.)
├── vendors/       # Vendor profile images and store banners
├── banners/       # Marketing banners and hero images
└── logos/         # Brand logos and icons
```

## Usage in Next.js

Images in the `public` folder can be referenced directly in your code:

```tsx
// Using Next.js Image component (recommended)
import Image from 'next/image'

<Image 
  src="/images/products/dashiki.jpg" 
  alt="Dashiki Shirt"
  width={400}
  height={400}
/>

// Or using regular img tag
<img src="/images/vendors/afrofashion-banner.jpg" alt="Vendor Banner" />
```

## Image Guidelines

- **Product Images**: Recommended size 800x800px, JPG or WebP format
- **Vendor Banners**: Recommended size 1920x600px for hero banners
- **Profile Images**: Recommended size 400x400px, square format
- **Logos**: SVG format preferred, or PNG with transparent background

## File Naming Convention

- Use lowercase letters and hyphens
- Be descriptive: `premium-dashiki-shirt.jpg` not `img1.jpg`
- Include vendor name for vendor-specific images: `afrofashion-co-banner.jpg`

