import React, { Component } from 'react'
import { createConnectionContainer } from './WelcomeRightColumnStyle'

class CreateNewConnectionButton extends Component {
  render () {
    return (
      <div style={createConnectionContainer}>
        CreateNewConnectionButton
      </div>
    )
  }
}

export default CreateNewConnectionButton