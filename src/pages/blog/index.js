import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              description
              year: date(formatString: "YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>{JSON.stringify(posts)}</p>
    </Layout>
  )
}

export default BlogPage
