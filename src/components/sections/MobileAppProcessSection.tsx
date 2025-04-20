'use client';
import { motion } from 'framer-motion';

export default function MobileAppProcessSection() {
  const steps = [
    {
      title: 'Discovery',
      description: 'We analyze your business goals, target audience, and app requirements to create a detailed roadmap.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 L25,15 M15,15 L25,25" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Design',
      description: 'Our designers create intuitive, user-friendly app interfaces with a focus on UX/UI best practices.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,30 Q20,10 30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Development',
      description: 'Our developers build your app with clean code, ensuring performance, security, and scalability.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 L15,15 L20,20 L25,15 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Testing',
      description: 'We conduct rigorous testing for functionality, performance, and compatibility across devices.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 L15,25 L30,10" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Launch & Support',
      description: 'We publish your app on the App Store and Google Play, with ongoing support to keep it updated.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20,0 L30,10 L20,20 L10,10 Z" fill="#14B8A6" />
          <path d="M20,20 L20,30 L10,30 L10,40 L30,40 L30,30 L20,30 Z" fill="#14B8A6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-dark-900 py-16 md:py-24 relative overflow-hidden">
      <div className="w-full px-[10%] relative z-10">
        {/* Schema Markup for Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mobile App Development",
              "provider": {
                "@type": "Organization",
                "name": "Intention Infoservice",
                "url": "https://intentioninfoservice.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Digital Avenue",
                  "addressLocality": "Tech City",
                  "postalCode": "TC 12345"
                }
              },
              "description": "Intention Infoservice offers custom mobile app development services for iOS, Android, and cross-platform apps, focusing on user-centric design, performance, and security."
            }
          `}
        </script>
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Proven Mobile App Development Process
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We follow a streamlined process to deliver high-quality apps on time and within budget.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our mobile app development process ensures every project is a success. From discovery to launch, we prioritize user experience, security, and performance to deliver apps that drive results.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Process Steps */}
          <div className="md:w-1/2">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex items-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-10 h-10 flex items-center justify-center">{step.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{`${index + 1}. ${step.title}`}</h3>
                  <p className="text-base text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right: SVG Timeline */}
          <div className="md:w-1/2 flex justify-center">
            <svg width="300" height="400" viewBox="0 0 300 400" className="w-full max-w-[300px]">
              <line x1="150" y1="20" x2="150" y2="380" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5,5" />
              {steps.map((_, index) => (
                <g key={index} transform={`translate(150, ${50 + index * 70})`}>
                  <circle cx="0" cy="0" r="10" fill="#14B8A6" />
                  <text x="20" y="5" fill="#fff" fontSize="12">{index + 1}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}