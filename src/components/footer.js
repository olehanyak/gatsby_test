import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="text-orange-600 bg-red-300 h-24 m-auto">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
