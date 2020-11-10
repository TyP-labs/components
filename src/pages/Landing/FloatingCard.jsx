import React from 'react';
import PropTypes from 'prop-types';

/**
 * Floating Card UI Landing Component
 * @param {string} name
 * @param {string} division
 * @param {image} imgCenter
 * @param {string} leftText
 * @param {string} rightText
 * @param {image} leftImg
 * @param {image} leftTopImg
 * @param {image} rigthBottomImg
 */

const FloatingCard = (props) => {
  const {
    name,
    division,
    imgCenter,
    leftText,
    rightText,
    leftImg,
    rightImg,
    leftTopImg,
    rigthBottomImg,
  } = props;

  return (
    <div className="floating-card">
      <div className="floating-card__circle">
        <div className="floating-card__square">
          <img
            src={imgCenter}
            alt="icon"
            className="floating-card__square-img"
          />
          <h3 className="text__h3--black">{name}</h3>
          <span className="text__span">{division}</span>
        </div>
      </div>

      <div className="floating-card__cards">
        <div className="floating-card__cards-item1">
          <div className="floating-card__cards__item--green">
            <img
              src={leftImg}
              alt="icon"
              className="floating-card__cards__item--img"
            />
            <span className="text__h3--white">{leftText}</span>
          </div>
        </div>

        <div className="floating-card__cards-item2">
          <div className="floating-card__cards__item--violet">
            <img
              src={rightImg}
              alt="icon"
              className="floating-card__cards__item--img"
            />
            <span className="text__h3--white">{rightText}</span>
          </div>
        </div>
      </div>

      <div className="floating-card__icons">
        <div className="floating-card__square--item1">
          <div className="floating-card__square--white">
            <img
              src={leftTopImg}
              alt="icon"
              className="floating-card__square--img"
            />
          </div>
        </div>

        <div className="floating-card__square--item2">
          <div className="floating-card__square--white">
            <img
              src={rigthBottomImg}
              alt="icon"
              className="floating-card__square--img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FloatingCard.propTypes = {
  name: PropTypes.string.isRequired,
  division: PropTypes.string.isRequired,
  imgCenter: PropTypes.any,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  leftImg: PropTypes.any,
  rightImg: PropTypes.any,
  rigthBottomImg: PropTypes.any,
  leftTopImg: PropTypes.any,
};

export default FloatingCard;
