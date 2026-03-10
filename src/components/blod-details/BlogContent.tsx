// src/components/blog-details/BlogContent.tsx
'use client';

import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import Comment from './Comment';
import ShareLink from './ShareLink';
import { Skeleton } from '@/components/ui/skeleton';
import { optimizeWordPressHtml } from '@/utils/htmlOptimizer';

interface BlogContentProps {
  blog: IBlogPost; 
}

const BlogContent = ({ blog }: BlogContentProps) => {
  const [optimizedContent, setOptimizedContent] = useState<string>('');
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => { 
    const optimizeContent = () => {
      try {
        // Use fullContent if available, otherwise use regular content
        const contentToOptimize = blog.fullContent || blog.content || '';

        if (contentToOptimize) {
          const cleanedContent = optimizeWordPressHtml(contentToOptimize);
          setOptimizedContent(cleanedContent);
        } else {
          setOptimizedContent('');
        }
      } catch (error) {
        console.error('Error optimizing content:', error);
        setOptimizedContent(blog.content || '');
      } finally {
        setIsContentLoaded(true);
      }
    };

    optimizeContent();
  }, [blog.content, blog.fullContent]);

  // Format date for display
  const formatDisplayDate = () => {
    if (blog.formattedDate) return blog.formattedDate;

    try {
      const date = new Date(blog.date);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return blog.date || 'Unknown date';
    }
  };

  // Calculate read time
  const calculateReadTime = () => {
    if (blog.readTime) return blog.readTime;

    const content = blog.fullContent || blog.content || '';
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Get author initials for fallback avatar
  const getAuthorInitials = () => {
    if (!blog.author) return 'MR';
    return blog.author
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
          <Link href="/blog-01" className="text-primary-500 hover:underline mt-4 inline-block">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-3 max-w-[1209px] mx-auto">
          {/* Title */}
          <RevealAnimation delay={0.1}>
            <h1 className="max-w-[884px] text-heading-3 md:text-heading-2 font-bold">
              {blog.title || 'Untitled Post'}
            </h1>
          </RevealAnimation>

          {/* Author and Meta Info */}
          <div className="flex items-center gap-3">
            <RevealAnimation delay={0.2}>
              <figure className="size-12 rounded-full overflow-hidden bg-[#ECEAED]">
                {blog.authorImage && blog.authorImage !== '/images/default-avatar.png' ? (
                  <Image
                    src={blog.authorImage}
                    className="object-center object-cover"
                    alt={`${blog.author || 'Author'}'s avatar`}
                    width={48}
                    height={48}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/default-avatar.png';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-primary-500 flex items-center justify-center text-white font-semibold">
                    {getAuthorInitials()}
                  </div>
                )}
              </figure>
            </RevealAnimation>
            <div>
              <RevealAnimation delay={0.3}>
                <h3 className="text-tagline-1 font-medium">
                  {blog.author || 'Medico Reports'}
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <time
                  dateTime={blog.date}
                  className="text-tagline-2 flex items-center gap-2 font-normal text-secondary/60 dark:text-accent/60"
                >
                  {formatDisplayDate()} <span>•</span> {calculateReadTime()}
                </time>
              </RevealAnimation>
            </div>
          </div>

          {/* Categories and Tags */}
          {(blog.category || (blog.tags && blog.tags.length > 0)) && (
            <RevealAnimation delay={0.5}>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {blog.category && (
                  <Link
                    href={`/blog-01?category=${blog.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="badge badge-green hover:bg-primary-600 transition-colors"
                  >
                    {blog.category}
                  </Link>
                )}
                {blog.tags && blog.tags.slice(0, 3).map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog-01?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="badge badge-outline hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </RevealAnimation>
          )}
        </div>

        {/* Featured Image */}
        <RevealAnimation delay={0.4}>
          <figure className="max-w-full rounded-lg md:rounded-4xl my-10 md:my-[70px] overflow-hidden">
            <Image
              src={blog.image?.url || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'}
              className="w-full h-full object-cover object-center"
              alt={blog.image?.alt || blog.title || 'Blog post image'}
              width={blog.image?.width || 1200}
              height={blog.image?.height || 700}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </figure>
        </RevealAnimation>

        {/* Blog Content */}
        <RevealAnimation delay={0.5}>
          <article className="details-body max-w-[800px] mx-auto">

            {!isContentLoaded ? (
              // Loading skeletons with fixed widths to avoid hydration mismatch
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-3/4" />
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-5/6" />
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-2/3" />
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-4/5" />
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-3/4" />
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-5/6" />
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-2/3" />
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-full" />
                  <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 h-4 w-4/5" />
                </div>
              </div>
            ) : (
              // Optimized WordPress content
              <div
                className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-primary-500 hover:prose-a:text-primary-600
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-blockquote:border-l-4 prose-blockquote:border-primary-500
              prose-blockquote:pl-4 prose-blockquote:italic
              prose-img:rounded-lg prose-img:shadow-md
              prose-ul:list-disc prose-ol:list-decimal
              prose-li:marker:text-primary-500
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
              prose-code:bg-gray-100 dark:prose-code:bg-gray-800
              prose-code:px-1 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: optimizedContent }}
              />
            )}
          </article>
        </RevealAnimation>

        {/* Additional Post Information */}
        <RevealAnimation delay={0.6}>
          <div className="max-w-[800px] mx-auto mt-12 pt-8 border-t border-stroke-2 dark:border-stroke-6">
            {/* Author Bio */}

            {/* Tags Section */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-heading-5 font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog-01?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-4 py-2 bg-background-2 dark:bg-background-5 rounded-full text-sm 
                               hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Links */}
            <div className="flex justify-between items-center pt-6 border-t border-stroke-2 dark:border-stroke-6">
              <Link
                href="/blog-01"
                className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
              >
                <span className="text-xl">←</span>
                <span>Back to all blogs</span>
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-4 py-2 bg-background-2 dark:bg-background-5 rounded-lg 
                         hover:bg-primary-500 hover:text-white transition-colors"
              >
                Back to top
              </button>
            </div>
          </div>
        </RevealAnimation>

        {/* Share Links */}
        {/* <ShareLink
          title={blog.title}
          url={`/blog/${blog.slug}`}
          description={blog.excerpt}
          image={blog.image?.url}
        /> */}

        {/* Comments Section */}
        {/* <Comment postId={blog.id} /> */}
      </div>
    </section>
  );
};

export default BlogContent;