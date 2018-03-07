import React, { Component } from 'react'

import './Panel.css'

export default class Panel extends Component {
    static defaultProps = {
        title:'string'
    }
    render() {
        return (
            <section>
                <h4>-{this.props.title}-</h4>
            </section>
        )
    }
}
