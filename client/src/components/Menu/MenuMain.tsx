import React, { useEffect, useState } from 'react';
import '../../styles/menu.scss';

import Button from '../Button';

import Pagination from 'react-js-pagination';
import axios, { AxiosError } from 'axios';

import { Data } from '../../models/coffee';

// Test 컴포넌트
const MenuMain: React.FC = () => {
  //useState
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Data[]>([]);
  const [currentData, setCurrentData] = useState<Data[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  //한 페지당 보여줄 아이템 개수
  const itemsPerPage = 4; 

  const handlePageChange = (pageNumber: number):void => {
    setPage(pageNumber);
  };

  const coffeeDB = 'http://localhost:4000/api/coffee'

  const fetchData =  async () => {
    try {
      const response = await axios.get(coffeeDB);
      setData(response.data);
      setCurrentData(response.data.slice(0, itemsPerPage)); // 초기 데이터 설정
    } catch(e:unknown) {
      if(e instanceof AxiosError) setError(e);
    }
  }

  useEffect(() => { fetchData() },[]);

  // 페이지가 변경될 때마다 보여줄 데이터 변경
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data.slice(startIndex, endIndex));
  }, [page, data]);

  //에러 발생시 출력
  if(error) return <div className='mainmenu__error'>{error ? error.message : null}</div>

  return (
    <div className='menumain'>
      <h1>메뉴</h1>
      <div className="menu__center">
      {currentData.map((item) => (
        <div key={item._id} className='menumain__detail'>
          <img src={item.imgurl} alt="#" />
          <p>{item.name}</p>
          <Button href={`/menuDetail/${item.name}`}>자세한 정보</Button>
        </div>
      ))}
      </div>

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
    </div>
  );
};

export default MenuMain;