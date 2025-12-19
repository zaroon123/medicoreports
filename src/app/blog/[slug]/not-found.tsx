// src/app/blog/[slug]/not-found.tsx
import Link from 'next/link';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterThree from '@/components/shared/footer/FooterThree';

export default function BlogPostNotFound() {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="min-h-screen bg-background-3 dark:bg-background-7 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-secondary/70 mb-8 max-w-md mx-auto">
            The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <div className="space-x-4">
            <Link
              href="/blog-01"
              className="btn btn-primary hover:btn-secondary"
            >
              Browse All Blogs
            </Link>
            <Link
              href="/"
              className="btn btn-outline hover:btn-primary"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
      <FooterThree />
    </>
  );
}