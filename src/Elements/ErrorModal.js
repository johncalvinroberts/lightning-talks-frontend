import React, { Component, Fragment } from 'react'
import { Modal, Toggle } from './Modal'

export default class ErrorModal extends Component {
  render () {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>{JSON.stringify}</h1>
            </Modal>
          </Fragment>
        )}
      </Toggle>
    )
  }
}
