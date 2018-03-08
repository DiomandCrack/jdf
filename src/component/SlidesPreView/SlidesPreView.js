import React, { Component } from 'react'
import Slider from '../../core/Slider/Slider'
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
            <div className='slides-pre-view'>
                <Slider params={this.props.params}>
                    {this.props.children}
                </Slider>
            </div>
        )
    }
}
