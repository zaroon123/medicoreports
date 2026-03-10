// src/components/shared/card/BlogCardV1.tsx
import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../../ui/button/LinkButton';

interface BlogCardV1Props { 
  blog: IBlogPost;
  className?: string;
}

const BlogCardV1 = ({ blog, className }: BlogCardV1Props) => {
  return (
    <article> 
      <div
        className={cn(
          'bg-background-1 dark:bg-background-6 relative scale-100 overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px]',
          className,
        )}>
        <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
          <Image
            src={blog.image.url}
            width={blog.image.width || 409}
            height={blog.image.height || 250}
            alt={blog.image.alt}
            loading="lazy"
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA5IiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+"
            onError={(e) => {
              // Fallback image on error
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }}
          />
        </figure>
        <div className="space-y-6 p-6">
          <div className="flex items-center gap-2 flex-wrap">
            {blog.category && (
              <span className="badge badge-green mr-1">
                <Link href={`/blog-03?category=${blog.category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {blog.category}
                </Link>
              </span>
            )}
            {!blog.author && (
              <span rel="author" className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                {blog.author}
              </span>
            )}
            <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
            <time dateTime={blog.date} className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
              {blog.formattedDate}
            </time>
          </div>
          <div>
            <h3 className="sm:text-heading-5 text-heading-6 mb-2 font-normal">
              <Link href={`/${blog.slug}`} aria-label={`Read more about ${blog.title}`}>
                {blog.title}
              </Link>
            </h3>
            <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 font-normal">
              {blog.excerpt}
            </p>
          </div>
          <div className="flex justify-start md:block">
            <LinkButton
              href={`/${blog.slug}`}
              className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent dark:hover:text-secondary w-full sm:w-auto"
              aria-label={`Read full article about ${blog.title}`}>
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCardV1;