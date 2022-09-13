module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/' }
  //   }
  // },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'github.com'],
  },
};
