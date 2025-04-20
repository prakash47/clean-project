'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
    service: '', // New field for Services or Purpose of Enquiry
    contactMethod: 'email',
    agreePrivacy: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
    service: '',
    agreePrivacy: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      requirements: '',
      service: '',
      agreePrivacy: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Project requirements are required';
      isValid = false;
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service or purpose of enquiry';
      isValid = false;
    }
    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = 'You must agree to the privacy policy';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission (replace with actual API call)
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        requirements: '',
        service: '',
        contactMethod: 'email',
        agreePrivacy: false,
      });
      setTimeout(() => setSubmitted(false), 5000); // Reset success message after 5 seconds
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12">
        <div className="max-w-2xl mx-auto bg-dark-900/50 backdrop-blur-md rounded-lg p-8 shadow-xl border border-gray-600/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Get in Touch</h2>
          {submitted ? (
            <div className="text-center text-teal-500 mb-6">
              <FaCheckCircle className="inline-block w-8 h-8 mb-2" />
              <p>Thank you for your submission! We’ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500 transition-all peer"
                  placeholder=" "
                  aria-label="Your Name"
                />
                <label
                  className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-500 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-teal-500"
                >
                  Your Name *
                </label>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500 transition-all peer"
                  placeholder=" "
                  aria-label="Your Email"
                />
                <label
                  className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-500 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-teal-500"
                >
                  Your Email *
                </label>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="flex items-center">
                  <span className="absolute left-4 text-gray-400">+91</span>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:border-teal-500 transition-all peer"
                    placeholder=" "
                    aria-label="Your Phone Number"
                  />
                  <label
                    className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-500 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-teal-500"
                  >
                    Your Phone Number *
                  </label>
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Company (Optional) */}
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500 transition-all peer"
                  placeholder=" "
                  aria-label="Your Company Name"
                />
                <label
                  className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-500 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-teal-500"
                >
                  Your Company Name (Optional)
                </label>
              </div>

              {/* Services or Purpose of Enquiry */}
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500 transition-all appearance-none"
                  aria-label="Service or Purpose of Enquiry"
                >
                  <option value="">Select a service...</option>
                  <option value="web-design-development">Web Design & Development</option>
                  <option value="mobile-app-development">Mobile App Development</option>
                  <option value="website-maintenance">Website Maintenance</option>
                  <option value="ui-ux-design-branding">UI/UX Design & Branding</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="custom-business-solutions">Custom Business Solutions</option>
                  <option value="general-enquiry">General Enquiry</option>
                </select>
                <label className="absolute left-4 -top-6 text-sm text-teal-500">
                  Service or Purpose of Enquiry *
                </label>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              {/* Requirements */}
              <div className="relative">
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500 transition-all peer min-h-[150px]"
                  placeholder=" "
                  aria-label="Your Project Requirements"
                />
                <label
                  className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer Focaltext-sm peer-focus:text-teal-500 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-teal-500"
                >
                  Your Project Requirements *
                </label>
                {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
              </div>

              {/* Preferred Contact Method */}
              <div className="relative">
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500 transition-all appearance-none"
                  aria-label="Preferred Contact Method"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
                <label className="absolute left-4 -top-6 text-sm text-teal-500">
                  Preferred Contact Method
                </label>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-600 rounded"
                  aria-label="Agree to Privacy Policy"
                />
                <label className="text-gray-400">
                  I agree to the{' '}
                  <Link href="/privacy-policy" className="text-teal-500 hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  *
                </label>
              </div>
              {errors.agreePrivacy && <p className="text-red-500 text-sm">{errors.agreePrivacy}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full contact-us-button text-white font-semibold py-3 rounded-md transition-all"
              >
                Submit Your Request
              </button>
            </form>
          )}
        </div>

        <style jsx global>{`
          @keyframes bg-spin {
            to {
              --border-angle: 1turn;
            }
          }

          .contact-us-button {
            --border-angle: 0turn;
            --main-bg: conic-gradient(
              from var(--border-angle),
              #213,
              #112 5%,
              #112 60%,
              #213 95%
            );
            --gradient-border: conic-gradient(
              from var(--border-angle),
              transparent 25%,
              #08f,
              #f03 99%,
              transparent
            );
            border: solid 2px transparent;
            border-radius: 0.5em;
            background: 
              var(--main-bg) padding-box,
              var(--gradient-border) border-box, 
              var(--main-bg) border-box;
            background-position: center center;
            animation: bg-spin 3s linear infinite;
          }

          .contact-us-button:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
}