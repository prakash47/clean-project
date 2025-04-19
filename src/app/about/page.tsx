import { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Intention Infoservice',
  description: 'Learn about Intention Infoservice, our mission, values, and the team behind our web design, development, and digital marketing services.',
};

export default function AboutPage() {
  return <AboutContent />;
}