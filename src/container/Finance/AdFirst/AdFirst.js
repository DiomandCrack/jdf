import React, { Component } from 'react'
import AdPanel from '../../../component/AdPanel/AdPanel'
export default class componentName extends Component {
    state={
        img:{
            title:'信用卡还款最高返300元',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270',
        }
    }
    render() {
        return (
            <AdPanel src={this.state.img.src} title={this.state.img.title}>
            
            </AdPanel>
        )
    }
}
