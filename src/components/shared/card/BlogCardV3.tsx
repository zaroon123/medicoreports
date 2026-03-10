// src/components/shared/card/BlogCardV3.tsx
import LinkButton from '@/components/ui/button/LinkButton';
import { CalendarIcon, StopwatchIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardV3Props { 
  blog: {
    id: number;
    slug: string; 
    title: string;
    excerpt: string;
    thumbnail: string;
    tag: string;
    publishDate: string;
    readTime: string;
    image?: {  // Added from WordPress processing
      url: string;
      width: number;
      height: number;
      alt: string;
    };
  };
  className?: string;
}

const BlogCardV3 = ({ blog, className }: BlogCardV3Props) => {
  // Use the image from WordPress if available, otherwise use thumbnail
  const imageUrl = blog.image?.url || blog.thumbnail;
  const imageWidth = blog.image?.width || 296;
  const imageHeight = blog.image?.height || 308;
  const imageAlt = blog.image?.alt || blog.title;

  // Better blur placeholder
  const blurDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk2IiBoZWlnaHQ9IjMwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+';

  return (
    <article className="group">
      <div
        className={cn(
          'dark:bg-background-6 flex scale-100 flex-col items-center rounded-[20px] bg-white transition-transform duration-500 group-hover:scale-[101%] group-hover:transition-transform group-hover:duration-500 md:flex-row xl:gap-x-8',
          className,
        )}>
        {/* blog img - FIXED: Better image quality with actual dimensions */}
        <figure className="inline-block w-full overflow-hidden rounded-[20px] lg:max-w-[296px] bg-gray-100 dark:bg-gray-800">
          <Link href={`/${blog.slug}`} className="block w-full h-full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="size-full h-[308px] object-cover lg:h-[297px] xl:h-[308px]"
              width={imageWidth}
              height={imageHeight}
              sizes="296px"
              quality={90} // Higher quality
              placeholder="blur"
              blurDataURL={blurDataUrl}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
          </Link>
        </figure>
        
        {/* blog content */}
        <div className="px-5 py-4 sm:px-4 xl:px-0 xl:py-8 flex-1">
          <div className="mb-7 space-y-4">
            {/* blog time */}
            <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-2">
                <span aria-hidden="true">
                  <StopwatchIcon />
                </span>
                <span className="text-tagline-2 text-secondary/60 dark:text-accent/60">{blog.readTime}</span>
              </div>
            </div>
            
            {/* blog title */}
            <h3 className="text-heading-6 xl:text-heading-5 line-clamp-2">
              <Link
                href={`/${blog.slug}`}
                aria-label={`Read full article about ${blog.title}`}>
                {blog.title}
              </Link>
            </h3>
          </div>
          
          {/* blog link tag */}
          <div>
            <LinkButton
              href={`/${blog.slug}`}
              className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent">
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

BlogCardV3.displayName = 'BlogCardV3';
export default BlogCardV3;