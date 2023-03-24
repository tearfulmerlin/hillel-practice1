import React from 'react'
import PlanetItem from './list-item';

export default function PlanetList({ planets }) {
  return planets.map((item) => <PlanetItem item={item} />);
}
