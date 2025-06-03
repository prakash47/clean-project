import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryPostsList from '@/components/CategoryPostsList'; // Import the new component
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

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
  featuredImage: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
}

// Generate static params for pre-rendering category pages
export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query GetAllCategorySlugs {
        categories(first: 50) {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return data.categories.nodes
    .filter((category: WordPressCategory) => category.slug !== 'uncategorized') // Exclude 'uncategorized'
    .map((category: WordPressCategory) => ({
      category: category.slug,
    }));
}

// Generate metadata dynamically based on the category
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categorySlug = resolvedParams?.category;

  const { data } = await client.query({
    query: gql`
      query GetCategoryBySlug($slug: [String]) {
        categories(where: { slug: $slug }) {
          nodes {
            name
          }
        }
      }
    `,
    variables: { slug: [categorySlug] },
  });

  const categoryName = data.categories.nodes[0]?.name || 'Category Not Found';

  if (!data.categories.nodes.length) {
    return {
      title: 'Category Not Found - Intention Infoservice',
      description: 'The category you are looking for does not exist.',
    };
  }

  return {
    title: `${categoryName} Blog Posts - Intention Infoservice`,
    description: `Explore blog posts in the ${categoryName} category from Intention Infoservice.`,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/category/${categorySlug}`,
      title: `${categoryName} Blog Posts - Intention Infoservice`,
      description: `Explore blog posts in the ${categoryName} category from Intention Infoservice.`,
      images: [
        {
          url: '/images/blog-og-image.webp',
          width: 1200,
          height: 630,
          alt: `${categoryName} Blog Posts`,
        },
      ],
      siteName: 'Intention Infoservice',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@intentioninfo',
      creator: '@intentioninfo',
    },
    alternates: {
      canonical: `https://intentioninfoservice.com/blog/category/${categorySlug}`,
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Fetch blog posts for the given category slug
async function fetchCategoryData(categorySlug: string) {
  const { data } = await client.query({
    query: gql`
      query GetCategoryData($categorySlug: String!) {
        posts(where: { categoryName: $categorySlug }, first: 16) {
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
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    `,
    variables: { categorySlug },
  });

  // Transform blog posts
  const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
    category: post.categories.nodes[0]?.name || 'Uncategorized',
    date: new Date(post.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    author: post.author.node.name,
    authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
  }));

  // Capitalize category name for display
  const categoryName = data.posts.nodes[0]?.categories.nodes[0]?.name || categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return { blogPosts, categoryName };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams?.category;

  const { blogPosts, categoryName } = await fetchCategoryData(categorySlug);

  if (blogPosts.length === 0) {
    notFound();
  }

  const initialPosts = blogPosts.slice(0, 4);

  return (
    <div className="bg-dark-950 text-white">
      {/* Upper Section: Initial Posts in a 3-Column Grid */}
      <section className="bg-dark-950 py-20 md:py-32">
        <div className="w-full px-[10%]">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {categoryName} Blog Posts
          </h1>
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
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
          ) : (
            <p className="text-gray-400 text-center">No blog posts found in this category.</p>
          )}
        </div>
      </section>

      {/* Lower Section: Full-Width Category Posts with Recent Posts */}
      <section className="container mx-auto px-4 md:px-[10%] py-16">
        <CategoryPostsList initialPosts={initialPosts} allPosts={blogPosts} />
      </section>
    </div>
  );
}