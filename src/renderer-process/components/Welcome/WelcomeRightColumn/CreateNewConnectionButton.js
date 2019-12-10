import React, { Component } from 'react'
import { createConnectionContainer } from './WelcomeRightColumnStyle'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CreateNewConnectionButton extends Component {
  render () {
    return (
      <div style={createConnectionContainer}>
        <Button basic size={'tiny'} color={'blue'} icon as={Link} to={'/create-connection'}>
          <Icon name={'plus circle'}/> Create a new connection
        </Button>
      </div>
    )
  }
}

export default CreateNewConnectionButton