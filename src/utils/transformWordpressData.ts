
// import { IWordPressBlog, IBlogPost } from "@/interface";

// export const transformWordPressPost = (post: IWordPressBlog): IBlogPost => {
//   let featuredImage = null;
//   if (post._embedded?.['wp:featuredmedia']?.[0]) {
//     const media = post._embedded['wp:featuredmedia'][0];
//     featuredImage = media.media_details?.sizes?.medium?.source_url 
//       || media.media_details?.sizes?.large?.source_url 
//       || media.source_url;
//   }

//   const author = post._embedded?.author?.[0]?.name || 'Medico Reports';
//   const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog';

//   const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

//   return {
//     id: post.id,
//     slug: post.slug,
//     title: decodeHtmlEntities(post.title.rendered),
//     excerpt,
//     content: post.content.rendered,
//     date: post.date,
//     modifiedDate: post.modified,
//     featuredImage,
//     author,
//     category,
//   };
// };

// const decodeHtmlEntities = (text: string): string => {
//   return text
//     .replace(/&amp;/g, '&')
//     .replace(/&lt;/g, '<')
//     .replace(/&gt;/g, '>')
//     .replace(/&quot;/g, '"')
//     .replace(/&#039;/g, "'");
// };

// export const transformWordPressPosts = (posts: IWordPressBlog[]): IBlogPost[] => {
//   .map(transformWordPressPost);
