import axios,{ AxiosError } from 'axios';
import { Data } from '../models/coffee';

// useApiData.js
import { useState, useEffect, useCallback } from 'react';

// react-query
import { useQuery } from 'react-query';

// coffee API 
export function useApiData(url:string) {
  const {data, isLoading, isError} = useQuery<Data[]>({ 
    queryKey: ['coffeeData'], 
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
  }})
  return {data, isLoading, isError }
}

// coffeeName API

export function useApiDataName(url: string, name : string | undefined) {
  const { data, isLoading, isError} = useQuery<Data[]>({
    queryKey: ['coffeeName'],
    queryFn: async () => {
      const response = await axios.get(`${url}?name=${name}`);
      return response.data;
    }
  })
  return {data, isLoading, isError}
}

export function useApiDataSlice(url:string, itemsPerPage:number) {
  const [data, setData] = useState<Data[]>([]);
  const [currentData, setCurrentData] = useState<Data[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setCurrentData(response.data.slice(0, itemsPerPage)); // 초기 데이터 설정
    } catch(e:unknown) {
      if(e instanceof AxiosError) setError(e);
    }
  } ,[url,itemsPerPage]) 

  useEffect(() => { fetchData() },[fetchData]);
  return {data, currentData, error, setCurrentData};
}