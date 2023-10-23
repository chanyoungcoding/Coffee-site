import axios from 'axios';
import { Data, LoginData } from '../models/coffee';
import { useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';

// useApiData.js
import { useCallback, useState } from 'react';

// react-query
import { useMutation, useQuery } from 'react-query';



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

//coffeeSlice 
export function useApiDataNumber(url:string) {
  const [num, setNum] = useState<number>(3);
  const {data, isLoading, isError} = useQuery<Data[]>({
    queryKey: ['coffeeNumber', num],
    queryFn: async () => {
      const response = await axios.get(`${url}?number=${num}`)
      return  response.data
    }
  })

  const changeNumber = useCallback(() => {
    setNum(num => num + 3);
  },[])
  
  return {data, isLoading, isError, changeNumber}
}

//login
export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn : async (data:LoginData) => await axios.post('http://localhost:4000/api/login', data),
    mutationKey: 'login',
    onSuccess: (e) => {
      const {username} = e.data;
      Cookies.set('사용자명',username, {expires:1})
      const users = Cookies.get('사용자명');
      console.log(users);
      navigate('/')
    },
    onError: e => console.log(e)
  });
};