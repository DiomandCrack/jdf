import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import './More.css'
export default class More extends Component {
    state={
        data:[
            {
                title:'关注京东支付',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330'
            },
            {
                title:'京东金融服务号',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330'
            },
            {
                title:'京东小金库公众号',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330'
            }

        ],
    }
    render() {
        return (
            <div className='more'>
                <Panel title='更多福利'>
                    <section className="content">
                        {this.state.data.map(item=>(
                            <div className='item' key={item.title}>
                                <img src={item.src} alt={item.title}/>
                            </div>
                        ))}
                        <span>专享福利<i>></i></span>
                    </section>
                </Panel>
            </div>
        )
    }
}
