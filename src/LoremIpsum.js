import React from 'react';
import classnames from 'classnames';
import './LoremIpsum.css';

const LoremIpsum = ({ paragraphs, isPreview }) => (
  <div className={classnames('LoremIpsum', {'LoremIpsum--preview': isPreview })}>
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
