module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
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
