// src/components/medicoreports/Blog.tsx
'use client';

import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';
import { getLatestBlogs } from '@/actions/home.actions';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogProps {
  badgeClass?: string;
}

interface HomeBlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  tag: string;
  publishDate: string;
  readTime: string;
  image?: {  // Added for better image handling
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

const Blog = ({ badgeClass }: BlogProps) => {
  const [blogs, setBlogs] = useState<HomeBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestBlogs() {
      try {
        setLoading(true);
        const result = await getLatestBlogs();
        
        if (result.success && result.data) {
          setBlogs(result.data);
        } else {
          setError(result.error || 'Failed to load blogs');
        }
      } catch (err) {
        setError('An unexpected error occurred');
        console.error('Error fetching latest blogs:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestBlogs();
  }, []);

  if (loading) {
    return (
      <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[100px] lg:py-[150px] xl:py-[200px]">
        <div className="main-container">
          <div className="space-y-[70px]">
            <div className="text-center">
              <Skeleton className="h-8 w-48 mx-auto mb-5" />
              <Skeleton className="h-10 w-64 mx-auto mb-3" />
              <Skeleton className="h-4 w-96 mx-auto" />
            </div>
            <div className="grid grid-cols-12 justify-center gap-y-8 lg:gap-x-8">
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <Skeleton className="h-[600px] w-full rounded-[20px]" />
              </div>
              <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                <div className="flex flex-col gap-y-8">
                  <Skeleton className="h-[286px] w-full rounded-[20px]" />
                  <Skeleton className="h-[286px] w-full rounded-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || blogs.length === 0) {
    return (
      <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[100px] lg:py-[150px] xl:py-[200px]">
        <div className="main-container">
          <div className="text-center">
            <p className="text-lg text-red-600">{error || 'No blog posts found'}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[100px] lg:py-[150px] xl:py-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading */}
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className={cn(badgeClass, 'badge badge-green mb-5')} aria-label="Section category">
                Financial blog tips and tricks
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="blog-section-heading" className="mb-3">
                Our recent news &amp; insights
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Our recent news &amp; insights highlight the latest developments and trends shaping industry.</p>
            </RevealAnimation>
          </div>
          
          {/* blog section - FIXED: Height alignment with h-full */}
          <div className="grid grid-cols-12 justify-center gap-y-8 lg:gap-x-8">
            {/* blog 01 - Featured post - Added h-full */}
            <div className="col-span-12 lg:col-span-5 xl:col-span-6 h-full">
              {blogs[0] && (
                <RevealAnimation delay={0.4} className="h-full">
                  <BlogCardV2 blog={blogs[0]} />
                </RevealAnimation>
              )}
            </div>
            
            {/* blog 02 and 03 - Secondary posts */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-6">
              <div className="flex flex-col gap-y-8">
                {/* blog 02 */}
                {blogs[1] && (
                  <RevealAnimation delay={0.5}>
                    <BlogCardV3 blog={blogs[1]} />
                  </RevealAnimation>
                )}

                {/* blog 03 */}
                {blogs[2] && (
                  <RevealAnimation delay={0.6}>
                    <BlogCardV3 blog={blogs[2]} />
                  </RevealAnimation>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Blog.displayName = 'Blog';
export default Blog;