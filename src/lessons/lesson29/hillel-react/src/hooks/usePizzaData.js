import { useState, useEffect } from 'react';

export default function usePizzaData() {
  const [data, setData] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetch('http://localhost:3000/products');
      const parsed = await data.json();

      setData(parsed)
    })();
  }, []);

  return { data };
}