# Component Guide for Intention Infoservice Website

This guide provides detailed information about the reusable components created for the Intention Infoservice website.

## Layout Components

### MainLayout

The main layout wrapper used for all pages. It includes the Header, Footer, and handles SEO metadata.

**Usage:**
```tsx
import MainLayout from '@/components/layout/MainLayout';

export default function YourPage() {
  return (
    <MainLayout
      title="Page Title | Intention Infoservice"
      description="Page description for SEO"
    >
      {/* Your page content */}
    </MainLayout>
  );
}
```

### Header

The website header with responsive navigation and mobile menu.

**Features:**
- Responsive design
- Mobile hamburger menu with smooth animations
- Active link highlighting
- Company logo

### Footer

The website footer with multiple sections for links, contact information, and social media.

**Features:**
- Multi-column layout
- Service links
- Contact information
- Social media links
- Newsletter signup form
- Copyright information

## UI Components

### Button

A versatile button component with multiple variants and options.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'text' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `fullWidth`: boolean (default: false)
- `icon`: ReactNode
- `iconPosition`: 'left' | 'right' (default: 'left')
- `href`: string (optional, renders as link if provided)
- `onClick`: function (optional)
- `disabled`: boolean (default: false)
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `className`: string (optional, for additional styling)

**Usage:**
```tsx
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

// Basic button
<Button>Click Me</Button>

// Button with icon
<Button 
  variant="primary" 
  icon={<FaArrowRight />} 
  iconPosition="right"
>
  Get Started
</Button>

// Link button
<Button 
  variant="outline" 
  href="/contact"
>
  Contact Us
</Button>
```

### Card

A flexible card component for displaying content in a contained box.

**Props:**
- `variant`: 'default' | 'bordered' | 'elevated' (default: 'default')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `className`: string (optional, for additional styling)
- `children`: ReactNode

**Usage:**
```tsx
import Card from '@/components/ui/Card';

<Card variant="elevated" padding="lg">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>
```

### Section

A section component for consistent page sections with background options.

**Props:**
- `background`: 'white' | 'light' | 'dark' | 'primary' | 'gradient' (default: 'white')
- `paddingY`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `className`: string (optional, for additional styling)
- `children`: ReactNode

**Usage:**
```tsx
import Section from '@/components/ui/Section';

<Section background="primary" paddingY="lg">
  <h2>Section Title</h2>
  <p>Section content goes here...</p>
</Section>
```

### Container

A container component for consistent content width and padding.

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default: 'lg')
- `className`: string (optional, for additional styling)
- `children`: ReactNode

**Usage:**
```tsx
import Container from '@/components/ui/Container';

<Container size="md">
  <p>Content with consistent width and padding</p>
</Container>
```

### Grid

A responsive grid component for layouts.

**Props:**
- `columns`: number | { sm?: number; md?: number; lg?: number; xl?: number } (default: { sm: 1, md: 2, lg: 3 })
- `gap`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `className`: string (optional, for additional styling)
- `children`: ReactNode

**Usage:**
```tsx
import Grid from '@/components/ui/Grid';

<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### FormElements

A collection of form components with consistent styling.

**Components:**
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `RadioGroup`

**Usage:**
```tsx
import { Input, Textarea, Select, Checkbox } from '@/components/ui/FormElements';

<form>
  <Input 
    label="Your Name" 
    name="name" 
    placeholder="Enter your name" 
    required 
  />
  
  <Textarea 
    label="Message" 
    name="message" 
    placeholder="Enter your message" 
    rows={5} 
  />
  
  <Select 
    label="Service" 
    name="service" 
    options={[
      { value: 'web', label: 'Web Development' },
      { value: 'mobile', label: 'Mobile App Development' }
    ]} 
  />
  
  <Checkbox 
    label="I agree to the terms and conditions" 
    name="terms" 
  />
</form>
```

## Section Components

### HeroSection

The main hero section for the homepage.

**Features:**
- Animated heading and description
- Call-to-action buttons
- Background gradient
- Responsive layout

### ServicesSection

Displays the company's services in a grid layout.

**Features:**
- Service cards with icons
- Hover effects
- Responsive grid layout

### AboutSection

Displays information about the company.

**Features:**
- Company description
- Key features or values
- Image placeholder

### TestimonialsSection

Displays client testimonials.

**Props:**
- `testimonials`: Array of testimonial objects (optional, uses default testimonials if not provided)

**Features:**
- Testimonial cards with client information
- Quote icon
- Responsive grid layout

### CTASection

Call-to-action section for encouraging user engagement.

**Props:**
- `title`: string (optional)
- `description`: string (optional)
- `buttonText`: string (optional)
- `buttonLink`: string (optional)

**Features:**
- Heading and description
- Call-to-action button
- Background color
- Animations

## Using Animation

The website uses Framer Motion for animations. Here's how to add animations to your components:

```tsx
import { motion } from 'framer-motion';

// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content to animate
</motion.div>

// Animation on scroll (viewport)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content to animate when scrolled into view
</motion.div>
```

## Customizing Components

All components are designed to be customizable through props. For deeper customization, you can modify the component files directly. The styling is primarily done with Tailwind CSS classes, making it easy to adjust the appearance.

For example, to change the primary color of buttons, update the `primary` color values in the `tailwind.config.js` file.
