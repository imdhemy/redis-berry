import React, { Component } from 'react'
import { container } from './ActionsSectionStyle'
import { Container } from 'semantic-ui-react'
import Backup from './Backup'
import Restore from './Restore'

class ActionsSection extends Component {
  render () {
    return (
      <Container style={container}>
        <Backup/>
        <Restore/>
      </Container>
    )
  }
}

export default ActionsSection