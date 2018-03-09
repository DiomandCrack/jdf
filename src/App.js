import React, { Component } from 'react'

import Home from './container/Home/Home'
import Finance  from './container/Finance/Finance'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'

import {Route} from 'react-router-dom'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Route path='/' exact component={Home}/> 
                <Route path='/finance' component={Finance}/>
                <Navbar/>
            </div>
        );
    }
}

export default App;
