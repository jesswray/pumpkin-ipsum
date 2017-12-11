import React from 'react';
import { Button } from 'react-bootstrap';
import './GenerateButton.css';

const GenerateButton = ({ onClick }) => (
  <div className='GenerateButton'>
    <Button
      bsStyle="primary"
      bsSize="small"
      onClick={onClick}
    >
      Generate
    </Button>
  </div>
);

export default GenerateButton;
