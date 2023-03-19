import React from 'react'
import PlanetItem from './list-item';

export default function PlanetList({ planets }) {
  return <>
  {planets.map((item) => <div key={item.name}>{item.name}</div>)}
  {/* {planets.map((item) => <div>{item.name}</div>)} */}
  </>;
  // return planets.map((item) => <PlanetItem item={item} />);
}
