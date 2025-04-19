'use client';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Grid from '@/components/ui/Grid';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A fully responsive e-commerce website with advanced search, payment integration, and user-friendly design.',
    image: '/images/portfolio-1.jpg',
    link: '/portfolio/e-commerce',
  },
  {
    title: 'Mobile Banking App',
    description:
      'A secure and intuitive mobile app for banking services, featuring account management and transaction tracking.',
    image: '/images/portfolio-2.jpg',
    link: '/portfolio/banking-app',
  },
  {
    title: 'Corporate Website',
    description:
      'A modern corporate website with seamless navigation and integrated CMS for easy content updates.',
    image: '/images/portfolio-3.jpg',
    link: '/portfolio/corporate',
  },
  {
    title: 'Fitness Tracking App',
    description:
      'A cross-platform fitness app with real-time activity tracking, personalized plans, and social sharing.',
    image: '/images/portfolio-4.jpg',
    link: '/portfolio/fitness-app',
  },
];

export default function PortfolioContent() {
  return (
    <MainLayout>
      <Section background="gradient" paddingY="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary-300 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our collection of successful projects showcasing our expertise in web design, mobile apps, and digital marketing.
          </motion.p>
        </div>
      </Section>
      <Section background="white" paddingY="lg" id="portfolio">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we’ve helped businesses achieve their digital goals with innovative solutions.
          </p>
        </div>
        <Grid cols={2} gap="lg">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" hoverEffect className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                    {/* Replace with actual image when available */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                      <span className="text-sm">Project Image</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                  <Button
                    variant="text"
                    className="mt-auto self-start"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                    href={project.link}
                  >
                    View Project
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Section>
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-lg opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact us today to discuss how we can bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="secondary"
              size="lg"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </Section>
    </MainLayout>
  );
}