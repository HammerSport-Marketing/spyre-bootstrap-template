/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // const jquery = require('../dist/vendor/jquery/dist/jquery.min.js')
  // const popper_script = require('../dist/vendor/popper.js/dist/umd/popper.min.js')
  // const bootstrap = require('../dist/vendor/bootstrap/dist/js/bootstrap.min.js')
  // const rellax_script = require('../dist/vendor/rellax/rellax.min.js')
  // const aos_script = require('../dist/vendor/aos/dist/aos.js')
  // const theme_script = require('../dist/js/theme.min.js')
  return (
    
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
