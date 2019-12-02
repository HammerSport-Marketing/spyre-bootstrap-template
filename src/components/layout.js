/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withPrefix, useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
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

  return (
    
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      <Footer />
      </div>
      {/* SCRIPTS */}
      <Helmet>
        <script src={withPrefix('./dist/vendor/jquery/dist/jquery.min.js')} type="text/javascript"/>
        <script src={withPrefix('./dist/vendor/popper.js/dist/umd/popper.min.js')} type="text/javascript"/>
        <script src={withPrefix('./dist/vendor/bootstrap/dist/js/bootstrap.min.js')} type="text/javascript"/>
        <script src={withPrefix('./dist/vendor/rellax/rellax.min.js')} type="text/javascript"/>
        <script src={withPrefix('./dist/vendor/aos/dist/aos.js')} type="text/javascript"/>
        <script src={withPrefix('./dist/js/theme.min.js')} type="text/javascript"/>
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
