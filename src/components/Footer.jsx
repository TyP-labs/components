import React from 'react';
import { useHistory } from 'react-router';
import Logo from '../base/Logo';

const Footer = (props) => {
  const { list } = props;
  const history = useHistory();
  const handleClick = (value) => {
    history.push(value);
  };
  return (
    <div className="footer">
      <Logo isWhite={true} />
      <li className="footer__list">
        {list.map((value, key) => {
          return (
            <div onClick={handleClick.bind(this, value)} key={key}>
              <span className="text__span--white">{value}</span>
            </div>
          );
        })}
      </li>
    </div>
  );
};

export default Footer;
