import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Backup, Connection, CreateConnection, Restore, Welcome } from '../views'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact><Welcome/></Route>
          <Route path={'/create-connection'} exact><CreateConnection/></Route>
          <Route path={'/backup'} exact><Backup/></Route>
          <Route path={'/restore'} exact><Restore/></Route>
          <Route path={'/connection'} exact><Connection/></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router