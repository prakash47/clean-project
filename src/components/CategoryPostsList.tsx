'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
};

type CategoryPostsListProps = {
  initialPosts: BlogPost[];
  allPosts: BlogPost[];
};

export default function CategoryPostsList({ initialPosts, allPosts }: CategoryPostsListProps) {
  const [displayedPosts, setDisplayedPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll logic for main posts
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // Load more posts
          const nextPosts = allPosts.slice(displayedPosts.length, displayedPosts.length + 4);
          setDisplayedPosts(prev => [...prev, ...nextPosts]);
          if (displayedPosts.length + nextPosts.length >= allPosts.length) {
            setHasMore(false);
          }
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
  }, [displayedPosts, hasMore, allPosts]);

  // Sort blog posts by date (most recent first) and take the last 7 for Recent Posts
  const recentPosts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 7);

  return (
    <div className="w-full">
      {/* Main Posts Section */}
      <h2 className="text-3xl font-bold text-white mb-8">More Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div className="text-gray-400 text-center mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <Link
              href={`/blog/${post.slug}`}
              className="bg-gradient-to-r from-brand-blue to-blue-700 hover:bg-brand-blue/80 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      {/* Infinite Scroll Trigger */}
      {hasMore && (
        <div ref={observerRef} className="py-8 text-center">
          <p className="text-gray-400">Loading more posts...</p>
        </div>
      )}

      {/* Recent Posts Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-white mb-8">Recent Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <div
              key={post.id}
              className="bg-dark-900 p-8 rounded-lg shadow-lg hover:shadow-brand-blue/40 transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="relative w-full h-20 rounded-md overflow-hidden mb-4">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                  sizes="80px"
                />
              </div>
              <Link href={`/blog/${post.slug}`} className="text-white hover:text-brand-blue transition-colors">
                <h4 className="text-lg font-semibold text-center">{post.title}</h4>
              </Link>
              <p className="text-sm text-gray-500 text-center">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}