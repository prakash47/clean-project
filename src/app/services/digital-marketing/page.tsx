'use client';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaSearch, FaHashtag, FaChartBar, FaChartLine, FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Digital Marketing | Intention Infoservice',
  description: 'Strategic digital marketing solutions to increase your online visibility and drive qualified traffic to your website.'
};

const benefits = [
  {
    icon: <FaSearch className="text-primary-500" size={24} />,
    title: 'Increased Visibility',
    description: 'Improve your online presence and reach more potential customers through strategic digital marketing.'
  },
  {
    icon: <FaChartBar className="text-primary-500" size={24} />,
    title: 'Measurable Results',
    description: 'Track performance with detailed analytics and reporting to optimize your marketing campaigns.'
  },
  {
    icon: <FaHashtag className="text-primary-500" size={24} />,
    title: 'Targeted Approach',
    description: 'Reach your ideal customers with precision targeting based on demographics, interests, and behavior.'
  },
  {
    icon: <FaChartLine className="text-primary-500" size={24} />,
    title: 'ROI-Focused',
    description: 'Maximize your marketing budget with strategies designed to deliver the best return on investment.'
  }
];

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website visibility in search engine results to drive organic traffic.',
    items: [
      'Keyword research and strategy',
      'On-page optimization',
      'Technical SEO',
      'Content strategy',
      'Link building',
      'Local SEO'
    ]
  },
  {
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Create targeted ad campaigns that deliver immediate results and drive qualified traffic.',
    items: [
      'Google Ads management',
      'Social media advertising',
      'Display advertising',
      'Remarketing campaigns',
      'Landing page optimization',
      'Conversion tracking'
    ]
  },
  {
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage with your audience through effective social media strategies.',
    items: [
      'Social media strategy',
      'Content creation',
      'Community management',
      'Influencer partnerships',
      'Social media advertising',
      'Performance analytics'
    ]
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable content that attracts, engages, and converts your target audience.',
    items: [
      'Content strategy',
      'Blog writing',
      'Ebooks and whitepapers',
      'Infographics',
      'Video content',
      'Content distribution'
    ]
  },
  {
    title: 'Email Marketing',
    description: 'Nurture leads and build customer relationships through personalized email campaigns.',
    items: [
      'Email strategy',
      'Campaign design',
      'Automation workflows',
      'List segmentation',
      'A/B testing',
      'Performance analytics'
    ]
  }
];

const process = [
  {
    number: '01',
    title: 'Research & Analysis',
    description: 'We analyze your business, competitors, and target audience to develop a strategic marketing plan.'
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'We create a customized digital marketing strategy aligned with your business goals and budget.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We execute the strategy across selected channels with a focus on quality and performance.'
  },
  {
    number: '04',
    title: 'Monitoring & Optimization',
    description: 'We continuously monitor campaign performance and make data-driven optimizations.'
  },
  {
    number: '05',
    title: 'Reporting & Analysis',
    description: 'We provide detailed reports with insights and recommendations for ongoing improvement.'
  }
];

export default function DigitalMarketingPage() {
  return (
    <MainLayout
      title="Digital Marketing | Intention Infoservice"
      description="Strategic digital marketing solutions to increase your online visibility and drive qualified traffic to your website."
    >
      {/* Hero Section */}
      <Section background="gradient" paddingY="lg">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Digital Marketing
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Strategic digital marketing solutions to increase your online visibility and drive qualified traffic to your website.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Get a Free Quote
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600 rounded-lg opacity-20 blur-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Digital Marketing Image</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Digital Marketing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Digital marketing offers numerous advantages over traditional marketing methods, providing better targeting, measurement, and return on investment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Services Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Digital Marketing Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing services tailored to your specific business needs and goals.
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Marketing Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure your digital marketing campaigns deliver results.
          </p>
        </div>
        
        <div className="relative">
          {/* Process line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-primary-100 md:transform md:-translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white font-bold">
                      {step.number.split('').pop()}
                    </div>
                    <Card variant="elevated" padding="lg" className="ml-12 md:ml-0">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </Card>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Platforms Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Platforms We Work With</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage the most effective digital marketing platforms to reach your target audience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Google', 'Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'TikTok', 'Pinterest'].map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card variant="bordered" padding="md" className="flex items-center justify-center h-24">
                <span className="font-bold text-lg">{platform}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our digital marketing services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'How long does it take to see results from digital marketing?',
              answer: 'The timeline for results varies depending on the channels and strategies used. PPC advertising can generate immediate traffic, while SEO typically takes 3-6 months to show significant results. Social media marketing and content marketing generally take 1-3 months to build momentum.'
            },
            {
              question: 'How much should I budget for digital marketing?',
              answer: 'Your budget will depend on your business goals, industry, competition, and target audience. We offer customized packages starting from $1,500 per month, and we work with you to develop a strategy that maximizes your ROI within your budget constraints.'
            },
            {
              question: 'Do you provide reports on campaign performance?',
              answer: 'Yes, we provide detailed monthly reports that track key performance indicators (KPIs) relevant to your business goals. These reports include metrics such as traffic, conversions, engagement, and ROI, along with insights and recommendations for optimization.'
            },
            {
              question: 'Can you work with my existing marketing team?',
              answer: 'Absolutely! We can work as an extension of your in-house marketing team, providing specialized expertise and support where needed. We collaborate closely with your team to ensure alignment with your overall marketing strategy and business objectives.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Online Presence?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today to discuss your digital marketing needs and get a free consultation.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Get Started
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
}
