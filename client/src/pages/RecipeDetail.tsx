import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { useBasketMutation } from "../services/api";


import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import '../styles/recipe.scss';
import { useApiDataName } from "../services/api";
import RecipeOrder from "../components/Recipe/RecipeDetail/RecipeOrder";
import RecipeMaterials from "../components/Recipe/RecipeDetail/RecipeMaterials";
import RecipeImage from "../components/Recipe/RecipeDetail/RecipeImage";

const Recipe:React.FC = () => {
  const {name} = useParams();

  const coffeeDB = 'http://localhost:4000/api/coffeeName'
  const {data, isError, isLoading} = useApiDataName(coffeeDB, name);

  const { mutate } = useBasketMutation();

  const [disabled, setDisabled] = useState(false);

  const onClick = (e:React.MouseEvent<HTMLButtonElement>, coffeeName:string, coffeeUrl:string) => {
    const userName = Cookies.get('사용자명')
    setDisabled(disabled => !disabled)
    e.currentTarget.disabled = true;
    mutate({coffeeName, coffeeUrl ,userName});
  }


  if(isError) return <p>에러가 발생했습니다.</p>
  if(isLoading) return <p>로딩중입니다..</p>
  
  return ( 
    <div className="recipe">
      <RecipeImage data={data}/>
      <div className="recipe__intro">
        <h3>{data?.[0].name}</h3>
        <div className="intro__good">
          <h1>COFFEE</h1>
          {data?.map(item => (
            <button 
              key={item._id} 
              className="good__button"
              onClick={(e) => onClick(e, item.name, item.imgurl)}
            >
              {disabled ? <AiFillHeart size="40"/> : <AiOutlineHeart size="40"/>}
            </button>
          ))}
        </div>
        <RecipeMaterials data={data}/>
        <RecipeOrder data={data} />
      </div>
    </div>
  );
}
export default Recipe;