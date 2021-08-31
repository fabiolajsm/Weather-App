import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  if (cities.length < 1) {
    return <div>
      <h5 className='search'>Busca un lugar</h5>
    </div>
  }
  return (
    <div className='cards'>
      {cities.map(c => <Card
        key={c.id}
        max={c.max}
        min={c.min}
        name={c.name}
        img={c.img}
        id={c.id}
        onClose={() => onClose(c.id)}
      />)}
    </div>
  );
}
