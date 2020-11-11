import React from 'react';
import PropTypes from 'prop-types';
import LogoWhite from '../assets/logo-icon-white.png';
import LogoViolet from '../assets/logo-icon.png';

/**
 *  Logo UI Component
 * @param {bool} isWhite change logo color between violet and white
 * @return App Logo
 */
const Logo = (props) => {
  const { isWhite, handleClick } = props;

  const properties = {
    src: isWhite ? LogoWhite : LogoViolet,
    className: 'logo__img',
  };

  return (
    <div className="logo" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img {...properties} alt="Kritt Logo" style={{ cursor: 'pointer' }} />
      <h3
        className={isWhite ? 'text__h3--white' : 'text__h3--black'}
        style={{ cursor: 'pointer' }}
      >
        Kritt.
      </h3>
    </div>
  );
};

Logo.propTypes = {
  isWhite: PropTypes.bool,
};

export default Logo;
