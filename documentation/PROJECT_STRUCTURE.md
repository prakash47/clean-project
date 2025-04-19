# Project Structure Guide for Intention Infoservice Website

This document provides a detailed overview of the project structure for the Intention Infoservice website.

## Directory Structure

```
intention-infoservice/
├── .next/                  # Next.js build output (generated)
├── documentation/          # Project documentation
├── node_modules/           # Dependencies (generated)
├── public/                 # Static assets
│   ├── images/             # Image assets
│   ├── icons/              # Icon assets
│   └── manifest.json       # PWA manifest
├── src/                    # Source code
│   ├── app/                # Next.js App Router pages
│   ├── components/         # React components
│   ├── lib/                # Utility functions and configurations
│   ├── styles/             # Global styles
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── hooks/              # Custom React hooks
├── .eslintrc.json         # ESLint configuration
├── next-sitemap.config.js  # Sitemap configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Directories Explained

### `/src/app`

Contains all the pages using Next.js App Router. Each folder represents a route in the application.

```
app/
├── page.tsx               # Homepage
├── layout.tsx             # Root layout
├── globals.css            # Global styles
├── manifest.ts            # PWA manifest
├── robots.ts              # Robots configuration
├── about/                 # About page
│   └── page.tsx
├── contact/               # Contact page
│   └── page.tsx
├── blog/                  # Blog page
│   └── page.tsx
├── portfolio/             # Portfolio page
│   └── page.tsx
├── services/              # Services pages
│   ├── page.tsx           # Services overview
│   ├── web-design-development/
│   │   └── page.tsx
│   ├── mobile-app-development/
│   │   └── page.tsx
│   ├── website-maintenance/
│   │   └── page.tsx
│   ├── ui-ux-design/
│   │   └── page.tsx
│   ├── digital-marketing/
│   │   └── page.tsx
│   └── custom-business-solutions/
│       └── page.tsx
└── api/                   # API routes
    └── og/                # Open Graph image generation
        └── route.tsx
```

### `/src/components`

Contains all the reusable React components organized by category.

```
components/
├── layout/                # Layout components
│   ├── MainLayout.tsx     # Main layout wrapper
│   ├── Header.tsx         # Site header with navigation
│   └── Footer.tsx         # Site footer
├── ui/                    # UI components
│   ├── Button.tsx         # Button component
│   ├── Card.tsx           # Card component
│   ├── Container.tsx      # Container component
│   ├── FormElements.tsx   # Form input components
│   ├── Grid.tsx           # Grid layout component
│   └── Section.tsx        # Section component
└── sections/              # Page sections
    ├── HeroSection.tsx    # Hero section
    ├── ServicesSection.tsx # Services section
    ├── AboutSection.tsx   # About section
    ├── TestimonialsSection.tsx # Testimonials section
    └── CTASection.tsx     # Call-to-action section
```

### `/src/lib`

Contains utility functions and configurations.

```
lib/
├── seo-config.ts          # SEO configuration
├── metadata.ts            # Metadata utilities
└── performance.ts         # Performance utilities
```

### `/public`

Contains static assets that are served directly by the web server.

```
public/
├── images/                # Image assets
├── icons/                 # Icon assets
└── manifest.json          # PWA manifest
```

## Configuration Files

### `next.config.js`

Next.js configuration file that includes:
- Image optimization settings
- Experimental features
- Environment variable configuration
- Redirects and rewrites

### `tailwind.config.js`

Tailwind CSS configuration that includes:
- Custom color palette
- Extended theme settings
- Plugin configurations
- Content paths for purging unused CSS

### `postcss.config.js`

PostCSS configuration for processing CSS:
- Tailwind CSS plugin
- Autoprefixer for vendor prefixes

### `next-sitemap.config.js`

Configuration for generating the sitemap:
- Site URL
- Change frequency
- Priority settings
- Excluded routes

## TypeScript Configuration

### `tsconfig.json`

TypeScript configuration that includes:
- Compiler options
- Module resolution settings
- Type checking rules
- Path aliases for imports

## Build and Development

### `package.json` Scripts

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint for code quality
- `postbuild`: Generate sitemap after build

## Page Structure Pattern

Each page typically follows this structure:

```tsx
// Import statements
import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
// ... other imports

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Page Title | Intention Infoservice',
  description: 'Page description for SEO'
};

// Page component
export default function PageName() {
  return (
    <MainLayout
      title="Page Title | Intention Infoservice"
      description="Page description for SEO"
    >
      <Section background="gradient" paddingY="lg">
        {/* Section content */}
      </Section>
      
      {/* Additional sections */}
    </MainLayout>
  );
}
```

## Component Pattern

Components typically follow this structure:

```tsx
"use client" // Only for client components that use hooks or interactivity

import { ReactNode } from 'react';
// ... other imports

// Component props interface
interface ComponentProps {
  prop1: string;
  prop2?: number;
  // ... other props
}

// Component function
export default function ComponentName({ prop1, prop2 = defaultValue }: ComponentProps) {
  // Component logic
  
  return (
    <div className="...">
      {/* Component JSX */}
    </div>
  );
}
```

## Data Flow

The website uses a top-down data flow approach:
- Page components fetch or define data
- Data is passed down to section components
- Section components pass data to UI components
- Static data is defined in component files with default values

## Styling Approach

The website uses Tailwind CSS for styling with these patterns:
- Utility classes for most styling needs
- Component-specific classes for complex components
- Global styles in `globals.css` for base elements
- Responsive design using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
