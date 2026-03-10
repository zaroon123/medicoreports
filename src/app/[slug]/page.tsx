// src/app/blog/[slug]/page.tsx
import BlogContent from '@/components/blod-details/BlogContent';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { wordpressService } from '@/services/wordpress.service';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// STATIC GENERATION: Pre-generate most popular posts at build time
export async function generateStaticParams() {
  try {
    // Fetch recent posts for static generation
    const recentPosts = await wordpressService.getRecentPosts(30); // Pre-generate 30 most recent posts
    
    return recentPosts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// ISR: Revalidate individual pages every hour
export const revalidate = 3600;

// Server-side data fetching (like getServerSideProps but with ISR)
async function getBlogPostData(slug: string) {
  try {
    const post = await wordpressService.getPostBySlug(slug);
    
    if (!post) {
      return {
        blog: null,
        error: 'Post not found',
      };
    }

    return {
      blog: {
        ...post,
        title: post.title || 'Untitled Post',
        excerpt: post.excerpt || '',
        content: post.content || '',
        slug: post.slug || slug,
        date: post.date || new Date().toISOString(),
        formattedDate: post.formattedDate || formatDate(post.date),
        image: post.image || {
          url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          width: 800,
          height: 500,
          alt: 'Blog post image',
        },
        tags: post.tags || [],
        categories: post.categories || [],
        author: post.author || 'Medico Reports',
        authorImage: post.authorImage || '/images/default-avatar.png',
      },
      error: null,
    };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return {
      blog: null,
      error: 'Failed to load blog post',
    };
  }
}

// Dynamic metadata generation
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  try {
    const slug = (await params).slug;
    const { blog } = await getBlogPostData(slug);
    
    if (!blog) {
      return {
        title: 'Post Not Found - Medico Reports',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.excerpt,
        images: [
          {
            url: blog.image.url,
            width: blog.image.width || 1200,
            height: blog.image.height || 630,
            alt: blog.image.alt,
          },
        ],
        type: 'article',
        publishedTime: blog.publishedTime || blog.date,
        modifiedTime: blog.modifiedTime || blog.modified,
        authors: blog.author ? [blog.author] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.excerpt,
        images: [blog.image.url],
      },
      alternates: {
        canonical: `https://yourdomain.com/blog/${blog.slug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return defaultMetadata;
  }
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  
  // Fetch data on server (SSR with ISR)
  const { blog, error } = await getBlogPostData(slug);

  // If post doesn't exist, show 404
  if (!blog || error) {
    notFound();
  }

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero 
          title={blog.title}
          heading="Blog Details"
          // breadcrumb={[
          //   { label: 'Home', href: '/' },
          //   { label: 'Blog', href: '/blog-01' },
          //   { label: blog.title, href: `/blog/${blog.slug}`, current: true },
          // ]}
        />
        <BlogContent blog={blog} />
        <CTAV1
          className="dark:bg-background-7 bg-white"
          badgeClass="!badge-yellow-v2"
          badgeText="Get started"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
        />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </>
  );
};

// Helper function to format date
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return 'Unknown date';
  }
}

export default BlogDetails;