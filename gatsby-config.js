module.exports = {
  siteMetadata: {
    title: 'React for Designers course',
    description: 'Currently working at Pulse Digital, designing marketing management dashboards for Pharma and Biotech companies',
    keywords: 'react course, react for designers, sketch, product designer, new york'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        space: 'w9970xn8cgz5',
        accessToken: '62c46bfaa25e46840da404ca545d9121f095539c582daedf4395e8679a7d7213'
      }
    }
  ],
}
