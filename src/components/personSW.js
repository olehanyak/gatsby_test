import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PersonSW = ({ personData }) => (
  <div className="">
    <Link to="/subject">
      <button className="bg-red-300 rounded-md p-2">show</button>
    </Link>
  </div>
)

PersonSW.propTypes = {
  siteTitle: PropTypes.string,
}

PersonSW.defaultProps = {
  siteTitle: ``,
}

export default PersonSW
