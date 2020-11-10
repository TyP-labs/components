import React from 'react';

const Square = (props) => {
  const { img } = props;

  return (
    <div className="square">
      <img src={img} alt="icon" className="square__img" />
    </div>
  );
};

export default Square;
