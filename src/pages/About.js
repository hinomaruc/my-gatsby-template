import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <Seo title="About" />
        <h1>About</h1>
      </Layout>
    </div>
  )
}

export default Aboutpage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
