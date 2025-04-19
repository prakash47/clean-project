'use client';
import { FaCode, FaMobileAlt, FaCog, FaPaintBrush, FaChartLine, FaTools } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Grid from '@/components/ui/Grid';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaCode size={24} className="text-primary-500" />,
    title: 'Web Design & Development',
    description: 'Custom websites that are responsive, fast, and optimized for search engines to help your business stand out.',
    link: '/services/web-design-development'
  },
  {
    icon: <FaMobileAlt size={24} className="text-primary-500" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    link: '/services/mobile-app-development'
  },
  {
    icon: <FaCog size={24} className="text-primary-500" />,
    title: 'Website Maintenance',
    description: 'Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance services.',
    link: '/services/website-maintenance'
  },
  {
    icon: <FaPaintBrush size={24} className="text-primary-500" />,
    title: 'UI/UX Design & Branding',
    description: 'User-centered design that enhances usability and creates memorable brand experiences for your customers.',
    link: '/services/ui-ux-design'
  },
  {
    icon: <FaChartLine size={24} className="text-primary-500" />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to increase your online visibility and drive qualified traffic to your website.',
    link: '/services/digital-marketing'
  },
  {
    icon: <FaTools size={24} className="text-primary-500" />,
    title: 'Custom Business Solutions',
    description: 'Tailored software solutions designed to streamline your business processes and improve operational efficiency.',
    link: '/services/custom-business-solutions'
  }
];

export default function ServicesSection() {
  return (
    <Section background="light" paddingY="lg" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive range of digital services to help your business thrive in the online world.
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
                  variant="text" 
                  className="mt-auto self-start"
                  icon={<span className="ml-1">→</span>}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </Grid>
      
      <div className="text-center mt-12">
        <Button size="lg" variant="primary">View All Services</Button>
      </div>
    </Section>
  );
}