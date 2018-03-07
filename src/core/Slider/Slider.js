import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import './Slider.css'
import '../../../node_modules/react-id-swiper/src/styles/css/swiper.css'
export default class Slider extends Component {
   
    static defaultProps={
        swiperParams:{
            autoplay:{
                delay:3000,
            },
            loop:true,
            pagination: {
                el: '.swiper-pagination',
              },
            notNextTick:false,

        }
    }
    render() {
        console.log(this.props.children)
        return (
        <section className={`slider ${this.props.className}`}>
            <Swiper {...this.props.swiperParams}>
                {this.props.imgs.map(item=>(<div key={item.src} ><img src={item.src} alt={item.title} /></div>))}
            </Swiper>
        </section>
        )
    }
}
