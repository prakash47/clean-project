
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import BlogSidebar from '@/components/BlogSidebar';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';
import Head from 'next/head';
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { CONFIG } from '@/config';

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
  readTime: string;
  author: string;
  authorImage: string;
}

// Helper function to calculate read time
const calculateReadTime = (text: string) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
};

// Fetch blog posts for the given category slug with pagination
async function fetchCategoryData(categorySlug: string, after?: string) {
  console.log('Fetching category data for:', categorySlug);
  const queryString = `
    query GetCategoryData($categorySlug: String!, $after: String) {
      posts(where: { categoryName: $categorySlug }, first: 16, after: $after) {
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
  `;
  console.log('Raw query string:', queryString);
  try {
    const { data, errors } = await client.query({
      query: gql(queryString),
      variables: { categorySlug, after },
    });

    if (errors) {
      console.error('GraphQL Errors:', errors);
    }
    console.log('Fetched data:', data);
    const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => {
      console.warn('DOMPurify not loaded, returning unsanitized HTML:', html);
      return html;
    });
    const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
      const fullName = [post.author.node.firstName, post.author.node.lastName]
        .filter(Boolean)
        .join(' ');
      const rawExcerpt = post.excerpt || '';
      const truncatedExcerpt = rawExcerpt.length > 90 ? rawExcerpt.substring(0, 90) + '....' : rawExcerpt;
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        sanitizedExcerpt: sanitize(truncatedExcerpt),
        featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
        category: post.categories.nodes[0]?.name || 'Uncategorized',
        date: post.date,
        readTime: calculateReadTime(rawExcerpt),
        author: fullName || post.author.node.name || 'Unknown Author',
        authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
      };
    });

    return {
      blogPosts,
      hasNextPage: data.posts.pageInfo.hasNextPage,
      endCursor: data.posts.pageInfo.endCursor,
    };
  } catch (error) {
    console.error('GraphQL Error in fetchCategoryData:', error);
    throw error;
  }
}

// Fetch all categories
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

  return data.categories.nodes
    .filter((category: WordPressCategory) => category.name !== 'Uncategorized')
    .sort((a: WordPressCategory, b: WordPressCategory) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}

export default function BlogCategoryPage() {
  const params = useParams();
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [endCursor, setEndCursor] = useState<string | undefined>(undefined);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const categorySlug = params?.category as string;

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      try {
        const { blogPosts, hasNextPage, endCursor } = await fetchCategoryData(categorySlug);
        if (blogPosts.length === 0) {
          setIsLoading(false);
          notFound();
        } else {
          setDisplayedPosts(blogPosts.slice(0, 4));
          setHasMore(hasNextPage);
          setEndCursor(endCursor);
          const cats = await fetchCategories();
          setCategories(cats);
        }
      } catch (error) {
        console.error('Error loading initial data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (categorySlug) loadInitialData();
  }, [categorySlug]);

  const fetchMorePosts = async () => {
    if (!hasMore || !endCursor || isLoading) return;

    setIsLoading(true);
    try {
      const { blogPosts, hasNextPage, endCursor: newEndCursor } = await fetchCategoryData(categorySlug, endCursor);
      setDisplayedPosts(prev => [...prev, ...blogPosts]);
      setHasMore(hasNextPage);
      setEndCursor(newEndCursor);
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          fetchMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, endCursor, isLoading]);

  if (!categorySlug || (isLoading && displayedPosts.length === 0)) {
    return <div>Loading...</div>;
  }

  if (displayedPosts.length === 0) {
    notFound();
  }

  // Use the actual category name from the first post to preserve original capitalization
  const categoryName = displayedPosts[0]?.category || categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const categoryHeading = `${categoryName} Insights 2025 | Software & IT Solutions - Intention Infoservice`;

  return (
    <>
      <Head>
        <title>{categoryHeading}</title>
        <meta
          name="description"
          content={`Discover 2025 ${categoryName} insights from Intention Infoservice. Learn expert software & IT solutions for ${categoryName} to grow your business. Explore trends and tips today!`}
        />
        <meta name="keywords" content={`2025 ${categoryName} insights, software, IT solutions, grow your business, Intention Infoservice`} />
        <link rel="canonical" href={`https://intentioninfoservice.com/blog/category/${categorySlug}`} />
        <meta property="og:title" content={categoryHeading} />
        <meta property="og:description" content={`Discover 2025 ${categoryName} insights from Intention Infoservice. Learn expert software & IT solutions for ${categoryName} to grow your business. Explore trends and tips today!`} />
        <meta property="og:url" content={`https://intentioninfoservice.com/blog/category/${categorySlug}`} />
        <meta property="og:image" content={displayedPosts[0]?.featuredImage || 'https://placehold.co/1200x630.webp'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={categoryHeading} />
        <meta name="twitter:description" content={`Discover 2025 ${categoryName} insights from Intention Infoservice. Learn expert software & IT solutions for ${categoryName} to grow your business. Explore trends and tips today!`} />
        <meta name="twitter:image" content={displayedPosts[0]?.featuredImage || 'https://placehold.co/1200x630.webp'} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${categoryHeading}`,
            "description": displayedPosts[0]?.excerpt.substring(0, 160) || `Explore ${categoryName} category insights from Intention Infoservice.`,
            "url": `https://intentioninfoservice.com/blog/category/${categorySlug}`,
            "publisher": { "@type": "Organization", "name": "Intention Infoservice", "url": "https://intentioninfoservice.com", "logo": { "@type": "ImageObject", "url": "https://intentioninfoservice.com/logo.png", "width": 600, "height": 60 } },
            "hasPart": displayedPosts.map(post => ({
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
        <section className="relative bg-dark-900 py-20 sm:py-12 md:py-6">
          <div className="container mx-auto px-4 sm:px-6 md:px-[10%] text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {categoryName} Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and updates in the {categoryName} category from Intention Infoservice.
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 sm:px-6 md:px-[10%] py-6 flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-8">
              {categoryName} Blog
            </h2>
            {displayedPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {displayedPosts.map(post => (
                  <article key={post.id} className="blog-card group bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 border border-gray-800 hover:border-brand-blue/30">
                    {/* Featured Image */}
                    <div className="relative overflow-hidden">
                      <Link href={`/blog/${post.slug}`} className="block">
                        <Image
                          src={post.featuredImage}
                          alt={`Featured image for ${post.title}`}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88v5nPQAH8wL5zBLqZQAAAABJRU5ErkJggg=="
                        />
                      </Link>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-brand-blue to-brand-indigo text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-brand-blue" />
                          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(
                            'en-US',
                            {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            }
                          )}</time>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="text-brand-blue" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUser className="text-brand-blue" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.slug}`}>
                        <h3 
                          className="text-xl font-semibold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 cursor-pointer"
                        >
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p 
                        className="text-gray-400 mb-6 line-clamp-3 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.sanitizedExcerpt }}
                      />

                      {/* Read More Button */}
                      <div className="flex justify-between items-center">
                        <Button
                          size="sm"
                          className="group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 text-brand-blue border border-brand-blue hover:border-brand-blue"
                          icon={<FaArrowRight />}
                          iconPosition="right"
                          href={`/blog/${post.slug}`}
                          ariaLabel={`Read more about ${post.title}`}
                        >
                          Read More
                        </Button>
                        
                        {/* Social Proof */}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          <span>Trending</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No posts available.</p>
            )}
            {hasMore && (
              <div ref={observerRef} className="py-4 sm:py-8 text-center">
                <p className="text-gray-400">Loading more posts...</p>
              </div>
            )}
          </div>
          <aside className="w-full lg:w-1/3 mt-6 sm:mt-8 md:mt-[4.25rem]">
            <BlogSidebar blogPosts={displayedPosts} categories={categories} />
          </aside>
        </section>
      </div>
    </>
  );
}



