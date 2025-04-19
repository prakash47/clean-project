# Intention Infoservice Website

This is a modern, responsive website for Intention Infoservice, a web development company offering various digital services. The website is built using Next.js and Tailwind CSS, focusing on performance, SEO optimization, and user experience.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Mobile-first approach ensuring compatibility across all devices
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Ready**: Built-in SEO best practices and configurations
- **Component-Based Architecture**: Reusable components for consistent UI/UX

## Pages Included

- **Homepage**: Showcasing company services, features, and call-to-action sections
- **Services Pages**: Overview and individual pages for each service
  - Web Design & Development
  - Mobile App Development
  - Website Maintenance
  - UI/UX Design & Branding
  - Digital Marketing
  - Custom Business Solutions
- **About Us**: Company information, values, and team
- **Contact**: Contact form and information
- **Blog**: Blog layout with sample posts
- **Portfolio**: Project showcase with filtering capability

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: For smooth animations
- **React Icons**: Icon library
- **Next SEO**: For SEO optimization
- **Sharp**: For image optimization

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd intention-infoservice
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Starting Production Server

```bash
npm run start
# or
yarn start
```

## Project Structure

- `src/app/`: Contains all the pages using Next.js App Router
- `src/components/`: Reusable UI components
  - `layout/`: Layout components (Header, Footer, etc.)
  - `ui/`: UI components (Button, Card, etc.)
  - `sections/`: Page sections (Hero, Features, etc.)
- `src/lib/`: Utility functions and configurations
- `src/styles/`: Global styles and Tailwind configuration
- `public/`: Static assets (images, fonts, etc.)

## Known Issues

- There is a build error related to React context that needs to be resolved before deployment
- Some ESLint warnings about unused imports that should be addressed
- The Open Graph image generation API needs further configuration

## Customization

### Changing Colors

The color scheme can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... other shades
        600: '#0284c7',
        700: '#0369a1',
      },
      // ... other color definitions
    },
  },
}
```

### Adding New Pages

To add a new page, create a new directory in `src/app/` with a `page.tsx` file:

```tsx
// src/app/new-page/page.tsx
import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'New Page | Intention Infoservice',
  description: 'Description for the new page'
};

export default function NewPage() {
  return (
    <MainLayout
      title="New Page | Intention Infoservice"
      description="Description for the new page"
    >
      {/* Page content */}
    </MainLayout>
  );
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For any questions or issues, please contact your development team or the original creators of this website.
