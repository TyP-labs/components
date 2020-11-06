import React from 'react';
import PropTypes from 'prop-types';

/**
 * Textbox UI Component
 * @param {string} title insert title string
 * @param {string} placeholder insert placeholder string
 * @param {boolean} isPassword change between password and text input
 * @param {*} handleChange function to handle onChange event
 * @param {string} alt image alt
 * @param {img} img image
 * @return Textbox
 */
const Textbox = (props) => {
  const { title, placeholder, handleChange, isPassword, alt, img } = props;

  const properties = {
    type: isPassword ? 'password' : 'text',
    className: 'textbox__input',
    placeholder: placeholder,
    onChange: (e) => handleChange(e.target.value),
  };

  return (
    <div className="textbox">
      <span className="text__span--black">{title}</span>
      <div className="textbox__container">
        <img
          alt={alt}
          src={img}
          className="textbox__img"
          style={{ display: img ? 'block' : 'none' }}
        />
        <input {...properties} />
      </div>
    </div>
  );
};

Textbox.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  isPassword: PropTypes.bool,
  alt: PropTypes.string,
  img: PropTypes.any,
};

export default Textbox;
