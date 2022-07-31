import './App.css';
import Pokedex from './components/Pokedex';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pokedéx</h1>
        <div className='body'>
        <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
