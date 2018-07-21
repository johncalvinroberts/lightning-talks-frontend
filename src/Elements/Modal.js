import React, { Component } from 'react'
import styled from 'styled-components'
import { Portal, black, absolute } from '@/Utilities'
import Icon from './Icon'
import { Card } from './Cards'
const ModalWrapper = styled.div`
  ${absolute({})}
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseButton = styled.button`
  ${absolute({ x: 'right' })}
  border: 0;
  background-color: transparent;
  padding: 4px;
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
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
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
