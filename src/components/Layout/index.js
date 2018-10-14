import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from '../Header/'
import Footer from '../Footer/'

import './index.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `}

    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: data.site.siteMetadata.keywords,
              content: 'sample, something'
            },
          ]}
        />
        <div>
          <Header />
          {children}
          <Footer data={data}>
            <div>Backgrounds made in Cinima 4D <a href="mailto:chuck.e.flores@gmail.com">Email Me</a></div>
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
