import React, { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import '../../styles/recipehome.scss';

import { Data } from '../../models/coffee';

import backBanner from '../../assets/coffeebackground3.png'
import axios, { AxiosError } from 'axios';

const RecipeHome:React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  const coffeeDB = 'http://localhost:4000/api/coffee';

  const fetchData = useCallback( async() => {
    try {
      const response = await axios.get(coffeeDB);
      setData(response.data);
    } catch(e:unknown) {
      if(e instanceof AxiosError) setError(e);
    }
  }, [])

  useEffect(() => { fetchData() }, [fetchData]);

  if(error) return <div className='mainmenu__error'>{error ? error.message : null}</div>

  return ( 
    <div className="recipehome">
      <div className="recipehome__banner">
        <div className="banner__left">
          <p>Our Recipe</p>
          <h1>레시피를 보고 따라 만들어 보세요</h1>
          <Button href={`/recipe/아메리카노`}>가장 인기 있는 메뉴</Button>
        </div>
        <div className="banner__right">
          <img src={backBanner} alt="#" />
        </div>
      </div>

      <div className="recipehome__recommend">
        <h1 className='recommendrecipe'>레시피</h1>
        <div className="recommend__inner">
          {data.map(item => (
            <div key={item._id} className="inner__box">
              <img src={data.length > 0 ? item.imgurl : ''} alt="#"/>
              <h1>{data.length > 0 ? item.name : ''}</h1>
              <p>{data.length > 0 ? item.description : ''}</p>
              <Button href={data.length > 0 ? `/recipe/${item.name}` : ''}>보러 가기</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeHome;