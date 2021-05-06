module.exports = {
  siteMetadata: {
    title: `Kaku`,
    description: `Grow your brand with content`,
    author: `@Hzmid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kaku.ng`,
        short_name: `kaku`,
        start_url: `/`,
        background_color: `#874cc1`,
        theme_color: `#874cc1`,
        display: `minimal-ui`,
        icon: `src/images/kakusquare.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
