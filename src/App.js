import React, { Component } from 'react'
import {Route,Switch,withRouter} from 'react-router-dom'

import Home from './container/Home/Home'
import Finance  from './container/Finance/Finance'
import WhiteNote from './container/WhiteNote/WhiteNote'
import CrowdFunding from './container/CrowdFunding/CrowdFunding'

import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import Download from './container/Special/Download/Download'

import './App.css'

@withRouter
class App extends Component {
    render() {
        return (
            <div>
                {this.props.location.pathname.indexOf('special')===-1? (
                    <div  className="App">
                        <Header/>
                        <Switch>
                            <Route path='/' exact component={Home}/> 
                            <Route path='/finance' component={Finance}/>
                            <Route path='/whitenote' component={WhiteNote}/>
                            <Route path='/crowdfunding' component={CrowdFunding}/>
                        </Switch>
                        <Navbar/>
                    </div>
                ):(<Route path='/special/download' component={Download}/>)} 
            </div>
        );
    }
}

export default App;
