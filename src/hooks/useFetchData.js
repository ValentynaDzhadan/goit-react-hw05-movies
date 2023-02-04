import { useEffect, useState } from 'react';

export const useFetchData = (callback, deps = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!callback && !deps.length) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resData = await callback();
        setData(resData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return {
    data,
    isError,
    isLoading,
  };
};
