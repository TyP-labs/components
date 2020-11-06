import React from 'react';
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
  const { isWhite } = props;
  const history = useHistory();

  const properties = {
    isWhite: isWhite ? true : false,
  };

  const linkers = ['Sobre Nosotros', 'Servicios', 'Precios', 'Iniciar Sesión'];

  const handleClick = (value) => {
    const uri = value.toLowerCase().replace(/ó/, 'o').split(' ').join('-');
    history.push(uri);
  };

  return (
    <div className={isWhite ? 'navbar--white' : 'navbar'}>
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
                isPrincipal={isWhite ? false : true}
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
