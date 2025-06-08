'use client';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation'; // Import useParams for client-side params
import { useState, useEffect, useRef } from 'react'; // Add React hooks
import BlogSidebar from '@/components/BlogSidebar'; // Import BlogSidebar
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify'; // Verify this import
import { generateStaticParams } from '@/utils/category-utils'; // Updated import path
import { generateMetadata } from '@/utils/category-metadata'; // Updated import path

console.log('generateStaticParams imported:', generateStaticParams); // Debug log
console.log('generateMetadata imported:', generateMetadata); // Debug log

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

// Fetch blog posts for the given category slug with pagination
async function fetchCategoryData(categorySlug: string, after?: string) {
  console.log('Fetching category data for:', categorySlug); // Debug log
  const { data } = await client.query({
    query: gql`
      query GetCategoryData($categorySlug: String!, $after: String) {
        posts(where: { categoryName: $categorySlug }, first: 8, after: $after) {
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
    variables: { categorySlug, after },
  });

  console.log('Fetched data:', data); // Debug log
  // Transform blog posts
  const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => {
    console.warn('DOMPurify not loaded, returning unsanitized HTML:', html);
    return html;
  }); // Enhanced fallback with warning
  const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
    const fullName = [post.author.node.firstName, post.author.node.lastName]
      .filter(Boolean)
      .join(' ');
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      sanitizedExcerpt: sanitize(post.excerpt),
      featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
      category: post.categories.nodes[0]?.name || 'Uncategorized',
      date: new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      author: fullName || post.author.node.name || 'Unknown Author',
      authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
    };
  });

  return {
    blogPosts,
    hasNextPage: data.posts.pageInfo.hasNextPage,
    endCursor: data.posts.pageInfo.endCursor,
  };
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
  const params = useParams(); // Use useParams to get params as a Promise
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [endCursor, setEndCursor] = useState<string | undefined>(undefined);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const observerRef = useRef<HTMLDivElement | null>(null);

  const categorySlug = params?.category as string; // Unwrap params.category safely

  // Initial data fetch
  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true); // Set loading state
      try {
        const { blogPosts, hasNextPage, endCursor } = await fetchCategoryData(categorySlug);
        if (blogPosts.length === 0) {
          setIsLoading(false);
          notFound(); // Trigger 404 only if no posts
        } else {
          setDisplayedPosts(blogPosts.slice(0, 4)); // Initial 4 posts for 2 per row
          setHasMore(hasNextPage);
          setEndCursor(endCursor);
          const cats = await fetchCategories();
          setCategories(cats);
        }
      } catch (error) {
        console.error('Error loading initial data:', error);
      } finally {
        setIsLoading(false); // Reset loading state
      }
    };
    if (categorySlug) loadInitialData(); // Only fetch if categorySlug is defined
  }, [categorySlug]);

  // Infinite scroll fetch
  const fetchMorePosts = async () => {
    if (!hasMore || !endCursor || isLoading) return;

    setIsLoading(true); // Set loading state
    try {
      const { blogPosts, hasNextPage, endCursor: newEndCursor } = await fetchCategoryData(categorySlug, endCursor);
      setDisplayedPosts(prev => [...prev, ...blogPosts]);
      setHasMore(hasNextPage);
      setEndCursor(newEndCursor);
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setIsLoading(false); // Reset loading state
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
    return <div>Loading...</div>; // Temporary loading state to avoid immediate 404
  }

  if (displayedPosts.length === 0) {
    notFound();
  }

  return (
    <div className="bg-dark-950 text-white">
      {/* Upper Section with Posts and Sidebar */}
      <section className="bg-dark-950 py-20 md:py-8">
        <div className="w-full px-[10%]">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {categorySlug
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')} Blog Posts
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Posts Grid */}
            <div className="w-full lg:w-2/3">
              {displayedPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* 2 posts per row */}
                  {displayedPosts.map(post => (
                    <div
                      key={post.id}
                      className="bg-dark-900 p-8 rounded-lg shadow-lg hover:shadow-brand-blue/40 transition-shadow duration-300 flex flex-col items-center"
                    >
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <h3 className="text-xl font-semibold text-white text-center mb-2">{post.title}</h3>
                      <p className="text-gray-500 text-sm text-center mb-2">{post.date}</p>
                      <div className="text-gray-400 text-center mb-4" dangerouslySetInnerHTML={{ __html: post.sanitizedExcerpt }} />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="bg-gradient-to-r from-brand-blue to-blue-700 hover:bg-brand-blue/80 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
                      >
                        Read More
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center">No blog posts found in this category.</p>
              )}
              {/* Infinite Scroll Trigger */}
              {hasMore && (
                <div ref={observerRef} className="py-8 text-center">
                  <p className="text-gray-400">Loading more posts...</p>
                </div>
              )}
            </div>
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <BlogSidebar blogPosts={displayedPosts} categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}