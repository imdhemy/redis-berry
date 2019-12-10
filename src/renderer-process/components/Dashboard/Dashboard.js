import React, { Component } from 'react'
import { container } from './DashboardStyle'
import DashboardSidebar from './Sidebar/DashboardSidebar'
import DashboardMain from './DashboardMain'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  render () {
    const { hasEntries } = this.props
    return (
      <div style={container}>
        <DashboardSidebar hasEntries={hasEntries}/>
        <DashboardMain/>
      </div>
    )
  }
}

Dashboard.propTypes = {
  hasEntries: PropTypes.bool,
}

Dashboard.defaultProps = {
  hasEntries: true,
}

export default Dashboard
