import React, { Component } from 'react';
import './App.css';
import ParagraphSelect from './ParagraphSelect';
import GenerateButton from './GenerateButton';
import Header from './Header';
import LoremIpsum from './LoremIpsum';

class App extends Component {
  state = {
    paragraphCount: null,
    ipsumParagraphs: 0,
  }

  onParagraphSelect = (number) => {
    this.setState({ paragraphCount: number });
  }

  onGenerate = (event) => {
    event.preventDefault();
    this.setState({ ipsumParagraphs: this.state.paragraphCount });
  }

  render() {
    console.log('state: ', this.state);
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <ParagraphSelect
            paragraphCount={this.state.paragraphCount}
            onButtonClick={this.onParagraphSelect}
          />
          <GenerateButton onClick={this.onGenerate} />
          <LoremIpsum paragraphs={this.state.ipsumParagraphs}/>
        </div>
      </div>
    );
  }
}

export default App;
