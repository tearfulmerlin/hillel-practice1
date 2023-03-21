import React from 'react'
import './ingredients.css';

export default function Ingredients({ data }) {
  return (
    <div className='container'>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
    );
}
