import { Typography, withStyles } from "@material-ui/core"
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = ({ palette, spacing, typography }) => ({
  intro: {
    ...typography.body2,
    padding: spacing.unit * 2,
  },
  post: {
    textDecoration: "none",
  },
})

const IndexPage = ({ classes, data }) => {
  const postList = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className={classes.intro}>
        My personal blog<br />
        Previously as3 expert, now focused on JS
      </div>
      <Typography variant="h3">Latest posts</Typography>
      {postList.edges.map(({ node }, i) => (
        <Link key={node.fields.slug} to={node.fields.slug} className={classes.post}>
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default withStyles(styles)(IndexPage)

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`