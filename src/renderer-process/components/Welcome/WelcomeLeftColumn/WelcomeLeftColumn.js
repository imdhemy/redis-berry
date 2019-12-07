import React, { Component } from 'react'
import { GridColumn } from 'semantic-ui-react'
import { container } from './WelcomeLeftColumnStyle'
import { ActionsSection, Logo } from './index'

class WelcomeLeftColumn extends Component {
  render () {
    return (
      <GridColumn style={container}>
        <Logo/>
        <ActionsSection/>
      </GridColumn>
    )
  }
}

export default WelcomeLeftColumn