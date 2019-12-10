import React, { Component } from 'react'
import { actionButton, actionLabel, backupContainer } from './ActionsSectionStyle'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Backup extends Component {
  render () {
    return (
      <div style={backupContainer}>
        <Button as={Link} to={'/backup'} basic inverted circular icon={'cloud download'} size={'massive'}
                style={actionButton}/>
        <i style={actionLabel}>Backup</i>
      </div>
    )
  }
}

export default Backup