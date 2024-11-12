import React, { useState, useEffect } from 'react';
import Achilles from '../Achilles/Achilles';
import Tortoise from '../Tortoise/Tortoise';
import './RaceTrack.css';

const RaceTrack = () => {
  const [positionAchilles, setPositionAchilles] = useState(0);
  const [positionTortoise, setPositionTortoise] = useState(80);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if(positionTortoise === 96) setIsAnimating(false)

    if (isAnimating) {
      const interval = setInterval(() => {
        setPositionTortoise(prev => prev + 0.25);
        console.log(positionTortoise)

        setPositionAchilles(prev => prev + ((positionTortoise - prev) / 10) + 0.25);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isAnimating, positionTortoise, positionAchilles]);

  function showButton() {
    if(positionTortoise === 96) {
        return (
        <button onClick={resetRace} style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
            Reset Race
        </button>
        )
    } else {
       return ( 
       <button onClick={() => setIsAnimating(true)} style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
            Start Race
        </button>
        )
    }
  }

  function resetRace() {
    setPositionAchilles(0)
    setPositionTortoise(80)
  }

  return (
    <div className="racetrack">
      <Tortoise positionX={positionTortoise} />
      <Achilles positionX={positionAchilles} />

      {showButton()}
    </div>
  );
};

export default RaceTrack;
