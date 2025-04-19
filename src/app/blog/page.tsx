import { Metadata } from 'next';
import BlogContent from '@/components/sections/BlogContent';

export const metadata: Metadata = {
  title: 'Blog | Intention Infoservice',
  description:
    'Read the latest insights, tips, and trends in web design, mobile app development, and digital marketing from Intention Infoservice.',
};

export default function BlogPage() {
  return <BlogContent />;
}