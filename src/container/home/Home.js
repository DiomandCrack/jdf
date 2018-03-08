import React, { Component } from 'react'
import AutoSlider from './AutoSlider/AutoSlider'
import NewHand from './NewHand/NewHand'
import QuickBorrow from './QuickBorrow/QuickBorrow'

export default class componentName extends Component {
    render() {
        return (
        <div>
            <AutoSlider/>
            <NewHand/>
            <QuickBorrow/>
        </div>
        )
    }
}
