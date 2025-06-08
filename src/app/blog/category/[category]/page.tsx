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
import Head from 'next/head';

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
  console.log('Raw query string:', queryString); // Debug raw query
  try {
    const { data, errors } = await client.query({
      query: gql(queryString),
      variables: { categorySlug, after },
    });

    if (errors) {
      console.error('GraphQL Errors:', errors);
    }
    console.log('Fetched data:', data); // Debug log
    // Transform blog posts with truncated excerpts
    const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => {
      console.warn('DOMPurify not loaded, returning unsanitized HTML:', html);
      return html;
    }); // Enhanced fallback with warning
    const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
      const fullName = [post.author.node.firstName, post.author.node.lastName]
        .filter(Boolean)
        .join(' ');
      const rawExcerpt = post.excerpt || ''; // Ensure excerpt exists
      const truncatedExcerpt = rawExcerpt.length > 90 ? rawExcerpt.substring(0, 90) + '....' : rawExcerpt;
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        sanitizedExcerpt: sanitize(truncatedExcerpt),
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
  } catch (error) {
    console.error('GraphQL Error in fetchCategoryData:', error);
    throw error; // Re-throw to handle in useEffect
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
          setDisplayedPosts(blogPosts.slice(0, 4)); // Initial 4 posts
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

  // Dynamic heading based on categorySlug
  const categoryHeading = `${categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')} Blog Posts`;

  return (
    <>
      <Head>
        <title>{categoryHeading} - Intention Infoservice</title>
        <meta
          name="description"
          content={displayedPosts[0]?.excerpt.substring(0, 160) || `Explore ${categorySlug} category insights from Intention Infoservice.`}
        />
        <meta name="keywords" content={`${categorySlug}, software development, technology, Intention Infoservice`} />
        <link rel="canonical" href={`https://intentioninfoservice.com/blog/category/${categorySlug}`} />
        <meta property="og:title" content={`${categoryHeading} - Intention Infoservice`} />
        <meta property="og:description" content={displayedPosts[0]?.excerpt.substring(0, 160) || `Explore ${categorySlug} category insights from Intention Infoservice.`} />
        <meta property="og:url" content={`https://intentioninfoservice.com/blog/category/${categorySlug}`} />
        <meta property="og:image" content={displayedPosts[0]?.featuredImage || 'https://placehold.co/1200x630.webp'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${categoryHeading} - Intention Infoservice`} />
        <meta name="twitter:description" content={displayedPosts[0]?.excerpt.substring(0, 160) || `Explore ${categorySlug} category insights from Intention Infoservice.`} />
        <meta name="twitter:image" content={displayedPosts[0]?.featuredImage || 'https://placehold.co/1200x630.webp'} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${categoryHeading} - Intention Infoservice`,
            "description": displayedPosts[0]?.excerpt.substring(0, 160) || `Explore ${categorySlug} category insights from Intention Infoservice.`,
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
        {/* Hero Section */}
        <section className="relative bg-dark-900 py-20 md:py-6">
          <div className="container mx-auto px-4 md:px-[10%] text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {categorySlug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')} Blog
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and updates in the {categorySlug} category from Intention Infoservice.
            </p>
          </div>
        </section>

        {/* Featured Post Section */}
        {displayedPosts.length > 0 && displayedPosts[0] && (
          <section className="container mx-auto px-4 md:px-[10%] py-6">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Post</h2>
            <div className="relative">
              <Link href={`/blog/${displayedPosts[0].slug}`}>
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={displayedPosts[0].featuredImage}
                    alt={displayedPosts[0].title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-900/80 flex items-end p-6">
                    <div>
                      <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                        {displayedPosts[0].category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 whitespace-normal break-words">
                        {displayedPosts[0].title}
                      </h3>
                      <div className="text-gray-300 mb-4 overflow-hidden text-ellipsis whitespace-nowrap" dangerouslySetInnerHTML={{ __html: displayedPosts[0].sanitizedExcerpt }} />
                      <div className="flex items-center gap-3">
                        <Image
                          src={displayedPosts[0].authorImage}
                          alt={displayedPosts[0].author}
                          width={40}
                          height={40}
                          className="rounded-full"
                          sizes="40px"
                        />
                        <div>
                          <p className="text-sm text-gray-400">{displayedPosts[0].author}</p>
                          <p className="text-sm text-gray-400">{displayedPosts[0].date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Main Section with Recent Posts and Sidebar */}
        <section className="container mx-auto px-4 md:px-[10%] py-6 flex flex-col lg:flex-row gap-8">
          {/* Recent Posts Grid */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-8">{categoryHeading}</h2>
            {displayedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedPosts.map(post => (
                  <article key={post.id} className="bg-dark-900 rounded-lg overflow-hidden">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative w-full h-[200px]">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-8">
                        <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                        <div className="text-gray-400 mb-4" dangerouslySetInnerHTML={{ __html: post.sanitizedExcerpt }} />
                        <div className="flex items-center gap-3">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="rounded-full"
                            sizes="32px"
                          />
                          <div>
                            <p className="text-sm text-gray-400">{post.author}</p>
                            <p className="text-sm text-gray-400">{post.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No posts available.</p>
            )}
            {/* Infinite Scroll Trigger */}
            {hasMore && (
              <div ref={observerRef} className="py-8 text-center">
                <p className="text-gray-400">Loading more posts...</p>
              </div>
            )}
          </div>
          {/* Sidebar */}
          <aside className="lg:w-1/3 min-w-[300px]">
            <BlogSidebar blogPosts={displayedPosts} categories={categories} />
          </aside>
        </section>
      </div>
    </>
  );
}