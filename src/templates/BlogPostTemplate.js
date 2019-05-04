import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1>{title}</h1>
        {post.frontmatter.image && (
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
