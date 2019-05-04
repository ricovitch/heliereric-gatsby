module.exports = {
  siteMetadata: {
    title: `Helier Eric`,
    description: `Senior Frontend Developer Toulouse`,
    author: `@heliereric`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:300,400,500"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Helier Eric`,
        short_name: `heliereric`,
        start_url: `/`,
        icon: `src/images/icon.jpg`,
        background_color: `#303f9f`,
        theme_color: `#d81b60`,
        // theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
