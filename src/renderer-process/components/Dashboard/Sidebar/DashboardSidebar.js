import React, { Component } from 'react'
import { sidebarContainer, sidebarContainerWithEntries } from '../DashboardStyle'
import SidebarNav from './SidebarNav'
import Entries from './Entries'
import PropTypes from 'prop-types'

class DashboardSidebar extends Component {
  render () {
    const { hasEntries } = this.props
    return (
      <div style={this._style()}>
        <SidebarNav/>
        {hasEntries && <Entries/>}
      </div>
    )
  }

  _style = () => {
    const { hasEntries } = this.props
    return hasEntries ? sidebarContainerWithEntries : sidebarContainer
  }
}

DashboardSidebar.propTypes = {
  hasEntries: PropTypes.bool,
}

DashboardSidebar.defaultProps = {
  hasEntries: true,
}

export default DashboardSidebar