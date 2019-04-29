import { Tab, Tabs, withStyles } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from '@reach/router';

const styles = ({ palette, spacing, typography }) => ({
  root: {
    background: palette.primary.dark,
    marginBottom: spacing.unit * 3,
  },
  container: {
    margin: `0 auto`,
    maxWidth: 960,
    color: `white`,
    display: "flex",
    alignItems: "flex-end",
  },
  title: {
    ...typography.h3,
    color: `white`,
    textDecoration: `none`,
    padding: spacing.unit * 2,
  },
  tabs: {
    flex: 1,
    overflow: "visible",
  },
  tabsAlign: {
    justifyContent: "flex-end",
  },
  tabsFixed: {
    overflow: "visible",
  },
  tabIndicator: {
    height: 4,
    bottom: -4,
  },
  tab: {
    minWidth: 100,
  },
})

const Header = ({ classes, location, siteTitle }) => {
  const getActiveTab = (location) => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/projects':
        return 1;
      case '/blog':
        return 2;
      default:
        return 0;
    }
  }
  const activeTab = getActiveTab(location);

  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <Link to="/" className={classes.title}>{siteTitle}</Link>
        <Tabs
          centered={true}
          classes={{ root: classes.tabs, centered: classes.tabsAlign, fixed: classes.tabsFixed }}
          TabIndicatorProps={{ className: classes.tabIndicator }}
          value={activeTab}
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
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = withStyles(styles)(Header)

export default props => (
  <Location>
    {locationProps => <StyledHeader {...locationProps} {...props} />}
  </Location>
);
