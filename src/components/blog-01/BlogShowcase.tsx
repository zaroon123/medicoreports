// src/components/blog-01/BlogShowcase.tsx
import RevealAnimation from '../animation/RevealAnimation';
import BlogPaginationWrapper from './BlogPaginationWrapper';
import { IBlogPost } from '@/interface';

interface BlogShowcaseProps {
  initialBlogs: IBlogPost[];
  totalPosts: number; 
  totalPages: number;
  currentPage: number;
}

// This is now a Server Component that receives pre-fetched data
const BlogShowcase = ({ 
  initialBlogs, 
  totalPosts, 
  totalPages,
  currentPage  
}: BlogShowcaseProps) => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Our recent <span className="text-primary-500 inline-block">news &amp; insights</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[738px] mx-auto">
              Our recent news and insights highlight the latest developments, achievements, and thought leadership
              shaping our journey forward. From product innovations and strategic partnerships to industry trends
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <BlogPaginationWrapper 
          initialBlogs={initialBlogs}
          initialPage={currentPage}
          totalPages={totalPages}
          totalPosts={totalPosts}
        />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;