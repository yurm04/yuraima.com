module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Yuraima Estevez",
        short_name: "Yuraima Estevez",
        start_url: "/",
        background_color: "#46237A",
        theme_color: "#46237A",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/photo.jpg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Yuraima Estevez's Blog`,
    author: `Yuraima Estevez`,
    description: `A place to find some of the stuff I say.`,
    image: '/content/assets/me.jpg',
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/yurm04`,
      },
      {
        name: `github`,
        url: `https://github.com/yurm04`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@Yurm04`,
      },
    ],
  },
}
