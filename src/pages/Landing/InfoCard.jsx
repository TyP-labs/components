import React from 'react';
import PropTypes from 'prop-types';
/**
 * InfoCard Landing UI Component
 * @param {string} title card title string
 * @param {string} paragraph card paragraph string
 * @param {img} img card img
 */
const InfoCard = (props) => {
  const { title, paragraph, img } = props;

  return (
    <div className="info-card">
      <div className="info-card__container">
        <img src={img} alt="info card" />
        <h3 className="text__h3--black">{title}</h3>
        <p className="text__p--black" style={{ margin: '20px 0 0 0' }}>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
};

export default InfoCard;
