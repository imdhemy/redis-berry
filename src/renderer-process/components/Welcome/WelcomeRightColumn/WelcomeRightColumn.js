import React, { Component } from 'react'
import { GridColumn } from 'semantic-ui-react'
import ConnectionsList from './ConnectionsList/ConnectionsList'
import CreateNewConnectionButton from './CreateNewConnectionButton'
import { container } from './WelcomeRightColumnStyle'

class WelcomeRightColumn extends Component {
  render () {
    return (
      <GridColumn style={container}>
        <ConnectionsList/>
        <CreateNewConnectionButton/>
      </GridColumn>
    )
  }
}

export default WelcomeRightColumn