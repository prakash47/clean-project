'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaTools, FaPaintBrush, FaChartLine, FaCogs } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Services | Intention Infoservice',
  description: 'Explore our comprehensive range of web design, development, mobile app, UI/UX, digital marketing, and custom business solutions.',
};

const services = [
  {
    icon: <FaLaptopCode className="text-primary-500" size={32} />,
    title: 'Web Design & Development',
    description: 'Custom websites designed to convert visitors into customers, built with the latest technologies for optimal performance.',
    link: '/services/web-design-development'
  },
  {
    icon: <FaMobileAlt className="text-primary-500" size={32} />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    link: '/services/mobile-app-development'
  },
  {
    icon: <FaTools className="text-primary-500" size={32} />,
    title: 'Website Maintenance',
    description: 'Comprehensive maintenance services to keep your website secure, up-to-date, and performing at its best.',
    link: '/services/website-maintenance'
  },
  {
    icon: <FaPaintBrush className="text-primary-500" size={32} />,
    title: 'UI/UX Design & Branding',
    description: 'User-centered design that enhances user experience, strengthens your brand, and drives engagement.',
    link: '/services/ui-ux-design'
  },
  {
    icon: <FaChartLine className="text-primary-500" size={32} />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to increase your online visibility and drive qualified traffic to your website.',
    link: '/services/digital-marketing'
  },
  {
    icon: <FaCogs className="text-primary-500" size={32} />,
    title: 'Custom Business Solutions',
    description: 'Tailored software solutions designed to address your unique business challenges and drive growth.',
    link: '/services/custom-business-solutions'
  }
];

export default function ServicesPage() {
  return (
    <MainLayout
      title="Services | Intention Infoservice"
      description="Explore our comprehensive range of web design, development, mobile app, UI/UX, digital marketing, and custom business solutions."
    >
      {/* Hero Section */}
      <Section background="gradient" paddingY="lg">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            className="text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We offer a comprehensive range of digital services to help your business thrive in the digital era.
          </motion.p>
        </div>
      </Section>
      
      {/* Services Section */}
      <Section background="white" paddingY="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg" className="h-full flex flex-col">
                <div className="mb-6 p-4 bg-primary-50 rounded-full w-fit">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Button 
                  variant="outline" 
                  href={service.link}
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure your project is delivered on time, within budget, and to your specifications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Process line */}
            <div className="absolute left-[21px] top-0 bottom-0 w-1 bg-primary-100 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  number: '01',
                  title: 'Discovery & Planning',
                  description: 'We begin by understanding your business, goals, target audience, and project requirements to develop a strategic plan.'
                },
                {
                  number: '02',
                  title: 'Design & Prototyping',
                  description: 'We create wireframes and visual designs that align with your brand and engage your audience, refining based on your feedback.'
                },
                {
                  number: '03',
                  title: 'Development',
                  description: 'Our developers build your solution using the latest technologies and best practices, with regular updates and milestone reviews.'
                },
                {
                  number: '04',
                  title: 'Testing & Quality Assurance',
                  description: 'We rigorously test across devices and browsers to ensure a flawless user experience and optimal performance.'
                },
                {
                  number: '05',
                  title: 'Launch & Support',
                  description: 'We deploy your solution and provide training and support to ensure a smooth transition and ongoing success.'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                      {step.number.split('').pop()}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Technologies Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build high-performance, scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Next.js', 'Node.js', 'WordPress', 'Tailwind CSS', 'MongoDB', 'MySQL', 'AWS', 'Flutter', 'React Native', 'Laravel', 'Python'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card variant="bordered" padding="md" className="flex items-center justify-center h-24">
                <span className="font-bold text-lg">{tech}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your project and get a free consultation.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Get in Touch
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
}
