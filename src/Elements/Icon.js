import React, { Component } from 'react'
import { black } from '@/Utilities'

class Icon extends Component {
  static defaultProps = {
    color: black
  }

  render () {
    switch (this.props.name) {
      case 'close':
        return (
          <svg t="1516438184281"
            viewBox="0 0 1024 1024"
            p-id="2462"
            width="20"
            fill={this.props.color}
            height="20">
            <path d="M1022.793875 170.063604L852.730271 0 511.396938 341.333333 170.063604 0 0 170.063604l341.333333 341.333334L0 852.730271l170.063604 170.063604 341.333334-340.127208 341.333333 340.127208 170.063604-170.063604-340.127208-341.333333 340.127208-341.333334z" p-id="2463"></path>
          </svg>
        )
    }
  }
}

export default Icon
