import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const services = [
  { name: 'Web Design & Development', href: '/services/web-design-development' },
  { name: 'Mobile App Development', href: '/services/mobile-app-development' },
  { name: 'Website Maintenance', href: '/services/website-maintenance' },
  { name: 'UI/UX Design & Branding', href: '/services/ui-ux-design' },
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'Custom Business Solutions', href: '/services/custom-business-solutions' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  // Commented out Portfolio menu item
  // { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 md:px-[10%]">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <img src="/images/logo.png" alt="Intention Infoservice Logo" className="h-12 w-10" />
              Intention Infoservice
            </h3>
            <p className="mb-4 text-gray-300">
              We transform ideas into stunning digital realities with cutting-edge technologies and a team of creative experts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://in.linkedin.com/company/intentioninfoservice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                title="Follow us on LinkedIn"
              >
                <FaLinkedin size={20} className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/intention_infoservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                title="Follow us on Instagram"
              >
                <FaInstagram size={20} className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/IInfoservice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                title="Follow us on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/intentioninfoservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                title="Follow us on Facebook"
              >
                <FaFacebook size={20} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-primary-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mt-1 mr-3 text-primary-500">
                  <FaMapMarkerAlt className="w-[18px] h-[18px]" />
                </div>
                <span className="text-gray-300">Naigaon East, Juchandra Mahrashtra -  401208</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-primary-500">
                  <FaPhone className="w-[18px] h-[18px]" />
                </div>
                <a href="tel:+916386530639" className="text-gray-300 hover:text-primary-500 transition-colors">
                  +91 6386 530639
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-primary-500">
                  <FaEnvelope className="w-[18px] h-[18px]" />
                </div>
                <a href="mailto:contact@intentioninfoservice.com" className="text-gray-300 hover:text-primary-500 transition-colors">
                  contact@intentioninfoservice.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Intention Infoservice. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}