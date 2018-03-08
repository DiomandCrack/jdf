import React, { Component } from 'react'

import Panel from '../../../core/Panel/Panel'

import './FeaturedMoney.css'

export default class FeaturedMoney extends Component {
    state={
        data:[
            {
            title:'定期理财',
            sub:'90天可质押',
            rate:'5.5%',
            text:'历史年化收益率'
        },{
            title:'固收理财',
            sub:'理财推荐',
            rate:'5.8%',
            text:'综合年化收益率'
        },{
            title:'基智账户',
            sub:'组合投资',
            rate:'8%-10%',
            text:'止盈年化收益'
        },
        {
            title:'小白基金',
            sub:'超短期',
            rate:'5%',
            text:'7日年化收益率'
        }
        ]
    }
    render() {
        return (
            <div className='featured-money'>
                <Panel title='理财精选' >
                    <section className="content">
                        {this.state.data.map(item=>(
                            <dl key={item.title} className='item'>
                                <dt>{item.title}&nbsp;<span>{item.sub}</span></dt>
                                <dd>{item.rate}</dd>
                                <dd>{item.text}</dd>
                            </dl>
                        ))}
                    </section>
                </Panel>
            </div>
        )
    }
}
