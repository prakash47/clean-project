import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Grid from '@/components/ui/Grid';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Portfolio | Intention Infoservice',
  description: 'Explore our portfolio of web design, development, mobile app, and digital marketing projects for businesses across various industries.',
};

const categories = [
  'All',
  'Web Design',
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'E-commerce',
  'Digital Marketing'
];

const projects = [
  {
    title: 'TechStart Corporate Website',
    category: 'Web Design',
    description: 'A modern, responsive website for a technology startup with custom animations and interactive elements.',
    image: 'project-1.jpg',
    tags: ['Web Design', 'Web Development', 'UI/UX Design']
  },
  {
    title: 'GrowthHub Mobile App',
    category: 'Mobile Apps',
    description: 'A cross-platform mobile application for business analytics and performance tracking.',
    image: 'project-2.jpg',
    tags: ['Mobile Apps', 'UI/UX Design']
  },
  {
    title: 'Artisan Boutique E-commerce',
    category: 'E-commerce',
    description: 'A fully-featured e-commerce platform for a boutique selling handcrafted products.',
    image: 'project-3.jpg',
    tags: ['Web Development', 'E-commerce']
  },
  {
    title: 'HealthPlus Patient Portal',
    category: 'Web Development',
    description: 'A secure patient portal for a healthcare provider with appointment scheduling and medical records access.',
    image: 'project-4.jpg',
    tags: ['Web Development', 'UI/UX Design']
  },
  {
    title: 'FoodDelivery Mobile App',
    category: 'Mobile Apps',
    description: 'A food delivery application with real-time order tracking and payment processing.',
    image: 'project-5.jpg',
    tags: ['Mobile Apps', 'UI/UX Design']
  },
  {
    title: 'TravelExplorer Website',
    category: 'Web Design',
    description: 'A travel website with interactive maps, booking functionality, and personalized recommendations.',
    image: 'project-6.jpg',
    tags: ['Web Design', 'Web Development']
  },
  {
    title: 'FinTech Dashboard',
    category: 'UI/UX Design',
    description: 'A comprehensive financial dashboard with data visualization and reporting features.',
    image: 'project-7.jpg',
    tags: ['UI/UX Design', 'Web Development']
  },
  {
    title: 'EcoStore E-commerce',
    category: 'E-commerce',
    description: 'An e-commerce platform for eco-friendly products with subscription services and loyalty program.',
    image: 'project-8.jpg',
    tags: ['E-commerce', 'Web Development']
  },
  {
    title: 'RealEstate Property Listing',
    category: 'Web Development',
    description: 'A property listing website with advanced search filters, virtual tours, and agent contact features.',
    image: 'project-9.jpg',
    tags: ['Web Development', 'UI/UX Design']
  }
];

export default function PortfolioPage() {
  return (
    <MainLayout
      title="Portfolio | Intention Infoservice"
      description="Explore our portfolio of web design, development, mobile app, and digital marketing projects for businesses across various industries."
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
            Our Portfolio
          </motion.h1>
          
          <motion.p 
            className="text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our latest projects and see how we&apos;ve helped businesses across various industries achieve their digital goals.
          </motion.p>
        </div>
      </Section>
      
      {/* Portfolio Filter Section */}
      <Section background="white" paddingY="lg">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${
                  category === 'All' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            </motion.div>
          ))}
        </div>
        
        <Grid cols={3} gap="lg">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="none" className="overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  <div className="relative group">
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                      {/* Replace with actual project images when available */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                        <span className="text-sm">{project.category} Project</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        variant="outline" 
                        className="border-white text-white hover:bg-white hover:text-primary-600"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
        
        <div className="text-center mt-12">
          <Button variant="primary" size="lg">Load More Projects</Button>
        </div>
      </Section>
      
      {/* Case Studies Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dive deeper into our most impactful projects and learn how we helped our clients achieve their business goals.
          </p>
        </div>
        
        <div className="space-y-12">
          {[1, 2].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <div className="aspect-video lg:aspect-auto lg:h-full bg-gray-100 rounded overflow-hidden">
                      {/* Replace with actual case study images when available */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                        <span className="text-sm">Case Study {item} Image</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">
                      {item === 1 
                        ? "TechStart: Increasing Conversion Rates by 150%" 
                        : "GrowthHub: Streamlining Business Operations"}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item === 1 
                        ? "Learn how we redesigned TechStart&apos;s website and implemented a comprehensive digital marketing strategy that led to a 150% increase in conversion rates and a 200% increase in organic traffic."
                        : "Discover how our custom mobile application helped GrowthHub streamline their business operations, reduce manual processes by 75%, and improve team collaboration."}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          {item === 1 ? "150%" : "75%"}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item === 1 ? "Increase in Conversions" : "Reduction in Manual Processes"}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          {item === 1 ? "200%" : "40%"}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item === 1 ? "Increase in Organic Traffic" : "Improvement in Productivity"}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="primary"
                      icon={<FaArrowRight />}
                      iconPosition="right"
                      className="mt-auto self-start"
                    >
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline">View All Case Studies</Button>
        </div>
      </Section>
      
      {/* Client Logos Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Brands</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;ve had the privilege of working with amazing clients across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: item * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                <span className="text-sm">Client Logo</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss how we can help your business achieve its digital goals.
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
