import React, { Component } from 'react'
import AdPanel from '../../../component/AdPanel/AdPanel'
import './AdSecond.css'
export default class AdSecond extends Component {
    state={
        img:{
            title:'理财金理财购物专享',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240'
        }
    }
    render() {
        return (
            <AdPanel title={this.state.img.title} src={this.state.img.src} className='load-info-second'>
            </AdPanel>
        )
    }
}
