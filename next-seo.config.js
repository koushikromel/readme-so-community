export default {
  defaultTitle: 'readme-so-community',
  description: `Use readme-so-community's markdown editor and templates to easily create a ReadMe for your projects`,
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'readme, easiest, create, markdown, git, github, gitlab',
    },
    {
      name: 'theme_color',
      content: '#10B981',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/icon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://readme-so-community.vercel.app/',
    title: 'readme-so-community',
    description: `Use readme-so-community's markdown editor and templates to easily create a ReadMe for your projects`,
    images: [
      {
        url: 'https://readme-so-community.vercel.app/readme.png',
        width: 375,
        height: 375,
        alt: 'Og Image Alt',
      },
    ],
    site_name: 'readme-so-community',
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: '@koushik_romel',
    cardType: 'summary',
  },
}
