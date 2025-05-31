'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaLightbulb, FaChartLine, FaBalanceScale, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const jobOpenings = [
  {
    id: '1',
    title: 'Android Mobile App Developer',
    department: 'Development',
    jobType: 'Remote',
    openings: 1,
    description: 'We are looking for an Android Mobile App Developer with expertise in Android development to lead mobile application projects.',
    applyLink: 'mailto:contact@intentioninfoservice.com?subject=Application%20for%20Android%20Mobile%20App%20Developer',
  },
  {
    id: '2',
    title: 'UI/UX Graphic Designer',
    department: 'Design',
    jobType: 'Remote',
    openings: 2,
    description: 'We are seeking a UI/UX Graphic Designer with strong skills in creating intuitive and visually appealing user interfaces and experiences.',
    applyLink: 'mailto:contact@intentioninfoservice.com?subject=Application%20for%20UI/UX%20Graphic%20Designer',
  },
  {
    id: '3',
    title: 'Frontend Developer Intern',
    department: 'Development',
    jobType: 'Remote',
    openings: 2,
    description: 'We are looking for a Frontend Developer Intern with foundational knowledge in front-end development to support our development projects.',
    applyLink: 'mailto:contact@intentioninfoservice.com?subject=Application%20for%20Frontend%20Developer%20Intern',
  },
  {
    id: '4',
    title: 'MERN Stack Developer',
    department: 'Development',
    jobType: 'Remote',
    openings: 1,
    description: 'We are seeking a MERN Stack Developer with expertise in MongoDB, Express.js, React, and Node.js to build and maintain full-stack applications.',
    applyLink: 'mailto:contact@intentioninfoservice.com?subject=Application%20for%20MERN%20Stack%20Developer',
  },
  {
    id: '5',
    title: 'Social Media Marketing Manager',
    department: 'Marketing',
    jobType: 'Remote',
    openings: 1,
    description: 'We are looking for a Social Media Marketing Manager with experience in managing social media platforms and creating engaging content to boost brand presence.',
    applyLink: 'mailto:contact@intentioninfoservice.com?subject=Application%20for%20Social%20Media%20Marketing%20Manager',
  },
  {
    id: '6',
    title: 'SEO Expert',
    department: 'Marketing',
    jobType: 'Remote',
    openings: 1,
    description: 'We are seeking an SEO Expert with in-depth knowledge of search engine optimization to enhance our website’s visibility and rankings.',
    applyLink: 'mailto:contact@intentioninfoservice.com?subject=Application%20for%20SEO%20Expert',
  },
  {
    id: '7',
    title: 'Business Development Executive',
    department: 'Sales',
    jobType: 'Remote',
    openings: 2,
    description: 'We are looking for a Business Development Executive with strong sales and networking skills to drive business growth and client acquisition.',
    applyLink: 'mailto:contact@intentioninfoservice.com?subject=Application%20for%20Business%20Development%20Executive',
  },
];

export default function CareersPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [resumeError, setResumeError] = useState('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const openModal = (position: string) => {
    console.log('openModal called with position:', position);
    setSelectedPosition(position);
    setIsModalOpen(true);
    console.log('isModalOpen set to:', true);
    setResumeError('');
    setCaptchaValue(null);
    setFormError('');
    setShowSuccess(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const closeModal = () => {
    console.log('closeModal called');
    setIsModalOpen(false);
    setSelectedPosition('');
    setResumeError('');
    setCaptchaValue(null);
    setFormError('');
    setShowSuccess(false);
  };

  const validateResume = (file: File) => {
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if (!file.type.includes('pdf')) {
      return 'Only PDF files are allowed.';
    }
    if (file.size > maxSize) {
      return 'File size must be less than 2MB.';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    if (!captchaValue) {
      setFormError('Please complete the CAPTCHA verification.');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const resumeFile = formData.get('resume') as File;

    const resumeValidationError = validateResume(resumeFile);
    if (resumeValidationError) {
      setResumeError(resumeValidationError);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-resume', {
        method: 'POST',
        headers: {
          'X-Recaptcha-Token': captchaValue,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }

      const result = await response.json();
      console.log('Success response:', result);
      setShowSuccess(true);
      console.log('showSuccess set to:', true);
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error: any) {
      console.error('Submission error:', error);
      setFormError(error.message || 'An error occurred while submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    setFormError('');
  };

  return (
    <div className="bg-dark-950 text-white min-h-screen relative">
      {/* Schema Markup for Job Postings */}
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Intention Infoservice",
          "url": "https://intentioninfoservice.com",
          "sameAs": [
            "https://in.linkedin.com/company/intentioninfoservice",
            "https://www.instagram.com/intention_infoservice/",
            "https://x.com/IInfoservice",
            "https://www.facebook.com/intentioninfoservice/"
          ],
          "jobPosting": jobOpenings.map(job => ({
            "@type": "JobPosting",
            "title": job.title,
            "description": job.description,
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Intention Infoservice",
              "sameAs": "https://intentioninfoservice.com",
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": job.jobType.includes('Remote') ? 'Remote' : 'Naigaon East, Juchandra',
                "addressRegion": job.jobType.includes('Remote') ? '' : 'Maharashtra',
                "postalCode": job.jobType.includes('Remote') ? '' : '401208',
                "addressCountry": "IN",
              },
            },
            "datePosted": "2025-04-20",
            "employmentType": "FULL_TIME",
            "applyLink": job.applyLink,
          })),
        })}</script>`,
      }} />

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-[10%] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Join Our Team at Intention Infoservice
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We’re looking for passionate individuals to help us transform ideas into stunning digital realities. Explore our open positions and start your journey with us!
          </p>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobOpenings.map(job => (
            <div key={job.id} className="bg-dark-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Department:</span> {job.department}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Job Type:</span> {job.jobType}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Openings:</span> {job.openings}
              </p>
              <p className="text-gray-400 mb-4">{job.description}</p>
              <button
                onClick={() => openModal(job.title)}
                className="inline-block bg-brand-blue text-white font-semibold px-4 py-2 rounded-md hover:bg-brand-blue/80 hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 bg-dark-900">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-brand-blue w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Innovative Environment</h3>
            <p className="text-gray-400">
              Work on cutting-edge projects with the latest technologies, pushing the boundaries of what’s possible.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-brand-blue w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Growth Opportunities</h3>
            <p className="text-gray-400">
              We invest in your growth with training, mentorship, and opportunities to advance your career.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaBalanceScale className="text-brand-blue w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Work-Life Balance</h3>
            <p className="text-gray-400">
              Enjoy flexible working hours, remote work options, and a supportive team culture.
            </p>
          </div>
        </div>
      </section>

      {/* Popup Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000] overflow-auto bg-black bg-opacity-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-dark-900 p-8 rounded-lg shadow-lg w-full max-w-lg border border-brand-blue/30 m-4"
              initial={{ opacity: 1, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">Apply for {selectedPosition}</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-brand-blue transition-colors">
                  <FaTimes size={24} />
                </button>
              </div>
              {showSuccess ? (
                <motion.div
                  className="text-center bg-green-500/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-green-500 text-lg font-semibold">Application submitted successfully!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-white mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue shadow-sm transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-white mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue shadow-sm transition-all"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue shadow-sm transition-all"
                      />
                    </div>
                    {/* Resume */}
                    <div>
                      <label htmlFor="resume" className="block text-white mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Resume (PDF, max 2MB)</label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept="application/pdf"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue shadow-sm transition-all"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const error = validateResume(file);
                            setResumeError(error);
                          }
                        }}
                      />
                      {resumeError && <p className="text-red-500 text-sm mt-2">{resumeError}</p>}
                    </div>
                    {/* Position Applying For (Full Width) */}
                    <div className="md:col-span-2">
                      <label htmlFor="position" className="block text-white mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Position Applying For</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={selectedPosition}
                        readOnly
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 text-gray-400 border border-gray-600 shadow-sm"
                      />
                    </div>
                    {/* reCAPTCHA (Full Width) */}
                    <div className="md:col-span-2 flex justify-center">
                      <div className="border border-gray-600 rounded-lg p-2">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                          onChange={handleCaptchaChange}
                        />
                      </div>
                    </div>
                    {/* Form Error (Full Width) */}
                    {formError && (
                      <div className="md:col-span-2">
                        <p className="text-red-500 text-sm text-center">{formError}</p>
                      </div>
                    )}
                    {/* Buttons (Full Width) */}
                    <div className="md:col-span-2 flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-6 py-3 rounded-lg bg-gray-600 text-white hover:bg-gray-700 hover:shadow-[0_0_15px_rgba(128,128,128,0.5)] transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-blue to-blue-700 text-white hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
                        disabled={isSubmitting || !!resumeError || !captchaValue}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}