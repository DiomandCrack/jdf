import React, { Component } from 'react'
import Panel from '../../core/Panel/Panel'
import {NavLink,withRouter} from 'react-router-dom'
import {Map,is,toJS,List} from 'immutable'
import './Navbar.css'

@withRouter
export default class Navbar extends Component {
    state={
        icon:[
            {
                title:'首页',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66',
                activeImg:'//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66',
                redirectTo:'/',
                active:false,
            },
            {
                title:'理财',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66',
                activeImg:'//img12.360buyimg.com/jrpmobile/jfs/t3559/44/615554467/2520/21aa9352/580f2400N4a7b5398.png?width=66&height=66',
                redirectTo:'/finance',
                active:false
            },
            {
                title:'白条',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66',
                activeImg:'//img12.360buyimg.com/jrpmobile/jfs/t3673/27/676974575/1305/3f51b3c1/580f4e6eN6efa3e03.png?width=66&height=66',
                redirectTo:'/whitenote',
                active:false,
            },
            {
                title:'众筹',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66',
                activeImg:'//img12.360buyimg.com/jrpmobile/jfs/t4114/213/1539606521/1876/9f736561/587d8deaNf7f37693.png?width=66&height=66',
                redirectTo:'/crowdfunding',
                active:false
            },
            {
                title:'我的',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66',
                activeImg:'//img12.360buyimg.com/jrpmobile/jfs/t3442/196/638449103/2121/46fae777/580f244eN4d27d517.png?width=66&height=66',
                redirectTo:'/me',
                active:false,
            }
        ]
    }
    render() {
        console.log(this.props)
        return (
            <div className='navbar'>
                <Panel>
                    <ul className='content'>
                        {this.state.icon.map((item,i)=>(
                            <NavLink exact to={item.redirectTo} key={item.title}>
                                <img src={this.props.location.pathname===item.redirectTo?item.activeImg:item.src} alt={item.title}/>
                                <p>{item.title}</p>
                            </NavLink>
                        ))}
                    </ul>
                </Panel>
            </div>
        )
        }
}
