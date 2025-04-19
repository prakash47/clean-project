'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'UI/UX Design | Intention Infoservice',
  description: 'Professional UI/UX design services to create intuitive, engaging, and user-friendly digital experiences for your business.',
};

const benefits = [
  {
    title: 'Enhanced User Experience',
    description: 'Intuitive interfaces that make it easy for users to achieve their goals and enjoy using your product.'
  },
  {
    title: 'Increased Conversion Rates',
    description: 'Well-designed interfaces guide users through the conversion funnel, increasing your conversion rates.'
  },
  {
    title: 'Stronger Brand Identity',
    description: 'Consistent design elements reinforce your brand identity and make your product instantly recognizable.'
  },
  {
    title: 'Reduced Development Costs',
    description: 'Addressing usability issues during the design phase saves time and resources during development.'
  }
];

const services = [
  {
    title: 'User Interface (UI) Design',
    description: 'Creating visually appealing interfaces that align with your brand and enhance user experience.',
    items: [
      'Visual design',
      'Responsive design',
      'Design systems',
      'Interactive prototypes',
      'Icon and illustration design',
      'Micro-interactions'
    ]
  },
  {
    title: 'User Experience (UX) Design',
    description: 'Designing intuitive user journeys that make your product easy and enjoyable to use.',
    items: [
      'User research',
      'Information architecture',
      'Wireframing',
      'User flows',
      'Usability testing',
      'Interaction design'
    ]
  },
  {
    title: 'Brand Identity Design',
    description: 'Developing a cohesive visual identity that communicates your brand&apos;s values and resonates with your audience.',
    items: [
      'Logo design',
      'Color palette',
      'Typography',
      'Brand guidelines',
      'Marketing materials',
      'Social media assets'
    ]
  },
  {
    title: 'Design System Development',
    description: 'Creating comprehensive design systems that ensure consistency across all your digital products.',
    items: [
      'Component libraries',
      'Style guides',
      'Design tokens',
      'Documentation',
      'Implementation guidelines',
      'Maintenance and updates'
    ]
  }
];

const process = [
  {
    number: '01',
    title: 'Research & Discovery',
    description: 'We analyze your business, users, and competition to understand the context and requirements.'
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'We develop a design strategy that aligns with your business goals and user needs.'
  },
  {
    number: '03',
    title: 'Wireframing & Prototyping',
    description: 'We create wireframes and interactive prototypes to visualize the structure and functionality.'
  },
  {
    number: '04',
    title: 'Visual Design',
    description: 'We develop the visual elements of your interface, including colors, typography, and imagery.'
  },
  {
    number: '05',
    title: 'Testing & Iteration',
    description: 'We test the design with real users and iterate based on feedback to ensure optimal usability.'
  },
  {
    number: '06',
    title: 'Implementation Support',
    description: 'We work closely with developers to ensure the design is implemented accurately and effectively.'
  }
];

export default function UIUXDesignPage() {
  return (
    <MainLayout
      title="UI/UX Design | Intention Infoservice"
      description="Professional UI/UX design services to create intuitive, engaging, and user-friendly digital experiences for your business."
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
              UI/UX Design & Branding
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional UI/UX design services to create intuitive, engaging, and user-friendly digital experiences for your business.
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
                Get a Free Consultation
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
                    <span className="text-sm">UI/UX Design Image</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Invest in UI/UX Design</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Good design is not just about aesthetics—it&apos;s about creating meaningful experiences that drive business results.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our UI/UX Design Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive design services to help you create exceptional digital experiences.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Design Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure your design project is delivered on time and exceeds expectations.
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
      
      {/* Tools Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Tools We Use</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage industry-leading design tools to create exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'Photoshop', 'InVision', 'Principle', 'Zeplin'].map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card variant="bordered" padding="md" className="flex items-center justify-center h-24">
                <span className="font-bold text-lg">{tool}</span>
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
            Find answers to common questions about our UI/UX design services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'What is the difference between UI and UX design?',
              answer: 'UI (User Interface) design focuses on the visual elements of a digital product, including layout, colors, typography, and interactive elements. UX (User Experience) design focuses on the overall experience, including how users interact with the product, the flow between pages, and how intuitive the product is to use.'
            },
            {
              question: 'How long does a typical design project take?',
              answer: 'The timeline varies depending on the scope and complexity of the project. A simple website redesign might take 2-4 weeks, while a complex application with extensive user research could take 2-3 months. We&apos;ll provide a detailed timeline during the planning phase.'
            },
            {
              question: 'Do you provide design implementation services?',
              answer: 'Yes, we offer design implementation services through our web development team. We can take your approved designs and turn them into fully functional websites or applications. We also provide support to your development team if you prefer to handle implementation internally.'
            },
            {
              question: 'How do you ensure the design meets user needs?',
              answer: 'We incorporate user research and testing throughout our design process. This includes user interviews, usability testing, and iterative design based on feedback. Our goal is to create designs that not only look great but also effectively meet the needs of your users.'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your UI/UX design project and get a free consultation.
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
