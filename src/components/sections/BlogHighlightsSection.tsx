'use client';
import { useEffect, useState } from 'react'; // Added useState for dynamic data
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link'; // Added for clickable links
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify'; // For sanitizing excerpts

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
}

export default function BlogHighlightsSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Fetch latest blog posts on mount
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
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
                  date
                }
              }
            }
          `,
        });

        const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => html);
        const posts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
          const rawExcerpt = post.excerpt || '';
          const plainExcerpt = sanitize(rawExcerpt).replace(/<\/?p>/g, ''); // Remove <p> tags
          const truncatedExcerpt = plainExcerpt.length > 90 ? plainExcerpt.substring(0, 90) + '....' : plainExcerpt;
          return {
            title: post.title,
            excerpt: truncatedExcerpt,
            image: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
            href: `/blog/${post.slug}`, // Ensure href points to individual blog page
            date: new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }),
          };
        });
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching latest posts:', error);
        setBlogPosts([]); // Set empty array on error to avoid undefined issues
      }
    };

    fetchLatestPosts();
  }, []);

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

    // Ensure buttons are visible by adding classes dynamically
    const buttons = document.querySelectorAll('.blog-card button') as NodeListOf<HTMLElement>; // Type assertion to HTMLElement
    buttons.forEach((button) => {
      button.classList.add('block', 'opacity-100');
      // Apply styles after a slight delay to override animations
      setTimeout(() => {
        button.style.opacity = '1';
        button.style.display = 'inline-flex';
        button.style.visibility = 'visible';
      }, 100); // Delay to ensure it runs after GSAP
    });

    // Ensure the View All Articles button is visible
    const viewAllButton = document.querySelector('.flex.justify-center.mt-8 button') as HTMLElement | null;
    if (viewAllButton) {
      viewAllButton.classList.add('block', 'opacity-100');
      setTimeout(() => {
        viewAllButton.style.opacity = '1';
        viewAllButton.style.display = 'inline-flex';
        viewAllButton.style.visibility = 'visible';
      }, 100);
    }
  }, [blogPosts]); // Re-run animation effect when blogPosts changes

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
              className="blog-card bg-dark-900 p-6 rounded-lg shadow-lg hover:shadow-brand-blue/40 transition-shadow duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link href={post.href}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88v5nPQAH8wL5zBLqZQAAAABJRU5ErkJggg=="
                />
              </Link>
              <Link href={post.href}>
                <h3 className="text-xl font-semibold text-white text-center mb-2 hover:text-brand-blue transition-colors cursor-pointer">{post.title}</h3>
              </Link>
              <p className="text-gray-400 text-center mb-4">{post.excerpt}</p>
              <Button
                size="sm"
                icon={<FaArrowRight />}
                iconPosition="right"
                href={post.href}
                className="block opacity-100" // Use className instead of style
              >
                Read More
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            href="/blog"
            className="block opacity-100" // Use className instead of style
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}