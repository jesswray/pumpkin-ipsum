import React from 'react';
import './LoremIpsum.css';

const LoremIpsum = ({ paragraphs }) => (
  <div className='LoremIpsum'>
    {paragraphs.map((paragraph, i) => (
      <p
        className='LoremIpsum__paragraph'
        key={i}
      >
        {paragraph}
      </p>
    ))}
  </div>
);

export default LoremIpsum;
