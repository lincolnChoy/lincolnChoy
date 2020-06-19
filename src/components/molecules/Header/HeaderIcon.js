import cx from 'classnames'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class HeaderIcon extends React.Component {
  render() {
    const { icon, location, pathname } = this.props

    return (
      <Link to={pathname}>
        <div className={cx({
            "icon-wrapper": true,
            "active-icon": location.pathname === pathname
        })}>
          {icon}
        </div>
      </Link>
    )
  }
}

export default withRouter(HeaderIcon)