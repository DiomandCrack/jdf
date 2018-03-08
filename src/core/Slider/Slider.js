import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import './Slider.css'
import '../../../node_modules/react-id-swiper/src/styles/css/swiper.css'
export default class Slider extends Component {
   
    static defaultProps={
        params:{
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
        return (
        <section className={`slider ${this.props.className}`}>
            <Swiper {...this.props.params}>
                {this.props.children}
            </Swiper>
        </section>
        )
    }
}
