// src/components/shared/card/BlogCardV2.tsx
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
    image?: {  // Added from WordPress processing
      url: string;
      width: number;
      height: number;
      alt: string;
    };
  };
  className?: string;
}

const BlogCardV2 = ({ blog, className }: BlogCardV2Props) => {
  // Use the image from WordPress if available, otherwise use thumbnail
  const imageUrl = blog.image?.url || blog.thumbnail;
  const imageWidth = blog.image?.width || 629;
  const imageHeight = blog.image?.height || 367;
  const imageAlt = blog.image?.alt || blog.title;

  // Better blur placeholder
  const blurDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjI5IiBoZWlnaHQ9IjM2NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+';

  return (
    <article className="group col-span-12 lg:col-span-5 xl:col-span-6 h-full">
      <div
        className={cn(
          'dark:bg-background-6 scale-100 space-y-10 rounded-[20px] bg-white transition-transform duration-500 group-hover:scale-[101%] group-hover:transition-transform group-hover:duration-500 h-full flex flex-col',
          className,
        )}>
        {/* blog img - FIXED: Better image handling with actual dimensions */}
        <figure className="w-full overflow-hidden rounded-[20px] lg:h-[352px] xl:h-[367px] xl:max-w-[629px] bg-gray-100 dark:bg-gray-800">
          <Link href={`/${blog.slug}`} className="block w-full h-full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
              width={imageWidth}
              height={imageHeight}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 629px"
              priority
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
        
        {/* blog content - FIXED: Flexible content area */}
        <div className="px-5 pb-8 sm:px-8 flex-1">
          <div className="mb-7 space-y-4">
            {/* blog time */}
            <div className="flex items-center">
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

BlogCardV2.displayName = 'BlogCardV2';
export default BlogCardV2;