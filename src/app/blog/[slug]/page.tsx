import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import CommentForm from '@/components/CommentForm';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

// Define the structure of the raw WordPress post data for a single post
interface WordPressPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Content is always a string in the GraphQL response
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
      description?: string;
    };
  };
}

// Define the structure of the raw WordPress post data for all posts (used for related posts)
interface WordPressRelatedPost {
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

// Define the structure of the transformed blog post data
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Make content required since the query always returns it
  featuredImage: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  authorBio?: string;
}

// Fetch a single post by slug
async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data } = await client.query({
    query: gql`
      query GetPostBySlug($slug: String!) {
        postBy(slug: $slug) {
          id
          slug
          title
          excerpt
          content
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
              description
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  const post: WordPressPost | null = data.postBy;
  if (!post) return null;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content || '', // Ensure content is a string (GraphQL always returns it, but fallback to empty string for safety)
    featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
    category: post.categories.nodes[0]?.name || 'Uncategorized',
    date: new Date(post.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    author: post.author.node.name,
    authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
    authorBio: post.author.node.description || 'No bio available.',
  };
}

// Fetch all posts to find related posts
async function fetchAllPosts(): Promise<BlogPost[]> {
  const { data } = await client.query({
    query: gql`
      query GetAllPosts {
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
      }
    `,
  });

  return data.posts.nodes.map((p: WordPressRelatedPost) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    featuredImage: p.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
    category: p.categories.nodes[0]?.name || 'Uncategorized',
    date: new Date(p.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    author: p.author.node.name,
    authorImage: p.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
  }));
}

// Dynamic metadata based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);
  if (!post) {
    return {
      title: 'Post Not Found - Intention Infoservice',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
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
    "publisher": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://intentioninfoservice.com/blog/${post.slug}`,
    },
  };

  return {
    title: `${post.title} - Intention Infoservice`,
    description: post.excerpt,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
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
      canonical: `https://intentioninfoservice.com/blog/${post.slug}`,
    },
    other: {
      'script:ld+json': JSON.stringify(schemaMarkup),
    },
  };
}

// Enable ISR with a revalidation interval of 60 seconds
export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);
  if (!post) {
    notFound();
  }

  const allPosts: BlogPost[] = await fetchAllPosts();
  const relatedPosts: BlogPost[] = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const schemaMarkup = {
    "@context": "https://schema.org",
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
    "publisher": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://intentioninfoservice.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="bg-dark-950 text-gray-800 font-['Inter',sans-serif]">
      {/* Schema Markup for Blog Post */}
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify(schemaMarkup)}</script>`,
      }} />

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-[10%]">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex items-end p-6">
              <div>
                <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
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
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 flex flex-col lg:flex-row gap-8">
        {/* Post Content */}
        <article className="lg:w-2/3">
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-800">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share Buttons */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Share This Post</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?url=https://intentioninfoservice.com/blog/${post.slug}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-brand-blue text-white rounded-full hover:bg-brand-blue/80 transition-colors"
                  title="Share on Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://intentioninfoservice.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-brand-blue text-white rounded-full hover:bg-brand-blue/80 transition-colors"
                  title="Share on Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://intentioninfoservice.com/blog/${post.slug}&title=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-brand-blue text-white rounded-full hover:bg-brand-blue/80 transition-colors"
                  title="Share on LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{post.author}</h3>
                  <p className="text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Leave a Reply Section */}
            <CommentForm />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3 sticky top-8">
          {/* Categories */}
          <div className="mb-8 bg-gray-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Software Development', 'Business Solutions', 'Digital Marketing', 'UI/UX Design', 'Technology'].map(category => (
                <li key={category}>
                  <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-800 hover:text-brand-blue transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Posts</h3>
              <ul className="space-y-4">
                {relatedPosts.map((relatedPost: BlogPost) => (
                  <li key={relatedPost.id} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <Link href={`/blog/${relatedPost.slug}`} className="text-gray-800 hover:text-brand-blue transition-colors">
                        <h4 className="text-sm font-semibold">{relatedPost.title}</h4>
                      </Link>
                      <p className="text-xs text-gray-600">{relatedPost.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query GetAllPostSlugs {
        posts(first: 16) {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return data.posts.nodes.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}