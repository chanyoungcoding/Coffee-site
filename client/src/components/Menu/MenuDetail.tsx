import React from 'react';
import { useParams } from 'react-router-dom';

import { useApiDataName } from '../../services/api';
import MenuDetailItem from './components/MenuDetailItem';
import Button from '../Button';
import '../../styles/menudetail.scss'


const MenuDetail:React.FC = () => {
  const {name} = useParams();
  const coffeeDB = 'http://localhost:4000/api/coffeeName'
  const {data, isError, isLoading} = useApiDataName(coffeeDB, name);

  if(isError) return <p>에러가 발생했습니다.</p>
  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <>
      {data?.map(info => (
        <div className='menu' key={info._id}>
        <h1>{info.name}</h1>
        <h2>{name}</h2>
        <div className="menu__inner">
          <img src={info.imgurl} alt="#" />
          <div className="inner__menuintro">
            <MenuDetailItem name='칼로리' detail={info.calory}/>
            <MenuDetailItem number={1} name='포화지방' detail={info.sat_fat}/>
          </div>
          <div className="inner__menuintro">
            <MenuDetailItem name='나트륨' detail={info.sodium}/>
            <MenuDetailItem number={1} name='단백질' detail={info.protein}/>
          </div>
          <div className="inner__menuintro">
            <MenuDetailItem name='당유' detail={info.sugar}/>
            <MenuDetailItem number={1} name='카페인' detail={info.caffeine}/>
          </div>
        </div>
        <div className="menu__detailintro">
          <h3>{info.description}</h3>
          <Button href={`/recipe/${info.name}`}>레시피 보기</Button>
        </div>
        </div>
      ))}
    </>
  );
}

export default MenuDetail