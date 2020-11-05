import React from 'react';
import { useHistory } from 'react-router';
import Linker from '../base/Linker';
import Logo from '../base/Logo';

/**
 * Footer UI Component
 * @param {Array} list string array
 * @return Footer
 */
const Footer = (props) => {
  const { list } = props;
  const history = useHistory();
  const handleClick = (value) => {
    const uri = value
      .toLowerCase()
      .replace(/ó/, 'o')
      .replace(/á/, 'a')
      .replace(/é/, 'e')
      .replace(/í/, 'i')
      .replace(/ú/, 'u')
      .split(' ')
      .join('-');
    history.push(uri);
  };
  return (
    <div className="footer">
      <div className="footer__container">
        <Logo isWhite={true} />

        <li className="footer__list">
          {list.map((value, key) => {
            return (
              <Linker
                value={value}
                isWhite={true}
                handleClick={handleClick.bind(this, value)}
                key={key}
              />
            );
          })}
        </li>
      </div>
    </div>
  );
};

export default Footer;
