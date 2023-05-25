/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: "export",
  images: {
    domains: ["res.cloudinary.com", "github.com"],
  },
};

export default nextConfig
