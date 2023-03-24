import React, { useState, useEffect } from 'react'
import PlanetList from './planet-list/planet-list';
import Loader from '../../components/loader';

export default function PlanetConainer() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://swapi.dev/api/planets');

      const data = await response.json();

      setPlanets(data.results);
      setLoading(false);
    })()
    
    return () => {
      
    };
  }, []);

  return (
    <Loader isLoading={isLoading}>
      <div style={{ margin: 'auto'}}><PlanetList planets={planets} /></div>
    </Loader>
    );
}

