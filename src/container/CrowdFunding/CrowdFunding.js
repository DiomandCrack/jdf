import React, { Component } from 'react'
import AdFirst from './AdFirst/AdFirst'
import News from './News/News'
export default class CrowdFunding extends Component {
    render() {
        return (
            <div className='crowd-funding'>
                <News/>
                <AdFirst/>
            </div>
        )
    }
}
