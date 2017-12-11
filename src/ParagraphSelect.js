import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './ParagraphSelect.css';

class ParagraphSelect extends Component {
  onClick = (event) => {
    this.props.onButtonClick(parseInt(event.target.value, 10));
  }

  render () {
    const { paragraphCount } = this.props;
    return (
      <div className='ParagraphSelect'>
        <ButtonToolbar>
          <span className='ParagraphSelect__label'>Paragraphs: </span>
          {[1,2,3,4].map((number) => {
            return (
              <Button
                key={number}
                bsStyle={number === paragraphCount ? 'primary' : 'default'}
                bsSize="small"
                onClick={this.onClick}
                value={number}
              >
                {number}
              </Button>
            );
          })}
        </ButtonToolbar>
      </div>
    );
  }
};

export default ParagraphSelect;
