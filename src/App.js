import React, { Component } from 'react';
import CounterList from './components/CounterList/CounterList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterList />
      </div>
    );
  }
}

export default App;
