'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify';
import { CONFIG } from '@/config'; // Import config

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

type CategoryPostsListProps = {
  initialPosts: BlogPost[];
  allPosts: BlogPost[];
  hasNextPage?: boolean;
  endCursor?: string;
  categorySlug: string;
};

export default function CategoryPostsList({ initialPosts, allPosts, hasNextPage: initialHasNextPage, endCursor: initialEndCursor, categorySlug }: CategoryPostsListProps) {
  const [displayedPosts, setDisplayedPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(initialHasNextPage ?? true);
  const [endCursor, setEndCursor] = useState<string | undefined>(initialEndCursor);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Fetch more posts with pagination
  const fetchMorePosts = async () => {
    const { data } = await client.query({
      query: gql`
        query GetMoreCategoryPosts($categorySlug: String!, $after: String) {
          posts(where: { categoryName: $categorySlug }, first: 4, after: $after) {
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
      variables: { categorySlug, after: endCursor },
    });

    const newPosts: BlogPost[] = data.posts.nodes.map((post: any) => {
      const fullName = [post.author.node.firstName, post.author.node.lastName].filter(Boolean).join(' ');
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        sanitizedExcerpt: DOMPurify.sanitize(post.excerpt),
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
  }, [hasMore, endCursor, categorySlug]);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-white mb-8">More Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            {CONFIG.SHOW_DATES && (
              <p className="text-gray-500 text-sm text-center mb-2">{post.date}</p>
            )}
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
      {hasMore && (
        <div ref={observerRef} className="py-8 text-center">
          <p className="text-gray-400">Loading more posts...</p>
        </div>
      )}
    </div>
  );
}