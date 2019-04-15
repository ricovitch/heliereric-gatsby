import { Typography } from "@material-ui/core"
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Typography variant="h4">Senior Frontend Developer Toulouse</Typography>
    <p>Welcome to my website, i'm an experienced frontend developer, previously as3/flex expert, now focused on react/nodejs/aws technologies.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
