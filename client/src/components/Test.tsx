import React, { useEffect, useState } from 'react';
import '../styles/test.scss';

import Pagination from 'react-js-pagination';
import axios from 'axios';

// TS
interface Data {
  id: number;
  text: string;
  done: boolean;
}

// Test 컴포넌트
const Test: React.FC = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);
  const [currentData, setCurrentData] = useState<Data[]>([]);

  const itemsPerPage = 1; // 한 페이지당 보여줄 아이템 수

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/todo');
    setData(response.data);
    setCurrentData(data.slice(0, itemsPerPage)); // 초기 데이터 설정
  }

  useEffect(() => { fetchData(); }, []);

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
    await axios.post('http://localhost:4000/api/todo', {text, done});
    fetchData();
  }

  return (
    <>
      <form onSubmit={handleSubmitChange}>
        <input name='text' />
        <input name='done' type="checkbox" />
        <input value='추가' type="submit" />
      </form>
      {/* 현재 페이지의 데이터를 출력 */}
      {currentData.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Text: {item.text}</p>
          <p>Done: {item.done ? 'Yes' : 'No'}</p>
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
