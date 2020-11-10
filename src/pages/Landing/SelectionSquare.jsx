import React from 'react';
import PropTypes from 'prop-types';
/**
 * Selection Square UI Landing Component
 * @param {string} title
 * @param {image} image
 */
const SelectionSquare = (props) => {
  const { title, img } = props;

  return (
    <div className="selection-square">
      <img src={img} className="selection-square__img" alt="icon" />
      <h3 className="text__span--white" style={{ textAlign: 'center' }}>
        {title}
      </h3>
    </div>
  );
};

export default SelectionSquare;
