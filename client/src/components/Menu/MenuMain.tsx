import {useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

import { useApiDataSlice } from '../../services/api';
import '../../styles/pagination.scss';
import Button from '../Button';
import Loading from '../Loading/Loading';

const MenuTitle = styled.h1`
  margin-bottom: 30px;
  padding: 30px;
  font-size: 2rem;
  text-align: center;
  border-top: 1px solid #444444;
`

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const MenuDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DetailImg = styled.img`
  background-color: #F9F5EA;
  width: 95%;
  height: 100%;
  object-fit: cover;
`

const DetailName = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  color: #444444;
  @media (max-width:500px) {
    font-size: 14px;
  }
`

const MenuMain = () => {
  
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 4; 

  const handlePageChange = (pageNumber: number):void => {
    setPage(pageNumber);
  };

  const coffeeDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/coffee'

  const {
    data, 
    currentData, 
    isError, 
    isLoading, 
    setCurrentData
  } = useApiDataSlice(coffeeDB, itemsPerPage);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data.slice(startIndex, endIndex));
  }, [page, data, setCurrentData]);


  if(isLoading) return <Loading/>

  if(isError) return <div className='mainmenu__error'><p>에러가 발생했습니다.</p></div>

  return (
    <div className='menumain'>

      <MenuTitle>메뉴</MenuTitle>

      <MenuBox>
      {currentData.map((item) => (
        <MenuDetail key={item._id}>

          <DetailImg src={item.imgurl} alt="#" />
          <DetailName>{item.name}</DetailName>
          <Button href={`/menuDetail/${item.name}`}>자세한 정보</Button>

        </MenuDetail>
      ))}

      </MenuBox>

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