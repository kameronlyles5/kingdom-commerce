# 📸 Image Size Requirements for Kingdom Commerce

## Product Images

### Required Specifications:
- **Dimensions**: 800x800 pixels (square, 1:1 aspect ratio)
- **Format**: JPG or WebP
- **File Size**: Under 200KB (optimized for web)
- **Quality**: High quality, web-optimized
- **Color Space**: RGB

### Why 800x800px?
- Product cards use `aspect-square` containers
- Images are displayed at various sizes:
  - Mobile: ~150x150px (2 columns)
  - Tablet: ~200x200px (3 columns)
  - Desktop: ~250x250px (4 columns)
- 800x800px provides enough resolution for retina displays while keeping file sizes reasonable

### Image Optimization Tips:
1. Use tools like:
   - [TinyPNG](https://tinypng.com/) - Compress JPG/PNG
   - [Squoosh](https://squoosh.app/) - Optimize images
   - Photoshop "Save for Web"
   - ImageMagick for batch processing

2. Recommended settings:
   - JPG Quality: 80-85%
   - WebP Quality: 85-90%
   - Progressive JPG enabled

## File Names (Homepage Products):

1. `dashiki.jpg` - 800x800px
2. `spice-blend.jpg` - 800x800px
3. `hair-care.jpg` - 800x800px
4. `coffee.jpg` - 800x800px
5. `kente-scarf.jpg` - 800x800px
6. `rum-cake.jpg` - 800x800px
7. `books.jpg` - 800x800px
8. `shea-butter.jpg` - 800x800px

## Location:
Place all images in: `public/images/products/`

## Testing:
After adding images:
1. Run `npm run dev` locally
2. Check browser console for 404 errors
3. Verify images load correctly
4. Test on mobile and desktop

