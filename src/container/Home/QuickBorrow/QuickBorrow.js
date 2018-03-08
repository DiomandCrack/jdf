import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './QuickBorrow.css'

export default class QuickBorrow extends Component {
  render() {
    return (
      <div className='quick-borrow'>
        <section className="content">
            <Link to='/'>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270" alt=""/>
            </Link>
        </section>
      </div>
    )
  }
}
