import React from 'react';

/**
 * Selector UI Base Component
 * @param {string} value string value
 * @param {*} handleClick function to handle click event
 * @param {boolean} isWhite select between normal and white style
 * @return Selector
 */
const Selector = (props) => {
  const { value, isWhite, handleClick } = props;

  const propieties = {
    value: value,
    type: 'button',
    className: isWhite ? 'selector--white' : 'selector',
    onClick: handleClick,
  };

  return <input {...propieties} />;
};

export default Selector;
