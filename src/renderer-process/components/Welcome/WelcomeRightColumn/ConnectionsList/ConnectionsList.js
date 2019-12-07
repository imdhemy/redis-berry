import React, { Component } from 'react'
import { connectionsListContainer } from '../WelcomeRightColumnStyle'
import { List } from 'semantic-ui-react'
import ConnectionItem from './ConnectionItem'

const connections = [
  {
    key: 1,
    name: 'Red Connection',
    description: 'SSH',
    color: 'red',
  },
  {
    key: 2,
    name: 'Orange Connection',
    description: '192.168.1.1',
    color: 'orange',
  },
  {
    key: 3,
    name: 'Olive Connection',
    description: '192.168.1.1',
    color: 'olive',
  },
  {
    key: 4,
    name: 'Green Connection',
    description: '192.168.1.1',
    color: 'green',
  },
  {
    key: 5,
    name: 'Teal Connection',
    description: '192.168.1.1',
    color: 'teal',
  },
  {
    key: 6,
    name: 'Blue Connection',
    description: '192.168.1.1',
    color: 'blue',
  },
  {
    key: 7,
    name: 'Violet Connection',
    description: '192.168.1.1',
    color: 'violet',
  },
  {
    key: 8,
    name: 'Purple Connection',
    description: '192.168.1.1',
    color: 'purple',
  },
  {
    key: 9,
    name: 'Pink Connection',
    description: '192.168.1.1',
    color: 'pink',
  },
  {
    key: 10,
    name: 'Brown Connection',
    description: '192.168.1.1',
    color: 'brown',
  },
  {
    key: 11,
    name: 'Grey Connection',
    description: '192.168.1.1',
    color: 'grey',
  },
  {
    key: 12,
    name: 'Black Connection',
    description: '192.168.1.1',
    color: 'black',
  },
]

class ConnectionsList extends Component {
  render () {
    return (
      <div style={connectionsListContainer}>
        <List selection verticalAlign={'middle'}>
          {connections.map(item => <ConnectionItem {...item}/>)}
        </List>
      </div>
    )
  }
}

export default ConnectionsList