// src/actions/home.actions.ts
'use server';

import { wordpressService } from '@/services/wordpress.service';

// Transform WordPress post to match your blog card interface
function transformToHomeBlogPost(post: any) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    thumbnail: post.image?.url || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: post.categories?.[0] || post.category || 'General',
    publishDate: post.formattedDate || new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime: post.readTime || '5 min read',
  };
}

export async function getLatestBlogs() {
  try {
    // Get 3 latest posts from WordPress
    const latestPosts = await wordpressService.getLatestPosts(3);
    
    // Transform to match your blog card interface
    const transformedPosts = latestPosts.map(transformToHomeBlogPost);

    return {
      success: true,
      data: transformedPosts,
      error: null,
    };
  } catch (error) {
    console.error('Error fetching latest blogs:', error);
    return {
      success: false,
      data: [],
      error: 'Failed to load latest blogs',
    };
  }
}