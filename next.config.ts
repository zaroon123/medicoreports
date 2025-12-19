/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack in development
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },

  // Configure image domains for WordPress media
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'medicoreports.com',
        pathname: '/**', // All paths from your WordPress site
      },
      {
        protocol: 'https',
        hostname: 'www.medicoreports.com',
        pathname: '/**', // WWW version
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/**', // For author avatars
      },
      // Add other domains if your images are hosted elsewhere (like S3, CDN, etc.)
    ],
    
    // Optional: Image optimization settings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Optional: Disable static imports if you're using dynamic images
    // disableStaticImages: false,
  },

  // ISR (Incremental Static Regeneration) settings
  experimental: {
    // Increase memory cache size for better ISR performance
    isrMemoryCacheSize: 100, // MB (increased from default)
    
    // Optional: Enable if you need more aggressive caching
    // isrFlushToDisk: true,
  },

  // Environment variables that should be available at build time
  env: {
    WORDPRESS_API_URL: 'https://medicoreports.com/wp-json/wp/v2',
    NEXT_PUBLIC_WORDPRESS_URL: 'https://medicoreports.com',
  },

  // Optional: Add headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      // Cache static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Optional: Rewrite API calls for better security
  async rewrites() {
    return [
      // If you want to proxy WordPress API calls through your Next.js app
      // {
      //   source: '/api/wordpress/:path*',
      //   destination: 'https://medicoreports.com/wp-json/wp/v2/:path*',
      // },
    ];
  },

  // Optional: Redirects if needed
  async redirects() {
    return [
      // Example: Redirect old blog URLs to new structure
      // {
      //   source: '/blog-03',
      //   destination: '/blog',
      //   permanent: true,
      // },
    ];
  },

  // Logging configuration
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // React Strict Mode (recommended for development)
  reactStrictMode: true,

  // Optional: Disable ESLint during build if needed
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },

  // Optional: Disable TypeScript errors during build
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // SWC minification (enabled by default, faster than Terser)
  swcMinify: true,

  // Optional: Configure trailing slash behavior
  trailingSlash: false,

  // Optional: For static export if needed
  // output: 'standalone',
  // output: 'export',
};

export default nextConfig;