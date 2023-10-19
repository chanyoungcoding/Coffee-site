import React from "react";
import { useParams } from "react-router-dom";

import { useApiDataName } from "../../services/api";
import '../../styles/recipe.scss';

const Recipe:React.FC = () => {
  const {name} = useParams();

  const coffeeDB = 'http://localhost:4000/api/coffeeName'
  const {data, isError, isLoading} = useApiDataName(coffeeDB, name);

  if(isError) return <p>에러가 발생했습니다.</p>
  if(isLoading) return <p>로딩중입니다..</p>
  
  return ( 
    <div className="recipe">
      <div className="recipeimg">
        <img src={data?.[0].imgurl} alt="#" />
      </div>
      <div className="recipe__intro">
        <h3>{data?.[0].name}</h3>
        <h1>COFFEE</h1>
        <div className="intro__box">
          <div className="box__left">
            <p>INTRODUCE</p>
          </div>
          <div className="box__right">
            <p className="right__h1">준비물</p>
            {data?.[0].materials.map((item,index) => (<p key={index}>{item}</p>))}
          </div>
        </div>
        <div className="recipe__li">
          {data?.[0].howToMake.map((item,index) => (<li key={index}>{index + 1}.{item}</li>))}
        </div>
      </div>
    </div>
  );
}
export default Recipe;