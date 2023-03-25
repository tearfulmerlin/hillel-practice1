import { useState, useEffect } from 'react'
import { useOnlineStatus } from './useOnlineStatus';

export default function useCounter() {
  const online = useOnlineStatus();

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [online]);

  return { count, setCount };
}
