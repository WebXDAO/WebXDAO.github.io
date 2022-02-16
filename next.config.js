module.exports = {
  basePath: '/WebXDAO.github.io',
  assetPrefix: '/WebXDAO.github.io',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'github.com']
  }
}
