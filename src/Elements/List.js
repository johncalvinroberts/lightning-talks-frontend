import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from './Cards'
import { elevation } from '@/Utilities'

const ListParent = styled(Card)`
  padding: 0;
  ${elevation[1]}
  &:hover{
    ${elevation[1]}
  }
`

class List extends Component {
  render () {
    return (
      <ListParent>
        {this.props.children}
      </ListParent>
    )
  }
}

export default List
