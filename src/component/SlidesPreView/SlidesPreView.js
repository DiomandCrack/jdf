import React, { Component } from 'react'
import Slider from '../../core/Slider/Slider'
import './SlidesPreView.css'
export default class SlidesPreView extends Component {
    static defaultProps = {
        params:{
            slidesPerView:2.3,
            spaceBetween:30,
            freeMode:true, 
        },
    }

    render() {
        return (
            <div className={`slides-pre-view ${this.props.className?this.props.className:''}`}>
                <Slider params={this.props.params}>
                    {this.props.children}
                </Slider>
            </div>
        )
    }
}
