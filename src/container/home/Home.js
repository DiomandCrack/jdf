import React, { Component } from 'react'
//component
import AutoSlider from './AutoSlider/AutoSlider'
import FeaturedMoney from './FeaturedMoney/FeaturedMoney'
import Crowdfunding from './Crowdfunding/Crowdfunding'
import Insurance from './Insurance/Insurance'
import Help from './Help/Help'
import Life from './Life/Life'
import Footer from '../../component/Footer/Footer'
// import NewHand from './NewHand/NewHand'
// import QuickBorrow from './QuickBorrow/QuickBorrow'

export default class Home extends Component {
    render() {
        return (
        <div>
            <AutoSlider/>
            {/* <NewHand/>
            <QuickBorrow/> */}
            <FeaturedMoney/>
            <Crowdfunding/>
            <Insurance/>
            <Help/>
            <Life/>
            <Footer/>
        </div>
        )
    }
}
