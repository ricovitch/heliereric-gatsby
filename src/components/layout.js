/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import { createMuiTheme, CssBaseline, MuiThemeProvider, withStyles } from "@material-ui/core"
import primaryColor from "@material-ui/core/colors/blue"
import secondaryColor from "@material-ui/core/colors/blueGrey"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import WebFont from "webfontloader";

import Header from "./header"

/* WebFont.load({
  google: {
    families: ['Roboto:300,400,500'],
  },
}); */

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: primaryColor[300],
      main: primaryColor[500],
      dark: primaryColor[700],
    },
    secondary: {
      light: secondaryColor[300],
      main: secondaryColor[500],
      dark: secondaryColor[700],
    },
  },
});

const styles = ({ typography }) => ({
  root: {
    ...typography.body1,
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
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
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
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