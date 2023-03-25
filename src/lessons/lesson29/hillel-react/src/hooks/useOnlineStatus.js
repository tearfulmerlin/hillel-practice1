import { useState, useEffect } from "react";

export function useOnlineStatus () {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const off = window.addEventListener('offline', () => setOnline(false));
    const on = window.addEventListener('online', () => setOnline(true));

    return () => {
      window.removeEventListener('offline', off);
      window.removeEventListener('online', on);
    };
  }, []);

  return online;
}