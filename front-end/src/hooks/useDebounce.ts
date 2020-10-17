import { useEffect, useRef, useState } from 'react';

export function useDebounce<T = unknown>(value: T, timeout: number): T | undefined {
  const timerId = useRef<number>();
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(undefined);
  useEffect(
    () => {
      clearTimeout(timerId.current);
      timerId.current = setTimeout(
        () => {
          setDebouncedValue(value);
        },
        timeout
      )
    },
    [value, timeout]
  )
  return debouncedValue;
}

