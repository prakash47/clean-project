import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Sample blog posts data (same as in [slug]/page.tsx)
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
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
  },
  {
    id: '2',
    slug: 'why-your-business-needs-custom-software',
    title: 'Why Your Business Needs Custom Software in 2025',
    excerpt: 'Learn how custom software solutions can streamline operations, improve efficiency, and give your business a competitive edge.',
    featuredImage: 'https://placehold.co/800x400.webp?-bundle=Custom+Software',
    category: 'Business Solutions',
    date: 'April 10, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
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
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
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
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
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
    authorBio: 'Alice Johnson is a tech enthusiast and writer focusing on emerging technologies and their impact on businesses.',
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
    authorBio: 'Bob Wilson is a cybersecurity expert with over 15 years of experience in protecting businesses from digital threats.',
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
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
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
    authorBio: 'Alice Johnson is a tech enthusiast and writer focusing on emerging technologies and their impact on businesses.',
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
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
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
    authorBio: 'Bob Wilson is a cybersecurity expert with over 15 years of experience in protecting businesses from digital threats.',
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
    authorBio: 'Alice Johnson is a tech enthusiast and writer focusing on emerging technologies and their impact on businesses.',
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
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
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
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
  },
];

// Dynamic metadata based on the category
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params; // Await the params Promise
  const category = resolvedParams.category.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  const postsInCategory = blogPosts.filter(post => post.category === category);

  if (postsInCategory.length === 0) {
    return {
      title: 'Category Not Found - Intention Infoservice',
      description: 'The blog category you are looking for does not exist.',
    };
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category} - Intention Infoservice Blog`,
    "description": `Explore blog posts in the ${category} category on the Intention Infoservice blog.`,
    "url": `https://intentioninfoservice.com/blog/category/${resolvedParams.category}`,
    "publisher": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
    },
  };

  return {
    title: `${category} - Intention Infoservice Blog`,
    description: `Explore blog posts in the ${category} category on the Intention Infoservice blog.`,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/category/${resolvedParams.category}`,
      title: `${category} - Intention Infoservice Blog`,
      description: `Explore blog posts in the ${category} category on the Intention Infoservice blog.`,
      images: [
        {
          url: postsInCategory[0].featuredImage,
          width: 1200,
          height: 630,
          alt: `${category} Blog Posts`,
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
      canonical: `https://intentioninfoservice.com/blog/category/${resolvedParams.category}`,
    },
    other: {
      'script:ld+json': JSON.stringify(schemaMarkup),
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params; // Await the params Promise
  const category = resolvedParams.category.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  const postsInCategory = blogPosts.filter(post => post.category === category);

  if (postsInCategory.length === 0) {
    notFound();
  }

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="bg-dark-950 text-white">
      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-[10%] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {category}
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our blog posts in the {category} category.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 flex flex-col lg:flex-row gap-8">
        {/* Blog Posts */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 gap-8">
            {postsInCategory.map(post => (
              <div key={post.id} className="bg-dark-900 rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={postsInCategory.indexOf(post) === 0}
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-teal-500 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm text-gray-300">{post.author}</p>
                      <p className="text-sm text-gray-300">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 sticky top-8">
          {/* Categories */}
          <div className="mb-8 bg-dark-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <Link
                    href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-teal-500 transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-dark-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {blogPosts.slice(0, 3).map(post => (
                <li key={post.id} className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <Link href={`/blog/${post.slug}`} className="text-gray-300 hover:text-teal-500 transition-colors">
                      <h4 className="text-sm font-semibold">{post.title}</h4>
                    </Link>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  const categories = [...new Set(blogPosts.map(post => post.category.toLowerCase().replace(/\s+/g, '-')))];
  return categories.map(category => ({
    category,
  }));
}