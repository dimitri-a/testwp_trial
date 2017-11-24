import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import list from './sample-data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <List employees={list.employees}>


        </List>
      </div>
    );
  }
}

export default App;
