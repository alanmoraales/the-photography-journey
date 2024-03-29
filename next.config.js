const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
  images: {
    disableStaticImages: true,
  },
})
