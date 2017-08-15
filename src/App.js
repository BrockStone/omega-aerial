import React, { Component } from 'react'

// import SVG logo / css
import logo from './logo.svg'
import './App.css'

// Import semanitc-ui-react elements
import { Container, Grid, Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
