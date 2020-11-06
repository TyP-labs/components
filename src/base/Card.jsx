import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card base UI
 * @param {html} children add jsx to custom this component
 * @return Card structure
 */
const Card = (props) => {
  const { children } = props;

  return <div className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.element,
};

export default Card;
