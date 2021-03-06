import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button UI Component
 * @param {string} value main button value
 * @param {function} handleClick function to handle click event
 * @param {boolean} isPrincipal select between principal and secondary button style
 * @param {boolean} isWhite select between normal and white button style
 * @return Button
 */
const Button = (props) => {
  const { value, handleClick, isPrincipal, isWhite } = props;

  const properties = {
    value: value,
    onClick: handleClick,
    type: 'button',
    className: isWhite
      ? isPrincipal
        ? 'button-principal--white'
        : 'button-secondary--white'
      : isPrincipal
      ? 'button-principal'
      : 'button-secondary',
  };

  return <input {...properties} />;
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isPrincipal: PropTypes.bool,
  isWhite: PropTypes.bool,
};

export default Button;
