# TruckDispatch Pro — Landing Page

A full Next.js 15 landing page for TruckDispatch Pro.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React icons

## Project Structure
```
├── app/
│   ├── globals.css       # Design tokens, animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main landing page (assembles all sections)
├── components/
│   └── landing/
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── ParadigmSection.tsx
│       ├── OSSection.tsx
│       ├── ProductSection.tsx
│       ├── HowItWorks.tsx
│       ├── WhyThisWins.tsx
│       ├── ImpactSection.tsx
│       ├── CTASection.tsx
│       └── Footer.tsx
└── lib/
    └── utils.ts
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Build for Production
```bash
npm run build
npm start
```
