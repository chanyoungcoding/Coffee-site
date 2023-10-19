import React, {useEffect, useState } from 'react';
import '../../styles/menu.scss';

import Button from '../Button';
import { useApiDataSlice } from '../../services/api';

import Pagination from 'react-js-pagination';

const MenuMain: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 4; 

  const handlePageChange = (pageNumber: number):void => {
    setPage(pageNumber);
  };

  const coffeeDB = 'http://localhost:4000/api/coffee'

  const {data, currentData, isError, setCurrentData} = useApiDataSlice(coffeeDB, itemsPerPage);

  // 페이지가 변경될 때마다 보여줄 데이터 변경
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data.slice(startIndex, endIndex));
  }, [page, data, setCurrentData]);

  //에러 발생시 출력
  if(isError) return <div className='mainmenu__error'><p>에러가 발생했습니다.</p></div>

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