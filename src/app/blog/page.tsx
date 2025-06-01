import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostsList from '@/components/BlogPostsList';
import BlogSidebar from '@/components/BlogSidebar';

export const metadata: Metadata = {
  title: 'Blog - Intention Infoservice',
  description: 'Explore the latest insights, trends, and updates in software development, technology, and digital solutions from Intention Infoservice.',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/blog',
    title: 'Blog - Intention Infoservice',
    description: 'Explore the latest insights, trends, and updates in software development, technology, and digital solutions from Intention Infoservice.',
    images: [
      {
        url: 'https://placehold.co/1200x630.webp?text=Intention+Infoservice+Blog',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Blog',
      },
    ],
    siteName: 'Intention Infoservice',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IInfoservice',
    creator: '@IInfoservice',
  },
  alternates: {
    canonical: 'https://intentioninfoservice.com/blog',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Updated blog posts data (16 posts, including the 3 new ones)
const blogPosts = [
  {
    id: '1',
    slug: 'top-5-trends-in-software-development-2025',
    title: 'Top 5 Trends in Software Development for 2025',
    excerpt: 'Discover the top trends shaping the software development industry in 2025, including AI integration, cloud solutions, and more.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Software+Trends+2025',
    category: 'Software Development',
    date: 'April 15, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '2',
    slug: 'why-your-business-needs-custom-software',
    title: 'Why Your Business Needs Custom Software in 2025',
    excerpt: 'Learn how custom software solutions can streamline operations, improve efficiency, and give your business a competitive edge.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Custom+Software',
    category: 'Business Solutions',
    date: 'April 10, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '3',
    slug: 'the-future-of-digital-marketing',
    title: 'The Future of Digital Marketing: Strategies for Success',
    excerpt: 'Explore the future of digital marketing with strategies to boost engagement, drive traffic, and increase conversions in 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Digital+Marketing',
    category: 'Digital Marketing',
    date: 'April 5, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '4',
    slug: 'how-to-choose-the-right-tech-stack',
    title: 'How to Choose the Right Tech Stack for Your Project',
    excerpt: 'A guide to selecting the best tech stack for your software project, balancing scalability, performance, and cost.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Tech+Stack',
    category: 'Software Development',
    date: 'April 1, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '5',
    slug: 'the-rise-of-low-code-platforms',
    title: 'The Rise of Low-Code Platforms: Revolutionizing Development',
    excerpt: 'Low-code platforms are changing the way software is developed. Learn how they can benefit your business.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Low+Code',
    category: 'Technology',
    date: 'March 28, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '6',
    slug: 'cybersecurity-best-practices-2025',
    title: 'Cybersecurity Best Practices for Businesses in 2025',
    excerpt: 'Protect your business from cyber threats with these essential cybersecurity best practices.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Cybersecurity',
    category: 'Technology',
    date: 'March 25, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '7',
    slug: 'ui-ux-design-trends-2025',
    title: 'UI/UX Design Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with the latest UI/UX design trends that will shape user experiences in 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=UI+UX+Trends',
    category: 'UI/UX Design',
    date: 'March 20, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '8',
    slug: 'cloud-computing-for-small-businesses',
    title: 'Cloud Computing for Small Businesses: Benefits and Challenges',
    excerpt: 'Explore how cloud computing can help small businesses grow, along with potential challenges to consider.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Cloud+Computing',
    category: 'Business Solutions',
    date: 'March 15, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '9',
    slug: 'mobile-app-development-guide',
    title: "A Beginner's Guide to Mobile App Development in 2025",
    excerpt: 'Get started with mobile app development with this comprehensive guide tailored for beginners.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Mobile+App+Dev',
    category: 'Software Development',
    date: 'March 10, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '10',
    slug: 'voice-search-optimization',
    title: 'Voice Search Optimization: The Future of SEO',
    excerpt: 'Learn how to optimize your website for voice search to stay ahead in SEO rankings.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Voice+Search',
    category: 'Digital Marketing',
    date: 'March 5, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '11',
    slug: 'sustainable-software-practices',
    title: 'Sustainable Software Practices for a Greener Future',
    excerpt: 'Discover how software companies can adopt sustainable practices to reduce environmental impact.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Sustainable+Software',
    category: 'Technology',
    date: 'March 1, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '12',
    slug: 'blockchain-in-software-development',
    title: 'Blockchain in Software Development: Opportunities and Challenges',
    excerpt: 'Explore the role of blockchain technology in software development and its potential impact.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Blockchain',
    category: 'Technology',
    date: 'February 25, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '13',
    slug: 'video-marketing-strategies-2025',
    title: 'Video Marketing Strategies for 2025: Engage Your Audience',
    excerpt: 'Boost your marketing efforts with these video marketing strategies tailored for 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Video+Marketing',
    category: 'Digital Marketing',
    date: 'February 20, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '14',
    slug: 'web-design-trends-2025',
    title: 'Top 5 Web Design Trends for 2025',
    excerpt: 'Explore the latest trends in web design that can elevate your online presence, from minimalist layouts to immersive experiences.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Web+Design+Trends+2025',
    category: 'UI/UX Design',
    date: 'May 15, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '15',
    slug: 'optimize-mobile-app-ux',
    title: 'How to Optimize Your Mobile App for Better UX',
    excerpt: 'Learn key strategies to improve user experience in mobile apps, including intuitive navigation and performance optimization.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Mobile+App+UX',
    category: 'Software Development',
    date: 'May 10, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
  {
    id: '16',
    slug: 'digital-marketing-guide-2025',
    title: 'The Ultimate Guide to Digital Marketing in 2025',
    excerpt: 'Discover effective digital marketing strategies to boost your brand’s visibility, including SEO, social media, and PPC tips.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Digital+Marketing+Guide',
    category: 'Digital Marketing',
    date: 'May 5, 2025',
    author: 'Shubham',
    authorImage: 'https://placehold.co/40x40.webp?text=S',
  },
];

// Sample categories
const categories = [
  'Software Development',
  'Business Solutions',
  'Digital Marketing',
  'UI/UX Design',
  'Technology',
];

export default function BlogPage() {
  const initialPosts = blogPosts.slice(0, 4);

  return (
    <div className="bg-dark-950 text-white">
      {/* Schema Markup for Blog */}
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Intention Infoservice Blog",
          "description": "Explore the latest insights, trends, and updates in software development, technology, and digital solutions.",
          "url": "https://intentioninfoservice.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Intention Infoservice",
            "url": "https://intentioninfoservice.com",
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://intentioninfoservice.com/blog/${post.slug}`,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author,
            },
            "image": post.featuredImage,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://intentioninfoservice.com/blog/${post.slug}`,
            },
          })),
        })}</script>`,
      }} />

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-[10%] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Intention Infoservice Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and updates in software development, technology, and digital solutions.
          </p>
        </div>
      </section>

      {/* Featured Post Section */}
      {blogPosts.length > 0 && (
        <section className="container mx-auto px-4 md:px-[10%] py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Post</h2>
          <div className="relative">
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={blogPosts[0].featuredImage}
                  alt={blogPosts[0].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-8">
                  <div>
                    <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                      {blogPosts[0].category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{blogPosts[0].title}</h3>
                    <p className="text-gray-300 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={blogPosts[0].authorImage}
                        alt={blogPosts[0].author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm text-gray-400">{blogPosts[0].author}</p>
                        <p className="text-sm text-gray-400">{blogPosts[0].date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Main Blog Section with Sidebar */}
      <section className="container mx-auto px-4 md:px-[10%] py-16 flex flex-col lg:flex-row gap-8">
        {/* Blog Posts Grid */}
        <BlogPostsList initialPosts={initialPosts} allPosts={blogPosts} />

        {/* Sidebar */}
        <BlogSidebar blogPosts={blogPosts} categories={categories} />
      </section>
    </div>
  );
}