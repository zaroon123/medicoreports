// src/app/blog-01/page.tsx
import BlogShowcase from '@/components/blog-01/BlogShowcase';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterFour from '@/components/shared/footer/FooterFour';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { wordpressService } from '@/services/wordpress.service';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

// Generate static props for this page
export async function generateStaticParams() {
  // Pre-generate first few pages for better performance
  const pagesToGenerate = 5; // Generate first 5 pages statically
  
  const params = [];
  for (let page = 1; page <= pagesToGenerate; page++) {
    params.push({ page: page.toString() });
  }
  
  return params;
}

// Generate metadata
export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - Medico Reports',
  description: 'Latest news and insights from Medico Reports',
};

// ISR: Revalidate every 3 hours
export const revalidate = 10800;

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Server-side function to fetch data (similar to getServerSideProps)
async function getBlogPageData(page: number = 1) {
  try {
    const { posts, totalItems, totalPages } = await wordpressService.getPosts({
      page,
      perPage: 9,
    });

    return {
      initialBlogs: posts,
      totalPosts: totalItems,
      totalPages,
      currentPage: page,
      error: null,
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      initialBlogs: [],
      totalPosts: 0,
      totalPages: 0,
      currentPage: page,
      error: 'Failed to load blog posts',
    };
  }
}

export default async function BlogPage01({ searchParams }: BlogPageProps) {
  // Get page from query params
  const params = await searchParams;
  const page = parseInt((params.page as string) || '1', 10);
  
  // Fetch data on the server (like getServerSideProps)
  const { initialBlogs, totalPosts, totalPages, error } = await getBlogPageData(page);

  if (error) {
    return (
      <>
        <NavbarOne
          className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
          btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        />
        <main className="bg-background-3 dark:bg-background-7">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600">Error Loading Blogs</h1>
              <p className="mt-2">Please try again later.</p>
            </div>
          </div>
        </main>
        <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
      </>
    );
  }

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Blog" heading="Blog" />
        <BlogShowcase 
          initialBlogs={initialBlogs}
          totalPosts={totalPosts} 
          totalPages={totalPages}
          currentPage={page}
        />
        <CTAV1
          className="dark:bg-background-5 bg-white"
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
}