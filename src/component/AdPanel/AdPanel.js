import React, { Component } from 'react'
import Panel from '../../core/Panel/Panel'

import './AdPanel.css'
import propTypes from 'prop-types'
export default class CreditCard extends Component {
    static propTypes ={
        src:propTypes.string,
        title:propTypes.string,
    }
    render() {
        return (
            <div className={`load-info ${this.props.className?this.props.className:''}`}>
                <Panel>
                    <img src={this.props.src} alt={this.props.title}/>
                </Panel>
            </div>
        )
    }
}
