import { Tab, Tabs, withStyles } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const styles = ({ palette, spacing, typography }) => ({
  root: {
    background: palette.primary.dark,
    marginBottom: spacing.unit * 3,
  },
  container: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: spacing.unit * 2,
    color: `white`,
    display: 'flex',
  },
  title: {
    ...typography.h3,
    color: `white`,
    textDecoration: `none`,
  },
  tabs: {
    flex: 1,
  },
  tabsAlign: {
    justifyContent: 'flex-end',
  },
  tab: {
    minWidth: 100,
  },
});

const Header = ({ classes, siteTitle }) => (
  <header className={classes.root}>
    <div className={classes.container}>
      <Link to="/" className={classes.title}>{siteTitle}</Link>
      <Tabs
        centered={true}
        classes={{ centered: classes.tabsAlign }}
        className={classes.tabs}
        value={0}
      >
        <Tab
          label="Home"
          component={Link}
          to="/"
          className={classes.tab}
        />
        <Tab
          label="Projects"
          component={Link}
          to="/projects"
          className={classes.tab}
        />
        <Tab
          label="Blog"
          component={Link}
          to="/blog"
          className={classes.tab}
        />
      </Tabs>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
