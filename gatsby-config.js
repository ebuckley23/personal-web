if (process.env.STAGING) {
  require('dotenv').config({
    path: '.env.staging'
  });
}
else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });
}

module.exports = {
  pathPrefix: '/personal-web',
  siteMetadata: {
    siteUrl: "https://www.ebuckley.io",
    title: "Emmanuel Buckley",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: "oomzt1uzn1pf",
        environment: process.env.CONTENTFUL_ENVIRONMENT
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "@chakra-ui/gatsby-plugin",
  ],
};
