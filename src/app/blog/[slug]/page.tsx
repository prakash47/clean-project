import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import DOMPurify from 'dompurify'; // Ensure proper import
import { CONFIG } from '@/config';
import BlogSidebar from '@/components/BlogSidebar';

// Define the structure of the raw WordPress post data for a single post
interface WordPressPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
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
      description?: string;
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
  content: string;
  sanitizedContent: string;
  featuredImage: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  authorBio?: string;
}

// Fetch a single post by slug
async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data } = await client.query({
    query: gql`
      query GetPostBySlug($slug: String!) {
        postBy(slug: $slug) {
          id
          slug
          title
          excerpt
          content
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
              description
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  const post: WordPressPost | null = data.postBy;
  if (!post) return null;

  console.log('Excerpt from /blog/[slug]:', post.excerpt);
  const fullName = [post.author.node.firstName, post.author.node.lastName].filter(Boolean).join(' ');
  const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => {
    console.warn('DOMPurify not loaded, falling back to unsanitized HTML:', html);
    return html;
  });
  const rawExcerpt = post.excerpt || '';
  const plainExcerpt = sanitize(rawExcerpt).replace(/<\/?p>/g, '');
  const truncatedExcerpt = plainExcerpt.length > 90 ? plainExcerpt.substring(0, 90) + '....' : plainExcerpt;
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    sanitizedExcerpt: truncatedExcerpt,
    content: post.content || '',
    sanitizedContent: sanitize(post.content || ''),
    featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
    category: post.categories.nodes[0]?.name || 'Uncategorized',
    date: post.date,
    author: fullName || post.author.node.name || 'Unknown Author',
    authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
    authorBio: post.author.node.description || 'No bio available.',
  };
}

// Fetch additional data for sidebar (recent posts and categories)
async function fetchSidebarData(): Promise<{ blogPosts: BlogPost[]; categories: WordPressCategory[] }> {
  const { data } = await client.query({
    query: gql`
      query GetSidebarData {
        posts(first: 7, where: { orderby: { field: DATE, order: DESC } }) {
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
        categories(first: 50) {
          nodes {
            name
            slug
          }
        }
      }
    `,
  }).catch(error => {
    console.error('GraphQL query error for sidebar:', error);
    return { data: { posts: { nodes: [] }, categories: { nodes: [] } } };
  });

  const sanitize = DOMPurify && DOMPurify.sanitize ? DOMPurify.sanitize : ((html: string) => {
    console.warn('DOMPurify not loaded, falling back to unsanitized HTML:', html);
    return html;
  });
  const blogPosts: BlogPost[] = data.posts.nodes.map((post: WordPressPost) => {
    const fullName = [post.author.node.firstName, post.author.node.lastName].filter(Boolean).join(' ');
    const rawExcerpt = post.excerpt || '';
    const truncatedExcerpt = rawExcerpt.length > 90 ? rawExcerpt.substring(0, 90) + '....' : rawExcerpt;
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      sanitizedExcerpt: sanitize(truncatedExcerpt),
      featuredImage: post.featuredImage?.node?.sourceUrl || 'https://placehold.co/800x400.webp?text=No+Image',
      category: post.categories.nodes[0]?.name || 'Uncategorized',
      date: post.date,
      author: fullName || post.author.node.name || 'Unknown Author',
      authorImage: post.author.node.avatar?.url || 'https://placehold.co/40x40.webp?text=A',
    };
  });

  const categories: WordPressCategory[] = data.categories.nodes
    .filter((category: WordPressCategory) => category.name !== 'Uncategorized')
    .sort((a: WordPressCategory, b: WordPressCategory) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  return { blogPosts, categories };
}

// Dynamic metadata based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);
  if (!post) {
    return {
      title: 'Post Not Found - Intention Infoservice',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} - Intention Infoservice`,
    description: post.sanitizedExcerpt,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/${post.slug}`,
      title: post.title,
      description: post.sanitizedExcerpt,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: 'Intention Infoservice',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@IInfoservice',
      creator: '@IInfoservice',
    },
    alternates: {
      canonical: `https://intentioninfoservice.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await fetchPostBySlug(resolvedParams.slug);
  const { blogPosts, categories } = await fetchSidebarData();
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-dark-950 text-gray-800 font-['Inter',sans-serif]">
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.sanitizedExcerpt,
          "url": `https://intentioninfoservice.com/blog/${post.slug}`,
          "datePublished": post.date,
          "author": {
            "@type": "Person",
            "name": post.author,
          },
          "image": post.featuredImage,
          "publisher": {
            "@type": "Organization",
            "name": "Intention Infoservice",
            "url": "https://intentioninfoservice.com",
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://intentioninfoservice.com/blog/${post.slug}`,
          },
        })}</script>`,
      }} />

      <section className="relative bg-dark-900 py-16 sm:py-12 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-[10%]">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8 shadow-md">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg transition-transform duration-300 hover:scale-105"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-2 sm:px-3 py-1 rounded-full mb-2">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={30}
                    height={30}
                    className="rounded-full"
                    sizes="30px"
                  />
                  <div>
                    {CONFIG.SHOW_DATES && (
                      <p className="text-xs sm:text-sm text-gray-300">{post.date}</p>
                    )}
                    <p className="text-xs sm:text-sm text-gray-300">{post.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 md:px-[10%] py-6 sm:py-8 md:py-12 flex flex-col lg:flex-row gap-6 sm:gap-8">
        <article className="w-full lg:w-2/3">
          <div className="bg-gray-200 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-800">
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.sanitizedContent }} />
            </div>
          </div>
        </article>
        <aside className="w-full lg:w-1/3 mt-6 sm:mt-8 md:mt-0">
          <BlogSidebar blogPosts={blogPosts} categories={categories} />
        </aside>
      </section>
    </div>
  );
}