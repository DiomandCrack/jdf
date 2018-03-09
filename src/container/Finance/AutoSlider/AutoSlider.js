import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Slider from '../../../core/Slider/Slider'
import Finance from '../Finance'
import './AutoSlider.css'
export default class AutoSlider extends Component {
    state={
        imgSrc:[
            {
            title:'10000000份红包',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400',
            component:Finance
        },
        {
            title:'小金库天天摇宝箱',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400',
            component:Finance
        },
        {
            title:'优惠券礼包3折优惠',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400',
            component:Finance
        },
    ],
    }
    render() {
        return (
            <article className='finance'>
                <Slider className='auto-slider'>
                    {this.state.imgSrc.map(item=>(<div key={item.src} ><img src={item.src} alt={item.title} /></div>))}
                </Slider>
            </article>
        )
    }
}
