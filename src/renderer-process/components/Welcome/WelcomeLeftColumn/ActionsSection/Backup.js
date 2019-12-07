import React, { Component } from 'react'
import { actionButton, actionLabel, backupContainer } from './ActionsSectionStyle'
import { Button } from 'semantic-ui-react'

class Backup extends Component {
  render () {
    return (
      <div style={backupContainer}>
        <Button basic inverted circular icon={'cloud download'} size={'massive'} style={actionButton}/>
        <i style={actionLabel}>Backup</i>
      </div>
    )
  }
}

export default Backup