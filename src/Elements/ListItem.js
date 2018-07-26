import React, { Component } from 'react'
import styled from 'styled-components'
import { HorizontalFlex } from '@/Elements'
import { blue, transition, absolute } from '@/Utilities'

const ListItemParent = styled.a`
  width: 100%;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  display: block;
  height: 2.6rem;
  ${transition({ length: '0.1s' })}
  &:before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: ${blue};
    ${transition({ length: '0.1s' })}
    ${absolute({ x: 'left' })}
  }
  &:hover{
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    &:before{
      width: 30px;
    }  
  }  
`

const ListItemInner = styled.div`
  z-index:999;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  padding: 0;
  justify-content: space-around;  
`

export default class ListItem extends Component {
  render () {
    return (
      <ListItemParent href={this.props.href}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        <ListItemInner justifyContent={'space-between'}>
          {this.props.children}
        </ListItemInner>
      </ListItemParent>
    )
  }
}
