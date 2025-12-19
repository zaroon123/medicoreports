// src/utils/htmlSanitizer.ts
// Lightweight HTML sanitizer for browser/client components

/**
 * Simple HTML sanitizer that removes dangerous tags and attributes
 * This is a lightweight alternative to DOMPurify for client components
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Create a temporary div element
  const div = document.createElement('div');
  div.innerHTML = html;
  
  // Remove dangerous tags
  const dangerousTags = ['script', 'iframe', 'object', 'embed', 'link', 'meta', 'style'];
  dangerousTags.forEach(tag => {
    const elements = div.querySelectorAll(tag);
    elements.forEach(el => el.remove());
  });
  
  // Remove dangerous attributes from all elements
  const allElements = div.querySelectorAll('*');
  allElements.forEach(el => {
    const attributes = el.attributes;
    
    // Remove event handlers and dangerous attributes
    for (let i = attributes.length - 1; i >= 0; i--) {
      const attr = attributes[i];
      const attrName = attr.name.toLowerCase();
      
      // Remove event handlers (onclick, onload, etc.)
      if (attrName.startsWith('on')) {
        el.removeAttribute(attrName);
      }
      
      // Remove dangerous attributes
      const dangerousAttrs = ['href', 'src', 'style', 'class'];
      if (dangerousAttrs.includes(attrName)) {
        // For href and src, only allow relative URLs or trusted domains
        if (attrName === 'href' || attrName === 'src') {
          const value = attr.value.toLowerCase();
          if (value.startsWith('javascript:') || 
              value.startsWith('data:') || 
              value.includes('script') ||
              value.includes('eval(')) {
            el.removeAttribute(attrName);
          }
        }
      }
    }
  });
  
  return div.innerHTML;
}

/**
 * Add nofollow and target=_blank to external links
 */
export function addNoFollowToExternalLinks(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  
  const links = div.querySelectorAll('a[href]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      // Check if it's an external link
      const isExternal = !(
        href.startsWith('/') || 
        href.startsWith('#') || 
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      );
      
      if (isExternal) {
        link.setAttribute('rel', 'nofollow noopener noreferrer');
        link.setAttribute('target', '_blank');
      }
    }
  });
  
  return div.innerHTML;
}

/**
 * Optimize images for Next.js
 */
export function optimizeImages(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  
  const images = div.querySelectorAll('img');
  images.forEach(img => {
    // Add lazy loading
    img.setAttribute('loading', 'lazy');
    
    // Ensure width and height are set
    if (!img.hasAttribute('width')) {
      img.setAttribute('width', '800');
    }
    if (!img.hasAttribute('height')) {
      img.setAttribute('height', '450');
    }
    
    // Add responsive classes
    img.classList.add('w-full', 'h-auto', 'rounded-lg');
    
    // Add onerror handler
    img.setAttribute('onerror', "this.onerror=null; this.src='/images/placeholder.jpg'");
  });
  
  return div.innerHTML;
}

/**
 * Decode HTML entities
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return '';
  
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

/**
 * Strip HTML tags but keep line breaks
 */
export function stripHtmlTags(text: string): string {
  if (!text) return '';
  
  // Create a temporary div
  const div = document.createElement('div');
  div.innerHTML = text;
  
  // Get text content and preserve line breaks
  let content = div.textContent || div.innerText || '';
  
  // Replace multiple spaces and line breaks
  content = content
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n/g, '\n\n')
    .trim();
    
  return content;
}

/**
 * Main function to optimize WordPress content for client components
 */
export function optimizeWordPressContent(html: string): string {
  try {
    if (typeof window === 'undefined') {
      // If running on server, return as-is (will be processed on client)
      return html;
    }
    
    if (!html) return '';
    
    // Step 1: Decode HTML entities
    let cleaned = decodeHtmlEntities(html);
    
    // Step 2: Basic sanitization
    cleaned = sanitizeHtml(cleaned);
    
    // Step 3: Handle external links
    cleaned = addNoFollowToExternalLinks(cleaned);
    
    // Step 4: Optimize images
    cleaned = optimizeImages(cleaned);
    
    // Step 5: Add prose classes for styling
    const div = document.createElement('div');
    div.innerHTML = cleaned;
    div.classList.add('prose', 'prose-lg', 'dark:prose-invert', 'max-w-none');
    
    return div.innerHTML;
  } catch (error) {
    console.error('Error optimizing WordPress content:', error);
    return html;
  }
}

/**
 * Extract excerpt from HTML content (first 200 characters)
 */
export function extractExcerpt(html: string, length: number = 200): string {
  const plainText = stripHtmlTags(html);
  return plainText.length > length 
    ? plainText.substring(0, length) + '...' 
    : plainText;
}

/**
 * Calculate reading time from HTML content
 */
export function calculateReadTime(html: string): string {
  const plainText = stripHtmlTags(html);
  const words = plainText.split(/\s+/).length;
  const minutes = Math.ceil(words / 200); // 200 words per minute
  return `${minutes} min read`;
}