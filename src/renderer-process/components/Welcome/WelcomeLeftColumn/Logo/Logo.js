import React, { Component } from 'react'
import { container, header, headerContent, subHeader } from './LogoStyle'
import { Container, Header, HeaderContent, Image } from 'semantic-ui-react'
import { logo, name, version } from '../../../../configs/app'
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader'

class Logo extends Component {
  render () {
    const width = 100
      , height = 100
      , welcomedMessage = `Welcome to ${name}`
    return (
      <Container style={container}>
        <Header as={'h1'} icon textAlign={'center'} style={header}>
          <Image src={logo} width={width} height={height}/>
          <HeaderContent style={headerContent}>{welcomedMessage}</HeaderContent>
          <HeaderSubHeader style={subHeader}>{version}</HeaderSubHeader>
        </Header>
      </Container>
    )
  }
}

export default Logo