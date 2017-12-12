import React, { Component } from 'react';
import './App.css';
import ParagraphSelect from './ParagraphSelect';
import GenerateButton from './GenerateButton';
import Header from './Header';
import LoremIpsum from './LoremIpsum';
import loremIpsumParagraph from './ipsum_script';

class App extends Component {
  state = {
    paragraphCount: null,
    ipsumParagraphs: [],
  }

  onParagraphSelect = (number) => {
    this.setState({ paragraphCount: number });
  }

  onGenerate = (event) => {
    this.setState({
      ipsumParagraphs: [...Array(this.state.paragraphCount)].map(item =>
        loremIpsumParagraph(75)
      ),
    });
  }

  render() {
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
