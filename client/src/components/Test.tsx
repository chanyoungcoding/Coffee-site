import React, { useEffect, useState } from 'react';
import '../styles/menu.scss';

import Pagination from 'react-js-pagination';
import axios, { AxiosError } from 'axios';

import Logo from './Logo';
import { Data } from '../models/coffee';



// Test 컴포넌트
const Test: React.FC = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);
  const [currentData, setCurrentData] = useState<Data[]>([]);

  const [error, setError] = useState<AxiosError | null>(null);

  const itemsPerPage = 4; // 한 페이지당 보여줄 아이템 수

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/coffee');
      setData(response.data);
      setCurrentData(data.slice(0, itemsPerPage)); // 초기 데이터 설정
    } catch(e:unknown) {
      if(e instanceof AxiosError)
      setError(e);
    }
  }

  useEffect(() => { fetchData() },);

  useEffect(() => {
    // 페이지가 변경될 때마다 해당 페이지에 해당하는 데이터를 추출하여 currentData에 설정
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data.slice(startIndex, endIndex));
  }, [page, data]);

  const handleSubmitChange = async (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const text = (e.target as HTMLFormElement).text.value;
    const done = (e.target as HTMLFormElement).done.checked;
    try {
      await axios.post('http://localhost:4000/api/coffee', {text, done});
      fetchData();
    } catch(e) {
      console.log(e)
    }
  }

  if(error) return <div>에러가 발생했습니다.</div>

  return (
    <>
      <Logo/>
      <form onSubmit={handleSubmitChange}>
        <input name='text' />
        <input name='done' type="checkbox" />
        <input value='추가' type="submit" />
      </form>
      {/* 현재 페이지의 데이터를 출력 */}
      {currentData.map((item) => (
        <div key={item._id}>
          <p>ID: {item._id}</p>
          <p>이름: {item.name}</p>
          <p>칼로리: {item.calory}</p>
          <p>나트륨: {item.sodium}</p>
          <p>단백질: {item.protein}</p>
          <p>당분: {item.sugar}</p>
          <p>카페인: {item.caffeine}</p>
          <p>포화지방: {item.sat_fat}</p>
          <p>Description: {item.description}</p>
        </div>
      ))}

      {/* 페이지네이션 컴포넌트 */}
      <Pagination
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={data.length}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </>
  );
};

export default Test;
