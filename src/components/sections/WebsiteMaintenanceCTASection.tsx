'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export default function WebsiteMaintenanceCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', projectDetails: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectDetails: '' });
      setTimeout(() => setSubmitted(false), 3000);
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="bg-gradient-to-b from-dark-950 to-dark-800 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_70%)] opacity-30 pointer-events-none" />
      <div className="w-full px-[10%] relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Keep Your Website Running at Its Best!
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let us handle your website maintenance so you can focus on growing your business.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Contact us today for a free quote and discover how our website maintenance services can protect and enhance your online presence. From security to SEO, we’ve got you covered.
          </motion.p>
        </div>
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              className="text-center text-teal-500 text-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! We’ll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-teal-500"
                >
                  Name
                </label>
                {errors.name && <p className="text-teal-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-teal-500"
                >
                  Email
                </label>
                {errors.email && <p className="text-teal-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-teal-500"
                >
                  Phone (Optional)
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-dark-950 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:outline-none peer"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="projectDetails"
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-teal-500"
                >
                  Project Details
                </label>
                {errors.projectDetails && <p className="text-teal-500 text-sm mt-1">{errors.projectDetails}</p>}
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
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  Get a Free Quote Now
                </Button>
              </motion.div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}