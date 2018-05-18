import React, { Component } from 'react';
import './App.css';
import Router from './router';
import Header from './component/Header/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <div className='whitespace'></div>

        <div className='app-content'>
          {Router}
        </div>

      </div>
    );
  }
}

export default App;
