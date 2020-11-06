import React from 'react';
import PropTypes from 'prop-types';

/**
 * Linker UI Base Component
 * @param {string} value title value
 * @param {*} handleClick function to handle click event
 * @param {boolean} isWhite select between white and violet linker style
 * @param {integer} key key
 * @return Linker
 */
const Linker = (props) => {
  const { value, handleClick, isWhite, key } = props;

  const properties = {
    type: 'button',
    value: value,
    onClick: handleClick,
    className: isWhite ? 'linker--white' : 'linker',
    key: key,
  };

  return <input {...properties} />;
};

Linker.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isWhite: PropTypes.bool,
  key: PropTypes.any,
};

export default Linker;
