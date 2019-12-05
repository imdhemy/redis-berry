import React, { Component } from 'react'
import { container, grid } from './WelcomeGridStyle'
import { Grid } from 'semantic-ui-react'
import WelcomeLeftColumn from '../WelcomeLeftColumn/WelcomeLeftColumn'
import WelcomeRightColumn from '../WelcomeRightColumn/WelcomeRightColumn'

class WelcomeGrid extends Component {
  render () {
    return (
      <div style={container}>
        <Grid columns={2} style={grid}>
          <WelcomeLeftColumn/>
          <WelcomeRightColumn/>
        </Grid>
      </div>
    )
  }
}

export default WelcomeGrid