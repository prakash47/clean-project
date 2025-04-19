import { Metadata } from 'next';
import ServicesContent from '@/components/sections/ServicesContent';

export const metadata: Metadata = {
  title: 'Services | Intention Infoservice',
  description:
    'Explore our comprehensive range of services including web design, mobile app development, digital marketing, and more at Intention Infoservice.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}