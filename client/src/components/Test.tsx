import React, { useCallback } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

interface TestData {
  name: string;
  age: number;
}

const Test:React.FC = () => {

  const queryClient = useQueryClient();

  // 데이터를 가져올 함수 정의
  const fetchData = useCallback(async() => {
    const response = await axios.get<TestData[]>('http://localhost:4000/api/test');
    return response.data;
  }, [])

  const postData = useCallback(async(newData:TestData) => {
    const response = await axios.post<TestData[]>('http://localhost:4000/api/test', newData);
    return response.data;
  }, [])

  const postDataMutation = useMutation(async (newData: TestData) => postData(newData), {
    onSuccess: (data) => {
      queryClient.setQueryData('users', data);
    },
  });

  // useQuery 사용
  const {data, error, isLoading} = useQuery<TestData[]>(['users'], fetchData, {
    onSuccess: () => {
      console.log('성공~~')
    }
  });

  // 정보를 보내는 메서드 정의
  const handlePostData = () => {
    const newData = {
      // 새 데이터 정보를 이곳에 추가
      name: '새로운유저이름',
      age: 26
    };

    postDataMutation.mutate(newData);
  };

  if(isLoading) return <div>Loding....</div>
  if(error) return <div><p>에러가 발생했습니다.</p></div>

  return(
    <div className="test">
      {data?.map((item,index) => (
        <li key={index}>{item.name}</li>
      ))}
      <button onClick={handlePostData}>새 데이터 추가</button>
    </div>
  )

}

export default Test;
