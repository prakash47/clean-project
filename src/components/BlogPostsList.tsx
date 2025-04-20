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

type BlogPostsListProps = {
  initialPosts: BlogPost[];
  allPosts: BlogPost[];
};

export default function BlogPostsList({ initialPosts, allPosts }: BlogPostsListProps) {
  const [displayedPosts, setDisplayedPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll logic
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
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="rounded-full"
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
      {/* Infinite Scroll Trigger */}
      {hasMore && (
        <div ref={observerRef} className="py-8 text-center">
          <p className="text-gray-400">Loading more posts...</p>
        </div>
      )}
    </div>
  );
}