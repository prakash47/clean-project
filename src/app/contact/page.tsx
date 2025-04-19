import { Metadata } from 'next';
import ContactContent from '@/components/sections/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Intention Infoservice',
  description:
    'Get in touch with Intention Infoservice to discuss your web design, mobile app development, digital marketing, or other digital needs.',
};

export default function ContactPage() {
  return <ContactContent />;
}