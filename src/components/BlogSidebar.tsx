'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

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
    <aside className="lg:w-1/3 sticky top-8 md:mt-[4.25rem]">
      {/* Search Bar */}
      <div className="mb-8 bg-gray-200 p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-brand-blue"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand-blue transition-colors">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Display search results */}
        {searchQuery && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Search Results</h4>
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
                      <Link href={`/blog/${post.slug}`} className="text-gray-800 hover:text-brand-blue transition-colors">
                        <h4 className="text-sm font-semibold">{post.title}</h4>
                      </Link>
                      <p className="text-xs text-gray-600">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No posts found.</p>
            )}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="mb-8 bg-gray-200 p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.slug}>
              <Link href={`/blog/category/${category.slug}`} className="text-gray-800 hover:text-brand-blue transition-colors">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h3>
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
                <Link href={`/blog/${post.slug}`} className="text-gray-800 hover:text-brand-blue transition-colors">
                  <h4 className="text-sm font-semibold">{post.title}</h4>
                </Link>
                <p className="text-xs text-gray-600">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}