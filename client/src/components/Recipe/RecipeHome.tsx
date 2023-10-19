import React from 'react';
import Button from '../Button';
import '../../styles/recipehome.scss';

import backBanner from '../../assets/coffeebackground3.png'
import { useApiDataNumber } from '../../services/api';

const RecipeHome:React.FC = () => {

  const coffeeDB = 'http://localhost:4000/api/coffeeNumber';

  const {data, isLoading, isError, changeNumber } = useApiDataNumber(coffeeDB);



  if(isError) return <div className='mainmenu__error'><p>에러가 발생했습니다..</p></div>
  if(isLoading) return <p>로딩중입니다..</p>

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
          {data?.map(item => (
            <div key={item._id} className="inner__box">
              <img src={data.length > 0 ? item.imgurl : ''} alt="#"/>
              <h1>{data.length > 0 ? item.name : ''}</h1>
              <p>{data.length > 0 ? item.description : ''}</p>
              <Button href={data.length > 0 ? `/recipe/${item.name}` : ''}>보러 가기</Button>
            </div>
          ))}
        </div>
        <button className='button-74' role="button" onClick={changeNumber}>더보기</button>
      </div>
    </div>
  );
}

export default RecipeHome;