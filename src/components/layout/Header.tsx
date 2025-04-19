'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-900">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <img src="/images/logo.webp" alt="Intention Infoservice Logo" className="h-8 w-8" />
          Intention Infoservice
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={link.name}>
              {index === navLinks.length - 1 ? (
                <Link
                  href={link.href}
                  className="text-white font-medium px-4 py-2 border border-white rounded hover:bg-white/10 transition-all"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-white font-medium hover:text-teal-500 transition-all"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="lg:hidden bg-dark-900">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {index === navLinks.length - 1 ? (
                  <Link
                    href={link.href}
                    className="text-white font-medium px-4 py-2 border border-white rounded hover:bg-white/10 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white font-medium hover:text-teal-500 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}