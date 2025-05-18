'use client';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
  // Country data (sample for brevity; full list should include ~240 countries)
  const countries = [
    { code: '+91', name: 'India', flag: '🇮🇳', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+1', name: 'United States', flag: '🇺🇸', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧', maxLength: 11, regex: /^\d{9,11}$/ },
    { code: '+1', name: 'Canada', flag: '🇨🇦', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+61', name: 'Australia', flag: '🇦🇺', maxLength: 10, regex: /^\d{9,10}$/ },
    { code: '+33', name: 'France', flag: '🇫🇷', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+49', name: 'Germany', flag: '🇩🇪', maxLength: 11, regex: /^\d{10,11}$/ },
    { code: '+81', name: 'Japan', flag: '🇯🇵', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+86', name: 'China', flag: '🇨🇳', maxLength: 11, regex: /^\d{11}$/ },
    { code: '+55', name: 'Brazil', flag: '🇧🇷', maxLength: 11, regex: /^\d{10,11}$/ },
    { code: '+27', name: 'South Africa', flag: '🇿🇦', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+7', name: 'Russia', flag: '🇷🇺', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+82', name: 'South Korea', flag: '🇰🇷', maxLength: 10, regex: /^\d{9,10}$/ },
    { code: '+34', name: 'Spain', flag: '🇪🇸', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+39', name: 'Italy', flag: '🇮🇹', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+65', name: 'Singapore', flag: '🇸🇬', maxLength: 8, regex: /^\d{8}$/ },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿', maxLength: 10, regex: /^\d{9,10}$/ },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭', maxLength: 10, regex: /^\d{10}$/ },
    { code: '+31', name: 'Netherlands', flag: '🇳🇱', maxLength: 10, regex: /^\d{10}$/ },
    // Note: Full list (~240 countries) should be sourced from a JSON file or library like libphonenumber-js in production
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default to India
    company: '',
    requirements: '',
    service: '',
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
  const [submitError, setSubmitError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onReCAPTCHAChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[A-Za-z\s'-]{2,50}$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, or apostrophes (2–50 characters)';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else {
      const selectedCountry = countries.find(country => country.code === formData.countryCode);
      if (selectedCountry) {
        if (!selectedCountry.regex.test(formData.phone)) {
          newErrors.phone = `Phone number must be ${selectedCountry.maxLength} digits for ${selectedCountry.name}`;
          isValid = false;
        }
      } else {
        newErrors.phone = 'Invalid country code';
        isValid = false;
      }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!recaptchaToken) {
      setSubmitError('Please complete the reCAPTCHA verification.');
      return;
    }
    if (validateForm()) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            company: formData.company || 'Not provided',
            service: formData.service,
            requirements: formData.requirements,
            contactMethod: formData.contactMethod,
            agreePrivacy: formData.agreePrivacy,
            recaptchaToken,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            countryCode: '+91',
            company: '',
            requirements: '',
            service: '',
            contactMethod: 'email',
            agreePrivacy: false,
          });
          setRecaptchaToken(null);
          setTimeout(() => setSubmitted(false), 5000); // Reset success message after 5 seconds
        } else {
          const errorData = await response.json();
          setSubmitError(errorData.message || 'Failed to send email. Please try again later.');
        }
      } catch (error) {
        setSubmitError('An error occurred while sending the email. Please try again later.');
      }
    }
  };

  // Debug log for reCAPTCHA key (remove after testing)
  console.log('reCAPTCHA Site Key:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

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
              {submitError && <p className="text-red-500 text-center mb-4">{submitError}</p>}
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

              {/* Phone with Country Code Dropdown in Single Field */}
              <div className="relative">
                <div className="flex items-center bg-dark-900/70 border border-gray-600 rounded-md focus-within:border-teal-500 transition-all">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-dark-900/70 text-white border-none py-3 px-4 focus:outline-none w-22"
                    aria-label="Country Code"
                  >
                    {countries.map((country) => (
                      <option key={country.code + country.name} value={country.code}>
                        {`${country.flag} ${country.code}`}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={countries.find(country => country.code === formData.countryCode)?.maxLength || 10}
                    className="flex-1 bg-dark-900/70 text-white border-none py-3 px-4 focus:outline-none peer"
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
                  className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-500 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-teal-500"
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

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your-recaptcha-site-key'}
                  onChange={onReCAPTCHAChange}
                  theme="dark"
                />
              </div>

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