import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify'; // Verify this import

// Define the structure of the raw WordPress post data for a single post
interface WordPressPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
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
  content: string;
  sanitizedContent: string;
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
              firstName
              lastName
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

  console.log('Excerpt from /blog/[slug]:', post.excerpt);
  const fullName = [post.author.node.firstName, post.author.node.lastName]
    .filter(Boolean)
    .join(' ');
  const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => {
    console.warn('DOMPurify not loaded, returning unsanitized HTML:', html);
    return html;
  }); // Enhanced fallback with warning
  const rawExcerpt = post.excerpt || '';
  const sanitizedExcerpt = sanitize(rawExcerpt); // Sanitize HTML
  const plainExcerpt = sanitizedExcerpt.replace(/<\/?p>/g, ''); // Remove <p> tags manually
  const truncatedExcerpt = plainExcerpt.length > 90 ? plainExcerpt.substring(0, 90) + '....' : plainExcerpt;
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    sanitizedExcerpt: truncatedExcerpt, // Use plain-text truncated excerpt for display
    content: post.content || '',
    sanitizedContent: sanitize(post.content || ''),
    featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
    category: post.categories.nodes[0]?.name || 'Uncategorized',
    date: new Date(post.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    author: fullName || post.author.node.name || 'Unknown Author',
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
  });

  const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => html);
  return data.posts.nodes.map((p: WordPressRelatedPost) => {
    const fullName = [p.author.node.firstName, p.author.node.lastName]
      .filter(Boolean)
      .join(' ');
    const rawExcerpt = p.excerpt || '';
    const sanitizedExcerpt = sanitize(rawExcerpt); // Sanitize HTML
    const plainExcerpt = sanitizedExcerpt.replace(/<\/?p>/g, ''); // Remove <p> tags manually
    const truncatedExcerpt = plainExcerpt.length > 90 ? plainExcerpt.substring(0, 90) + '....' : plainExcerpt;
    return {
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      sanitizedExcerpt: truncatedExcerpt, // Use plain-text truncated excerpt for display
      content: '',
      sanitizedContent: '',
      featuredImage: p.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
      category: p.categories.nodes[0]?.name || 'Uncategorized',
      date: new Date(p.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      author: fullName || p.author.node.name || 'Unknown Author',
      authorImage: p.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
    };
  });
}

// Fetch categories from WordPress
async function fetchCategories(): Promise<WordPressCategory[]> {
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

  // Debug categories before and after sorting
  console.log('Categories before sorting:', data.categories.nodes.map((cat: WordPressCategory) => cat.name));
  const categories: WordPressCategory[] = data.categories.nodes
    .filter((category: WordPressCategory) => category.name !== 'Uncategorized')
    .sort((a: WordPressCategory, b: WordPressCategory) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  console.log('Categories after sorting:', categories.map(cat => cat.name));

  return categories;
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
    "description": post.sanitizedExcerpt,
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
    description: post.sanitizedExcerpt,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/${post.slug}`,
      title: post.title,
      description: post.sanitizedExcerpt,
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
  const categories: WordPressCategory[] = await fetchCategories();
  const relatedPosts: BlogPost[] = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.sanitizedExcerpt,
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
      <section className="relative bg-dark-900 py-16 md:py-8">
        <div className="container mx-auto px-4 md:px-[10%]">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    sizes="40px"
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
              <h2>{post.title}</h2>

              <div dangerouslySetInnerHTML={{ __html: post.sanitizedContent }} />
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
                  sizes="60px"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{post.author}</h3>
                  <p className="text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3 sticky top-8">
          {/* Categories */}
          <div className="mb-8 bg-gray-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.slug}>
                  <Link href={`/blog/category/${category.slug}`} className="text-gray-800 hover:text-brand-blue transition-colors">
                    {category.name}
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
                        sizes="80px"
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