import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import './Daliy.css'
export default class Daliy extends Component {
    state={
        img:[
            {title:'',src:''},
            {title:'',src:''}
        ]
    }
    render() {
        return (
            <div className='daliy'>
                <Panel title='每日签到'>
                    {this.state.img.map(item=>(
                        <img src={item.src} alt={item.title}/>
                    ))}
                </Panel>
            </div>
        )
    }
}
