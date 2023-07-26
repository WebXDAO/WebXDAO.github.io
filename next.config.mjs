/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "github.com",
      "avatars.githubusercontent.com",
      "og-image-rest-generator.fly.dev",
    ],
  },
};

export default nextConfig