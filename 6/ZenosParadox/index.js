// 6) Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
// interface(we would like to see the paradox demonstrated).

import React from 'react';
import RaceTrack from './components/RaceTrack/RaceTrack';

const ZenosParadox = () => (
  <div style={{overflow: 'hidden', height: '100vh', margin: '0'}}>
    <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333' }}>Zeno's Paradox: Achilles and the Tortoise</h1>
    <RaceTrack />
  </div>
);

export default ZenosParadox;
