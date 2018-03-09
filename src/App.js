import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Home from './container/Home/Home'
import Finance  from './container/Finance/Finance'
import WhiteNote from './container/WhiteNote/WhiteNote'
import CrowdFunding from './container/CrowdFunding/CrowdFunding'

import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                    <Route path='/' exact component={Home}/> 
                    <Route path='/finance' component={Finance}/>
                    <Route path='/whitenote' component={WhiteNote}/>
                    <Route path='/crowdfunding' component={CrowdFunding}/>
                <Navbar/>
            </div>
        );
    }
}

export default App;
