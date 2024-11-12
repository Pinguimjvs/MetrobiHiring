import React from 'react';
import './Achilles.css';

const Achilles = ({ positionX }) => (
  <div className="achilles" style={{ left: `${positionX}%`, bottom: '10%' }}>
    <div className="head-achilles"></div>
    <div className="body-achilles"></div>
    <div className="legs-achilles"></div>
  </div>
);

export default Achilles;
