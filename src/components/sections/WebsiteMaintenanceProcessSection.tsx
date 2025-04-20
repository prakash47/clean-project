'use client';
import { motion } from 'framer-motion';

export default function WebsiteMaintenanceProcessSection() {
  const steps = [
    {
      title: 'Initial Audit',
      description: 'We assess your website’s performance, security, and SEO to identify areas for improvement.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#14B8A6" />
          <path d="M15,25 L25,15 M15,15 L25,25" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Regular Monitoring',
      description: 'We monitor your site for uptime, security threats, and performance issues.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,30 Q20,10 30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Updates & Backups',
      description: 'We perform regular updates and backups to ensure your site is always secure and recoverable.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 L15,15 L20,20 L25,15 L30,20" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Optimization',
      description: 'We optimize your site for speed, SEO, and user experience to maintain peak performance.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,20 L15,25 L30,10" fill="none" stroke="#0F172A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Reporting',
      description: 'We provide detailed reports on maintenance activities and site performance.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="0" y="0" width="40" height="40" rx="5" fill="#14B8A6" />
          <path d="M10,30 L15,25 L20,30 L25,25 L30,30" fill="none" stroke="#0F172A" strokeWidth="2" />
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
              "serviceType": "Website Maintenance",
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
              "description": "Intention Infoservice offers reliable website maintenance services, including security monitoring, performance optimization, SEO maintenance, and regular updates."
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
            Our Website Maintenance Process
          </motion.h2>
          <motion.p
            className="text-xl text-teal-500 font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A systematic approach to keep your website in top shape.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our maintenance process ensures your website remains secure, updated, and optimized. We take a proactive approach to prevent issues and keep your site running smoothly.
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