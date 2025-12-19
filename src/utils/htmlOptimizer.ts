// src/utils/htmlOptimizer.ts
/**
 * Browser-compatible HTML optimizer without jsdom dependency
 */
export function optimizeWordPressHtml(html: string): string {
  if (!html || typeof window === 'undefined') {
    return html || '';
  }

  try {
    let cleaned = html;
    
    // 1. Fix HTML entities
    cleaned = decodeHtmlEntities(cleaned);
    
    // 2. Clean Elementor HTML
    cleaned = cleanElementorHtml(cleaned);
    
    // 3. Optimize images
    cleaned = optimizeImages(cleaned);
    
    // 4. Add nofollow to external links
    cleaned = addNoFollowToLinks(cleaned);
    
    return cleaned;
  } catch (error) {
    console.error('Error optimizing HTML:', error);
    return html;
  }
}

function decodeHtmlEntities(text: string): string {
  if (!text) return '';
  
  // Create a temporary textarea element to decode HTML entities
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function cleanElementorHtml(html: string): string {
  // Remove Elementor-specific attributes but keep content
  return html
    .replace(/data-elementor-[^=]*="[^"]*"/g, '')
    .replace(/class="[^"]*elementor[^"]*"/g, '')
    .replace(/<div[^>]*>\s*<\/div>/g, '')
    .replace(/<section[^>]*>\s*<\/section>/g, '')
    .replace(/<article[^>]*>\s*<\/article>/g, '')
    .replace(/\s\s+/g, ' ')
    .trim();
}

function optimizeImages(html: string): string {
  // Add lazy loading to images
  return html.replace(/<img([^>]+)>/g, (match, attributes) => {
    if (match.includes('loading=')) return match;
    
    // Ensure alt attribute exists
    let altAttribute = '';
    const altMatch = attributes.match(/alt="([^"]*)"/);
    if (altMatch) {
      altAttribute = ` alt="${altMatch[1]}"`;
    } else {
      altAttribute = ' alt=""';
    }
    
    // Add width and height if missing
    let widthAttribute = '';
    let heightAttribute = '';
    
    if (!attributes.includes('width=')) {
      widthAttribute = ' width="800"';
    }
    
    if (!attributes.includes('height=')) {
      heightAttribute = ' height="450"';
    }
    
    // Add classes and loading attribute
    return `<img${attributes}${altAttribute}${widthAttribute}${heightAttribute} loading="lazy" class="w-full h-auto rounded-lg shadow-md" onerror="this.onerror=null; this.src='/images/placeholder.jpg'">`;
  });
}

function addNoFollowToLinks(html: string): string {
  return html.replace(/<a([^>]+href="([^"]+)"[^>]*)>/g, (match, attributes, href) => {
    if (href && href.startsWith('http') && !href.includes('medicoreports.com')) {
      // Check if rel already exists
      if (attributes.includes('rel="')) {
        return match.replace(/rel="([^"]*)"/, 'rel="$1 nofollow noopener noreferrer"');
      } else {
        return `<a${attributes} rel="nofollow noopener noreferrer" target="_blank">`;
      }
    }
    return match;
  });
}