import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import Home from '../Home'
import SlidesPreView from '../../../component/SlidesPreView/SlidesPreView'
import {Link,Route} from 'react-router-dom'

import './Insurance.css'
export default class Insurance extends Component {
    state={
        data:[
            {
                title:'超值碎屏保',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
                component:Home,
            },
            {
                title:'日常小病险',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
                component:Home,
            },
            {
                title:'至尊医疗险',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
                component:Home,
            },
            {
                title:'人保综合意外险',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
                component:Home,
            },
            {
                title:'百万防癌险',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260',
                component:Home,
            },
        ],
        ad:{
            title:'买车险打白条',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200',
            component:Home,
        }
    }
    render() {
        return (
            <div className='insurance'>
                <Panel title='保险保障'>
                    <SlidesPreView>
                        {this.state.data.map(item=>(
                            <Link to='/' key={item.src}>
                                <img src={item.src} alt={item.title}/>
                            </Link>
                        ))}
                    </SlidesPreView>
                </Panel>
                <Panel>
                    <img src={this.state.ad.src} alt={this.state.ad.title}/>
                </Panel>
            </div>
        )
    }
}
