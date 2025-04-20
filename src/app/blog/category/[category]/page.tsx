import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogSidebar from '@/components/BlogSidebar';

// Sample blog posts data (13 posts)
const blogPosts = [
  {
    id: '1',
    slug: 'top-5-trends-in-software-development-2025',
    title: 'Top 5 Trends in Software Development for 2025',
    excerpt: 'Discover the top trends shaping the software development industry in 2025, including AI integration, cloud solutions, and more.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Software+Trends+2025',
    category: 'Software Development',
    date: 'April 15, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
  },
  {
    id: '2',
    slug: 'why-your-business-needs-custom-software',
    title: 'Why Your Business Needs Custom Software in 2025',
    excerpt: 'Learn how custom software solutions can streamline operations, improve efficiency, and give your business a competitive edge.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Custom+Software',
    category: 'Business Solutions',
    date: 'April 10, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
  },
  {
    id: '3',
    slug: 'the-future-of-digital-marketing',
    title: 'The Future of Digital Marketing: Strategies for Success',
    excerpt: 'Explore the future of digital marketing with strategies to boost engagement, drive traffic, and increase conversions in 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Digital+Marketing',
    category: 'Digital Marketing',
    date: 'April 5, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
  },
  {
    id: '4',
    slug: 'how-to-choose-the-right-tech-stack',
    title: 'How to Choose the Right Tech Stack for Your Project',
    excerpt: 'A guide to selecting the best tech stack for your software project, balancing scalability, performance, and cost.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Tech+Stack',
    category: 'Software Development',
    date: 'April 1, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
  },
  {
    id: '5',
    slug: 'the-rise-of-low-code-platforms',
    title: 'The Rise of Low-Code Platforms: Revolutionizing Development',
    excerpt: 'Low-code platforms are changing the way software is developed. Learn how they can benefit your business.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Low+Code',
    category: 'Technology',
    date: 'March 28, 2025',
    author: 'Alice Johnson',
    authorImage: 'https://placehold.co/40x40.webp?text=AJ',
  },
  {
    id: '6',
    slug: 'cybersecurity-best-practices-2025',
    title: 'Cybersecurity Best Practices for Businesses in 2025',
    excerpt: 'Protect your business from cyber threats with these essential cybersecurity best practices.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Cybersecurity',
    category: 'Technology',
    date: 'March 25, 2025',
    author: 'Bob Wilson',
    authorImage: 'https://placehold.co/40x40.webp?text=BW',
  },
  {
    id: '7',
    slug: 'ui-ux-design-trends-2025',
    title: 'UI/UX Design Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with the latest UI/UX design trends that will shape user experiences in 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=UI+UX+Trends',
    category: 'UI/UX Design',
    date: 'March 20, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
  },
  {
    id: '8',
    slug: 'cloud-computing-for-small-businesses',
    title: 'Cloud Computing for Small Businesses: Benefits and Challenges',
    excerpt: 'Explore how cloud computing can help small businesses grow, along with potential challenges to consider.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Cloud+Computing',
    category: 'Business Solutions',
    date: 'March 15, 2025',
    author: 'Alice Johnson',
    authorImage: 'https://placehold.co/40x40.webp?text=AJ',
  },
  {
    id: '9',
    slug: 'mobile-app-development-guide',
    title: "A Beginner's Guide to Mobile App Development in 2025",
    excerpt: 'Get started with mobile app development with this comprehensive guide tailored for beginners.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Mobile+App+Dev',
    category: 'Software Development',
    date: 'March 10, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
  },
  {
    id: '10',
    slug: 'voice-search-optimization',
    title: 'Voice Search Optimization: The Future of SEO',
    excerpt: 'Learn how to optimize your website for voice search to stay ahead in SEO rankings.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Voice+Search',
    category: 'Digital Marketing',
    date: 'March 5, 2025',
    author: 'Bob Wilson',
    authorImage: 'https://placehold.co/40x40.webp?text=BW',
  },
  {
    id: '11',
    slug: 'sustainable-software-practices',
    title: 'Sustainable Software Practices for a Greener Future',
    excerpt: 'Discover how software companies can adopt sustainable practices to reduce environmental impact.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Sustainable+Software',
    category: 'Technology',
    date: 'March 1, 2025',
    author: 'Alice Johnson',
    authorImage: 'https://placehold.co/40x40.webp?text=AJ',
  },
  {
    id: '12',
    slug: 'blockchain-in-software-development',
    title: 'Blockchain in Software Development: Opportunities and Challenges',
    excerpt: 'Explore the role of blockchain technology in software development and its potential impact.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Blockchain',
    category: 'Technology',
    date: 'February 25, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
  },
  {
    id: '13',
    slug: 'video-marketing-strategies-2025',
    title: 'Video Marketing Strategies for 2025: Engage Your Audience',
    excerpt: 'Boost your marketing efforts with these video marketing strategies tailored for 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Video+Marketing',
    category: 'Digital Marketing',
    date: 'February 20, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
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

// Dynamic metadata based on the category
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const categoryPosts = blogPosts.filter(post => post.category === category);

  if (categoryPosts.length === 0) {
    return {
      title: 'Category Not Found - Intention Infoservice',
      description: 'The category you are looking for does not exist.',
    };
  }

  return {
    title: `${category} - Intention Infoservice Blog`,
    description: `Explore posts in the ${category} category on the Intention Infoservice Blog.`,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/category/${params.category}`,
      title: `${category} - Intention Infoservice Blog`,
      description: `Explore posts in the ${category} category on the Intention Infoservice Blog.`,
      images: [
        {
          url: categoryPosts[0].featuredImage,
          width: 1200,
          height: 630,
          alt: `${category} Category`,
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
      canonical: `https://intentioninfoservice.com/blog/category/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const categoryPosts = blogPosts.filter(post => post.category === category);

  if (categoryPosts.length === 0) {
    notFound();
  }

  return (
    <div className="bg-dark-950 text-white">
      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-[10%] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {category} Posts
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore the latest insights and updates in the {category} category.
          </p>
        </div>
      </section>

      {/* Main Blog Section with Sidebar */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 flex flex-col lg:flex-row gap-8">
        {/* Blog Posts Grid */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-8">Posts in {category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryPosts.map(post => (
              <article key={post.id} className="bg-dark-900 rounded-lg overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm text-gray-400">{post.author}</p>
                        <p className="text-sm text-gray-400">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <BlogSidebar blogPosts={blogPosts} categories={categories} />
      </section>
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  return categories.map(category => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}