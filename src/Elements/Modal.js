import React, { Component } from 'react'
import styled from 'styled-components'
import { Portal, black, absolute } from '@/Utilities'
import { Card } from './Cards'
const ModalWrapper = styled.div`
  ${absolute({})}
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Mask = styled.div`
  ${absolute({})}
  height: 100%;
  width: 100%;  
  background-color: black;
  opacity: 0.3;
`

const ModalCard = Card.extend`
  position: relative;
  z-index: 10;
  margin-bottom: 100px;
  color: ${black}
`

export default class Modal extends Component {
  render () {
    const { children, on, toggle } = this.props
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <div>
                {children}
              </div>
            </ModalCard>
            <Mask onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    )
  }
}
