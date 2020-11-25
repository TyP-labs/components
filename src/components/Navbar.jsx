import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Linker from '../base/Linker';
import { useHistory } from 'react-router';
import Logo from '../base/Logo';
import Button from '../base/Button';

/**
 * Navbar UI Component
 * @param {boolean} isWhite select between white and normal navbar style
 * @return Navbar
 */
const Navbar = (props) => {
  const { isWhite, isSignUp } = props;
  const history = useHistory();
  let [style, setStyle] = useState(isWhite);

  const properties = {
    isWhite: style,
  };

  const changeStyle = useCallback(() => {
    if (window.scrollY >= 70) {
      setStyle(false);
      properties.isWhite = true;
    } else {
      setStyle(true);
      properties.isWhite = false;
    }
  });

  window.addEventListener('scroll', changeStyle);

  const linkers = ['Sobre Nosotros', 'Servicios', 'Precios', 'Iniciar Sesión'];

  const handleClick = useCallback((value) => {
    const uri = value.toLowerCase().replace(/ó/, 'o').split(' ').join('-');
    history.push(uri);
  });

  if (isSignUp) {
    const linkers = [
      'Sobre Nosotros',
      'Servicios',
      'Precios',
      'Iniciar Sesion',
    ];
    return (
      <div className="navbar">
        <div className="navbar__container">
          <Logo handleClick={handleClick.bind(this, '')} />
          <div className="navbar__linkers">
            {linkers.map((value, key) => {
              const args = {
                key: key,
                value: value,
                handleClick: handleClick.bind(this, value),
              };

              return <Linker {...args} />;
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        isWhite
          ? style
            ? 'navbar--white'
            : 'navbar--scroll'
          : style
          ? 'navbar'
          : 'navbar--white--scroll'
      }
    >
      <div className="navbar__container">
        <Logo {...properties} />
        <div className="navbar__linkers">
          {linkers.map((value, key) => {
            const args = {
              key: key,
              value: value,
              handleClick: handleClick.bind(this, value),
            };

            return <Linker {...properties} {...args} />;
          })}

          <div className="navbar__buttons">
            <div className="button__container">
              <Button
                {...properties}
                isPrincipal={true}
                value="Crear Cuenta"
                handleClick={handleClick.bind(this, 'crear cuenta')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isWhite: PropTypes.bool,
};

export default Navbar;
