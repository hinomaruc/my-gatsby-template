import * as React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from 'lodash/kebabCase'

import Layout from "../components/layout"
import Seo from "../components/seo"

const TagsPage = ({
    location,
    data: {
      allMarkdownRemark: { group },
      site: {
        siteMetadata: { title },
      },
    },
  }) => {

  return (
    <Layout location={location} title={title}>
      <Seo title="Tags" />
      <h1>All Tags</h1>
      <div className="tag-list">
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </Layout>
   )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
