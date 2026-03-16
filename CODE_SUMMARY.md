# E-Commerce Website - Complete Code

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   └── App.tsx                    (Main entry point - 5 lines)
│   ├── imports/
│   │   ├── ECommerceHomePage.tsx      (Main component - 4383 lines)
│   │   └── svg-7ccfkq26ys.ts          (SVG paths - 48 exports)
│   └── styles/
│       └── fonts.css                   (Font imports - 2 lines)
├── package.json                        (Dependencies)
└── CODE_SUMMARY.md                     (This file)
```

## 📄 Main Files

### 1. `/src/app/App.tsx`

```typescript
import ECommerceHomePage from "../imports/ECommerceHomePage";

export default function App() {
  return <ECommerceHomePage />;
}
```

### 2. `/src/styles/fonts.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

### 3. `/src/imports/svg-7ccfkq26ys.ts`

This file contains 48 SVG path exports used throughout the application for icons and graphics.

### 4. `/src/imports/ECommerceHomePage.tsx`

**File size:** 4383 lines
**Main component structure:**

The component is exported from Figma and includes:

#### A. Image Imports (Lines 1-27)
- 23 product images imported using `figma:asset/[hash].png` scheme
- Images include: iPhone, JBL speaker, gaming products, fashion items, electronics

#### B. Components (Lines 29-4382)

**Navigation & Header:**
- Frame9() - Woman's Fashion menu
- Frame10() - Men's Fashion menu
- Frame203() - Sidebar categories list

**Hero Section:**
- Frame11() - Main hero banner with iPhone promotion
- Frame14() - Apple logo + text
- Frame12() - "Shop Now" button
- Frame13() - Arrow navigation
- Frame204() - Carousel dots indicator

**Flash Sales Section:**
- Frame74() - "Today's" tag
- Frame75() - "Flash Sales" heading
- Frame30-36() - Countdown timer components (Days, Hours, Minutes, Seconds)
- Frame174-176() - Timer container with navigation arrows
- Semiclone components - Timer separator dots

**Product Cards:**
- Frame19, Frame20, Frame23, Frame39, Frame44, etc. - Product card containers
- Frame24, Frame25, Frame27, etc. - Wishlist & Quick View icons
- Frame60-64() - Product images
- Frame15-43() - Star ratings (5 star, 4 star, 4.5 star variants)
- Frame16-42() - Price displays with discounts

**Category Section:**
- Frame49() - Black banner with JBL speaker
- Frame143() - JBL product image
- Frame50() - Category timer display

**Browse By Category:**
- Frame76() - "Categories" heading
- Frame77() - "Browse By Category" title
- Frame86-92() - Category icons (Phone, Computer, Watch, Camera, Headphones, Gaming)
- Frame82-85() - Category cards

**Best Selling Products:**
- Frame135() - "This Month" tag
- Frame136() - "Best Selling Products" heading
- Product grid with Frame46-48() components

**Product Grid Section:**
- Frame144() - "Our Products" tag
- Frame145() - "Explore Our Products" heading
- Multiple product cards (Frame131-134, Frame138-142, etc.)

**New Arrival Section:**
- Frame147() - "Featured" tag
- Frame148() - "New Arrival" heading
- Frame149-158() - Featured product cards with images:
  - PlayStation 5
  - Women's fashion
  - Amazon Echo speakers
  - Perfume products

**Footer:**
- Frame166() - Subscribe section
- Frame167() - QR code & app download
- Frame168-172() - Footer links (Support, Account, Quick Link)
- Frame173() - Social media icons
- Frame200-202() - Footer navigation columns

**Services Section:**
- Frame159-165() - Service features:
  - Free delivery
  - Customer service (24/7)
  - Money back guarantee

#### C. Main Export (Lines 4383-4428)

```typescript
export default function ECommerceHomePage() {
  return (
    <div className="bg-white relative size-full" data-name="E-Commerce HomePage">
      {/* Header */}
      {/* Hero Section */}
      {/* Flash Sales */}
      {/* Categories */}
      {/* Best Selling */}
      {/* Products Grid */}
      {/* JBL Banner */}
      {/* New Arrivals */}
      {/* Services */}
      {/* Footer */}
    </div>
  );
}
```

## 🎨 Design System

### Colors
- Primary Red: `#DB4444`
- Black: `#000000`
- White: `#FFFFFF`, `#FAFAFA`
- Gray: `#F5F5F5`
- Green: `#00FF66` (`#0f6`)
- Orange (ratings): `#FFAD33`

### Typography
- **Poppins**: Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Inter**: Regular (400), SemiBold (600), Bold (700)

### Font Sizes
- Headings: 36px, 48px
- Body: 16px
- Small: 11px, 12px, 14px
- Large numbers: 32px

## 📦 Dependencies (package.json)

```json
{
  "dependencies": {
    "@mui/material": "7.3.5",
    "@mui/icons-material": "7.3.5",
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "tailwindcss": "4.1.12"
  }
}
```

## 🚀 Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📱 Features

- ✅ Responsive e-commerce homepage
- ✅ Hero banner with carousel
- ✅ Flash sales with countdown timer
- ✅ Product grid with ratings & prices
- ✅ Category browsing
- ✅ Best selling products section
- ✅ Featured new arrivals
- ✅ Product quick view & wishlist
- ✅ Footer with app download & social links
- ✅ Service features display

## 🖼️ Images

All images are imported from Figma using the `figma:asset/[hash].png` scheme:
- Product images (23 total)
- Brand logos (Apple)
- QR codes
- App store badges
- Category icons

## 📝 Notes

- The design is pixel-perfect from Figma
- Uses Tailwind CSS v4 for styling
- All components are functional React components
- Images are optimized and loaded via Figma's asset system
- Fonts are loaded from Google Fonts
