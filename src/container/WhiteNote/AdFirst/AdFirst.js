import React, { Component } from 'react'
import AdPanel from '../../../component/AdPanel/AdPanel'

import './AdFirst.css'
export default class AdFirst extends Component {
    state={
        img:{
            title:'白条权益劵包',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320',
        }
    }
    render() {
        return (
            <AdPanel src={this.state.img.src} title={this.state.img.title}/>
        )
    }
}
