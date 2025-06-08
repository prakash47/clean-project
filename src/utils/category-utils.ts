// src/utils/category-utils.ts
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

interface WordPressCategory {
  name: string;
  slug: string;
}

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
    .filter((category: WordPressCategory) => category.slug !== 'uncategorized')
    .map((category: WordPressCategory) => ({
      category: category.slug,
    }));
}