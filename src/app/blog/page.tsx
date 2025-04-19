'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaSearch } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Blog | Intention Infoservice',
  description: 'Stay updated with the latest insights, trends, and news in web development, mobile apps, digital marketing, and technology.'
};

const featuredPost = {
  title: 'The Future of Web Development: Trends to Watch in 2025',
  excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development, from AI-driven interfaces to advanced JavaScript frameworks.',
  date: 'April 15, 2025',
  author: 'John Smith',
  category: 'Web Development',
  image: 'featured-post.jpg'
};

const recentPosts = [
  {
    title: 'How to Optimize Your Website for Mobile Users',
    excerpt: 'With mobile traffic accounting for over 60% of web visits, optimizing your website for mobile users is no longer optional. Learn essential strategies to improve mobile experience.',
    date: 'April 10, 2025',
    author: 'Sarah Johnson',
    category: 'Web Design',
    image: 'blog-post-1.jpg'
  },
  {
    title: 'The Complete Guide to SEO in 2025',
    excerpt: 'Search engine optimization continues to evolve. Discover the latest SEO techniques and best practices to improve your website visibility in search results.',
    date: 'April 5, 2025',
    author: 'Michael Chen',
    category: 'Digital Marketing',
    image: 'blog-post-2.jpg'
  },
  {
    title: 'Building Secure Mobile Applications: Best Practices',
    excerpt: 'Security is paramount in mobile app development. Learn how to implement robust security measures to protect user data and prevent vulnerabilities.',
    date: 'March 28, 2025',
    author: 'Emily Rodriguez',
    category: 'Mobile Development',
    image: 'blog-post-3.jpg'
  },
  {
    title: 'The Role of UI/UX Design in Business Success',
    excerpt: 'Explore how effective UI/UX design can significantly impact user engagement, conversion rates, and overall business success in the digital landscape.',
    date: 'March 20, 2025',
    author: 'David Wilson',
    category: 'UI/UX Design',
    image: 'blog-post-4.jpg'
  },
  {
    title: 'Leveraging AI in Modern Web Applications',
    excerpt: 'Artificial intelligence is transforming web development. Discover practical ways to incorporate AI features into your web applications for enhanced user experience.',
    date: 'March 15, 2025',
    author: 'John Smith',
    category: 'Technology',
    image: 'blog-post-5.jpg'
  },
  {
    title: 'Effective Content Marketing Strategies for 2025',
    excerpt: 'Content remains king in digital marketing. Learn the latest content marketing strategies to engage your audience and drive conversions.',
    date: 'March 8, 2025',
    author: 'Sarah Johnson',
    category: 'Digital Marketing',
    image: 'blog-post-6.jpg'
  }
];

const categories = [
  'Web Development',
  'Web Design',
  'Mobile Development',
  'UI/UX Design',
  'Digital Marketing',
  'Technology',
  'Business',
  'Case Studies'
];

export default function BlogPage() {
  return (
    <MainLayout
      title="Blog | Intention Infoservice"
      description="Stay updated with the latest insights, trends, and news in web development, mobile apps, digital marketing, and technology."
    >
      {/* Hero Section */}
      <Section background="gradient" paddingY="lg">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Blog
          </motion.h1>
          
          <motion.p 
            className="text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Insights, trends, and news from the world of web development, mobile apps, digital marketing, and technology.
          </motion.p>
        </div>
      </Section>
      
      {/* Featured Post Section */}
      <Section background="white" paddingY="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card variant="elevated" padding="none" className="overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <div className="aspect-video lg:aspect-auto lg:h-full bg-gray-100">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Featured Post Image</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" /> {featuredPost.date}
                  </span>
                  <span className="flex items-center mr-4">
                    <FaUser className="mr-1" /> {featuredPost.author}
                  </span>
                  <span className="flex items-center">
                    <FaTag className="mr-1" /> {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{featuredPost.excerpt}</p>
                <Button 
                  variant="primary"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  Read Article
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>
      
      {/* Blog Posts Section */}
      <Section background="light" paddingY="lg">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
            
            <div className="space-y-8">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="bordered" padding="none" className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-auto md:h-full bg-gray-100">
                          {/* Replace with actual image when available */}
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                            <span className="text-sm">Blog Post Image</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6 flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="flex items-center mr-4">
                            <FaCalendarAlt className="mr-1" /> {post.date}
                          </span>
                          <span className="flex items-center mr-4">
                            <FaUser className="mr-1" /> {post.author}
                          </span>
                          <span className="flex items-center">
                            <FaTag className="mr-1" /> {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                        <Button 
                          variant="text" 
                          className="self-start"
                          icon={<span className="ml-1">→</span>}
                          iconPosition="right"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button variant="primary">Load More Articles</Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Search */}
              <Card variant="bordered" padding="lg">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </Card>
              
              {/* Categories */}
              <Card variant="bordered" padding="lg">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary-600 transition-colors">
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 20) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Popular Posts */}
              <Card variant="bordered" padding="lg">
                <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded overflow-hidden">
                        {/* Replace with actual image when available */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          <a href="#" className="hover:text-primary-600 transition-colors">
                            {post.title}
                          </a>
                        </h4>
                        <div className="text-xs text-gray-500">
                          {post.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Newsletter */}
              <Card variant="bordered" padding="lg">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter to receive the latest updates and insights.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Button variant="primary" fullWidth>Subscribe</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss how we can help your business thrive in the digital world.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Get in Touch
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
}
