import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'

import './NewHand.css'
export default class NewHand extends Component {
    render() {
        return (
            <div className="new-hand">
                <Panel title='新手特权'>
                    <section className="content">
                        <div className="item">
                            <h4>下载App <span className='red'>送888元礼包</span></h4>
                            <p className='gray'>新手专享</p>
                            <img src="" alt=""/>
                        </div>
                        
                        <div className="item">
                            <ul>
                                <li>
                                   <img src="" alt=""/> 
                                   <h4 className='red'>领128元新手礼包</h4>
                                   <p className='gray'>立即开通</p>
                                </li>
                                <li>
                                    <img src="" alt=""/> 
                                    <h4>打白条<span className='red'>享白条</span></h4>
                                    <p className='gray'>立即开通享好礼</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </Panel>
            </div>
        )
    }
}
