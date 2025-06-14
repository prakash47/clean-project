'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';

// Define the structure of the raw WordPress post data
interface WordPressPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
  categories: {
    nodes: Array<{
      name: string;
    }>;
  };
  date: string;
  author: {
    node: {
      name: string;
      firstName: string;
      lastName: string;
      avatar?: {
        url: string;
      };
    };
  };
}

// Define the structure of the transformed blog post data
interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

export default function BlogHighlightsSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch latest blog posts on mount
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await client.query({
          query: gql`
            query GetLatestPosts {
              posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
                nodes {
                  id
                  slug
                  title
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                  date
                  author {
                    node {
                      name
                      firstName
                      lastName
                    }
                  }
                }
              }
            }
          `,
        });

        const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => html);
        const posts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
          const rawExcerpt = post.excerpt || '';
          const plainExcerpt = sanitize(rawExcerpt).replace(/<\/?[^>]+(>|$)/g, ''); // Remove all HTML tags
          const truncatedExcerpt = plainExcerpt.length > 120 ? plainExcerpt.substring(0, 120) + '...' : plainExcerpt;
          
          // Calculate estimated read time (average 200 words per minute)
          const wordCount = plainExcerpt.split(' ').length;
          const readTime = Math.max(1, Math.ceil(wordCount / 200));
          
          return {
            title: post.title,
            excerpt: truncatedExcerpt,
            image: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
            href: `/blog/${post.slug}`,
            date: new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),
            category: post.categories.nodes[0]?.name || 'Technology',
            readTime: `${readTime} min read`,
            author: `${post.author.node.firstName || ''} ${post.author.node.lastName || ''}`.trim() || post.author.node.name || 'Intention Infoservice Team',
          };
        });
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching latest posts:', error);
        // Fallback blog posts for better UX
        setBlogPosts([
          {
            title: 'Latest Web Development Trends for 2025',
            excerpt: 'Discover the cutting-edge web development technologies and frameworks that will shape the digital landscape in 2025...',
            image: 'https://placehold.co/800x400.webp?text=Web+Development+2025',
            href: '/blog/web-development-trends-2025',
            date: 'Dec 15, 2024',
            category: 'Web Development',
            readTime: '5 min read',
            author: 'Intention Infoservice Team',
          },
          {
            title: 'Mobile App Development Best Practices',
            excerpt: 'Learn the essential strategies for creating successful mobile applications that engage users and drive business growth...',
            image: 'https://placehold.co/800x400.webp?text=Mobile+App+Development',
            href: '/blog/mobile-app-development-best-practices',
            date: 'Dec 10, 2024',
            category: 'Mobile Development',
            readTime: '7 min read',
            author: 'Intention Infoservice Team',
          },
          {
            title: 'Digital Marketing Strategies That Convert',
            excerpt: 'Explore proven digital marketing techniques that boost online visibility and convert visitors into loyal customers...',
            image: 'https://placehold.co/800x400.webp?text=Digital+Marketing',
            href: '/blog/digital-marketing-strategies-convert',
            date: 'Dec 5, 2024',
            category: 'Digital Marketing',
            readTime: '6 min read',
            author: 'Intention Infoservice Team',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  useEffect(() => {
    // Ensure GSAP animations are only applied on the client side
    if (typeof window === 'undefined' || isLoading) return;

    // Ensure elements exist before applying animations
    const blogCards = document.querySelectorAll('.blog-card');

    // Apply GSAP animations only if elements exist
    if (blogCards.length > 0) {
      blogCards.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + index * 0.15, ease: 'power3.out' }
        );
      });
    }
  }, [blogPosts, isLoading]);

  // Enhanced structured data for blog posts using Schema.org BlogPosting
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Latest Blog Posts - Software Development Insights',
    'description': 'Stay updated with the latest insights on web development, mobile app development, and digital marketing strategies',
    'itemListElement': blogPosts.map((post, index) => ({
      '@type': 'BlogPosting',
      'position': index + 1,
      'headline': post.title,
      'description': post.excerpt,
      'url': `https://intentioninfoservice.com${post.href}`,
      'image': {
        '@type': 'ImageObject',
        'url': post.image,
        'width': 800,
        'height': 400,
      },
      'datePublished': post.date,
      'author': {
        '@type': 'Organization',
        'name': post.author,
        'url': 'https://intentioninfoservice.com/about-us',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Intention Infoservice',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://intentioninfoservice.com/images/logo.webp',
          'width': 200,
          'height': 60,
        },
        'url': 'https://intentioninfoservice.com',
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `https://intentioninfoservice.com${post.href}`,
      },
      'articleSection': post.category,
      'wordCount': post.readTime,
    })),
  };

  return (
    <section className="relative bg-dark-950 py-16 md:py-8" itemScope itemType="https://schema.org/WebPageElement">
      {/* Enhanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container mx-auto w-full px-[8%] md:px-[10%] lg:px-[10%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            itemProp="name"
          >
            Latest Insights & Industry Updates
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            itemProp="description"
          >
            Stay informed with our expert insights on web development, mobile app development, digital marketing strategies, and the latest technology trends shaping the industry.
          </motion.p>
          
          {/* Blog Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-brand-blue" />
              <span>Updated Weekly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Expert Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Industry Trends</span>
            </div>
          </motion.div>
        </div>

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-dark-900 p-6 rounded-xl animate-pulse">
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="blog-card group bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 border border-gray-800 hover:border-brand-blue/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Featured Image */}
                <div className="relative overflow-hidden">
                  <Link href={post.href} className="block">
                    <Image
                      src={post.image}
                      alt={`Featured image for ${post.title}`}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88v5nPQAH8wL5zBLqZQAAAABJRU5ErkJggg=="
                      itemProp="image"
                    />
                  </Link>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-brand-blue to-brand-indigo text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-brand-blue" />
                      <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-brand-blue" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser className="text-brand-blue" />
                      <span itemProp="author">{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={post.href}>
                    <h3 
                      className="text-xl font-semibold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 cursor-pointer"
                      itemProp="headline"
                    >
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p 
                    className="text-gray-400 mb-6 line-clamp-3 leading-relaxed"
                    itemProp="description"
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="flex justify-between items-center">
                    <Button
                      size="sm"
                      className="group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 text-brand-blue border border-brand-blue hover:border-brand-blue"
                      icon={<FaArrowRight />}
                      iconPosition="right"
                      href={post.href}
                      ariaLabel={`Read more about ${post.title}`}
                    >
                      Read More
                    </Button>
                    
                    {/* Social Proof */}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Trending</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Call-to-Action Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Want More Industry Insights?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our complete collection of articles covering web development, mobile apps, digital marketing, and business growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="btn btn-primary text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/blog"
              ariaLabel="View all blog articles and insights"
            >
              View All Articles
            </Button>
            
            {/* <Button
              size="lg"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
              href="/newsletter"
              ariaLabel="Subscribe to our newsletter for weekly updates"
            >
              Subscribe to Newsletter
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

