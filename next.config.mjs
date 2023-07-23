/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com", "github.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig