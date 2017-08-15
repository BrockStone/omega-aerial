import React, { Component } from 'react'

// import css
import './App.css'

// Import semanitc-ui-react elements
import { Container, Grid, Button } from 'semantic-ui-react'

// Import Components
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <Home />
      </div>
    );
  }
}

export default App;
