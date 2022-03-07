import React from 'react';
import './Main.css';
import '../Animal/Animal.css';

import Animal from '../Animal/Animal.js';
import background from '../../background.png';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((dinner) => (
        <Animal key={dinner.name} {...dinner} />
      ))}
    </main>
  );
}
