/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "github.com",
      "avatars.githubusercontent.com",
      "og-image-rest-generator.fly.dev",
      "media.dev.to",
    ],
  },
};

export default nextConfig;
