'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCogs, FaChartLine, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Custom Business Solutions | Intention Infoservice',
  description: 'Tailored software solutions designed to address your unique business challenges and drive growth.',
};

export default function CustomBusinessSolutionsPage() {
  return (
    <MainLayout
      title="Custom Business Solutions | Intention Infoservice"
      description="Tailored software solutions designed to address your unique business challenges and drive growth."
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
              Custom Business Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tailored software solutions designed to address your unique business challenges and drive growth.
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
                    <span className="text-sm">Custom Solutions Image</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Custom Business Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Off-the-shelf software often falls short of addressing your unique business needs. Our custom solutions are designed specifically for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <FaCogs className="text-primary-500" size={24} />,
              title: 'Tailored to Your Needs',
              description: 'Custom solutions designed specifically to address your unique business challenges and workflows.'
            },
            {
              icon: <FaChartLine className="text-primary-500" size={24} />,
              title: 'Scalable & Future-Proof',
              description: 'Solutions that grow with your business and adapt to changing requirements over time.'
            },
            {
              icon: <FaShieldAlt className="text-primary-500" size={24} />,
              title: 'Enhanced Security',
              description: 'Robust security measures tailored to your industry requirements and data protection needs.'
            },
            {
              icon: <FaUserFriends className="text-primary-500" size={24} />,
              title: 'Improved Efficiency',
              description: 'Streamlined processes and automation that save time, reduce errors, and boost productivity.'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-primary-50 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Services Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Custom Business Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We develop a wide range of custom solutions to address various business needs and challenges.
          </p>
        </div>
        
        <div className="space-y-8">
          {[
            {
              title: 'Enterprise Resource Planning (ERP)',
              description: 'Integrated systems that manage your core business processes, from inventory and order management to accounting and human resources.',
              items: [
                'Inventory management',
                'Order processing',
                'Financial management',
                'Human resources',
                'Supply chain management',
                'Reporting and analytics'
              ]
            },
            {
              title: 'Customer Relationship Management (CRM)',
              description: 'Custom CRM solutions to manage customer interactions, sales pipelines, and marketing campaigns.',
              items: [
                'Contact management',
                'Sales automation',
                'Marketing automation',
                'Customer service',
                'Analytics and reporting',
                'Integration with other systems'
              ]
            },
            {
              title: 'E-commerce Solutions',
              description: 'Custom e-commerce platforms tailored to your specific business model and customer experience requirements.',
              items: [
                'Product catalog management',
                'Shopping cart functionality',
                'Payment gateway integration',
                'Order management',
                'Customer accounts',
                'Analytics and reporting'
              ]
            },
            {
              title: 'Business Process Automation',
              description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.',
              items: [
                'Workflow automation',
                'Document management',
                'Approval processes',
                'Data entry automation',
                'Reporting automation',
                'Integration with existing systems'
              ]
            }
          ].map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {solution.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure your custom solution meets your business needs and is delivered on time.
          </p>
        </div>
        
        <div className="relative">
          {/* Process line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-primary-100 md:transform md:-translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {[
              {
                number: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your business processes, challenges, and requirements to understand your needs.'
              },
              {
                number: '02',
                title: 'Solution Design',
                description: 'We design a custom solution architecture that addresses your specific business needs.'
              },
              {
                number: '03',
                title: 'Development',
                description: 'Our developers build your custom solution using the latest technologies and best practices.'
              },
              {
                number: '04',
                title: 'Testing & Quality Assurance',
                description: 'We rigorously test your solution to ensure it meets all requirements and quality standards.'
              },
              {
                number: '05',
                title: 'Deployment',
                description: 'We deploy your solution to your preferred environment and ensure everything is working properly.'
              },
              {
                number: '06',
                title: 'Support & Maintenance',
                description: 'We provide ongoing support and maintenance to ensure your solution continues to perform optimally.'
              }
            ].map((step, index) => (
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
                    <div className="bg-white rounded-lg shadow-lg p-6 ml-12 md:ml-0">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
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
            We leverage the latest technologies and frameworks to build robust, scalable custom solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Node.js', 'Python', 'PHP', 'Laravel', 'Django', 'MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Azure', 'Docker'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-24"
            >
              <span className="font-bold text-lg">{tech}</span>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our custom business solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'How long does it take to develop a custom business solution?',
              answer: 'The timeline for developing a custom business solution varies depending on the complexity and scope of the project. A simple solution might take 2-3 months, while a complex enterprise system could take 6-12 months. We provide a detailed timeline during the planning phase.'
            },
            {
              question: 'How much does a custom business solution cost?',
              answer: 'The cost depends on various factors including complexity, features, integration requirements, and timeline. We offer customized quotes based on your specific requirements and budget constraints.'
            },
            {
              question: 'Will I own the source code of my custom solution?',
              answer: 'Yes, you will own the source code of your custom solution. We believe in transparent development and providing our clients with full ownership of their custom software.'
            },
            {
              question: 'Do you provide training for users of the custom solution?',
              answer: 'Yes, we provide comprehensive training for your team to ensure they can effectively use the custom solution. We also provide detailed documentation and ongoing support to address any questions or issues that may arise.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your custom business solution needs and get a free consultation.
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
