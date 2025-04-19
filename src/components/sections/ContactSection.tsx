'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

// Country codes with flags (Unicode emojis) and validation rules
const countryCodes = [
  { code: '+1', name: 'United States', flag: '🇺🇸', maxLength: 10, pattern: /^\d{10}$/ },
  { code: '+91', name: 'India', flag: '🇮🇳', maxLength: 10, pattern: /^\d{10}$/ },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧', maxLength: 11, pattern: /^\d{10,11}$/ },
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫', maxLength: 9, pattern: /^\d{9}$/ },
  { code: '+355', name: 'Albania', flag: '🇦🇱', maxLength: 9, pattern: /^\d{9}$/ },
  { code: '+213', name: 'Algeria', flag: '🇩🇿', maxLength: 9, pattern: /^\d{9}$/ },
  { code: '+376', name: 'Andorra', flag: '🇦🇩', maxLength: 9, pattern: /^\d{6,9}$/ },
  { code: '+244', name: 'Angola', flag: '🇦🇴', maxLength: 9, pattern: /^\d{9}$/ },
  // Add more countries as needed
];

const servicesOptions = [
  'Web Design & Development',
  'Mobile App Development',
  'Website Maintenance',
  'UI/UX Design & Branding',
  'Digital Marketing',
  'Custom Business Solutions',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [],
    phoneCode: '+1',
    phoneNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    services: '',
    phoneNumber: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
    setErrors((prev) => ({ ...prev, services: '' }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', services: '', phoneNumber: '', message: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
      valid = false;
    }
    const selectedCountry = countryCodes.find((country) => country.code === formData.phoneCode);
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    } else if (selectedCountry && !selectedCountry.pattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = `Phone number must be ${selectedCountry.maxLength} digits for ${selectedCountry.name}`;
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', services: [], phoneCode: '+1', phoneNumber: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
      console.log('Form submitted:', formData);
    }
  };

  const selectedCountry = countryCodes.find((country) => country.code === formData.phoneCode) || countryCodes[0];

  return (
    <section className="bg-dark-950 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let’s Collaborate
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Reach out to start your project or learn more about our services.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Form */}
          <div className="lg:col-span-2 bg-dark-900 p-8 rounded-xl border border-gradient-to-r from-dark-1000 via-teal-500/20 to-dark-1000">
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
                  <div
                    className="w-full bg-dark-950 border border-gray-600 rounded-md py-3 px-4 cursor-pointer"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span className={formData.services.length === 0 ? 'text-gray-500' : 'text-white'}>
                      {formData.services.length === 0 ? 'Select Services' : formData.services.join(', ')}
                    </span>
                  </div>
                  {isServicesOpen && (
                    <div className="absolute z-10 w-full bg-dark-900 border border-gray-600 rounded-md mt-1 max-h-48 overflow-y-auto">
                      {servicesOptions.map((service) => (
                        <label key={service} className="flex items-center px-4 py-2 hover:bg-dark-950 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="mr-2 accent-teal-500"
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  )}
                  {errors.services && <p className="text-teal-500 text-sm mt-1">{errors.services}</p>}
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <select
                      id="phoneCode"
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="bg-dark-950 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white py-3 px-4 rounded-md focus:outline-none appearance-none"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code} ({country.name})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      maxLength={selectedCountry.maxLength}
                      className="w-full bg-dark-950 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:outline-none peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phoneNumber"
                      className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-teal-500"
                    >
                      Phone Number
                    </label>
                    {errors.phoneNumber && <p className="text-teal-500 text-sm mt-1">{errors.phoneNumber}</p>}
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-dark-950 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:outline-none peer"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-1.5rem] peer-focus:text-sm peer-focus:text-teal-500"
                  >
                    Message
                  </label>
                  {errors.message && <p className="text-teal-500 text-sm mt-1">{errors.message}</p>}
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
                    className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-teal-500/40"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            )}
          </div>
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 bg-gradient-to-b from-dark-900 to-dark-950 p-8 rounded-xl border border-gray-600/20">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6 text-gray-400">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-teal-500 mt-1" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm">
                    <a href="mailto:info@intentioninfoservice.com" className="hover:text-teal-500 transition-all">
                      info@intentioninfoservice.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-teal-500 mt-1" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm">
                    <a href="tel:+1234567890" className="hover:text-teal-500 transition-all">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-teal-500 mt-1" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-sm">123 Digital Avenue, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}