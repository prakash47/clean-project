'use client';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaCheckCircle, FaEnvelope, FaPhone, FaEnvelope as FaEmail, FaSpinner } from 'react-icons/fa';

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
  ];

  const servicesOptions = [
    { value: 'web-design-development', label: 'Web Design & Development' },
    { value: 'mobile-app-development', label: 'Mobile App Development' },
    { value: 'website-maintenance', label: 'Website Maintenance' },
    { value: 'ui-ux-design-branding', label: 'UI/UX Design & Branding' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'custom-business-solutions', label: 'Custom Business Solutions' },
    { value: 'general-enquiry', label: 'General Enquiry' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default to India
    company: '',
    requirements: '',
    service: [] as string[], // Store multiple selections
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [showEmailAnimation, setShowEmailAnimation] = useState(false); // State for email animation

  // State to track if the country code select or phone input has been interacted with
  const [isPhoneSectionActive, setIsPhoneSectionActive] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox' && name === 'service') {
      const target = e.target as HTMLInputElement;
      const serviceValue = value;
      const checked = target.checked;
      setFormData(prev => {
        const currentServices = prev.service;
        if (checked) {
          return {
            ...prev,
            service: [...currentServices, serviceValue],
          };
        } else {
          return {
            ...prev,
            service: currentServices.filter(s => s !== serviceValue),
          };
        }
      });
    } else if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
      // If the country code or phone input changes, set the section as active
      if (name === 'countryCode' || name === 'phone') {
        setIsPhoneSectionActive(true);
      }
    }
  };

  const handlePhoneFocus = () => {
    setIsPhoneSectionActive(true);
  };

  const handlePhoneBlur = () => {
    // Only deactivate if both country code and phone input are empty and not focused
    if (!formData.phone && formData.countryCode === '+91') {
      setIsPhoneSectionActive(false);
    }
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[A-Za-z\s'-]{2,50}$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, or apostrophes (2–50 characters)';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

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
    if (formData.service.length === 0) {
      newErrors.service = 'Please select at least one service or purpose of enquiry';
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
      setIsSubmitting(true);
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
            service: [],
            contactMethod: 'email',
            agreePrivacy: false,
          });
          setRecaptchaToken(null);
          setIsPhoneSectionActive(false); // Reset phone section state
          setTimeout(() => {
            setShowEmailAnimation(true);
          }, 2000);
          setTimeout(() => {
            setSubmitted(false);
            setShowEmailAnimation(false);
          }, 5000);
        } else {
          const errorData = await response.json();
          setSubmitError(errorData.message || 'Failed to send email. Please try again later.');
        }
      } catch (error) {
        setSubmitError('An error occurred while sending the email. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-dark-900 backdrop-blur-md rounded-lg p-8 shadow-xl border border-gray-600/20 animate-fade-in">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
        {submitted ? (
          <div className="text-center text-teal-500 mb-6 animate-pulse">
            <FaCheckCircle className="inline-block w-8 h-8 mb-2" />
            <p>Thank you for your submission! We’ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {submitError && <p className="text-red-500 text-center mb-4">{submitError}</p>}
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all duration-300 peer"
                placeholder=" "
                aria-label="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
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
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all duration-300 peer"
                placeholder=" "
                aria-label="Your Email"
              />
              <label
                htmlFor="email"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Email *
              </label>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone with Country Code Dropdown */}
            <div className="relative">
              <div className="flex items-center border border-gray-600 rounded-lg focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/30 transition-all duration-300">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  className="bg-dark-900/70 text-white border-none py-3 px-4 focus:outline-none w-28 truncate"
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
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  maxLength={countries.find(country => country.code === formData.countryCode)?.maxLength || 10}
                  className="flex-1 bg-dark-900/70 text-white border-none py-3 px-4 focus:outline-none"
                  placeholder=" "
                  aria-label="Your Phone Number"
                />
                <label
                  htmlFor="phone"
                  className={`absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform z-10 origin-[0]  bg-gray-900 px-2 ${
                    isPhoneSectionActive
                      ? '-translate-y-4 scale-75 top-2 text-teal-500'
                      : 'scale-100 -translate-y-1/2 top-1/2 left-32'
                  }`}
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
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all duration-300 peer"
                placeholder=" "
                aria-label="Your Company Name"
              />
              <label
                htmlFor="company"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Company Name (Optional)
              </label>
            </div>

            {/* Services or Purpose of Enquiry (Checkbox Selection) */}
            <div className="relative">
              <label className="block text-lg text-teal-500 mb-2">
                Service or Purpose of Enquiry *
              </label>
              <div className="services-container bg-dark-900/70 border border-gray-600 rounded-md p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {servicesOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        name="service"
                        value={option.value}
                        checked={formData.service.includes(option.value)}
                        onChange={handleChange}
                        className="hidden service-checkbox"
                        id={option.value}
                      />
                      <label
                        htmlFor={option.value}
                        className="flex items-center w-full p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-dark-800 hover:shadow-md transform hover:scale-105"
                      >
                        <span className="checkbox-icon w-5 h-5 mr-2 border border-gray-600 rounded flex items-center justify-center transition-all duration-300">
                          {formData.service.includes(option.value) && (
                            <span className="w-3 h-3 bg-teal-500 rounded-sm animate-check"></span>
                          )}
                        </span>
                        <span className="text-gray-300">{option.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </div>

            {/* Requirements */}
            <div className="relative">
              <textarea
                name="requirements"
                id="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all duration-300 peer min-h-[150px]"
                placeholder=" "
                aria-label="Your Project Requirements"
              />
              <label
                htmlFor="requirements"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Project Requirements *
              </label>
              {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
            </div>

            {/* Preferred Contact Method */}
            <div className="relative">
              <select
                name="contactMethod"
                id="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all duration-300 appearance-none peer"
                aria-label="Preferred Contact Method"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
              <label
                htmlFor="contactMethod"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
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
                className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-600 rounded transition-all duration-300"
                aria-label="Agree to Privacy Policy"
              />
              <label className="text-gray-400">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-teal-500 hover:underline transition-colors">
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
              disabled={isSubmitting}
              className={`w-full contact-us-button text-white font-semibold py-3 rounded-md transition-all duration-300 flex items-center justify-center ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Submitting Enquiry...
                </>
              ) : (
                'Submit Your Enquiry'
              )}
            </button>
          </form>
        )}
        {/* Email Animation */}
        {showEmailAnimation && (
          <div className="email-animation">
            <FaEnvelope className="email-icon" />
          </div>
        )}
      </div>

      {/* Contact Information Section */}
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-4">Contact Us Directly</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0">
          <p className="text-gray-400 flex items-center">
            <FaEmail className="mr-2 text-teal-500" /> 
            <a href="mailto:contact@intentioninfoservice.com" className="text-teal-500 hover:underline">
              contact@intentioninfoservice.com
            </a>
          </p>
          <p className="text-gray-400 flex items-center">
            <FaPhone className="mr-2 text-teal-500" /> 
            <a href="tel:+917021539267" className="text-teal-500 hover:underline">
              +91 7021539267
            </a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bg-spin {
          to {
            --border-angle: 1turn;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes check {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fly-to-logo {
          0% {
            bottom: 50%;
            left: 50%;
            transform: translate(-50%, 50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, 50%) scale(1.2);
            opacity: 0.8;
          }
          80% {
            bottom: 90%;
            left: 10%;
            transform: translate(0, 0) scale(0.5);
            opacity: 0.7;
          }
          100% {
            bottom: 90%;
            left: 5%;
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
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

        .contact-us-button:hover:not(:disabled) {
          animation-play-state: paused;
          box-shadow: 0 0 15px rgba(20, 184, 166, 0.5);
        }

        /* Email Animation Styles */
        .email-animation {
          position: fixed;
          z-index: 1000;
        }

        .email-icon {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          font-size: 2rem;
          color: #1a3c34;
          animation: fly-to-logo 2s ease-in-out forwards;
        }

        /* Custom Checkbox Styles */
        .services-container {
          /* Removed max-height and overflow-y to eliminate scrollbar */
        }

        .checkbox-icon {
          transition: all 0.3s ease;
        }

        .service-checkbox:checked + label .checkbox-icon {
          background-color: #1a3c34;
          border-color: #1a3c34;
        }
      `}</style>
    </>
  );
}