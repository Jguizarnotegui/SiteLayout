import React, { Component } from 'react';
// import {Router, Route, browserHistory} from 'react-Router';
import './App.css';
import Content from './componenets/contents/contents.component.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Content />
      </div>
    )
  }
}

export default App;