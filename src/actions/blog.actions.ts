// src/actions/blog.actions.ts
'use server';

import { wordpressService } from '@/services/wordpress.service';

export async function getPaginatedBlogs(page: number = 1, perPage: number = 9) {
  try {
    // Force fresh fetch by bypassing cache for pagination
    const { posts, totalPages, totalItems } = await wordpressService.getPosts({
      page,
      perPage, 
    });

    return {
      success: true,
      data: {
        posts,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
      error: null,
    };
  } catch (error) {
    console.error('Error fetching paginated blogs:', error);
    return {
      success: false,
      data: null,
      error: 'Failed to load blogs',
    };
  }
}