import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../../core/Button/Button'

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  render() {
    return (
      <div>
        <span className="left">
            <em>注册</em>
            &nbsp;|&nbsp;
            <em>登陆</em>
        </span>
        <Button>APP下载</Button>
      </div>
    )
  }
}
