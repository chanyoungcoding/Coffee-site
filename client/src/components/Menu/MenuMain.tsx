import React, { useEffect, useState } from 'react';
import '../styles/test.scss';

import Pagination from 'react-js-pagination';
import axios, { AxiosError } from 'axios';

import Logo from '../Logo';
import { Data } from '../../models/coffee';

// Test 컴포넌트
const MenuMain: React.FC = () => {
  //useState
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);
  const [currentData, setCurrentData] = useState<Data[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  //한 페지당 보여줄 아이템 개수
  const itemsPerPage = 4; 

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const coffeeDB = 'http://localhost:4000/api/coffee'

  const fetchData = async () => {
    try {
      const response = await axios.get(coffeeDB);
      setData(response.data);
      setCurrentData(data.slice(0, itemsPerPage)); // 초기 데이터 설정
    } catch(e:unknown) {
      if(e instanceof AxiosError)
      setError(e);
    }
  }

  useEffect(() => { fetchData() },);

  // 페이지가 변경될 때마다 보여줄 데이터 변경
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data.slice(startIndex, endIndex));
  }, [page, data]);

  const handleSubmitChange = async (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const text = (e.target as HTMLFormElement).text.value;
    const done = (e.target as HTMLFormElement).done.checked;
    try {
      await axios.post(coffeeDB, {text, done});
      fetchData();
    } catch(e:unknown) {
      if(e instanceof AxiosError)
      setError(e);
    }
  }

  //에러 발생시 출력
  if(error) return <div className='mainmenu__error'>{error ? error.message : null}</div>

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

export default MenuMain;