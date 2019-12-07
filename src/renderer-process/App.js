import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Welcome } from './views'
import { webFonts } from './configs/typography'

const WebFont = require('webfontloader')
WebFont.load(webFonts)

class App extends Component {
  render () {
    return (
      <Welcome/>
    )
  }
}

export default App
