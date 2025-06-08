// src/utils/category-metadata.ts
import { Metadata } from 'next';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

interface WordPressCategory {
  name: string;
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;

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