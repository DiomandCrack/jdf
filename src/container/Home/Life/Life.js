import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import './Life.css'
export default class Life extends Component {
    state={
        data:[
            {
                title:'惠生活',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                sub:'',
            },
            {
                title:'小白信用',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                sub:'全新升级',
            },
            {
                title:'信用卡',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                sub:'',
            },
            {
                title:'卡转让',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                sub:'',
            },
            {
                title:'定制还款',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                sub:'',
            }
        ],
    }
    render() {
        return (
            <div>
                <Panel title='生活服务'>
                    <ul className='content'>
                        {this.state.data.map(item=>(
                            <li key={item.title} className='item'>
                                <img src={item.src} alt={item.title}/>
                                <p>{item.title}</p>
                                {item.sub?<p className='sub'>{item.sub}</p>:null}
                            </li>
                        ))}
                    </ul>
                </Panel>
            </div>
        )
    }
}
