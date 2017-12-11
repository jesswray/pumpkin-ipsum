import React from 'react';
import dictionary from './ipsum';
import loremIpsumParagraph from './ipsum_script';
import './LoremIpsum.css';

const LoremIpsum = ({ paragraphs }) => (
  <div className='LoremIpsum'>
    {[...Array(paragraphs)].map((item, i) => (
      <p
        className='LoremIpsum__paragraph'
        key={i}
      >
        {loremIpsumParagraph(100)}
      </p>
    ))}
  </div>
);

export default LoremIpsum;