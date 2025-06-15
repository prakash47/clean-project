'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

export default function WebsiteMaintenanceCTASection() {
  // Country data (same as ContactForm)
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    countryCode: '+91', // Default to India
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [showEmailAnimation, setShowEmailAnimation] = useState(false);
  const [isPhoneSectionActive, setIsPhoneSectionActive] = useState(false);

  // Ref to the form container for scrolling
  const formContainerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'countryCode' || name === 'phone') {
      setIsPhoneSectionActive(true);
    }
  };

  const handlePhoneFocus = () => {
    setIsPhoneSectionActive(true);
  };

  const handlePhoneBlur = () => {
    if (!formData.phone && formData.countryCode === '+91') {
      setIsPhoneSectionActive(false);
    }
  };

  const onReCAPTCHAChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
    };
    let isValid = true;

    // Name validation: Allow letters, numbers, spaces, hyphens, apostrophes, and some special characters
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[A-Za-z0-9\s'-.,&()]{2,50}$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, numbers, spaces, hyphens, apostrophes, and some special characters (2–50 characters)';
      isValid = false;
    }

    // Email validation: Ensure it matches a broader email format
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Phone validation: Only validate if provided
    if (formData.phone.trim()) {
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

    // Debug logging to identify validation failures
    console.log('Validation Errors:', newErrors);
    console.log('Form Data:', formData);

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Check reCAPTCHA
    if (!recaptchaToken) {
      setSubmitError('Please complete the reCAPTCHA verification.');
      return;
    }

    // Validate form fields
    if (!validateForm()) {
      const errorMessages = [];
      if (errors.name) errorMessages.push(`Name: ${errors.name}`);
      if (errors.email) errorMessages.push(`Email: ${errors.email}`);
      if (errors.phone) errorMessages.push(`Phone: ${errors.phone}`);
      setSubmitError(errorMessages.length > 0 ? errorMessages.join('; ') : 'Please correct the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        website: formData.website || 'Not provided',
        phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : 'Not provided',
        recaptchaToken,
      };

      console.log('Payload sent to /api/send-health-check-email:', payload);

      const emailResponse = await fetch('/api/send-health-check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!emailResponse.ok) {
        let errorMessage = 'Failed to process health check request.';
        try {
          const errorData = await emailResponse.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          const errorText = await emailResponse.text();
          console.error('Non-JSON response from /api/send-health-check-email:', errorText);
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        website: '',
        phone: '',
        countryCode: '+91',
      });
      setRecaptchaToken(null);
      setIsPhoneSectionActive(false);

      if (formContainerRef.current) {
        formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      setShowEmailAnimation(true);

      setTimeout(() => {
        setSubmitted(false);
        setShowEmailAnimation(false);
      }, 5000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSubmitError(error.message || 'An error occurred while submitting the form. Please try again later.');
      } else {
        setSubmitError('An unexpected error occurred while submitting the form. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Waveform Background Animation
    const waveform = document.querySelector('.waveform');
    if (waveform) {
      gsap.to(waveform, {
        x: -50,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Floating Particles Animation
    const particles = document.querySelectorAll('.particle');
    if (particles.length > 0) {
      gsap.fromTo(
        particles,
        { opacity: 0, scale: 0 },
        { opacity: 0.5, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );
      gsap.to(particles, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
        delay: 0.8,
      });
    }

    // Primary CTA Button Animation (Pulsing Effect)
    const primaryButton = document.querySelector('.primary-cta');
    if (primaryButton) {
      gsap.fromTo(
        primaryButton,
        { scale: 1 },
        { scale: 1.05, duration: 1, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );
    }

    // SVG Illustration Animations
    const laptopScreen = document.querySelector('.laptop-screen');
    const checklist = document.querySelector('.checklist');
    const checkmark = document.querySelector('.checkmark');
    const scanLines = document.querySelectorAll('.scan-line');
    const magnifyingGlass = document.querySelector('.magnifying-glass');

    if (laptopScreen) {
      gsap.fromTo(
        laptopScreen,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
    if (checklist) {
      gsap.fromTo(
        checklist,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }
    if (checkmark) {
      gsap.fromTo(
        checkmark,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, ease: 'elastic.out(1, 0.5)' }
      );
      gsap.to(checkmark, {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }
    if (scanLines.length > 0) {
      scanLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0, x: -50 },
          { opacity: 0.5, x: 50, duration: 1.5, repeat: -1, ease: 'linear', delay: index * 0.3 }
        );
      });
    }
    if (magnifyingGlass) {
      gsap.fromTo(
        magnifyingGlass,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.8, ease: 'power3.out' }
      );
      gsap.to(magnifyingGlass, {
        rotation: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      });
    }
  }, []);

  return (
    <section className="bg-dark-900 py-12 md:py-12 relative overflow-hidden">
      {/* Structured Data for the Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CallToAction',
          name: 'Get a Free Website Health Check',
          description: 'Request a free website health check from Intention Infoservice in Tech City to ensure your site is secure, fast, and optimized in 2025.',
          target: 'https://intentioninfoservice.com/contact-us',
        })}
      </script>

      {/* Subtle Waveform Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="waveform w-full h-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#00a0e3"
            fillOpacity="0.2"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,160C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready for Hassle-Free Website Maintenance?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-blue font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get a Free Website Health Check Today
          </motion.p>
          <motion.p
            className="text-md md:text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Say goodbye to downtime and security worries with Intention Infoservice’s expert website maintenance services in Tech City. Request a free health check to see how we can optimize your site in 2025.
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Form for Free Website Health Check */}
          <motion.div
            ref={formContainerRef}
            className="lg:w-1/2 w-full bg-dark-950 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-brand-blue transition-all duration-500 animate-fade-in"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Request Your Free Health Check</h3>
            {submitted ? (
              <div className="text-center text-teal-500 mb-6 animate-pulse">
                <FaEnvelope className="inline-block w-8 h-8 mb-2" />
                <p>Thank you! We’ll get back to you with your free website health report soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && <p className="text-red-500 text-center mb-4">{submitError}</p>}
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-dark-950 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 peer"
                    placeholder=" "
                    aria-label="Your Name"
                    aria-required="true"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-dark-950 px-2 peer-focus:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
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
                    onChange={handleInputChange}
                    className="w-full bg-dark-950 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 peer"
                    placeholder=" "
                    aria-label="Your Email"
                    aria-required="true"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-dark-950 px-2 peer-focus:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                  >
                    Your Email *
                  </label>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                {/* Website URL */}
                <div className="relative">
                  <input
                    type="url"
                    name="website"
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full bg-dark-950 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 peer"
                    placeholder=" "
                    aria-label="Your Website URL"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="website"
                    className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-dark-950 px-2 peer-focus:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                  >
                    Your Website URL (Optional)
                  </label>
                </div>
                {/* Phone with Country Code Dropdown */}
                <div className="relative">
                  <div className="flex items-center border border-gray-600 rounded-lg focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/30 transition-all duration-300">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      onFocus={handlePhoneFocus}
                      onBlur={handlePhoneBlur}
                      className="bg-dark-950 text-white border-none py-3 px-4 focus:outline-none w-28 truncate"
                      aria-label="Country Code"
                      disabled={isSubmitting}
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
                      onChange={handleInputChange}
                      onFocus={handlePhoneFocus}
                      onBlur={handlePhoneBlur}
                      maxLength={countries.find(country => country.code === formData.countryCode)?.maxLength || 10}
                      className="flex-1 bg-dark-950 text-white border-none py-3 px-4 focus:outline-none peer"
                      placeholder=" "
                      aria-label="Your Phone Number"
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="phone"
                      className={`absolute text-base text-gray-500 duration-300 transform z-10 origin-[0] bg-dark-950 px-2 ${
                        isPhoneSectionActive
                          ? '-translate-y-4 scale-75 top-2 text-brand-blue'
                          : 'scale-100 -translate-y-1/2 top-1/2 left-32 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-blue'
                      }`}
                    >
                      Your Phone Number (Optional)
                    </label>
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your-recaptcha-site-key'}
                    onChange={onReCAPTCHAChange}
                    theme="dark"
                  />
                </div>
                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Type assertion to bypass TypeScript error */}
                  {(Button as any)({
                    type: "submit",
                    size: "lg",
                    className: "w-full btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300 primary-cta",
                    icon: <FaArrowRight />,
                    iconPosition: "right",
                    ariaLabel: "Submit request for a free website health check",
                    disabled: isSubmitting,
                    children: isSubmitting ? 'Submitting...' : 'Get a Free Quote Now',
                  })}
                </motion.div>
              </form>
            )}
            {/* Email Animation */}
            {showEmailAnimation && (
              <div className="email-animation">
                <FaEnvelope className="email-icon" />
              </div>
            )}
          </motion.div>
          {/* Right: Enhanced SVG Illustration */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg
              width="500"
              height="400"
              viewBox="0 0 500 400"
              className="w-full max-w-[500px]"
              role="img"
              aria-label="Illustration of a website health check, featuring a laptop screen, checklist, diagnostic scan lines, and magnifying glass"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00a0e3', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#393185', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              {/* Background Particles */}
              <g className="particles">
                <circle cx="50" cy="50" r="10" fill="#00a0e3" className="particle" filter="url(#glow)" />
                <circle cx="450" cy="50" r="10" fill="#00a0e3" className="particle" filter="url(#glow)" />
                <circle cx="50" cy="350" r="10" fill="#00a0e3" className="particle" filter="url(#glow)" />
                <circle cx="450" cy="350" r="10" fill="#00a0e3" className="particle" filter="url(#glow)" />
              </g>
              {/* Laptop (Website Representation) */}
              <g className="laptop-screen" transform="translate(150, 100)">
                <rect x="0" y="0" width="200" height="120" rx="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <rect x="10" y="10" width="180" height="100" fill="#1E293B" />
                {/* Diagnostic Scan Lines */}
                <g transform="translate(10, 10)">
                  <line x1="0" y1="20" x2="180" y2="20" stroke="#00a0e3" strokeWidth="1" strokeDasharray="5,5" className="scan-line" />
                  <line x1="0" y1="50" x2="180" y2="50" stroke="#00a0e3" strokeWidth="1" strokeDasharray="5,5" className="scan-line" />
                  <line x1="0" y1="80" x2="180" y2="80" stroke="#00a0e3" strokeWidth="1" strokeDasharray="5,5" className="scan-line" />
                </g>
                <rect x="0" y="120" width="200" height="10" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <text x="60" y="150" fill="#fff" fontSize="14" fontFamily="monospace">Website Scan</text>
              </g>
              {/* Checklist (Health Report) */}
              <g className="checklist" transform="translate(50, 200)">
                <rect x="0" y="0" width="150" height="100" rx="5" fill="#0F172A" stroke="#393185" strokeWidth="2" />
                <path d="M20,20 H130 M20,40 H130 M20,60 H130 M20,80 H130" stroke="#00a0e3" strokeWidth="1" />
                <g className="checkmark" transform="translate(130, 20)">
                  <circle cx="0" cy="0" r="10" fill="#00a0e3" />
                  <path d="M-5,0 L0,5 L5,-5" fill="none" stroke="#0F172A" strokeWidth="2" />
                </g>
                <text x="10" y="120" fill="#fff" fontSize="14" fontFamily="monospace">Health Report</text>
              </g>
              {/* Magnifying Glass (Diagnostic Tool) */}
              <g className="magnifying-glass" transform="translate(300, 250)">
                <circle cx="50" cy="50" r="30" fill="#0F172A" stroke="#00a0e3" strokeWidth="2" />
                <circle cx="50" cy="50" r="15" fill="#1E293B" />
                <line x1="65" y1="65" x2="80" y2="80" stroke="#00a0e3" strokeWidth="3" />
                <text x="10" y="110" fill="#fff" fontSize="14" fontFamily="monospace">Diagnostics</text>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
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
      `}</style>
    </section>
  );
}