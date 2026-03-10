// src/services/wordpress.service.ts
export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      name: string;
      avatar_urls?: {
        '24'?: string;
        '48'?: string;
        '96'?: string;
      };
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
        sizes: {
          large?: {
            source_url: string;
            width: number;
            height: number;
          };
          medium?: {
            source_url: string;
            width: number;
            height: number;
          };
          full?: {
            source_url: string;
            width: number;
            height: number;
          };
          thumbnail?: {
            source_url: string;
            width: number;
            height: number;
          };
        };
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
  yoast_head_json?: {
    title: string;
    description: string;
    og_title?: string;
    og_description?: string;
    og_image?: string;
    article_published_time?: string;
    article_modified_time?: string;
    author?: string;
  };
}

interface FetchPostsParams {
  page?: number;
  perPage?: number;
  categoryId?: number;
  tagId?: number;
  search?: string;
  orderby?: 'date' | 'relevance' | 'title';
  order?: 'asc' | 'desc';
}

interface ProcessedBlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  formattedDate: string;
  category?: string;
  categories: string[];
  tags: string[];
  author?: string;
  authorImage?: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  fullContent?: string;
  readTime?: string;
  _original?: WordPressPost;
}

class WordPressService {
  private baseUrl = 'https://medicoreports.com/wp-json/wp/v2';
  private cache = new Map<string, { data: any; timestamp: number }>();
  private CACHE_TTL = 5 * 60 * 1000;

  // Enhanced HTML entity decoder
  private decodeHtmlEntities(text: string): string {
    if (!text) return '';

    return text
      .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, '–')
      .replace(/&#8212;/g, '—')
      .replace(/&#038;/g, '&')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#8230;/g, '…');
  }

  // Clean Elementor HTML - extract readable content
  private cleanElementorHtml(html: string): string {
    if (!html) return '';

    // Remove Elementor wrapper divs but keep content
    let cleaned = html
      // Remove Elementor data attributes
      .replace(/data-elementor-[^=]*="[^"]*"/g, '')
      .replace(/data-elementor-type="[^"]*"/g, '')
      .replace(/data-elementor-id="[^"]*"/g, '')
      .replace(/data-id="[^"]*"/g, '')
      .replace(/data-element_type="[^"]*"/g, '')
      .replace(/data-widget_type="[^"]*"/g, '')

      // Clean Elementor classes but keep structural classes
      .replace(/elementor-[^\s"]*/g, (match) => {
        if (match.includes('widget') || match.includes('container')) return '';
        return match;
      })

      // Fix br tags
      .replace(/<\/br>/g, '<br>')
      .replace(/<br\s*\/?>/gi, '<br>')

      // Remove empty divs and spans
      .replace(/<div[^>]*>\s*<\/div>/g, '')
      .replace(/<span[^>]*>\s*<\/span>/g, '')

      // Clean up multiple spaces and line breaks
      .replace(/\s\s+/g, ' ')
      .replace(/\n\s*\n/g, '\n');

    // Extract text from nested divs
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cleaned;

    // Get text content but preserve basic HTML
    const preservedTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'br', 'strong', 'em', 'a', 'img'];

    // Walk through nodes and clean them
    const walkNodes = (node: Node): string => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent?.trim() || '';
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const tagName = element.tagName.toLowerCase();

        // Skip if not in preserved tags
        if (!preservedTags.includes(tagName)) {
          return Array.from(element.childNodes).map(walkNodes).join('');
        }

        // Preserve tag with cleaned attributes
        let attributes = '';
        if (tagName === 'a' && element.getAttribute('href')) {
          const href = element.getAttribute('href') || '';
          attributes = ` href="${href}"`;
          // Add target and rel for external links
          if (href.startsWith('http') && !href.includes('medicoreports.com')) {
            attributes += ' target="_blank" rel="nofollow noopener noreferrer"';
          }
        }

        if (tagName === 'img' && element.getAttribute('src')) {
          const src = element.getAttribute('src') || '';
          const alt = element.getAttribute('alt') || '';
          attributes = ` src="${src}" alt="${alt}"`;

          // Add loading lazy
          attributes += ' loading="lazy"';
        }

        const innerContent = Array.from(element.childNodes).map(walkNodes).join('');
        return `<${tagName}${attributes}>${innerContent}</${tagName}>`;
      }

      return '';
    };

    let result = Array.from(tempDiv.childNodes).map(walkNodes).join('');

    // Final cleanup
    result = result
      .replace(/<p>\s*<\/p>/g, '')
      .replace(/<h[1-6]>\s*<\/h[1-6]>/g, '')
      .replace(/\n\s*\n/g, '\n')
      .trim();

    return result || html; // Fallback to original if empty
  }

  private stripHtmlTags(text: string): string {
    if (!text) return '';
    return text
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<[^>]*>/g, '')
      .replace(/\n\s*\n/g, '\n')
      .trim();
  }

  private calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }

  private getCacheKey(params: any): string {
    return `wp_${JSON.stringify(params)}`;
  }

  private async fetchWithCache<T>(url: string, cacheKey: string): Promise<T> {
    const now = Date.now();
    const cached = this.cache.get(cacheKey);

    if (cached && now - cached.timestamp < this.CACHE_TTL) {
      return cached.data;
    }

    try {
      const response = await fetch(url, {
        next: { revalidate: 300 },
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'MedicoReports/1.0',
        },
      });

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      this.cache.set(cacheKey, { data, timestamp: now });
      return data;
    } catch (error) {
      console.error(`Error fetching from ${url}:`, error);
      throw error;
    }
  }

  async getPostsNoCache(params: FetchPostsParams = {}): Promise<{
    posts: ProcessedBlogPost[];
    totalPages: number;
    totalItems: number;
  }> {
    const {
      page = 1,
      perPage = 9,
      categoryId,
      tagId,
      search,
      orderby = 'date',
      order = 'desc'
    } = params;

    const queryParams = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      _embed: 'true',
      orderby,
      order,
    });

    if (categoryId) {
      queryParams.append('categories', categoryId.toString());
    }

    if (tagId) {
      queryParams.append('tags', tagId.toString());
    }

    if (search) {
      queryParams.append('search', search);
    }

    const url = `${this.baseUrl}/posts?${queryParams.toString()}`;

    try {
      const response = await fetch(url, {
        // Don't use cache for pagination requests
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'MedicoReports/1.0',
        },
      });

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      const posts = await response.json();
      const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1', 10);
      const totalItems = parseInt(response.headers.get('x-wp-total') || '0', 10);

      const processedPosts = posts.map((post: WordPressPost) => this.processPost(post, true));

      return {
        posts: processedPosts,
        totalPages,
        totalItems,
      };
    } catch (error) {
      console.error('Error in getPostsNoCache:', error);
      return {
        posts: [],
        totalPages: 0,
        totalItems: 0,
      };
    }
  }


  // Get paginated posts
  async getPosts(params: FetchPostsParams = {}, useCache: boolean = true): Promise<{
    posts: ProcessedBlogPost[];
    totalPages: number;
    totalItems: number;
  }> {

    if (!useCache) {
      return this.getPostsNoCache(params);
    }

    const {
      page = 1,
      perPage = 9,
      categoryId,
      tagId,
      search,
      orderby = 'date',
      order = 'desc'
    } = params;

    const queryParams = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      _embed: 'true',
      orderby,
      order,
    });

    if (categoryId) {
      queryParams.append('categories', categoryId.toString());
    }

    if (tagId) {
      queryParams.append('tags', tagId.toString());
    }

    if (search) {
      queryParams.append('search', search);
    }

    const cacheKey = this.getCacheKey({ type: 'posts', ...params });
    const url = `${this.baseUrl}/posts?${queryParams.toString()}`;

    try {
      const [posts, response] = await Promise.all([
        this.fetchWithCache<WordPressPost[]>(url, cacheKey),
        fetch(url, { next: { revalidate: 300 } }),
      ]);

      const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1', 10);
      const totalItems = parseInt(response.headers.get('x-wp-total') || '0', 10);

      const processedPosts = posts.map(post => this.processPost(post, true));

      return {
        posts: processedPosts,
        totalPages,
        totalItems,
      };
    } catch (error) {
      console.error('Error in getPosts:', error);
      return {
        posts: [],
        totalPages: 0,
        totalItems: 0,
      };
    }
  }

  // Get post by slug
  async getPostBySlug(slug: string): Promise<ProcessedBlogPost | null> {
    const cacheKey = `post_${slug}`;
    const url = `${this.baseUrl}/posts?slug=${slug}&_embed=true`;

    try {
      const posts = await this.fetchWithCache<WordPressPost[]>(url, cacheKey);

      if (!posts || posts.length === 0) {
        return null;
      }

      const post = posts[0];
      return this.processPost(post, false);
    } catch (error) {
      console.error(`Error fetching post by slug ${slug}:`, error);
      return null;
    }
  }

  // WordPress service - processPost function
private processPost(post: WordPressPost, isList: boolean = true): ProcessedBlogPost {
      // ===========================================
      // 1. PROCESS TITLE - Clean HTML entities
      // ===========================================
      const rawTitle = post.title?.rendered || '';
      const title = this.decodeHtmlEntities(this.stripHtmlTags(rawTitle));

      // ===========================================
      // 2. PROCESS EXCERPT - Clean for preview
      // ===========================================
      const rawExcerpt = post.excerpt?.rendered || '';
      const excerpt = this.decodeHtmlEntities(this.stripHtmlTags(rawExcerpt));

      // ===========================================
      // 3. PROCESS CONTENT - For full article
      // ===========================================
      const rawContent = post.content?.rendered || '';
      let content = rawContent;

      // Clean Elementor HTML for list view
      if (isList) {
          content = this.decodeHtmlEntities(this.stripHtmlTags(rawContent.substring(0, 200))) + '...';
      }

      // ===========================================
      // 4. PROCESS FEATURED IMAGE - CRITICAL FIX!
      // ===========================================
      let image = {
          url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          width: 1200,  // Increased default width
          height: 800,  // Increased default height
          alt: title || 'Blog post image',
      };

      // Check if post has featured image
      if (post._embedded?.['wp:featuredmedia']?.[0]) {
          const media = post._embedded['wp:featuredmedia'][0];
          const sizes = media.media_details?.sizes;

          if (sizes) {
              // IMPORTANT: WordPress generates multiple sizes
              // We want the LARGEST possible for best quality
              // Order of preference: full > large > medium_large > medium > thumbnail
              
              const preferredSizes = ['full', 'large', 'medium_large', 'medium', 'thumbnail'];
              let selectedSize = null;
              
              // Find the largest available size in our preferred order
              for (const sizeName of preferredSizes) {
                  if (sizes[sizeName]) {
                      selectedSize = sizes[sizeName];
                      console.log(`📸 Using ${sizeName} image: ${selectedSize.width}x${selectedSize.height}`);
                      break; // Stop once we find the largest preferred size
                  }
              }
              
              // If none of preferred sizes found, get the largest available
              if (!selectedSize) {
                  // Get all size keys and find the one with maximum width
                  const sizeKeys = Object.keys(sizes);
                  if (sizeKeys.length > 0) {
                      // Find size with maximum width
                      selectedSize = sizeKeys.reduce((max, key) => {
                          return (sizes[key].width > (sizes[max]?.width || 0)) ? key : max;
                      }, sizeKeys[0]);
                      selectedSize = sizes[selectedSize];
                      console.log(`📸 Using largest available: ${selectedSize.width}x${selectedSize.height}`);
                  }
              }

              if (selectedSize) {
                  image = {
                      url: selectedSize.source_url,
                      width: selectedSize.width,
                      height: selectedSize.height,
                      alt: media.alt_text || title,
                  };
              } else {
                  // Fallback to original source URL
                  image = {
                      url: media.source_url,
                      width: media.media_details?.width || 1200,
                      height: media.media_details?.height || 800,
                      alt: media.alt_text || title,
                  };
              }
          } else if (media.source_url) {
              // No sizes data, use source URL with good defaults
              image = {
                  url: media.source_url,
                  width: 1200,
                  height: 800,
                  alt: media.alt_text || title,
              };
          }
          
          // Log the final image info for debugging
          console.log(`✅ Final image for "${title.substring(0, 30)}...": ${image.width}x${image.height}`);
      }

      // ===========================================
      // 5. PROCESS CATEGORIES AND TAGS
      // ===========================================
      let category = '';
      const categories: string[] = [];
      const tags: string[] = [];

      if (post._embedded?.['wp:term']) {
          const allTerms = post._embedded['wp:term'].flat();

          // Get categories
          const categoryTerms = allTerms.filter(term =>
              term.taxonomy === 'category' && post.categories.includes(term.id)
          );

          // Get tags
          const tagTerms = allTerms.filter(term =>
              term.taxonomy === 'post_tag' && post.tags.includes(term.id)
          );

          if (categoryTerms.length > 0) {
              category = this.decodeHtmlEntities(categoryTerms[0].name);
              categories.push(...categoryTerms.map(cat => this.decodeHtmlEntities(cat.name)));
          }

          tags.push(...tagTerms.map(tag => this.decodeHtmlEntities(tag.name)));
      }

      // ===========================================
      // 6. PROCESS AUTHOR INFORMATION
      // ===========================================
      const author = post._embedded?.author?.[0]?.name || 'Medico Reports';
      let authorImage = '/images/default-avatar.png';

      if (post._embedded?.author?.[0]?.avatar_urls?.['96']) {
          authorImage = post._embedded.author[0].avatar_urls['96'];
      }

      // ===========================================
      // 7. PROCESS DATES
      // ===========================================
      const date = new Date(post.date);
      const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
      });

      // ===========================================
      // 8. PROCESS READ TIME
      // ===========================================
      const readTime = this.calculateReadTime(rawContent);

      // ===========================================
      // 9. PROCESS SEO/YOAST META
      // ===========================================
      const yoastMeta = post.yoast_head_json;

      // ===========================================
      // 10. RETURN FINAL PROCESSED POST
      // ===========================================
      return {
          id: post.id,
          slug: post.slug,
          title,
          excerpt,
          content,
          date: post.date,
          modified: post.modified,
          formattedDate,
          category,
          categories,
          tags,
          author,
          authorImage,
          image,           // Now contains high-res image!
          metaTitle: yoastMeta?.title || title,
          metaDescription: yoastMeta?.description || excerpt,
          ogImage: yoastMeta?.og_image,
          publishedTime: yoastMeta?.article_published_time,
          modifiedTime: yoastMeta?.article_modified_time || post.modified,
          fullContent: rawContent,
          readTime,
          _original: post,
      };
  }
 
  // Get latest posts for homepage (returns 3 most recent posts)
  async getLatestPosts(limit: number = 3): Promise<ProcessedBlogPost[]> {
    const cacheKey = `latest_${limit}`;
    const url = `${this.baseUrl}/posts?per_page=${limit}&orderby=date&order=desc&_embed=true`;

    try {
      const posts = await this.fetchWithCache<WordPressPost[]>(url, cacheKey);
      return posts.map(post => this.processPost(post, true));
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      return [];
    } 
  }

  // Get recent posts
  async getRecentPosts(limit: number = 5): Promise<ProcessedBlogPost[]> {
    const cacheKey = `recent_${limit}`;
    const url = `${this.baseUrl}/posts?per_page=${limit}&orderby=date&order=desc&_embed=true`;

    try {
      const posts = await this.fetchWithCache<WordPressPost[]>(url, cacheKey);
      return posts.map(post => this.processPost(post, true));
    } catch (error) {
      console.error('Error fetching recent posts:', error);
      return [];
    }
  }

  // Get all slugs for static generation
  async getAllSlugs(limit: number = 50): Promise<Array<{ slug: string }>> {
    try {
      const url = `${this.baseUrl}/posts?per_page=${limit}&_fields=slug`;
      const cacheKey = `slugs_${limit}`;

      const posts = await this.fetchWithCache<Array<{ slug: string }>>(url, cacheKey);
      return posts.map(post => ({ slug: post.slug }));
    } catch (error) {
      console.error('Error fetching all slugs:', error);
      return [];
    }
  }
}

export const wordpressService = new WordPressService();
export type { ProcessedBlogPost };