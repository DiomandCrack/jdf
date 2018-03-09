import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'

import './NoteBonus.css'
export default class NoteBonus extends Component {
    state={
        data:[
            {
                title:'开通白条',
                sub:'送百元礼包',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
                linkText:'立即查看>',
            },
            {
                title:'白条提额',
                sub:'金融app专享提额礼包',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
                linkText:'去提额>',
            }
        ]
    }
    render() {
        return (
            <div className='note-bonus'>
                <Panel title='白条福利'>
                    {this.state.data.map(item=>(
                        <div className='item'>
                            <img src={item.img} alt={item.title}/>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.sub}</p>
                            </div>
                            <em>
                                {item.linkText}
                            </em>
                        </div>
                    ))}
                </Panel>
            </div>
        )
    }
}
