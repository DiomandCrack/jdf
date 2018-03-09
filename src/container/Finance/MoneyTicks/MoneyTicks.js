import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import './MoneyTicks.css'
export default class MoneyTicks extends Component {
    state={
        data:[
           {
            img:'//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
            title:'月度理财',
            sub:'预期年化收益率4.50%',
           },
           {
            img:' //img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
            title:'季度理财',
            sub:'历史年化回报率5.50%',
           },
           {
            img:' //img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
            title:'一年理财',
            sub:'历史年化回报率5.80%',
           }

        ]
    }
    render() {
        return (
            <div className='money-ticks'>
                <Panel title='理财精选'>
                    <section className="content">
                        {this.state.data.map((item)=>(
                            <div className="item" key={item.title}>
                                <img src={item.img} alt={item.title}/>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.sub}</p>
                                </div>
                                <em>去赚钱></em>
                            </div>
                        ))}
                    </section>
                </Panel>
            </div>
        )
    }
}
