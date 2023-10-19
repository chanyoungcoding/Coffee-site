import axios from 'axios';
import { Data } from '../models/coffee';

// useApiData.js
import { useState} from 'react';

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

//coffeeSlice
export function useApiDataSlice(url:string, itemsPerPage:number) {
  const [data, setData] = useState<Data[]>([]);
  const [currentData, setCurrentData] = useState<Data[]>([]);

  const {isLoading, isError} = useQuery<Data[]>({
    queryKey: ['coffeeSlice'],
    queryFn: async () => {
      const response = await axios.get(url);
      setData(response.data);
      setCurrentData(response.data.slice(0, itemsPerPage));
      return response.data
    }
  })
  return {data, currentData, isLoading, isError, setCurrentData};
}

