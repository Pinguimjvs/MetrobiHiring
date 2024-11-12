import React from 'react';
import './Tortoise.css';

const Tortoise = ({ positionX }) => (
  <div className="tortoise" style={{ left: `${positionX}%`, bottom: '10%' }}>
    <div className="shell"></div>
    <div className="head"></div>
    <div className="legs front"></div>
    <div className="legs back"></div>
  </div>
);

export default Tortoise;
