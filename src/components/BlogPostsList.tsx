'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';
import { CONFIG } from '@/config'; // Import config

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
      .filter((newPost: WordPressPost) => !displayedPosts.some(post => post.id === newPost.id))
      .map((post: WordPressPost) => {
        const fullName = [post.author.node.firstName, post.author.node.lastName].filter(Boolean).join(' ');
        const rawExcerpt = post.excerpt || '';
        const truncatedExcerpt = rawExcerpt.length > 90 ? rawExcerpt.substring(0, 90) + '....' : rawExcerpt;
        return {
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          sanitizedExcerpt: DOMPurify.sanitize(truncatedExcerpt),
          featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
          category: post.categories.nodes[0]?.name || 'Uncategorized',
          date: post.date,
          author: fullName || post.author.node.name || 'Unknown Author',
          authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
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
                {CONFIG.SHOW_DATES && (
                  <p className="text-sm text-gray-400">{post.date}</p>
                )}
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
                  </div>
                </div>
              </div>
            </Link>
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