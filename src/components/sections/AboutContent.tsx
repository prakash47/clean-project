'use client';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Grid from '@/components/ui/Grid';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaRocket, FaArrowRight } from 'react-icons/fa';

const values = [
  {
    icon: <FaUsers className="text-brand-blue" size={24} />,
    title: 'Client-First Approach',
    description: 'We prioritize our clients\' needs and goals, working collaboratively to deliver solutions that exceed expectations.'
  },
  {
    icon: <FaLightbulb className="text-brand-blue" size={24} />,
    title: 'Innovation',
    description: 'We embrace new technologies and creative thinking to develop cutting-edge solutions for our clients.'
  },
  {
    icon: <FaHandshake className="text-brand-blue" size={24} />,
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all our business relationships.'
  },
  {
    icon: <FaRocket className="text-brand-blue" size={24} />,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering high-quality work that drives results.'
  }
];

const team = [
  {
    name: 'John Smith',
    position: 'Founder & CEO',
    bio: 'With over 15 years of experience in web development and digital marketing, John leads our team with a vision for innovation and excellence.',
    image: 'team-member-1.jpg'
  },
  {
    name: 'Sarah Johnson',
    position: 'Creative Director',
    bio: 'Sarah brings 10+ years of design expertise, creating stunning visual experiences that help our clients stand out in the digital landscape.',
    image: 'team-member-2.jpg'
  },
  {
    name: 'Michael Chen',
    position: 'Technical Lead',
    bio: 'Michael\'s deep technical knowledge and problem-solving skills ensure our development projects are built with the latest technologies and best practices.',
    image: 'team-member-3.jpg'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Digital Marketing Manager',
    bio: 'Emily specializes in creating data-driven marketing strategies that help businesses increase their online visibility and drive conversions.',
    image: 'team-member-4.jpg'
  }
];

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Intention Infoservice was established with a mission to help businesses succeed in the digital world.'
  },
  {
    year: '2017',
    title: 'Expanded Services',
    description: 'Added mobile app development and digital marketing to our service offerings.'
  },
  {
    year: '2019',
    title: 'Team Growth',
    description: 'Expanded our team to 20+ professionals across design, development, and marketing.'
  },
  {
    year: '2021',
    title: 'New Office',
    description: 'Moved to a larger office space to accommodate our growing team and client base.'
  },
  {
    year: '2023',
    title: 'International Expansion',
    description: 'Started serving clients internationally, expanding our reach to global markets.'
  },
  {
    year: '2025',
    title: 'Innovation Hub',
    description: 'Launched our innovation hub to explore emerging technologies and develop cutting-edge solutions.'
  }
];

export default function AboutContent() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section background="gradient" paddingY="lg">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Intention Infoservice
            </motion.h1>
            
            <motion.p 
              className="text-xl opacity-90 mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We transform ideas into stunning digital realities with a client-first approach, cutting-edge technologies, and a team of creative experts.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-blue rounded-lg opacity-20 blur-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Company Image</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Our Story Section */}
      <Section background="white" paddingY="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Intention Infoservice was founded in 2015 with a simple mission: to help businesses thrive in the digital era. What began as a small web design agency has grown into a full-service digital solutions provider, offering a comprehensive range of services including web design and development, mobile app development, digital marketing, and custom business solutions.
            </p>
            <p>
              Our journey has been driven by a passion for innovation and a commitment to excellence. We believe that every business, regardless of size or industry, deserves access to high-quality digital solutions that drive results. This belief has guided our growth and shaped our approach to client partnerships.
            </p>
            <p>
              Today, Intention Infoservice is proud to serve clients across various industries, helping them transform their ideas into stunning digital realities. Our team of creative experts and technical specialists work collaboratively to deliver solutions that not only meet but exceed our clients' expectations.
            </p>
            <p>
              As we continue to grow and evolve, our commitment to our clients remains unwavering. We are dedicated to staying at the forefront of technological advancements and industry trends, ensuring that our clients always receive the most innovative and effective solutions for their digital needs.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Our Values Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core values guide everything we do, from how we work with clients to how we develop our solutions.
          </p>
        </div>
        
        <Grid cols={2} gap="lg">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-3 bg-brand-blue/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Section>
      
      {/* Our Team Section */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our talented team of experts is passionate about creating exceptional digital experiences for our clients.
          </p>
        </div>
        
        <Grid cols={2} gap="lg">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="bordered" padding="lg" className="h-full">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-square bg-gray-100 rounded-full overflow-hidden">
                      {/* Replace with actual team member images when available */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                        <span className="text-sm">Photo</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-brand-blue font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Section>
      
      {/* Milestones Section */}
      <Section background="light" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key milestones in our growth and evolution as a company.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-blue/20 transform md:translate-x-0 translate-x-4"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start gap-8`}
              >
                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-brand-blue rounded-full transform md:translate-x-[-8px] translate-x-[-8px]"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-brand-blue mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="gradient" paddingY="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-lg opacity-90 mb-8 text-gray-300">
            Contact us today to discuss how we can help your business thrive in the digital world.
          </p>
          <Button 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Contact Us
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
}