import { withStyles } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const styles = ({ palette, spacing, typography }) => ({
  root: {
    background: palette.primary.main,
    marginBottom: spacing.unit * 3,
  },
  container: {
    ...typography.h3,
    margin: `0 auto`,
    maxWidth: 960,
    padding: `${spacing.unit * 3}px ${spacing.unit * 2}px`,
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
});

const Header = ({ classes, siteTitle }) => (
  <header className={classes.root}>
    <div className={classes.container}>
      <Link to="/" className={classes.link}>
        {siteTitle}
      </Link>
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
