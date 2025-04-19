import { Metadata } from 'next';
import PortfolioContent from '@/components/sections/PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfolio | Intention Infoservice',
  description:
    'Explore our portfolio of successful web design, mobile app development, and digital marketing projects at Intention Infoservice.',
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}