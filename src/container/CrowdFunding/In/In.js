import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import './In.css'
export default class In extends Component {
    state={
        data:[
            {
                title:'科技',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
                list:[
                    {
                        title:'电动牙刷',
                        src:'//img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        progress:'175%',
                        price:'79.00',
                        end:false,
                        elite:true,
                    },
                    {
                        title:'胶囊咖啡机',
                        src:'//img30.360buyimg.com/cf/s250x250_jfs/t16168/161/1968909024/148686/2a85179/5a7be4bdN01533e62.jpg',
                        progress:'29',
                        price:'11.00',
                        end:true,
                        elite:false,
                    }
                ]

            },
        ]
    }
    render() {
        return (
            <div className='in'>
                <Panel title='in货推荐'>
                    <section className="content">
                        {this.state.data.map(item=>(
                            <div className="item" key={item.title}>
                                <img src={item.src} alt={item.title}/>
                                <section className="list">
                                    {item.list.map(val=>(
                                        <div className="production" key={val.title}>
                                            <img src={val.src} alt={val.title}/>
                                            <p className='title'>{val.title}</p>
                                            <p className='price'><em>{val.price}</em>起</p>
                                            {val.end?
                                            (<div className='end'>众筹结束</div>)
                                            :(<article>
                                                {/* <progress value='80' max='100'></progress> */}
                                                <div className="wrapper">
                                                    <div className="inner" style={{width:val.progress}}></div>
                                                </div>
                                                <p>{val.progress}</p>
                                            </article>)}
                                            {val.elite?(<label>精选</label>):null}
                                        </div>
                                    ))}
                                </section>
                            </div>
                        ))}
                    </section>
                </Panel>
            </div>
        )
    }
}
