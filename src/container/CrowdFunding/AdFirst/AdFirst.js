import React, { Component } from 'react'
import AdPanel from '../../../component/AdPanel/AdPanel'

export default class AdFirst extends Component {
    state={
        img:{
            src:'//img12.360buyimg.com/jrpmobile/jfs/t15760/134/2225069966/49339/a3f59b31/5a9919ceN910ed9c6.jpg?width=750&height=320',
            title:'出众好物,开年满减',
        }
    }
    render() {
            return (
                <AdPanel src={this.state.img.src} title={this.state.img.title}>
                </AdPanel>
            )
        }
}
