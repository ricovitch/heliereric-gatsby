/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import { createMuiTheme, CssBaseline, MuiThemeProvider, withStyles } from "@material-ui/core"
import primaryColor from "@material-ui/core/colors/indigo"
import secondaryColor from "@material-ui/core/colors/pink"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { SocialIcon } from "react-social-icons"
import Header from "./header"

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: primaryColor[300],
      main: primaryColor[700],
      dark: primaryColor[900],
    },
    secondary: {
      light: secondaryColor[300],
      main: secondaryColor[600],
      dark: secondaryColor[900],
    },
  },
});

const styles = ({ spacing, typography }) => ({
  root: {
    ...typography.body1,
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  },
  main: {
    margin: `${spacing.unit * 3}px 0`,
  },
  footer: {
    '& a': {
      marginRight: spacing.unit,
    },
  },
});

const Layout = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={classes.root}>
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer}>
            <SocialIcon url="http://twitter.com/heliereric" />
            <SocialIcon url="https://www.linkedin.com/in/heliereric/" />
            <SocialIcon url="https://github.com/ricovitch" />
          </footer>
        </div>
      </MuiThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)