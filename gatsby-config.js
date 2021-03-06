module.exports = {
  siteMetadata: {
    title: `DirectLoot`,
    description: `The best of modern Indian brands, for you.`,
    author: `@kunksed`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`, //Color Config : https://culrs.com/?ref=uigoodies.com#/lightanalogous?id=virtual
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyRWE7Qi7laER3Bo`, // may instead specify via env, see below
        tables: [
          {
            baseId: `applsEttuh3uLJjE0`,
            tableName: `Stores`,
            //tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            //mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            tableLinks: [`Reviews`], // optional, for deep linking to records across tables.
            queryName: ''
          }, 
          {
            baseId: `applsEttuh3uLJjE0`,
            tableName: `Reviews`,
            tableLinks: [`Stores`] // optional, for deep linking to records across tables.
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

