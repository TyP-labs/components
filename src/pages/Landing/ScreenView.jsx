import React, { useCallback, useState } from 'react';
import Logo from '../../base/Logo';

const ScreenView = () => {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  const handleMove = useCallback((e) => {
    setX((window.innerWidth / 2 - e.pageX) / 40);
    setY((window.innerHeight / 2 - e.pageY) / 90);
  });

  window.addEventListener('mousemove', handleMove);


  return (
    <div
      className="screen-view"
      style={{ transform: `rotateY(${x * -1}deg) rotateX(${y}deg)` }}
    >
      <div className="screen-view__sidebar">
        <div className="screen-view__sidebar-logo">
          <Logo isWhite={true} />
        </div>
        <div className="screen-view__sidebar-items">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="screen-view__sidebar-bottom"></div>
      </div>

      <div className="screen-view__cards">
        <div className="screen-view__cards-header"></div>
        <div className="screen-view__cards-items">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ScreenView;
