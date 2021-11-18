export default {
  projectRoot: '.',
  dist: 'dist',
  src: 'src',
  pages: 'src/pages',
  public: 'public',
  renderers: [
    '@astrojs/renderer-react'
  ],
  markdownOptions: {
    footnotes: true,
    remarkPlugins: [],
    rehypePlugins: [],
  },
  buildOptions: {
    site: 'http://web3community.github.io',
    sitemap: true,
    pageUrlFormat: 'directory'
  },
  devOptions: {
    hostname: 'localhost',
    port: 8080,
    tailwindConfig: './tailwind.config.js',
    trailingSlash: 'ignore'
  },
};
