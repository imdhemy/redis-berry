import React, { Component } from 'react'
import { createConnectionContainer } from './WelcomeRightColumnStyle'
import { Button, Icon } from 'semantic-ui-react'

class CreateNewConnectionButton extends Component {
  render () {
    return (
      <div style={createConnectionContainer}>
        <Button basic size={'tiny'} color={'blue'} icon>
          <Icon name={'plus circle'}/> Create a new connection
        </Button>
      </div>
    )
  }
}

export default CreateNewConnectionButton