import axios,{ AxiosError } from 'axios';
import { Data } from '../models/coffee';

// useApiData.js
import { useState, useEffect, useCallback } from 'react';

export function useApiData(url:string) {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch(e:unknown) {
      if(e instanceof AxiosError) setError(e)
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => { fetchData()}, [fetchData]);
  return { data, loading, error };
}

