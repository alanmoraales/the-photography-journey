import { ISeoMetadata } from '@declarations/common'

type TSeoMetadata = {
  [key: string]: ISeoMetadata
}

const seoMetadata: TSeoMetadata = {
  home: {
    description:
      "The Photography Journey is alanmoraales photography blog. Here you'll find articles that will help you grow as a photographer, or as a creative person in general.",
    keywords: 'photography, blog, alanmoraales, creative',
    ogImageSrc: 'https://i.ibb.co/Pc9yD7W/Home.jpg',
    ogTitle: 'The Photography Journey | alanmoraales',
    ogUrl: 'https://journey.alanmoraales.live/',
  },
  gallery: {
    description: 'A collection of the best alanmoraales street photography',
    keywords:
      'photography, blog, alanmoraales, creative, gallery, street photography',
    ogImageSrc: 'https://i.ibb.co/x1MsRjN/Gallery.jpg',
    ogTitle: 'Gallery | The Photography Journey',
    ogUrl: 'https://journey.alanmoraales.live/gallery',
  },
  posts: {
    description: 'The complete list of posts in The Photography Journey',
    keywords: 'photography, blog, alanmoraales, creative, posts',
    ogImageSrc: 'https://i.ibb.co/L84XVcs/Posts.jpg',
    ogTitle: 'Posts | The Photography Journey',
    ogUrl: 'https://journey.alanmoraales.live/posts',
  },
}

export default seoMetadata
