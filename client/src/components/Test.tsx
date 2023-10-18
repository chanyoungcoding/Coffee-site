import React, { useCallback } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

interface TestData {
  name: string;
  age: number;
}

const Test: React.FC = () => {
  const queryClient = useQueryClient();

  // 데이터를 가져올 함수 정의
  const fetchData = useCallback(async () => {
    const response = await axios.get<TestData[]>('http://localhost:4000/api/test');
    return response.data;
  }, []);

  const postData = useCallback(async (newData: TestData) => {
    const response = await axios.post<TestData[]>('http://localhost:4000/api/test', newData);
    return response.data;
  }, []);

  const postDataMutation = useMutation(postData, {
    onMutate: (newData) => {
      // 이 예시에서는 로컬 상태로 변경 전의 데이터를 저장
      const prevData = queryClient.getQueryData<TestData[]>('users');
      // 변경 전 데이터로 업데이트
      queryClient.setQueryData('users', (oldData: TestData[] | undefined) => [...(oldData || []), newData]);
      // 변경 전 데이터를 반환
      return prevData;
    },
    onError: (error) => {
      console.error('뮤테이션 실패:', error);
    },
    onSuccess: (data) => {
      console.log('서버에 전송 완료', data);
    },
    onSettled: (data) => {
      console.log('뮤테이션 완료:', data);
    }
  });

  // useQuery 사용
  const { data, error, isLoading } = useQuery<TestData[]>({ 
    queryKey:['users'], 
    queryFn: fetchData, 
    onSuccess: () => {console.log('good!!')}
  });

  // 정보를 보내는 메서드 정의
  const handlePostData = () => {
    const newData: TestData = {
      name: '새로운유저이름',
      age: 26,
    };

    postDataMutation.mutate(newData);
  };

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div><p>에러가 발생했습니다.</p></div>;

  return (
    <div className="test">
      {data?.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
      <button onClick={handlePostData}>새 데이터 추가</button>
    </div>
  );
};

export default Test;
