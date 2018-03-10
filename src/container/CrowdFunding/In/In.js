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
            {
                title:'智能',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
                list:[
                    {
                        title:'智能后视镜',
                        src:'https://img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg',
                        progress:'175%',
                        price:'90.00',
                        end:true,
                        elite:false,
                    },
                    {
                        title:'GPD口袋电脑',
                        src:'https://img30.360buyimg.com/cf/s250x250_jfs/t5827/255/6140287884/111611/498f9693/59683808N9253369f.jpg',
                        progress:'0',
                        price:'75.00',
                        end:false,
                        elite:false,
                    }
                ]

            },
            {
                title:'美食',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
                list:[
                    {
                        title:'层层轻薄雪花酥',
                        src:'https://img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg',
                        progress:'377%',
                        price:'29.00',
                        end:false,
                        elite:false,
                    },
                    {
                        title:'胶囊咖啡机',
                        src:'https://img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg',
                        progress:'273%',
                        price:'29.00',
                        end:false,
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
