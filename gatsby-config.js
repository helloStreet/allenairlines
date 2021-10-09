module.exports = {
  siteMetadata: {
    title: "Allen Airlines",
    siteUrl: `https://hellostreet.azurewebsites.net`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "",
    //   },
    // },
   
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-styled-components",
    
   
   
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
