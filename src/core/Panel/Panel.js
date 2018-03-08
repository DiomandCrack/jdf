import React, { Component } from 'react'

import './Panel.css'

export default class Panel extends Component {
    render() {
        return (
            <section className="panel">
                {this.props.title?(<h4>-{this.props.title}-</h4>):null}
                {this.props.children}
            </section>
        )
    }
}
