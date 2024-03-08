import { useState } from "react";

export const useFetching = (callback: Function) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetching = async (...args: any[]) => {
    try {
      setIsLoading(true);

      await callback(...args);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
