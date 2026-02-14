# Adding Product Images

## Required Images

### Hero Image
- **Location:** `/assets/images/hero/hero-bg.jpg`
- **Size:** 1920x1080px (or larger)
- **Content:** Lifestyle photo of chinos products

### Product Images
All product images should be placed in `/assets/images/products/`

Each product needs an image file matching the filename in `products.json`:

#### Shorts
- `shorts-brick.jpg` - Brick Shorts
- `shorts-safari.jpg` - Safari Shorts
- `shorts-sangria.jpg` - Sangria Shorts
- `shorts-mochaccino.jpg` - Mochaccino Shorts

#### Summer Pants
- `summer-khaki.jpg` - Khaki Green Summer Pants
- `summer-bone.jpg` - Bone White Summer Pants
- `summer-brick.jpg` - Brick Orange Summer Pants
- `linen-natural.jpg` - Natural Linen Pants
- `linen-blue.jpg` - Blue Flax Linen Pants

#### Chinos
- `chinos-ocean.jpg` - Ocean Blue Chinos

#### Loungewear
- `home-checks.jpg` - PJ Checks
- `home-unicorn.jpg` - PJ Unicorn

## Image Specifications

- **Format:** JPG or WebP
- **Size:** 800x800px minimum (square)
- **Quality:** High quality, well-lit product photos
- **Background:** White or lifestyle setting
- **Compression:** Optimize for web (use tools like TinyPNG)

## Placeholder Image

Until real images are added, a placeholder will be shown. The website will still function properly.

## How to Add Images

1. Resize and optimize your product photos
2. Name them exactly as listed above
3. Upload to `/assets/images/products/`
4. Commit and push to GitHub
5. Netlify will auto-deploy the updated site

## Extracting from WordPress

If you have access to the WordPress media library:
1. Go to WordPress Admin → Media
2. Download each product image
3. Rename to match the filenames above
4. Upload to the repository
