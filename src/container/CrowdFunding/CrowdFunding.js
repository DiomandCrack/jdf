import React, { Component } from 'react'
import AdFirst from './AdFirst/AdFirst'
import News from './News/News'
// import Daliy from './Daliy/Daliy'
import In from './In/In'
import More from './More/More'
import Footer from '../../component/Footer/Footer'
export default class CrowdFunding extends Component {
    render() {
        return (
            <div className='crowd-funding'>
                <News/>
                <AdFirst/>
                {/* <Daliy/> */}
                <In/>
                <More/>
                <Footer/>
            </div>
        )
    }
}
