// src/components/blog-details/RelatedPosts.tsx
'use client';

import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedPostsProps {
  posts: IBlogPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-6">
      <h3 className="text-heading-5 font-semibold mb-6">Related Articles</h3>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-medium mb-1 group-hover:text-primary-500 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-secondary/60">
                  <span>{post.category}</span>
                  <span>•</span>
                  <time dateTime={post.date}>{post.formattedDate}</time>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;