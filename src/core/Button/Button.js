import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Button.css'

export default class Button extends Component {
    render() {
        return (
            <div className={`btn ${this.props.className}`}>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
