import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import Slider from '../../../core/Slider/Slider'
import {Link} from 'react-router-dom'
import './News.css'
export default class News extends Component {
    state={
        data:[
            {
                title:'百万白条卷免费送,快来领取',
                href:'/'
            },
            {
                title:'签到领流量,一元500M',
                href:'/'
            },
        ]
    }
    render() {
        const params = {
            direction:'vertical',
            loop:true,
            autoplay:true,
        }
        return (
            <div className='news'>
                <Panel>
                    <div className='content'>
                        <Slider params={params}>
                            {this.state.data.map((item)=>(
                                <Link to={item.href} key={item.title}>
                                    <div>{item.title}<i>></i></div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </Panel>
            </div>
        )
    }
}
