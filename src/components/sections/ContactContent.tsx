'use client';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function ContactContent() {
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
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We’re here to help you transform your digital vision into reality. Reach out to discuss your project or learn more about our services.
          </motion.p>
        </div>
      </Section>
      <Section background="white" paddingY="lg">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Send Us a Message
            </motion.h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                  className="text-white font-semibold uppercase tracking-wide"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </div>
          <div className="lg:w-1/2">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact Information
            </motion.h2>
            <div className="space-y-6 text-lg text-gray-600">
              <div className="flex items-start">
                <FaEnvelope className="text-primary-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>
                    <a href="mailto:info@intentioninfoservice.com">
                      info@intentioninfoservice.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-primary-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>123 Digital Avenue, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="secondary"
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
                href="/services"
                className="text-white font-semibold uppercase tracking-wide"
              >
                Explore Our Services
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}