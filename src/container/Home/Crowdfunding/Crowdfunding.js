import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'

import SlidePreView from '../../../component/SlidesPreView/SlidesPreView'
import Panel from '../../../core/Panel/Panel'
import Home from '../Home'

import './Crowdfunding.css'

export default class Crowdfunding extends Component {
    state={
        data:[
            {
                title:'思维翼 kick 电动滑板车',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421',
                component:Home
            },
            {
                title:'飞傲M7高清音乐播放器',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421',
                component:Home
            },
            {
                title:'多功能便携洗牙器-PLUS',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421',
                component:Home
            },
            {
                title:'先河私有云',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421',
                component:Home
            },
        ],
    }
    render() {
        return (
            <div className='crowdfunding'>
                <div className="arrow">
                    <Link to='/'>更多尖货></Link>
                </div>
                <Panel title='众筹新品'>
                    <SlidePreView className="crowdfunding-slider">
                        {this.state.data.map((item)=>(
                                <Link to='/'  key={item.src}>
                                    <div>
                                        <img src={item.src} alt={item.title} />
                                    </div>
                                </Link>
                        ))}
                    </SlidePreView>
                </Panel>
            </div>
        )
    }
}
