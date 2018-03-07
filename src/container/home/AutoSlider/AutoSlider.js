import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Slider from '../../../core/Slider/Slider'
import Home from '../Home'
import './AutoSlider.css'
export default class AutoSlider extends Component {
    state={
        imgSrc:[
            {
            title:'2元红包',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t14554/135/2425649982/36377/877a7f5a/5a9e74fdNa65625e2.jpg?width=750&height=320',
            component:Home
        },
        {
            title:'打白条',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t19126/149/685129191/34011/59334e67/5a9e752fNfb1b27d4.jpg?width=750&height=320',
            component:Home
        },
        {
            title:'扫地机',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t15013/216/2393741798/48095/4cce9527/5a9e756eN781b28b5.jpg?width=750&height=320',
            component:Home
        },
        {
            title:'白条提额',
            src:'https://img12.360buyimg.com/jrpmobile/jfs/t14815/202/2383106816/47183/c50f2bfd/5a9e754eNe283d841.jpg?width=750&height=320',
            component:Home
        },
    ],
        selectList:[
            {
            title:'优惠券',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            component:Home
        },
        {
            title:'领红包',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
            component:Home
        },
        {
            title:'强钢镚',
            src:'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
            component:Home
        },
        {
            title:'白条提额',
            src:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
            component:Home
        },
    ],
    }
    render() {
        return (
            <article>
                <Slider imgs={this.state.imgSrc} className='auto-slider'>
                </Slider>
                <section className="list">
                    {/* <Route path='/' component={Home}></Route> */}
                    {this.state.selectList.map((item)=>(
                        <Link to='/' key={item.src} className='list-item'>
                            <img src={item.src} alt={item.title}/>
                            <span className='list-text'>{item.title}</span>
                        </Link>))}
                </section>
            </article>
        )
    }
}
