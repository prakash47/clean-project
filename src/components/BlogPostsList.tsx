
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import Button from '@/components/ui/Button';

// Define the structure of the raw WordPress post data from GraphQL
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

type BlogPost = {
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
  readTime: string;
};

type BlogPostsListProps = {
  initialPosts: BlogPost[];
  allPosts: BlogPost[];
};

export default function BlogPostsList({ initialPosts, allPosts }: BlogPostsListProps) {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>(initialPosts);
  const [hasMore, setHasMore] = useState(true);
  const [endCursor, setEndCursor] = useState<string | undefined>(undefined);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Helper to calculate read time
  const calculateReadTime = (text: string) => {
    const wordCount = text.split(' ').length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200)); // Average 200 words per minute
    return `${readTime} min read`;
  };

  // Fetch more posts with pagination, excluding already displayed posts
  const fetchMorePosts = async () => {
    const { data } = await client.query({
      query: gql`
        query GetMorePosts($after: String) {
          posts(first: 4, after: $after) {
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
      variables: { after: endCursor },
    });

    const newPosts: BlogPost[] = data.posts.nodes
      .filter((newPost: WordPressPost) => !displayedPosts.some(post => post.id === newPost.id)) // Explicitly typed newPost
      .map((post: WordPressPost) => {
        const fullName = [post.author.node.firstName, post.author.node.lastName].filter(Boolean).join(' ');
        const rawExcerpt = post.excerpt || '';
        const plainExcerpt = DOMPurify.sanitize(rawExcerpt).replace(/<\/?[^>]+(>|$)/g, ''); // Remove all HTML tags
        const truncatedExcerpt = plainExcerpt.length > 120 ? plainExcerpt.substring(0, 120) + '...' : plainExcerpt;

        return {
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: truncatedExcerpt,
          sanitizedExcerpt: DOMPurify.sanitize(truncatedExcerpt),
          featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
          category: post.categories.nodes[0]?.name || 'Uncategorized',
          date: new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          author: fullName || post.author.node.name || 'Unknown Author',
          authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
          readTime: calculateReadTime(plainExcerpt),
        };
      });

    setDisplayedPosts(prev => [...prev, ...newPosts]);
    setHasMore(data.posts.pageInfo.hasNextPage);
    setEndCursor(data.posts.pageInfo.endCursor);
  };

  // Infinite scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
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
  }, [hasMore, endCursor]);

  return (
    <div className="lg:w-2/3">
      <h2 className="text-3xl font-bold text-white mb-8">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedPosts.map(post => (
          <article
            key={post.id}
            className="blog-card group bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 border border-gray-800 hover:border-brand-blue/30"
          >
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
                  <time dateTime={post.date}>{post.date}</time>
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
      {/* Infinite Scroll Trigger */}
      {hasMore && (
        <div ref={observerRef} className="py-8 text-center">
          <p className="text-gray-400">Loading more posts...</p>
        </div>
      )}
    </div>
  );
}


