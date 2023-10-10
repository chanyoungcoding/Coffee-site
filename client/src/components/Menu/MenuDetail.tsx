import '../../styles/menudetail.scss'

import Button from '../Button';
import { Data, DetailItem } from '../../models/coffee';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';


const MenuDetailItem:React.FC<DetailItem> = React.memo(({name, detail, number}) => {
  return (
  <div className={number !== 1 ? `menuintro__detail` : `menuintro__detail__${number}`}>
    <h3>{name}</h3>
    <h4>{detail !== null ? detail : 'Loading...'}</h4>
  </div>
  )
});


const MenuDetail:React.FC = () => {
  const {name} = useParams();

  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  const coffeeDB = 'http://localhost:4000/api/coffeeName'

  const fetchData = async () => {
    try {
      const response = await axios.get(`${coffeeDB}?name=${name}`);
      setData(response.data);
    } catch(e:unknown) {
      if(e instanceof AxiosError)
      setError(e);
    }
  }
  
  useEffect(() => { fetchData() }, []);
  
  if(error) return <div>{error ? error.message : null}</div>

  return ( 
    <div className="menu">
      {data.length > 0 ? (<h1>{data[0].name}</h1>) : (<h1>Loading...</h1>)}
      <h2>{name}</h2>
      <div className="menu__inner">
      {data.length > 0 ? (<img src={data[0].imgurl} alt="#" />) : (<h1>Loading...</h1>)}
        <div className="inner__menuintro">
          <MenuDetailItem name='칼로리' detail={data.length > 0 ? data[0].calory : null} />
          <MenuDetailItem number={1} name='포화지방' detail={data.length > 0 ? data[0].sat_fat : null} />
        </div>
        <div className="inner__menuintro">
          <MenuDetailItem name='나트륨' detail={data.length > 0 ? data[0].sodium : null} />
          <MenuDetailItem number={1} name='단백질' detail={data.length > 0 ? data[0].protein : null} />
        </div>
        <div className="inner__menuintro">
          <MenuDetailItem name='당유' detail={data.length > 0 ? data[0].sugar : null} />
          <MenuDetailItem number={1} name='카페인' detail={data.length > 0 ? data[0].caffeine : null} />
        </div>
      </div>
      <div className="menu__detailintro">
        {data.length > 0 ? (<h3>{data[0].description}</h3>) : (<h1>Loading...</h1>)}
        <Button href={data.length > 0 ?`/recipe/${data[0].name}` : ''}>레시피 보러가기</Button>
      </div>
      
    </div>
  );
}

export default MenuDetail