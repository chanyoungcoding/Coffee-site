import axios from 'axios';
import { Data, LoginData, CoffeeShopData, BasketData } from '../models/coffee';
import { useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';

// useApiData.js
import { useCallback, useState } from 'react';

// react-query
import { useMutation, useQuery, UseMutationResult } from 'react-query';

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

// coffeeSlice API
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

// coffeeNumber API
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


// coffeeShop API

export function useApiDataShop(url:string) {
  const {data, isLoading, isError} = useQuery<CoffeeShopData[]>({ 
    queryKey: ['coffeeShop'], 
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
  }})
  return {data, isLoading, isError }
}

//coffeeShopDetail API

export function useApiDataShopDetail(url:string, name:string | undefined) {
  const {data, isLoading, isError} = useQuery<CoffeeShopData[]>({
    queryKey: ['coffeeShopDetail'],
    queryFn: async () => {
      const response = await axios.get(`${url}?name=${name}`);
      return response.data
    }
  })
  return {data, isLoading, isError}
}

// coffeeBasket API

type BasketMutationResult = UseMutationResult<void, Error, BasketData>;

export const useBasketMutation = (): BasketMutationResult => {
  return useMutation({
    mutationFn: async (data: BasketData) => await axios.post('http://localhost:4000/api/coffeeBasket', data),
    mutationKey: 'basket',
    onSuccess: () => {
      alert('장바구니에 추가했습니다.');
    },
    onError: () => alert('문제가 발생했습니다..')
  });
};

// coffeeGreat API

export const useGreatMutation = () => {
  return useMutation<number, string, unknown, { coffeeName: string, coffeeUrl:string ,userName: string}>({
    mutationFn: async (data) =>  await axios.post('http://localhost:4000/api/coffeeGreat', data),
    mutationKey: 'great',
    onSuccess: () => {
      alert('좋아요 등록했습니다.');
    },
    onError: () => alert('로그인하세요.')
  })
}

//user API 


export function useApiUser(url:string, userName:string | undefined) {
  const {data, isLoading, isError} = useQuery({ 
    queryKey: ['User'], 
    queryFn: async () => {
      const response = await axios.get(`${url}?user=${userName}`);
      return response.data;
  }})
  return {data, isLoading, isError }
}

//login API
export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn : async (data:LoginData) => await axios.post('http://localhost:4000/api/login', data),
    mutationKey: 'login',
    onSuccess: (e) => {
      if(e.data == '실패') {
        alert('아이디 또는 비밀번호가 잘못됐습니다.');
        navigate('/login');
      } else {
        const {username} = e.data;
        Cookies.set('사용자명',username, {expires:1})
        navigate('/')
      }
    },
    onError: e => console.log(e)
  });
};