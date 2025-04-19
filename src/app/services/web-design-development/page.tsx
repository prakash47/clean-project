'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Web Design & Development | Intention Infoservice',
  description: 'Professional web design and development services to create stunning, responsive, and high-performing websites for your business.',
};

const benefits = [
  {
    title: 'Increased Online Visibility',
    description: 'A professionally designed website helps your business get discovered by potential customers online.'
  },
  {
    title: 'Enhanced Credibility',
    description: 'A well-designed website builds trust and establishes your business as a credible authority in your industry.'
  },
  {
    title: 'Improved User Experience',
    description: 'Intuitive navigation and responsive design ensure visitors have a positive experience on your website.'
  },
  {
    title: 'Higher Conversion Rates',
    description: 'Strategic design elements and clear calls-to-action guide visitors toward becoming customers.'
  }
];

const services = [
  {
    title: 'Website Design',
    description: 'Custom website designs that reflect your brand identity and engage your target audience.',
    items: [
      'Responsive design',
      'User experience (UX) design',
      'Visual design',
      'Wireframing and prototyping',
      'Brand integration',
      'Mobile optimization'
    ]
  },
  {
    title: 'Website Development',
    description: 'Custom website development using the latest technologies and best practices.',
    items: [
      'Front-end development',
      'Back-end development',
      'Content management systems',
      'E-commerce development',
      'API integration',
      'Database design'
    ]
  },
  {
    title: 'E-commerce Solutions',
    description: 'Custom e-commerce websites that drive sales and provide a seamless shopping experience.',
    items: [
      'E-commerce platform development',
      'Payment gateway integration',
      'Product catalog management',
      'Shopping cart functionality',
      'Order management systems',
      'Customer account portals'
    ]
  },
  {
    title: 'Website Optimization',
    description: 'Optimization services to ensure your website performs at its best.',
    items: [
      'Performance optimization',
      'Search engine optimization (SEO)',
      'Conversion rate optimization',
      'Mobile optimization',
      'Accessibility compliance',
      'Security enhancements'
    ]
  }
];

const process = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your business goals, target audience, and competition to develop a strategic website plan.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our designers create wireframes and visual designs that align with your brand and engage your audience.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our developers build your website using the latest technologies and best practices for optimal performance.'
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description: 'We rigorously test your website across devices and browsers to ensure a flawless user experience.'
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We deploy your website to your hosting environment and ensure everything is working properly.'
  },
  {
    number: '06',
    title: 'Maintenance & Support',
    description: 'We provide ongoing maintenance and support to keep your website secure, up-to-date, and performing optimally.'
  }
];

export default function WebDesignDevelopmentPage() {
  return (
    <MainLayout
      title="Web Design & Development | Intention Infoservice"
      description="Professional web design and development services to create stunning, responsive, and high-performing websites for your business."
    >
      {/* Hero Section */}
      <Section background="gradient" paddingY="lg">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Web Design & Development
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional web design and development services to create stunning, responsive, and high-performing websites for your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Get a Free Quote
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600 rounded-lg opacity-20 blur-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Web Design Image</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Business Needs a Professional Website</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In today&apos;s digital world, your website is often the first interaction potential customers have with your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Services Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Web Design & Development Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web design and development services tailored to your specific business needs.
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Web Development Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure your website is delivered on time, within budget, and to your specifications.
          </p>
        </div>
        
        <div className="relative">
          {/* Process line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-primary-100 md:transform md:-translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white font-bold">
                      {step.number.split('').pop()}
                    </div>
                    <Card variant="elevated" padding="lg" className="ml-12 md:ml-0">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </Card>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Technologies Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build high-performance, scalable websites.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Next.js', 'Node.js', 'WordPress', 'Tailwind CSS', 'MongoDB', 'MySQL', 'AWS'].map((tech, index) => (
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
      
      {/* FAQ Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our web design and development services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'How long does it take to build a website?',
              answer: 'The timeline for website development varies depending on complexity, features, and content requirements. A simple website might take 4-6 weeks, while a complex e-commerce site could take 3-4 months. We&apos;ll provide a detailed timeline during the planning phase.'
            },
            {
              question: 'How much does a website cost?',
              answer: 'The cost depends on various factors including complexity, features, design requirements, and content needs. We offer customized quotes based on your specific requirements and budget constraints.'
            },
            {
              question: 'Will my website be mobile-friendly?',
              answer: 'Absolutely! All our websites are built with responsive design, ensuring they look and function perfectly on all devices, from desktop computers to smartphones and tablets.'
            },
            {
              question: 'Do you provide website maintenance services?',
              answer: 'Yes, we offer ongoing maintenance services to keep your website secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, and technical support.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your web design and development project and get a free quote.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Get Started
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
}
