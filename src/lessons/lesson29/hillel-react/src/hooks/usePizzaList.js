import useSWR from 'swr';

export default function usePizzaList() {
  const fetcher = async () => {
    const response = await fetch('http://localhost:3000/products');
    const parsed = await response.json();

    return parsed;
  }

  const { data, error, isLoading } = useSWR('products', fetcher,{ fallbackData: []})

  /** An alternative way of fetching data */
  // const [data, setData] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const response = await fetch('http://localhost:3000/products');
  //       const parsed = await response.json();

  //       setTimeout(() => {
  //         setData(parsed)
  //         setLoading(false);
  //       }, 2000);
  //       // setData(parsed);
  //     })();
  //   } catch (error) {
  //     setError(error);
  //     setLoading(false);
  //   } finally {
  //     // setLoading(false);
  //   }

  // }, []);


  return { data, isLoading, error }
}
