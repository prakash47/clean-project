import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';
import BlogSidebar from '@/components/BlogSidebar';
import { FaCalendarAlt, FaUser, FaTag, FaShare, FaClock, FaArrowLeft } from 'react-icons/fa';

// Define interfaces
interface WordPressPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText?: string;
    };
  };
  categories: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  tags: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  date: string;
  modified: string;
  author: {
    node: {
      name: string;
      firstName: string;
      lastName: string;
      description?: string;
      avatar?: {
        url: string;
      };
    };
  };
  seo?: {
    title?: string;
    metaDesc?: string;
    focuskw?: string;
  };
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  sanitizedContent: string;
  sanitizedExcerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  categorySlug: string;
  tags: string[];
  date: string;
  modified: string;
  author: string;
  authorBio: string;
  authorImage: string;
  readingTime: number;
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
}

interface WordPressCategory {
  name: string;
  slug: string;
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Intention Infoservice Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  const title = post.seoTitle || `${post.title} | Intention Infoservice Blog`;
  const description = post.seoDescription || post.sanitizedExcerpt || 
    `Read about ${post.title} on Intention Infoservice blog. Expert insights on software development, digital marketing, and business solutions.`;

  return {
    title,
    description,
    keywords: [
      post.focusKeyword,
      ...post.tags,
      post.category,
      'software development',
      'digital marketing',
      'business solutions',
      'technology insights',
      'Intention Infoservice'
    ].filter(Boolean),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Intention Infoservice',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://intentioninfoservice.com'),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://intentioninfoservice.com/blog/${post.slug}`,
      siteName: 'Intention Infoservice',
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt || post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.modified).toISOString(),
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.featuredImage],
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
  };
}

// Fetch individual blog post
async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const sanitize = typeof window !== 'undefined' && DOMPurify && DOMPurify.sanitize 
    ? DOMPurify.sanitize 
    : ((html: string) => html);

  try {
    const { data } = await client.query({
      query: gql`
        query GetBlogPost($slug: String!) {
          postBy(slug: $slug) {
            id
            slug
            title
            content
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            tags {
              nodes {
                name
                slug
              }
            }
            date
            modified
            author {
              node {
                name
                firstName
                lastName
                description
                avatar {
                  url
                }
              }
            }
            seo {
              title
              metaDesc
              focuskw
            }
          }
        }
      `,
      variables: { slug },
    });

    if (!data.postBy) {
      return null;
    }

    const post: WordPressPost = data.postBy;
    const fullName = [post.author.node.firstName, post.author.node.lastName]
      .filter(Boolean)
      .join(' ');

    // Calculate reading time (average 200 words per minute)
    const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      sanitizedContent: sanitize(post.content),
      sanitizedExcerpt: sanitize(post.excerpt),
      featuredImage: post.featuredImage?.node?.sourceUrl || '/images/default-blog-image.jpg',
      featuredImageAlt: post.featuredImage?.node?.altText || post.title,
      category: post.categories.nodes[0]?.name || 'Technology',
      categorySlug: post.categories.nodes[0]?.slug || 'technology',
      tags: post.tags.nodes.map(tag => tag.name),
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      modified: new Date(post.modified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      author: fullName || post.author.node.name || 'Intention Infoservice Team',
      authorBio: post.author.node.description || 'Expert at Intention Infoservice',
      authorImage: post.author.node.avatar?.url || '/images/default-avatar.jpg',
      readingTime,
      seoTitle: post.seo?.title,
      seoDescription: post.seo?.metaDesc,
      focusKeyword: post.seo?.focuskw,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch related posts
async function fetchRelatedPosts(categorySlug: string, currentSlug: string, limit: number = 3) {
  try {
    const { data } = await client.query({
      query: gql`
        query GetRelatedPosts($categorySlug: String!, $currentSlug: String!) {
          posts(where: { categoryName: $categorySlug }, first: 6) {
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
                }
              }
            }
          }
        }
      `,
      variables: { categorySlug, currentSlug },
    });

    return data.posts.nodes
      .filter((post: any) => post.slug !== currentSlug)
      .slice(0, limit)
      .map((post: any) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        featuredImage: post.featuredImage?.node?.sourceUrl || '/images/default-blog-image.jpg',
        category: post.categories.nodes[0]?.name || 'Technology',
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: [post.author.node.firstName, post.author.node.lastName]
          .filter(Boolean)
          .join(' ') || post.author.node.name || 'Intention Infoservice Team',
      }));
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

// Fetch categories for sidebar
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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await fetchRelatedPosts(post.categorySlug, post.slug);
  const categories = await fetchCategories();

  // Generate structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.sanitizedExcerpt,
    image: {
      '@type': 'ImageObject',
      url: post.featuredImage,
      width: 1200,
      height: 630,
      alt: post.featuredImageAlt,
    },
    author: {
      '@type': 'Person',
      name: post.author,
      description: post.authorBio,
      image: {
        '@type': 'ImageObject',
        url: post.authorImage,
        width: 100,
        height: 100,
      },
    },
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
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.modified).toISOString(),
    url: `https://intentioninfoservice.com/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://intentioninfoservice.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
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
        {/* Breadcrumb Navigation */}
        <nav className="bg-dark-900 py-4" aria-label="Breadcrumb">
          <div className="container mx-auto px-[5%] md:px-[10%]">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-brand-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link 
                  href={`/blog/category/${post.categorySlug}`} 
                  className="hover:text-brand-blue transition-colors"
                >
                  {post.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-300 truncate max-w-xs" title={post.title}>
                {post.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <header className="relative py-12 md:py-16 lg:py-20">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,160,227,0.1)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="container mx-auto px-[5%] md:px-[10%] relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Button */}
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-blue-400 transition-colors mb-6"
              >
                <FaArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <Link 
                  href={`/blog/category/${post.categorySlug}`}
                  className="inline-block bg-brand-blue text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {post.category}
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center gap-1 bg-dark-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      <FaTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-[5%] md:px-[10%] py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Article Content */}
            <article className="lg:w-2/3">
              {/* Featured Image */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
                />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-brand-blue prose-strong:text-white prose-code:text-brand-blue prose-pre:bg-dark-700 prose-blockquote:border-brand-blue prose-blockquote:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.sanitizedContent }}
              />

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-dark-700 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      About {post.author}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {post.authorBio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 p-6 bg-dark-700 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FaShare className="w-5 h-5" />
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://intentioninfoservice.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://intentioninfoservice.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://intentioninfoservice.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <BlogSidebar 
                blogPosts={relatedPosts}
                categories={categories}
              />
            </aside>
          </div>
        </main>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-[5%] md:px-[10%] py-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-dark-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative w-full h-48">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>{relatedPost.author}</span>
                        <span>•</span>
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Performance optimization: Preload critical resources */}
      <link rel="preload" href="/images/default-blog-image.jpg" as="image" />
      <link rel="preload" href="/images/default-avatar.jpg" as="image" />
    </>
  );
}

