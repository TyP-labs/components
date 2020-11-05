import React from 'react';

/**
 * Linker UI Base Component
 * @param {string} value title value
 * @param {*} handleClick function to handle click event
 * @param {boolean} isWhite select between white and violet linker style
 * @return Linker
 */
const Linker = (props) => {
  const { value, handleClick, isWhite } = props;

  const properties = {
    type: 'button',
    value: value,
    onClick: handleClick,
    className: isWhite ? 'linker--white' : 'linker',
  };

  return <input {...properties} />;
};

export default Linker;
