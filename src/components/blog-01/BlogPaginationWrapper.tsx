// src/components/blog-01/BlogPaginationWrapper.tsx
'use client';

import { IBlogPost } from '@/interface';
import { useState, useEffect, useCallback, useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';
import Pagination from '../shared/Pagination';
import { getPaginatedBlogs } from '@/actions/blog.actions';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogPaginationWrapperProps {
  initialBlogs: IBlogPost[];
  initialPage: number;
  totalPages: number;
  totalPosts: number; 
}

const BlogPaginationWrapper = ({
  initialBlogs,
  initialPage,
  totalPages,
  totalPosts
}: BlogPaginationWrapperProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [blogs, setBlogs] = useState<IBlogPost[]>(initialBlogs);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPagesState, setTotalPages] = useState(totalPages);
  const [totalPostsState, setTotalPosts] = useState(totalPosts);

  // Use ref to track if this is the initial render
  const isInitialRender = useRef(true);
  const hasPageChanged = useRef(false);

  const loadPage = useCallback(async (page: number) => {
    if (page === currentPage) return;

    setIsLoading(true);
    hasPageChanged.current = true;

    try {
      const result = await getPaginatedBlogs(page);

      if (result.success && result.data) {
        setBlogs(result.data.posts);
        setCurrentPage(page);
        setTotalPages(result.data.pagination.totalPages);
        setTotalPosts(result.data.pagination.totalItems);

        // Update URL without reloading the page
        const url = new URL(window.location.href);
        url.searchParams.set('page', page.toString());
        window.history.pushState({}, '', url.toString());

        // Scroll to top of blog section smoothly
        setTimeout(() => {
          const blogSection = document.querySelector('.blog-section');
          if (blogSection) {
            blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } catch (error) {
      console.error('Failed to load page:', error);
      // Revert to previous state on error
      hasPageChanged.current = false;
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page === currentPage || isLoading) return;
    loadPage(page);
  };

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page');
      const page = pageParam ? parseInt(pageParam, 10) : 1;

      if (page !== currentPage) {
        loadPage(page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage, loadPage]);

  // Only update from props on initial render or if URL changes externally
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;

      // Set initial state from URL if available
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page');
      const urlPage = pageParam ? parseInt(pageParam, 10) : 1;

      if (urlPage !== initialPage) {
        setCurrentPage(urlPage);
        // Don't fetch here, let the popstate handler handle it
      }
    } else if (!hasPageChanged.current) {
      // Only update from props if we didn't just change the page
      if (initialPage !== currentPage) {
        setCurrentPage(initialPage);
        setBlogs(initialBlogs);
        setTotalPages(totalPages);
        setTotalPosts(totalPosts);
      }
    }

    // Reset the flag after prop updates
    hasPageChanged.current = false;
  }, [initialPage, initialBlogs, totalPages, totalPosts, currentPage]);

  return (
    <div className="blog-section">
      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10">
        {isLoading ? (
          // Loading skeletons with fixed widths
          Array.from({ length: 9 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="space-y-4">
              <Skeleton className="h-[260px] w-full rounded-[20px]" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))
        ) : (
          blogs?.map((blog, index) => (
            <RevealAnimation key={`${blog.slug}-${currentPage}-${index}`} delay={0.3 + index * 0.1}>
              <div>
                <BlogCardV1 blog={blog} />
              </div>
            </RevealAnimation>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPagesState > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.6}>
            <div>
              <Pagination
                totalItems={totalPostsState}
                itemsPerPage={9}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                className="mt-14"
                // disabled={isLoading}
              />
            </div>
          </RevealAnimation>
        </div>
      )}
    </div>
  );
};

BlogPaginationWrapper.displayName = 'BlogPaginationWrapper';
export default BlogPaginationWrapper;