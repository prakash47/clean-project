'use client';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { FaQuoteLeft } from 'react-icons/fa';

export interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'TechNova Solutions',
    content: 'Intention Infoservice transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their team was professional, responsive, and delivered beyond our expectations.',
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'GrowthWave Startups',
    content: 'Working with Intention Infoservice on our mobile app was a game-changer for our business. Their expertise in UI/UX design and development resulted in an app that our customers love to use.',
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'E-commerce Manager',
    company: 'StyleHub Boutique',
    content: 'The digital marketing strategy developed by Intention Infoservice increased our online sales by 45% in just three months. Their data-driven approach and creative campaigns have made a significant impact on our business.',
    image: '/images/testimonial-3.jpg'
  }
];

export default function TestimonialsSection({ testimonials = defaultTestimonials }: TestimonialsSectionProps) {
  return (
    <Section background="light" paddingY="lg">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="elevated" padding="lg" className="h-full">
              <div className="flex flex-col h-full">
                <FaQuoteLeft className="text-primary-200 text-4xl mb-4" />
                <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                    {/* Replace with actual image when available */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
