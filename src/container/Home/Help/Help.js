import React, { Component } from 'react'
import './Help.css'
import Panel from '../../../core/Panel/Panel'
import {Link,Route} from 'react-router-dom'
export default class Help extends Component {
    render() {
        return (
            <div className='help'>
                <Panel>
                    <Link to='/'>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="帮助中心"/>
                    </Link>
                </Panel>
            </div>
        )
    }
}
