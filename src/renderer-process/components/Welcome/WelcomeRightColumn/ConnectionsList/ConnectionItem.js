import React, { Component } from 'react'
import { Image, Label, ListContent, ListDescription, ListHeader, ListItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ConnectionItem extends Component {
  render () {
    const { color, name, description } = this.props
    return (
      <ListItem as={Link} to={'connection'}>
        <Label as={Image} circular color={color} size={'huge'}>{(name ? name : '').substring(0, 1)
          .toUpperCase()}</Label>
        <ListContent>
          <ListHeader>{name}</ListHeader>
          <ListDescription>{description}</ListDescription>
        </ListContent>
      </ListItem>
    )
  }
}

export default ConnectionItem