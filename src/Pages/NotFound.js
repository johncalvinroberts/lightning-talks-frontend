import React, { Component } from 'react'
import { VerticalFlex, Nav, Icon } from '@/Elements'
import { red } from '@/Utilities'

export default class NotFound extends Component {
  render () {
    return (
      <VerticalFlex>
        <Nav/>
        <div>
          <span style={{ margin: '0 auto' }}>
            <Icon name="error" color={red} height="3rem" width="3rem"/>
          </span>
          <p>
            404 not found
          </p>
        </div>
      </VerticalFlex>
    )
  }
}
