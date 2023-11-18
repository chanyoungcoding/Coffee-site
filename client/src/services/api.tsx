import axios from 'axios';
import { Data, LoginData, CoffeeShopData, BasketData, CoffeeTypes, CoffeeCountry, SignInData, DeleteGreat, UpdataBaketCount, kakaoData } from '../models/coffee';
import { useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';

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

// 커피 종류 API

export function useApiCoffeeTypes(url:string) {
  const {data, isLoading, isError} = useQuery<CoffeeTypes[]>({ 
    queryKey: ['coffeeTypes'], 
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
  }})
  return {data, isLoading, isError }
}

//커피 나라별 맛과 원두 API

export function useApiCoffeeCountry(url:string) {
  const {data, isLoading, isError} = useQuery<CoffeeCountry[]>({
    queryKey: ['coffeeCountry'],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    }})
    return {data, isLoading, isError}
}

// 장바구니 추가 API

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

// 좋아요 추가 API

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

// 장바구니 API

export function useApiBaket(url:string, userName:string | undefined) {
  const {data, isLoading, isError} = useQuery({ 
    queryKey: ['User'], 
    queryFn: async () => {
      const response = await axios.get(`${url}?user=${userName}`);
      return response.data;
  }})
  return {data, isLoading, isError }
}

//유저 API 

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
        window.location.reload();
      }
    },
    onError: e => console.log(e)
  });
};

// Sign In API

export const useSignInMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: SignInData) => await axios.post('http://localhost:4000/api/signin', data),
    mutationKey: 'signin',
    onSuccess: (e) => {
      if(e.data === 'existed username') {
        alert('존재하는 아이디 입니다.')
        return navigate('/signin')
      }
      alert('회원가입에 성공하였습니다.');
      navigate('/');
    },
    onError: () => {
      alert('알수없는 오류가 생겼습니다.')
      navigate('/')
    }
  })
}

export const useDeleteGreat = () => {
  return useMutation({
    mutationFn: async (data:DeleteGreat) => await axios.delete('http://localhost:4000/api/delete', {data : data}),
    mutationKey: 'deleteGreat',
    onSuccess: e => {
      console.log(e)
      if(e.data.success === true) {
        alert(e.data.message)
      } else {
        alert(e.data.message)
      }
      window.location.reload();
    },
    onError: e => {
      console.log(e);
      alert('예상치 못한 오류가 발생했습니다.')
    }
  })
}

export const useDeleteBasket = () => {
  return useMutation({
    mutationFn: async (data:UpdataBaketCount) => await axios.patch('http://localhost:4000/api/updateBasketCount', data),
    mutationKey: 'updataBasketCount',
    onSuccess: (e:AxiosResponse) => {
      if(e.data.success === true && e.data.message === '개수오류'){
        alert('한개 이하로 내릴 수 없습니다.')
      } else if(e.data.success === true) {
        alert(e.data.message)
      } else {
        alert(e.data.message)
      }
      window.location.reload();
    },
    onError: (e:AxiosResponse) => {
      alert(e.data.message || '예상치 못한 오류가 발생했습니다.')
    }
  })
}

// 매점 이름과 좌표 API

export function useApiKakaoMapInfo(url:string) {
  const {data, isLoading, isError} = useQuery<kakaoData[]>({ 
    queryKey: ['kakaoMapInfo'], 
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
  }})
  return {data, isLoading, isError }
}
