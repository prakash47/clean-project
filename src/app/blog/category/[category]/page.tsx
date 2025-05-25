import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

// Mock data for blog posts (replace with actual data fetching logic)
const blogPosts = [
  {
    id: '1',
    title: 'Top 5 Web Design Trends for 2025',
    excerpt: 'Explore the latest trends in web design that can elevate your online presence, from minimalist layouts to immersive experiences.',
    category: 'web-design',
    href: '/blog/web-design-trends-2025',
    date: 'May 15, 2025',
    image: 'https://placehold.co/800x400.webp?text=Web+Design+Trends+2025',
  },
  {
    id: '2',
    title: 'How to Optimize Your Mobile App for Better UX',
    excerpt: 'Learn key strategies to improve user experience in mobile apps, including intuitive navigation and performance optimization.',
    category: 'mobile-apps',
    href: '/blog/optimize-mobile-app-ux',
    date: 'May 10, 2025',
    image: 'https://placehold.co/800x400.webp?text=Mobile+App+UX',
  },
  {
    id: '3',
    title: 'The Ultimate Guide to Digital Marketing in 2025',
    excerpt: 'Discover effective digital marketing strategies to boost your brand’s visibility, including SEO, social media, and PPC tips.',
    category: 'digital-marketing',
    href: '/blog/digital-marketing-guide-2025',
    date: 'May 5, 2025',
    image: 'https://placehold.co/800x400.webp?text=Digital+Marketing+Guide',
  },
];

// Define valid categories for static generation
const validCategories = ['web-design', 'mobile-apps', 'digital-marketing'];

// Generate static params for pre-rendering category pages
export async function generateStaticParams() {
  return validCategories.map(category => ({
    category,
  }));
}

// Generate metadata dynamically based on the category
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  // Resolve the params Promise
  const resolvedParams = await params;
  
  // Debug: Log params to verify its value
  console.log('generateMetadata resolvedParams:', resolvedParams);

  const category = resolvedParams?.category;
  if (!category || !validCategories.includes(category)) {
    notFound(); // Redirect to 404 if category is invalid
  }

  const capitalizedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${capitalizedCategory} Blog Posts - Intention Infoservice`,
    description: `Explore blog posts about ${capitalizedCategory} from Intention Infoservice, covering topics like web design, mobile apps, digital marketing, and more in 2025.`,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/category/${category}`,
      title: `${capitalizedCategory} Blog Posts - Intention Infoservice`,
      description: `Explore blog posts about ${capitalizedCategory} from Intention Infoservice, covering topics like web design, mobile apps, digital marketing, and more in 2025.`,
      images: [
        {
          url: '/images/blog-og-image.webp',
          width: 1200,
          height: 630,
          alt: `${capitalizedCategory} Blog Posts`,
        },
      ],
      siteName: 'Intention Infoservice',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@intentioninfo',
      creator: '@intentioninfo',
    },
    alternates: {
      canonical: `https://intentioninfoservice.com/blog/category/${category}`,
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  // Resolve the params Promise
  const resolvedParams = await params;

  // Debug: Log params to verify its value
  console.log('BlogCategoryPage resolvedParams:', resolvedParams);

  const category = resolvedParams?.category;
  if (!category || !validCategories.includes(category)) {
    notFound(); // Redirect to 404 if category is invalid
  }

  const capitalizedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Filter blog posts by category
  const filteredPosts = blogPosts.filter(post => post.category === category);

  return (
    <MainLayout>
      <section className="bg-dark-950 py-16 md:py-24">
        <div className="w-full px-[10%]">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {capitalizedCategory} Blog Posts
          </h1>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <div
                  key={post.id}
                  className="bg-dark-900 p-6 rounded-lg shadow-lg hover:shadow-teal-500/40 transition-shadow duration-300 flex flex-col items-center"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white text-center mb-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm text-center mb-2">{post.date}</p>
                  <p className="text-gray-400 text-center mb-4">{post.excerpt}</p>
                  <Link
                    href={post.href}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">No blog posts found in this category.</p>
          )}
        </div>
      </section>
    </MainLayout>
  );
}