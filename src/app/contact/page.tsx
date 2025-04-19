'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Input, Textarea, Select } from '@/components/ui/FormElements';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us | Intention Infoservice',
  description: 'Get in touch with Intention Infoservice for web design, development, mobile apps, digital marketing, and custom business solutions.',
};

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-primary-500" size={24} />,
    title: 'Our Location',
    details: '123 Business Avenue, Tech Park, Digital City'
  },
  {
    icon: <FaPhone className="text-primary-500" size={24} />,
    title: 'Phone Number',
    details: '+1 (234) 567-890'
  },
  {
    icon: <FaEnvelope className="text-primary-500" size={24} />,
    title: 'Email Address',
    details: 'info@intentioninfoservice.com'
  },
  {
    icon: <FaClock className="text-primary-500" size={24} />,
    title: 'Business Hours',
    details: 'Monday - Friday: 9:00 AM - 6:00 PM'
  }
];

export default function ContactPage() {
  return (
    <MainLayout
      title="Contact Us | Intention Infoservice"
      description="Get in touch with Intention Infoservice for web design, development, mobile apps, digital marketing, and custom business solutions."
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
            Contact Us
          </motion.h1>
          
          <motion.p 
            className="text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have a question or ready to start your project? Get in touch with our team today.
          </motion.p>
        </div>
      </Section>
      
      {/* Contact Information Section */}
      <Section background="white" paddingY="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg" className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Contact Form Section */}
      <Section background="light" paddingY="lg">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="First Name" 
                  placeholder="Enter your first name" 
                  required 
                />
                <Input 
                  label="Last Name" 
                  placeholder="Enter your last name" 
                  required 
                />
              </div>
              
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="Enter your email address" 
                required 
              />
              
              <Input 
                label="Phone Number" 
                type="tel" 
                placeholder="Enter your phone number" 
              />
              
              <Select
                label="Service of Interest"
                options={[
                  { value: "", label: "Select a service" },
                  { value: "web-design", label: "Web Design & Development" },
                  { value: "mobile-app", label: "Mobile App Development" },
                  { value: "maintenance", label: "Website Maintenance" },
                  { value: "ui-ux", label: "UI/UX Design & Branding" },
                  { value: "digital-marketing", label: "Digital Marketing" },
                  { value: "custom-solutions", label: "Custom Business Solutions" },
                  { value: "other", label: "Other" }
                ]}
              />
              
              <Textarea 
                label="Message" 
                placeholder="Tell us about your project or inquiry" 
                rows={5} 
                required 
              />
              
              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="h-full">
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <p className="text-lg text-gray-600 mb-8">
                Visit our office or contact us through the provided information.
              </p>
              
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] mb-6">
                {/* Replace with actual map when available */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
                  <span className="text-lg">Google Map Embed</span>
                </div>
              </div>
              
              <Card variant="bordered" padding="lg">
                <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section background="white" paddingY="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to complete a website project?",
                answer: "The timeline for website projects varies depending on complexity and scope. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
              },
              {
                question: "What information do you need to get started?",
                answer: "To get started, we typically need information about your business, target audience, project goals, design preferences, and any existing brand assets. We'll guide you through this process with a detailed questionnaire and discovery session."
              },
              {
                question: "Do you offer website maintenance services?",
                answer: "Yes, we offer comprehensive website maintenance services to keep your website secure, up-to-date, and performing optimally. Our maintenance plans include regular updates, security monitoring, backups, and technical support."
              },
              {
                question: "How much does a typical project cost?",
                answer: "Project costs vary widely depending on requirements, complexity, and scope. We provide customized quotes based on your specific needs. Contact us for a free consultation and quote tailored to your project."
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
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your project and how we can help your business thrive in the digital world.
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
