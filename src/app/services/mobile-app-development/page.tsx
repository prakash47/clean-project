'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Mobile App Development | Intention Infoservice',
  description: 'Custom mobile app development services for iOS and Android platforms to help your business reach customers on their preferred devices.',
};

const benefits = [
  {
    title: 'Increased Customer Engagement',
    description: 'Mobile apps provide a direct channel to engage with your customers and build stronger relationships.'
  },
  {
    title: 'Enhanced Brand Presence',
    description: 'A well-designed mobile app strengthens your brand identity and increases visibility in the digital marketplace.'
  },
  {
    title: 'Improved Customer Experience',
    description: 'Mobile apps offer a seamless and personalized experience that keeps users coming back.'
  },
  {
    title: 'New Revenue Streams',
    description: 'Mobile apps can open up new revenue opportunities through in-app purchases, subscriptions, and more.'
  }
];

const services = [
  {
    title: 'Native App Development',
    description: 'Platform-specific apps built for iOS and Android that deliver optimal performance and user experience.',
    items: [
      'iOS app development (Swift, Objective-C)',
      'Android app development (Kotlin, Java)',
      'Platform-specific UI/UX design',
      'Hardware integration',
      'App Store and Google Play submission'
    ]
  },
  {
    title: 'Cross-Platform Development',
    description: 'Cost-effective solutions that work across multiple platforms while maintaining a native-like experience.',
    items: [
      'React Native development',
      'Flutter development',
      'Shared codebase across platforms',
      'Performance optimization',
      'Platform-specific adaptations'
    ]
  },
  {
    title: 'Progressive Web Apps (PWAs)',
    description: 'Web applications that offer a mobile app-like experience with the accessibility of a website.',
    items: [
      'Responsive design',
      'Offline functionality',
      'Push notifications',
      'Home screen installation',
      'Fast loading times'
    ]
  },
  {
    title: 'App Maintenance & Support',
    description: 'Ongoing support and updates to ensure your app remains secure, compatible, and up-to-date.',
    items: [
      'Bug fixes and updates',
      'Performance monitoring',
      'OS compatibility updates',
      'Security patches',
      'Feature enhancements'
    ]
  }
];

const process = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your business needs, target audience, and competition to develop a strategic app concept.'
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Our designers create intuitive, engaging interfaces that align with your brand and enhance user experience.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our developers build your app using the latest technologies and best practices for optimal performance.'
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description: 'We rigorously test your app across devices and scenarios to ensure a flawless user experience.'
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'We handle the submission process to app stores and ensure your app meets all requirements for approval.'
  },
  {
    number: '06',
    title: 'Maintenance & Updates',
    description: 'We provide ongoing support and updates to keep your app running smoothly and up-to-date.'
  }
];

export default function MobileAppDevelopmentPage() {
  return (
    <MainLayout
      title="Mobile App Development | Intention Infoservice"
      description="Custom mobile app development services for iOS and Android platforms to help your business reach customers on their preferred devices."
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
              Mobile App Development
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Custom mobile app development services for iOS and Android platforms to help your business reach customers on their preferred devices.
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
                    <span className="text-sm">Mobile App Development Image</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Business Needs a Mobile App</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In today&apos;s mobile-first world, having a well-designed app can give your business a significant competitive advantage.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mobile App Development Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive mobile app development services tailored to your specific business needs.
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
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure your mobile app is delivered on time, within budget, and to your specifications.
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
            We leverage the latest technologies and frameworks to build high-performance, scalable mobile applications.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS', 'Node.js', 'MongoDB'].map((tech, index) => (
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
            Find answers to common questions about our mobile app development services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'How long does it take to develop a mobile app?',
              answer: 'The timeline for mobile app development varies depending on complexity, features, and platforms. A simple app might take 2-3 months, while a complex app could take 6+ months. We&apos;ll provide a detailed timeline during the planning phase.'
            },
            {
              question: 'How much does it cost to develop a mobile app?',
              answer: 'The cost depends on various factors including complexity, features, platforms, and design requirements. We offer customized quotes based on your specific needs and budget constraints.'
            },
            {
              question: 'Do you develop for both iOS and Android?',
              answer: 'Yes, we develop native apps for both iOS and Android platforms. We also offer cross-platform development solutions using React Native or Flutter to reduce development time and costs.'
            },
            {
              question: 'What happens after my app is launched?',
              answer: 'We provide ongoing maintenance and support services to ensure your app continues to function optimally. This includes bug fixes, performance monitoring, compatibility updates, and feature enhancements.'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your mobile app project and get a free consultation.
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
