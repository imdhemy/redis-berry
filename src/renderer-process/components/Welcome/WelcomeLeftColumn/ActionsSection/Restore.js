import React, { Component } from 'react'
import { actionButton, actionLabel, backupContainer } from './ActionsSectionStyle'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Restore extends Component {
  render () {
    return (
      <div style={backupContainer}>
        <Button as={Link} to={'/restore'} basic inverted circular icon={'cloud upload'} size={'massive'}
                style={actionButton}/>
        <i style={actionLabel}>Restore</i>
      </div>
    )
  }
}

export default Restore