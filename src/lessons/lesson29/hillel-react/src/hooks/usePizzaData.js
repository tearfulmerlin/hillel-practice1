import useSWR from 'swr';

export default function usePizzaData(id) {
  const fetcher = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const parsed = await response.json();

    return parsed;
  }

  return useSWR(() => `products/${id}`, fetcher, { fallbackData: {} });
}