import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostsList from '@/components/BlogPostsList';
import BlogSidebar from '@/components/BlogSidebar';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

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
  featuredImage: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
}

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
  });

  // Transform blog posts
  const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
    console.log('Excerpt from /blog:', post.excerpt); // Log for debugging
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
      category: post.categories.nodes[0]?.name || 'Uncategorized',
      date: new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      author: post.author.node.name,
      authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
    };
  });

  // Fetch and sort categories alphabetically (case-insensitive)
  console.log('Categories before sorting:', data.categories.nodes.map((cat: WordPressCategory) => cat.name));
  const categories: WordPressCategory[] = data.categories.nodes
    .filter((category: WordPressCategory) => category.name !== 'Uncategorized') // Exclude 'Uncategorized'
    .sort((a: WordPressCategory, b: WordPressCategory) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  console.log('Categories after sorting:', categories.map(cat => cat.name));

  return { blogPosts, categories };
}

// Enable ISR with a revalidation interval of 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
  const { blogPosts, categories } = await fetchBlogData();
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-8">
                  <div>
                    <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                      {blogPosts[0].category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{blogPosts[0].title}</h3>
                    <div className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: blogPosts[0].excerpt }} />
                    <div className="flex items-center gap-3">
                      <Image
                        src={blogPosts[0].authorImage}
                        alt={blogPosts[0].author}
                        width={40}
                        height={40}
                        className="rounded-full"
                        sizes="40px"
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