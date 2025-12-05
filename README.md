# A-ONE Coastal Intelligence

A modern, premium web application for exploring and analyzing India's beautiful coastal beaches. This platform combines geographical mapping, scientific sand analysis, and visual intelligence to provide detailed insights into beach characteristics.

## 🌊 Features

- **Interactive Map**: Explore India's coastal states with an interactive Leaflet map
- **Beach Discovery**: Browse through 8+ beaches with detailed information
- **Sand Analysis**: View scientific sand grain analysis with distribution charts
- **Modern UI**: Premium design with glassmorphism, smooth animations, and dark/light themes
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Accessible**: ARIA labels, keyboard navigation, and reduced motion support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. Navigate to the web directory:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
web/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx     # Home page
│   │   ├── about/       # About page
│   │   └── layout.tsx   # Root layout
│   ├── components/       # React components
│   │   ├── loader.tsx   # Premium loader
│   │   ├── hero.tsx     # Hero section
│   │   ├── navbar.tsx   # Smart navbar
│   │   ├── map-section.tsx
│   │   ├── beach-detail-panel.tsx
│   │   ├── sand-analysis-modal.tsx
│   │   ├── explore-section.tsx
│   │   └── footer.tsx
│   └── data/            # Data files
│       ├── beaches.ts   # Beach data
│       └── india-geojson.ts
└── public/              # Static assets
```

## 🎨 Design Features

- **Ocean-inspired UI**: Blue, cyan, and teal gradients
- **Glassmorphism**: Translucent elements with backdrop blur
- **Smooth Animations**: GSAP and Framer Motion animations
- **Dark/Light Theme**: System preference detection with manual toggle
- **Cinematic Scroll**: Parallax effects and scroll-triggered animations
- **Flip Cards**: 3D flip animations on beach cards

## 🗺️ Map Features

- Interactive Leaflet map
- Coastal state highlighting with GeoJSON
- Beach markers with clustering
- Filter system (Family-friendly, Water Quality, Popularity)
- Click markers to view beach details
- Zoom and pan controls

## 📊 Sand Analysis

Each beach includes:
- Total grains detected
- Grain size distribution (Fine, Medium, Coarse)
- GPS location
- Sample images
- Analysis pipeline explanation

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion), GSAP
- **Maps**: Leaflet, React Leaflet
- **Icons**: Lucide React
- **Theme**: next-themes
- **Type Safety**: TypeScript

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion preferences respected
- Semantic HTML structure
- High contrast support

## 🎯 Performance

- Image optimization with Next.js Image
- Code splitting with dynamic imports
- Lazy loading for map components
- Optimized animations

## 📝 Customization

### Adding New Beaches

Edit `src/data/beaches.ts` to add new beach entries:

```typescript
{
  id: '9',
  name: 'Beach Name',
  location: 'City, State',
  state: 'State Name',
  coordinates: [lat, lng],
  // ... other properties
}
```

### Styling

The app uses Tailwind CSS with custom theme variables. Edit `src/app/globals.css` to customize colors and spacing.

### Map Configuration

Modify map settings in `src/components/map-section.tsx`:
- Center coordinates
- Default zoom level
- Tile layer URL

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ for exploring India's beautiful coastline
