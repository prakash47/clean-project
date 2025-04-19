'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Website Maintenance | Intention Infoservice',
  description: 'Professional website maintenance services to keep your website secure, up-to-date, and performing at its best.',
};

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Regular updates and security monitoring protect your website from vulnerabilities and threats.'
  },
  {
    title: 'Improved Performance',
    description: 'Optimization and monitoring ensure your website loads quickly and functions smoothly for all users.'
  },
  {
    title: 'Reduced Downtime',
    description: 'Proactive maintenance prevents issues that could cause your website to go offline or malfunction.'
  },
  {
    title: 'Peace of Mind',
    description: 'With experts handling your website maintenance, you can focus on running your business without technical worries.'
  }
];

const services = [
  {
    title: 'Regular Updates & Monitoring',
    description: 'Keeping your website software, plugins, and content management system up-to-date and secure.',
    items: [
      'CMS updates',
      'Plugin updates',
      'Security patches',
      'Compatibility testing',
      'Performance monitoring',
      'Uptime monitoring'
    ]
  },
  {
    title: 'Security Management',
    description: 'Protecting your website from threats and vulnerabilities with comprehensive security measures.',
    items: [
      'Malware scanning',
      'Firewall configuration',
      'Security audits',
      'SSL certificate management',
      'User access control',
      'Backup management'
    ]
  },
  {
    title: 'Performance Optimization',
    description: 'Ensuring your website loads quickly and functions smoothly for all users.',
    items: [
      'Speed optimization',
      'Image optimization',
      'Code minification',
      'Database optimization',
      'Caching configuration',
      'Resource compression'
    ]
  },
  {
    title: 'Content Updates & Support',
    description: 'Helping you keep your website content fresh, relevant, and error-free.',
    items: [
      'Content updates',
      'Image editing',
      'Form management',
      'Technical support',
      'Training and guidance',
      'Monthly reports'
    ]
  }
];

const plans = [
  {
    title: 'Basic',
    price: '$99',
    period: 'per month',
    description: 'Essential maintenance for small websites',
    features: [
      'Monthly updates',
      'Security monitoring',
      'Weekly backups',
      'Basic performance optimization',
      'Email support',
      'Monthly report'
    ],
    isPopular: false
  },
  {
    title: 'Professional',
    price: '$199',
    period: 'per month',
    description: 'Comprehensive maintenance for business websites',
    features: [
      'Bi-weekly updates',
      'Advanced security monitoring',
      'Daily backups',
      'Performance optimization',
      'Content updates (1 hour/month)',
      'Priority email & phone support',
      'Detailed monthly report'
    ],
    isPopular: true
  },
  {
    title: 'Enterprise',
    price: '$349',
    period: 'per month',
    description: 'Premium maintenance for complex websites',
    features: [
      'Weekly updates',
      'Real-time security monitoring',
      'Daily backups with 30-day retention',
      'Advanced performance optimization',
      'Content updates (3 hours/month)',
      '24/7 priority support',
      'Comprehensive monthly report',
      'Quarterly strategy consultation'
    ],
    isPopular: false
  }
];

export default function WebsiteMaintenancePage() {
  return (
    <MainLayout
      title="Website Maintenance | Intention Infoservice"
      description="Professional website maintenance services to keep your website secure, up-to-date, and performing at its best."
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
              Website Maintenance
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional website maintenance services to keep your website secure, up-to-date, and performing at its best.
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
                    <span className="text-sm">Website Maintenance Image</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Website Maintenance Matters</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A website is an investment that requires ongoing care to maintain its value and effectiveness.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Website Maintenance Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive maintenance services to keep your website secure, up-to-date, and performing at its best.
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
      
      {/* Pricing Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the maintenance plan that best fits your website needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card 
                variant={plan.isPopular ? "elevated" : "bordered"} 
                padding="lg"
                className={`flex flex-col h-full w-full ${plan.isPopular ? 'border-2 border-primary-500 relative' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.isPopular ? "primary" : "outline"} 
                  fullWidth
                >
                  Choose Plan
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8 text-gray-600">
          <p>Need a custom maintenance plan? <a href="#" className="text-primary-600 font-medium">Contact us</a> for a tailored solution.</p>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our website maintenance services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'How often should my website be updated?',
              answer: 'Websites should be updated regularly to ensure security, functionality, and performance. At a minimum, your content management system, plugins, and themes should be updated monthly. However, security updates should be applied as soon as they become available.'
            },
            {
              question: 'What happens if my website goes down?',
              answer: 'Our maintenance plans include uptime monitoring that alerts us if your website goes down. Depending on your plan, we&apos;ll respond within the specified timeframe to diagnose and fix the issue. We also maintain regular backups so your site can be restored quickly if needed.'
            },
            {
              question: 'Can you maintain websites not built by you?',
              answer: 'Yes, we can maintain websites built by other developers or agencies. We&apos;ll conduct an initial audit to understand your website&apos;s structure, technologies, and any existing issues before starting maintenance services.'
            },
            {
              question: 'Do you offer emergency support?',
              answer: 'Yes, our Professional and Enterprise plans include priority support for urgent issues. Enterprise clients receive 24/7 emergency support for critical problems like website downtime or security breaches.'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Keep Your Website in Top Shape?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your website maintenance needs and get a free quote.
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
