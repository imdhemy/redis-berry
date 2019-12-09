import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { webFonts } from './configs/typography'
import Router from './navigation/Router'

const WebFont = require('webfontloader')
WebFont.load(webFonts)

class App extends Component {
  render () {
    return (
      <Router/>
    )
  }
}

export default App
