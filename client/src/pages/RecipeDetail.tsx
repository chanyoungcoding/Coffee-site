import React from "react";
import { useParams } from "react-router-dom";

import { useApiDataName } from "../services/api";
import RecipeOrder from "../components/Recipe/RecipeDetail/RecipeOrder";
import RecipeMaterials from "../components/Recipe/RecipeDetail/RecipeMaterials";
import RecipeImage from "../components/Recipe/RecipeDetail/RecipeImage";
import RecipeGreat from "../components/Recipe/RecipeDetail/RecipeGreat";
import RecipeYoutube from "../components/Recipe/RecipeDetail/RecipeYoutube";
import styled from "styled-components";

const RecipeName = styled.h3`
  margin: 50px 0px 20px;
  color: #4281C1;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`

const GreatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #4281C1;
    text-align: center;
    font-size: 2rem;
  }
`

const Recipe:React.FC = () => {
  const {name} = useParams();

  const coffeeDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/coffeeName'
  const {data, isError, isLoading} = useApiDataName(coffeeDB, name);

  if(isError) return <p>에러가 발생했습니다.</p>
  if(isLoading) return <p>로딩중입니다..</p>
  
  return ( 
    <div className="recipe">
      <RecipeImage data={data}/>
      <div className="recipe__intro">
        <RecipeName>{data?.[0].name}</RecipeName>
        <GreatBox>
          <h1>좋아요</h1>
          <RecipeGreat data={data}/>
        </GreatBox>
        <RecipeMaterials data={data}/>
        <RecipeOrder data={data} />
        <RecipeYoutube data={data}/>
      </div>
    </div>
  );
}
export default Recipe;