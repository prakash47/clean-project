'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function BlogHighlightsSection() {
  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined') return;

    // Ensure elements exist before applying animations
    const blogCards = document.querySelectorAll('.blog-card');

    // Debugging: Log elements to confirm they are found
    console.log('Blog Cards:', blogCards);

    // Apply GSAP animations only if elements exist
    if (blogCards.length > 0) {
      blogCards.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.2 + index * 0.1, ease: 'power3.out' }
        );
      });
    }
  }, []);

  const blogPosts = [
    {
      title: 'Top 5 Web Design Trends for 2025',
      excerpt: 'Explore the latest trends in web design that can elevate your online presence, from minimalist layouts to immersive experiences.',
      image: 'https://placehold.co/800x400.webp?text=Web+Design+Trends+2025',
      href: '/blog/web-design-trends-2025',
      date: 'May 15, 2025',
    },
    {
      title: 'How to Optimize Your Mobile App for Better UX',
      excerpt: 'Learn key strategies to improve user experience in mobile apps, including intuitive navigation and performance optimization.',
      image: 'https://placehold.co/800x400.webp?text=Mobile+App+UX',
      href: '/blog/optimize-mobile-app-ux',
      date: 'May 10, 2025',
    },
    {
      title: 'The Ultimate Guide to Digital Marketing in 2025',
      excerpt: 'Discover effective digital marketing strategies to boost your brand’s visibility, including SEO, social media, and PPC tips.',
      image: 'https://placehold.co/800x400.webp?text=Digital+Marketing+Guide',
      href: '/blog/digital-marketing-guide-2025',
      date: 'May 5, 2025',
    },
  ];

  // Structured data for blog posts using Schema.org BlogPosting
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'BlogPosting',
      position: index + 1,
      headline: post.title,
      description: post.excerpt,
      url: `https://intentioninfoservice.com${post.href}`,
      image: post.image,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: 'Intention Infoservice',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Intention Infoservice',
        logo: {
          '@type': 'ImageObject',
          url: 'https://intentioninfoservice.com/images/logo.webp',
        },
      },
    })),
  };

  return (
    <section className="relative bg-dark-950 pt-0 pb-0">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto w-full px-[10%]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Blog Highlights
        </motion.h2>
        <p className="text-gray-400 text-center mb-8">
          Stay informed with our latest insights on web design, mobile apps, and digital marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="blog-card bg-dark-900 p-6 rounded-lg shadow-lg hover:shadow-teal-500/40 transition-shadow duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88v5nPQAH8wL5zBLqZQAAAABJRU5ErkJggg=="
              />
              <h3 className="text-xl font-semibold text-white text-center mb-2">{post.title}</h3>
              <p className="text-gray-400 text-center mb-4">{post.excerpt}</p>
              <Button
                size="sm"
                variant="primary"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-teal-500/40"
                icon={<FaArrowRight />}
                iconPosition="right"
                href={post.href}
              >
                Read More
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            variant="secondary"
            className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold shadow-lg hover:shadow-teal-500/50 transition-all duration-300 border border-teal-500/50 rounded-lg px-6 py-3"
            href="/blog"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}