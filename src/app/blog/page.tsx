import { Metadata } from 'next/types';
import BlogPostsList from '@/components/BlogPostsList';
import BlogSidebar from '@/components/BlogSidebar';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';

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
      slug: string;
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

// Define the structure of the raw WordPress category data
interface WordPressCategory {
  name: string;
  slug: string;
}

// Define the structure of the transformed blog post data
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  sanitizedExcerpt: string;
  featuredImage: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
}

// Enhanced metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Blog | Latest Software Development & IT Solutions Insights 2025 - Intention Infoservice',
  description: 'Discover expert insights on software development, digital marketing, UI/UX design, and custom business solutions. Stay updated with the latest tech trends and industry best practices from Intention Infoservice.',
  keywords: [
    'software development blog',
    'IT solutions insights',
    'digital marketing trends 2025',
    'UI/UX design tips',
    'custom business solutions',
    'technology blog',
    'web development insights',
    'mobile app development',
    'cloud solutions',
    'cybersecurity tips',
    'Intention Infoservice blog'
  ],
  authors: [{ name: 'Intention Infoservice Team' }],
  creator: 'Intention Infoservice',
  publisher: 'Intention Infoservice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://intentioninfoservice.com'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | Latest Software Development & IT Solutions Insights 2025 - Intention Infoservice',
    description: 'Discover expert insights on software development, digital marketing, UI/UX design, and custom business solutions. Stay updated with the latest tech trends and industry best practices.',
    url: 'https://intentioninfoservice.com/blog',
    siteName: 'Intention Infoservice',
    images: [
      {
        url: 'https://intentioninfoservice.com/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Intention Infoservice Blog - Software Development & IT Solutions Insights',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Latest Software Development & IT Solutions Insights 2025',
    description: 'Discover expert insights on software development, digital marketing, UI/UX design, and custom business solutions from Intention Infoservice.',
    images: ['https://intentioninfoservice.com/images/blog-twitter-image.jpg'],
    creator: '@IntentionInfo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// Fetch blog posts with pagination
async function fetchBlogPosts(after?: string) {
  const sanitize = typeof window !== 'undefined' && DOMPurify && DOMPurify.sanitize 
    ? DOMPurify.sanitize 
    : ((html: string) => html);

  try {
    const { data } = await client.query({
      query: gql`
        query GetBlogPosts($after: String) {
          posts(first: 12, after: $after) {
            pageInfo {
              hasNextPage
              endCursor
            }
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
              categories {
                nodes {
                  name
                  slug
                }
              }
              date
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      `,
      variables: { after },
    });

    const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
      const fullName = [post.author.node.firstName, post.author.node.lastName]
        .filter(Boolean)
        .join(' ');
      const rawExcerpt = post.excerpt || '';
      const truncatedExcerpt = rawExcerpt.length > 120 ? rawExcerpt.substring(0, 120) + '...' : rawExcerpt;
      
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        sanitizedExcerpt: sanitize(truncatedExcerpt),
        featuredImage: post.featuredImage?.node?.sourceUrl || '/images/default-blog-image.jpg',
        category: post.categories.nodes[0]?.name || 'Technology',
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: fullName || post.author.node.name || 'Intention Infoservice Team',
        authorImage: post.author.node.avatar?.url || '/images/default-avatar.jpg',
      };
    });

    return {
      blogPosts,
      hasNextPage: data.posts.pageInfo.hasNextPage,
      endCursor: data.posts.pageInfo.endCursor,
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      blogPosts: [],
      hasNextPage: false,
      endCursor: null,
    };
  }
}

// Fetch all categories
async function fetchCategories(): Promise<WordPressCategory[]> {
  try {
    const { data } = await client.query({
      query: gql`
        query GetCategories {
          categories(first: 50) {
            nodes {
              name
              slug
            }
          }
        }
      `,
    });

    return data.categories.nodes
      .filter((category: WordPressCategory) => category.name !== 'Uncategorized')
      .sort((a: WordPressCategory, b: WordPressCategory) => 
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function BlogPage() {
  const { blogPosts, hasNextPage, endCursor } = await fetchBlogPosts();
  const categories = await fetchCategories();

  // Generate structured data for the blog page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Intention Infoservice Blog',
    description: 'Expert insights on software development, digital marketing, UI/UX design, and custom business solutions.',
    url: 'https://intentioninfoservice.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Intention Infoservice',
      url: 'https://intentioninfoservice.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://intentioninfoservice.com/images/logo.png',
        width: 300,
        height: 60,
      },
      sameAs: [
        'https://www.linkedin.com/company/intention-infoservice',
        'https://twitter.com/IntentionInfo',
        'https://www.facebook.com/IntentionInfoservice',
      ],
    },
    blogPost: blogPosts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.sanitizedExcerpt,
      url: `https://intentioninfoservice.com/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        '@type': 'Person',
        name: post.author,
      },
      image: {
        '@type': 'ImageObject',
        url: post.featuredImage,
        width: 800,
        height: 400,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Intention Infoservice',
        logo: {
          '@type': 'ImageObject',
          url: 'https://intentioninfoservice.com/images/logo.png',
          width: 300,
          height: 60,
        },
      },
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-dark-950 to-dark-800 text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 py-16 md:py-20 lg:py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.1)_0%,_transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-brand-blue rounded-full blur-xl" />
            <div className="absolute top-32 right-20 w-16 h-16 bg-brand-blue rounded-full blur-lg" />
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-brand-blue rounded-full blur-md" />
          </div>

          <div className="container mx-auto px-[5%] md:px-[10%] relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Latest Insights in{' '}
                <span className="bg-gradient-to-r from-brand-blue to-blue-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover expert insights on software development, digital marketing, UI/UX design, 
                and custom business solutions to accelerate your business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Software Development
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Digital Marketing
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  UI/UX Design
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  Business Solutions
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-[5%] md:px-[10%] py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Blog Posts */}
            <main className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Latest Articles
                </h2>
                <p className="text-gray-400">
                  Stay updated with the latest trends and insights in technology and business.
                </p>
              </div>
              
              <BlogPostsList 
                initialPosts={blogPosts}
                hasNextPage={hasNextPage}
                endCursor={endCursor}
              />
            </main>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <BlogSidebar 
                blogPosts={blogPosts}
                categories={categories}
              />
            </aside>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-dark-800 to-dark-700 py-16 md:py-20">
          <div className="container mx-auto px-[5%] md:px-[10%] text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and trends delivered directly to your inbox. 
              Join thousands of professionals who trust our expertise.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg bg-dark-600 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                aria-label="Email address for newsletter subscription"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-brand-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-dark-800"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Performance optimization: Preload critical resources */}
      <link rel="preload" href="/images/default-blog-image.jpg" as="image" />
      <link rel="preload" href="/images/default-avatar.jpg" as="image" />
    </>
  );
}

