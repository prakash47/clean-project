import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostsList from '@/components/BlogPostsList';
import BlogSidebar from '@/components/BlogSidebar';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';
import Head from 'next/head';
import { CONFIG } from '@/config'; // Import config
import AnimatedTechBackground from '@/components/animations/AnimatedTechBackground'; // Import the new component

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
  readTime: string; // Added readTime property
}

export const metadata = {
  title: '2025 Software Development & IT Solutions Blog | Intention Infoservice',
  description: 'Explore 2025’s top software development & IT solutions trends with Intention Infoservice. Get expert insights on digital innovation, consulting, and more. Boost your business now!',
  metadataBase: new URL('https://intentioninfoservice.com'),
  openGraph: {
    url: 'https://intentioninfoservice.com/blog',
    title: '2025 Software Development & IT Solutions Blog | Intention Infoservice',
    description: 'Explore 2025’s top software development & IT solutions trends with Intention Infoservice. Get expert insights on digital innovation, consulting, and more. Boost your business now!',
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

// Helper to calculate read time
const calculateReadTime = (text: string) => {
  const wordCount = text.split(' ').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200)); // Average 200 words per minute
  return `${readTime} min read`;
};

// Fetch blog posts and categories from WordPress
async function fetchBlogData() {
  const { data } = await client.query({
    query: gql`
      query GetBlogData {
        posts(first: 16) {
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
        categories(first: 50) {
          nodes {
            name
            slug
          }
        }
      }
    `,
  }).catch(error => {
    console.error('GraphQL query error:', error);
    return { data: { posts: { nodes: [] }, categories: { nodes: [] } } };
  });

  const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
    const fullName = [post.author.node.firstName, post.author.node.lastName]
      .filter(Boolean)
      .join(' ');
    const sanitize = DOMPurify.sanitize || ((html: string) => html);
    const rawExcerpt = post.excerpt || '';
    const plainExcerpt = sanitize(rawExcerpt).replace(/<\/?[^>]+(>|$)/g, ''); // Remove all HTML tags
    const truncatedExcerpt = plainExcerpt.length > 90 ? plainExcerpt.substring(0, 90) + '....' : plainExcerpt;
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      sanitizedExcerpt: sanitize(truncatedExcerpt),
      featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
      category: post.categories.nodes[0]?.name || 'Uncategorized',
      date: new Date(post.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      author: fullName || post.author.node.name || 'Unknown Author',
      authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
      readTime: calculateReadTime(plainExcerpt), // Calculate and add readTime
    };
  });

  const categories: WordPressCategory[] = data.categories.nodes
    .filter((category: WordPressCategory) => category.name !== 'Uncategorized')
    .sort((a: WordPressCategory, b: WordPressCategory) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  return { blogPosts, categories };
}

export const revalidate = 60;

export default async function BlogPage() {
  const { blogPosts, categories } = await fetchBlogData();
  const initialPosts = blogPosts.slice(0, 4);

  return (
    <>
      <Head>
        <title>2025 Software Development & IT Solutions Blog | Intention Infoservice</title>
        <meta
          name="description"
          content="Explore 2025’s top software development & IT solutions trends with Intention Infoservice. Get expert insights on digital innovation, consulting, and more. Boost your business now!"
        />
        <meta name="keywords" content="2025 software development, IT solutions, digital innovation, consulting, Intention Infoservice" />
        <link rel="canonical" href="https://intentioninfoservice.com/blog" />
        <meta property="og:title" content="2025 Software Development & IT Solutions Blog | Intention Infoservice" />
        <meta property="og:description" content="Explore 2025’s top software development & IT solutions trends with Intention Infoservice. Get expert insights on digital innovation, consulting, and more. Boost your business now!" />
        <meta property="og:url" content="https://intentioninfoservice.com/blog" />
        <meta property="og:image" content={blogPosts[0]?.featuredImage || 'https://placehold.co/1200x630.webp?text=Intention+Infoservice+Blog'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2025 Software Development & IT Solutions Blog | Intention Infoservice" />
        <meta name="twitter:description" content="Explore 2025’s top software development & IT solutions trends with Intention Infoservice. Get expert insights on digital innovation, consulting, and more. Boost your business now!" />
        <meta name="twitter:image" content={blogPosts[0]?.featuredImage || 'https://placehold.co/1200x630.webp?text=Intention+Infoservice+Blog'} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Intention Infoservice Blog",
            "description": blogPosts[0]?.excerpt.substring(0, 160) || "Explore the latest insights, trends, and updates in software development, technology, and digital solutions.",
            "url": "https://intentioninfoservice.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Intention Infoservice",
              "url": "https://intentioninfoservice.com",
              "logo": { "@type": "ImageObject", "url": "https://intentioninfoservice.com/logo.png", "width": 600, "height": 60 },
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.sanitizedExcerpt,
              "url": `https://intentioninfoservice.com/blog/${post.slug}`,
              "datePublished": post.date,
              "author": { "@type": "Person", "name": post.author },
              "image": post.featuredImage,
            })),
          })}
        </script>
      </Head>
      <div className="bg-dark-950 text-white">
        <section className="relative bg-dark-900 py-20 sm:py-12 overflow-hidden">
          <AnimatedTechBackground />
          <div className="container mx-auto px-4 sm:px-6 md:px-[10%] text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Latest Insights in Technology
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Discover expert insights on software development,Web Development, Mobile App Development, digital marketing, UI/UX design, and custom business solutions to accelerate your business growth.
            </p>
          </div>
        </section>


        <section className="container mx-auto px-4 sm:px-6 md:px-[10%] py-6 flex flex-col sm:flex-col md:flex-col lg:flex-row gap-6 sm:gap-8">
          <BlogPostsList initialPosts={initialPosts} allPosts={blogPosts} />
          <aside className="w-full lg:w-1/3 sm:mt-8 md:mt-[4.25rem]">
            <BlogSidebar blogPosts={blogPosts} categories={categories} />
          </aside>
        </section>
      </div>
    </>
  );
}


