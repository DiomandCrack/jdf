import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../../core/Button/Button'

import './Header.css'

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  render() {
    return (
      <div className="header">
        <span className="left">
            <em>注册</em>
            &nbsp;|&nbsp;
            <em>登陆</em>
        </span>
        <Button className="btn-download">APP下载</Button>
      </div>
    )
  }
}