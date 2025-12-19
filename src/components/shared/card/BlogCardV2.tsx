// src/components/shared/card/BlogCardV2.tsx (Updated)
import LinkButton from '@/components/ui/button/LinkButton';
import { CalendarIcon, StopwatchIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardV2Props {
  blog: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    thumbnail: string;
    tag: string;
    publishDate: string;
    readTime: string;
  };
  className?: string; 
}

const BlogCardV2 = ({ blog, className }: BlogCardV2Props) => {
  // Create blur placeholder for image
  const blurDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjI5IiBoZWlnaHQ9IjM2NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+';

  return (
    <article className="group col-span-12 lg:col-span-5 xl:col-span-6">
      <div
        className={cn(
          'dark:bg-background-6 scale-100 space-y-10 rounded-[20px] bg-white transition-transform duration-500 group-hover:scale-[101%] group-hover:transition-transform group-hover:duration-500',
          className,
        )}>
        {/* blog img  */}
        <figure className="w-full overflow-hidden rounded-[20px] lg:h-[352px] xl:h-[367px] xl:max-w-[629px]">
          <Link href={`/blog/${blog.slug}`}>
            <Image
              src={blog.thumbnail}
              alt={blog.title || "Blog post image"}
              className="size-full object-cover"
              loading="lazy"
              width={629}
              height={367}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              onError={(e) => {
                // Fallback image on error
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
          </Link>
        </figure>
        {/* blog content  */}
        <div className="px-5 pb-8 sm:px-8">
          {/* blog badge  */}
          {/* <div className="mb-6 space-x-2">
            <span className="badge badge-gray-light">
              <Link href={`/blog-03?category=${blog.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {blog.tag}
              </Link>
            </span>
            <span className="badge badge-gray-light">
              <Link href={`/blog-03?category=${blog.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {blog.tag}
              </Link>
            </span>
          </div> */}
          {/* time and title  */}
          <div className="mb-7 space-y-4">
            {/* blog time  */}
            <div className="flex items-center">
              {/* publish date  */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true">
                  <CalendarIcon />
                </span>
                <time dateTime={blog.publishDate} className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                  {blog.publishDate}
                </time>
              </div>
              <div className="text-stroke-2 dark:text-stroke-6 px-4" aria-hidden="true">
                |
              </div>
              {/* time  */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true">
                  <StopwatchIcon />
                </span>
                <span className="text-tagline-2 text-secondary/60 dark:text-accent/60">{blog.readTime}</span>
              </div>
            </div>
            {/* blog title  */}
            <h3 className="text-heading-6 xl:text-heading-5 line-clamp-1">
              <Link
                href={`/blog/${blog.slug}`}
                aria-label={`Read full article about ${blog.title}`}>
                {blog.title}
              </Link>
            </h3>
          </div>
          {/* blog link tag  */}
          <div>
            <LinkButton
              href={`/blog/${blog.slug}`}
              className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent">
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

BlogCardV2.displayName = 'BlogCardV2';
export default BlogCardV2;