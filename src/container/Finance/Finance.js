import React, { Component } from 'react'

import AutoSlider from './AutoSlider/AutoSlider'
import AdFirst from './AdFirst/AdFirst'
import FeaturedMoney from './FeaturedMoney/FeaturedMoney'
import AdSecond from './AdSecond/AdSecond'

export default class Finance extends Component {
  render() {
        return (
            <div className='finance'>
                <AutoSlider/>
                <AdFirst/>
                <FeaturedMoney/>
                <AdSecond/>
            </div>
        )
    }
}
