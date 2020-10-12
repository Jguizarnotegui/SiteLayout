import React, { Component } from 'react';
// import {Router, Route, browserHistory} from 'react-Router';
import './App.css';
import Layout from './componenets/layout/layout.component.jsx';
import Hero from './componenets/hero/hero.component.jsx';
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