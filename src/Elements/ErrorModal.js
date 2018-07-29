import React, { Component, Fragment } from 'react'
import Modal from './Modal'
import { red } from '@/Utilities'
import Icon from './Icon'
import { HorizontalFlex } from './Flexbox'
import { ErrorButton } from './Buttons'
import { connect } from 'react-redux'
import { shiftGlobalError } from '@/Store/Actions'

const mapDispatchToProps = { shiftGlobalError }

@connect(state => ({ errors: state.errors.errors }), mapDispatchToProps)
export default class ErrorModal extends Component {
  state = {
    on: false
  }

  static getDerivedStateFromProps (props, state) {
    return { on: props.errors.length > 0 }
  }

  toggle = () => {
    this.props.shiftGlobalError()
    this.setState({ on: !this.state.on })
  }

  render () {
    const currentError = this.props.errors[0]
    let message = ''
    if (currentError && currentError.message) {
      message = currentError.message ? currentError.message : currentError.error
    }
    if (currentError && !currentError.message && currentError.error) {
      message = currentError.error
    }
    return (
      <Fragment>
        <Modal on={this.state.on} toggle={this.toggle} buttonColor={red}>
          <HorizontalFlex justifyContent="flex-start">
            <Icon name="error" color={red} width="40px" height="40px"/>
            <h3 style={{ marginLeft: '10px' }}>Oopsies</h3>
          </HorizontalFlex>
          <p>{message}</p>
          <ErrorButton onClick={this.toggle}>Okay</ErrorButton>
        </Modal>
      </Fragment>
    )
  }
}
