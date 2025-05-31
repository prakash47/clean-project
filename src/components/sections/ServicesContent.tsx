'use client';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Grid from '@/components/ui/Grid';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  FaCode,
  FaMobileAlt,
  FaCog,
  FaPaintBrush,
  FaChartLine,
  FaTools,
  FaArrowRight,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={24} className="text-primary-500" />,
    title: 'Web Design & Development',
    description: 'Custom websites that are responsive, fast, and optimized for search engines to help your business stand out.',
    link: '/services/web-design-development',
  },
  {
    icon: <FaMobileAlt size={24} className="text-primary-500" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    link: '/services/mobile-app-development',
  },
  {
    icon: <FaCog size={24} className="text-primary-500" />,
    title: 'Website Maintenance',
    description: 'Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance services.',
    link: '/services/website-maintenance',
  },
  {
    icon: <FaPaintBrush size={24} className="text-primary-500" />,
    title: 'UI/UX Design & Branding',
    description: 'User-centered design that enhances usability and creates memorable brand experiences for your customers.',
    link: '/services/ui-ux-design',
  },
  {
    icon: <FaChartLine size={24} className="text-primary-500" />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to increase your online visibility and drive qualified traffic to your website.',
    link: '/services/digital-marketing',
  },
  {
    icon: <FaTools size={24} className="text-primary-500" />,
    title: 'Custom Business Solutions',
    description: 'Tailored software solutions designed to streamline your business processes and improve operational efficiency.',
    link: '/services/custom-business-solutions',
  },
];

export default function ServicesContent() {
  return (
    <MainLayout>
      <Section background="gradient" paddingY="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary-300 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our comprehensive range of digital solutions designed to help your business thrive in the online world.
          </motion.p>
        </div>
      </Section>
      <Section background="light" paddingY="lg" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From web design to digital marketing, our services are tailored to meet your unique business needs.
          </p>
        </div>
        <Grid cols={3} gap="lg">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" hoverEffect className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button
                    className="btn btn-text mt-auto self-start"
                    icon={<span className="ml-1">→</span>}
                    iconPosition="right"
                    href={service.link}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
        <div className="text-center mt-12">
          <Button size="lg" className="btn btn-primary">Get a Quote</Button>
        </div>
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
            Ready to Elevate Your Business?
          </motion.h2>
          <motion.p
            className="text-lg opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact us today to discuss how our services can help you achieve your digital goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
            className="btn btn-secondary"
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