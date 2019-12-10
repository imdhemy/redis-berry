import React, { Component } from 'react'
import { activeNavMenuItem, navContainer, navMenu, navMenuItem } from '../DashboardStyle'
import { Icon, Menu, MenuItem } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class SidebarNav extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = { current: '' }
  }

  render () {
    return (
      <div style={navContainer}>
        <Menu fluid icon={'labeled'} vertical style={navMenu}>
          <MenuItem name={'home'} active={this._isActive('home')} style={this._style('home')}
                    onClick={this._onItemClick}>
            <Icon name={'home'}/>
            Home
          </MenuItem>
          <MenuItem name={'foo'} active={this._isActive('foo')} style={this._style('foo')}
                    onClick={this._onItemClick}>
            <Icon name={'coffee'}/>
            Coffee
          </MenuItem>
        </Menu>
      </div>
    )
  }

  _isActive = (name) => {
    const { current } = this.state
    return current === name
  }

  _style = (name) => {
    return this._isActive(name) ? activeNavMenuItem : navMenuItem
  }

  _onItemClick = (e, { name }) => {
    const { history } = this.props
    if (name === 'home') {
      history.push('/')
    }
  }
}

export default withRouter(SidebarNav)
