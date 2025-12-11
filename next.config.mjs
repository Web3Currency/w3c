/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ← this disables ESLint errors in build/deploy
  },
  typescript: {
    ignoreBuildErrors: false,   // keep TypeScript checks (we already fixed them)
  },
  images: {
    unoptimized: true           // needed for gh-pages static export
  }
};

export default nextConfig;
