'use client';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Grid from '@/components/ui/Grid';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

const posts = [
  {
    title: 'Top 5 Web Design Trends for 2025',
    excerpt:
      'Discover the latest trends in web design that can elevate your website’s user experience and visual appeal.',
    image: '/images/blog-1.jpg',
    link: '/blog/web-design-trends-2025',
    date: 'March 15, 2025',
  },
  {
    title: 'How to Optimize Your Mobile App for Performance',
    excerpt:
      'Learn key strategies to improve your mobile app’s speed and efficiency for a seamless user experience.',
    image: '/images/blog-2.jpg',
    link: '/blog/mobile-app-optimization',
    date: 'April 10, 2025',
  },
  {
    title: 'The Ultimate Guide to SEO in 2025',
    excerpt:
      'Boost your website’s search engine rankings with our comprehensive guide to SEO best practices.',
    image: '/images/blog-3.jpg',
    link: '/blog/seo-guide-2025',
    date: 'May 5, 2025',
  },
];

export default function BlogContent() {
  return (
    <MainLayout>
      <Section background="gradient" paddingY="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Blog
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stay updated with the latest insights, tips, and trends in web design, mobile app development, and digital marketing.
          </motion.p>
        </div>
      </Section>
      <Section background="white" paddingY="lg" id="blog">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Posts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dive into our latest articles for actionable advice and industry updates.
          </p>
        </div>
        <Grid cols={2} gap="lg">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" hoverEffect className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                    {/* Replace with actual image when available */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                      <span className="text-sm">Blog Image</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                  <Button
                    className="mt-auto self-start"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                    href={post.link}
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Section>
      <Section background="gradient" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-lg opacity-90 mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact us to discuss how we can help you achieve your digital goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </Section>
    </MainLayout>
  );
}