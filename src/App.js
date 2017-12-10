import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import logo from './logo.svg';
import leaf from './fall_leaves.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={leaf} height={100} width={100} className="App-logo" alt="logo" />
          <h1 className="App-title">Pumpkin Ipsum</h1>
        </header>
        <p className="App-intro">
          <ButtonToolbar>
            <span className='button-toolbar-label'>Paragraphs: </span>
            {[1,2,3,4].map(number => (
              <Button bsStyle="default" bsSize="small">{number}</Button>
            ))}
          </ButtonToolbar>
          <div className='generate-button'>
            <Button bsStyle="primary" bsSize="small">
              Generate
            </Button>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
