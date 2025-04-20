import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Intention Infoservice',
  description: 'Join the Intention Infoservice team! Explore exciting career opportunities in software development, digital marketing, UI/UX design, and more.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/careers',
    title: 'Careers - Intention Infoservice',
    description: 'Join the Intention Infoservice team! Explore exciting career opportunities in software development, digital marketing, UI/UX design, and more.',
    images: [
      {
        url: 'https://placehold.co/1200x630.webp?text=Intention+Infoservice+Careers',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Careers',
      },
    ],
    siteName: 'Intention Infoservice',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IInfoservice',
    creator: '@IInfoservice',
  },
  alternates: {
    canonical: 'https://intentioninfoservice.com/careers',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Sample job openings data
const jobOpenings = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Naigaon East, Juchandra, Maharashtra - 401208',
    description: 'We are looking for a Senior Software Engineer with expertise in full-stack development to lead projects and mentor junior developers.',
    applyLink: 'mailto:careers@intentioninfoservice.com?subject=Application%20for%20Senior%20Software%20Engineer',
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    description: 'Join our design team as a UI/UX Designer to create intuitive and visually stunning user experiences for our clients.',
    applyLink: 'mailto:careers@intentioninfoservice.com?subject=Application%20for%20UI/UX%20Designer',
  },
  {
    id: '3',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Naigaon East, Juchandra, Maharashtra - 401208',
    description: 'We’re seeking a Digital Marketing Specialist to develop and execute marketing campaigns that drive engagement and growth.',
    applyLink: 'mailto:careers@intentioninfoservice.com?subject=Application%20for%20Digital%20Marketing%20Specialist',
  },
  {
    id: '4',
    title: 'Project Manager',
    department: 'Operations',
    location: 'Remote',
    description: 'Looking for an experienced Project Manager to oversee software development projects, ensuring timely delivery and client satisfaction.',
    applyLink: 'mailto:careers@intentioninfoservice.com?subject=Application%20for%20Project%20Manager',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-dark-950 text-white">
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
                "addressLocality": job.location.includes('Remote') ? 'Remote' : 'Naigaon East, Juchandra',
                "addressRegion": job.location.includes('Remote') ? '' : 'Maharashtra',
                "postalCode": job.location.includes('Remote') ? '' : '401208',
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
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="text-gray-400 mb-4">{job.description}</p>
              <Link
                href={job.applyLink}
                className="inline-block bg-teal-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 bg-dark-900">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Innovative Environment</h3>
            <p className="text-gray-400">
              Work on cutting-edge projects with the latest technologies, pushing the boundaries of what’s possible.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Growth Opportunities</h3>
            <p className="text-gray-400">
              We invest in your growth with training, mentorship, and opportunities to advance your career.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Work-Life Balance</h3>
            <p className="text-gray-400">
              Enjoy flexible working hours, remote work options, and a supportive team culture.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
        <p className="text-lg text-gray-400 mb-6">
          If you’re passionate about technology and innovation, we’d love to hear from you! Apply for one of our open positions or reach out to our HR team.
        </p>
        <Link
          href="mailto:careers@intentioninfoservice.com?subject=General%20Career%20Inquiry"
          className="inline-block bg-teal-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-600 transition-colors"
        >
          Contact HR Team
        </Link>
      </section>
    </div>
  );
}