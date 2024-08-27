"use client"
import { useState, useEffect } from 'react';

export function useLocaleStorage<T>(
  key: string,
  startValue: T
): [T, (v: T) => void] {
  // Ініціалізуємо стан значення з перевіркою на наявність window
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return startValue;
    }

    const data = localStorage.getItem(key);

    if (data === null) {
      localStorage.setItem(key, JSON.stringify(startValue));
      return startValue;
    }

    try {
      return JSON.parse(data) as T;
    } catch {
      return startValue;
    }
  });

 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  const save = (newValue: T) => {
    setValue(newValue);
  };

  return [value, save];
}
