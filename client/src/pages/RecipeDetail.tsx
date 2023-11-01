import React from "react";
import { useParams } from "react-router-dom";

import '../styles/recipe.scss';
import { useApiDataName } from "../services/api";
import RecipeOrder from "../components/Recipe/RecipeDetail/RecipeOrder";
import RecipeMaterials from "../components/Recipe/RecipeDetail/RecipeMaterials";
import RecipeImage from "../components/Recipe/RecipeDetail/RecipeImage";
import RecipeGreat from "../components/Recipe/RecipeDetail/RecipeGreat";

const Recipe:React.FC = () => {
  const {name} = useParams();

  const coffeeDB = 'http://localhost:4000/api/coffeeName'
  const {data, isError, isLoading} = useApiDataName(coffeeDB, name);

  if(isError) return <p>에러가 발생했습니다.</p>
  if(isLoading) return <p>로딩중입니다..</p>
  
  return ( 
    <div className="recipe">
      <RecipeImage data={data}/>
      <div className="recipe__intro">
        <h3>{data?.[0].name}</h3>
        <div className="intro__good">
          <h1>COFFEE</h1>
          <RecipeGreat data={data}/>
        </div>
        <RecipeMaterials data={data}/>
        <RecipeOrder data={data} />
      </div>
    </div>
  );
}
export default Recipe;