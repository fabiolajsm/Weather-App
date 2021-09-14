import React from 'react';
import Card from '../Card/Card.jsx';
import './Cards.css';

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
        id={c.id}
        name={c.name}
        max={c.max}
        min={c.min}
        img={c.img}
        onClose={() => onClose(c.id)}
      />)}
    </div>
  );
}
