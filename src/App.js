import React, { Component } from 'react'
import Home from './container/home/Home'
import Header from './component/Header/Header'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
