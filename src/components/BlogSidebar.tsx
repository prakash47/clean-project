
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CONFIG } from '@/config'; // Import config

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

type Category = {
  name: string;
  slug: string;
};

type BlogSidebarProps = {
  blogPosts: BlogPost[];
  categories: Category[];
};

export default function BlogSidebar({ blogPosts, categories }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog posts based on search query (title or excerpt)
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort blog posts by date (most recent first) and take the last 7 for Recent Posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 7);

  return (
    <aside className="sticky top-8">
      {/* Search Bar */}
      <div className="mb-8 bg-dark-900 p-8 rounded-lg shadow-lg border border-dark-800">
        <h3 className="text-xl font-semibold text-white mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-dark-950 text-white border border-dark-700 rounded-md py-2 px-4 focus:outline-none focus:border-brand-blue placeholder-gray-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-blue transition-colors">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Display search results */}
        {searchQuery && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Search Results</h4>
            {filteredPosts.length > 0 ? (
              <ul className="space-y-4">
                {filteredPosts.map(post => (
                  <li key={post.id} className="flex gap-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <Link href={`/blog/${post.slug}`} className="text-white hover:text-brand-blue transition-colors">
                        <h4 className="text-sm font-semibold">{post.title}</h4>
                      </Link>
                      {CONFIG.SHOW_DATES && (
                        <p className="text-xs text-gray-400">{post.date}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No posts found.</p>
            )}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="mb-8 bg-dark-900 p-8 rounded-lg shadow-lg border border-dark-800">
        <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.slug}>
              <Link href={`/blog/category/${category.slug}`} className="text-white hover:text-brand-blue transition-colors">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-dark-900 p-8 rounded-lg shadow-lg border border-dark-800">
        <h3 className="text-xl font-semibold text-white mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map(post => (
            <li key={post.id} className="flex gap-4">
              <div className="relative w-20 h-20 rounded-md overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                  sizes="80px"
                />
              </div>
              <div>
                <Link href={`/blog/${post.slug}`} className="text-white hover:text-brand-blue transition-colors">
                  <h4 className="text-sm font-semibold">{post.title}</h4>
                </Link>
                {CONFIG.SHOW_DATES && (
                  <p className="text-xs text-gray-400">{post.date}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

