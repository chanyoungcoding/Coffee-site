import React, {useState} from "react";
import Cookies from "js-cookie";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { RecipeData } from "../../../models/coffee";
import { useGreatMutation } from "../../../services/api";
import styled from "styled-components";

const RecipeHeart = styled.button`
  outline: none;
  border: none;
  background-color: white;
  color: red;
`

const RecipeGreat:React.FC<RecipeData> = ({data}) => {

  const [disabled, setDisabled] = useState(false);
  const { mutate } = useGreatMutation();

  const onClick = (e:React.MouseEvent<HTMLButtonElement>, coffeeName:string, coffeeUrl:string) => {
    const userName = Cookies.get('사용자명')
    setDisabled(disabled => !disabled)
    e.currentTarget.disabled = true;
    mutate({coffeeName, coffeeUrl ,userName});
  }

  return ( 
    <>
      {data?.map(item => (
        <RecipeHeart
          key={item._id} 
          onClick={(e) => onClick(e, item.name, item.imgurl)}
        >
          {disabled ? <AiFillHeart size="40"/> : <AiOutlineHeart size="40"/>}
        </RecipeHeart>
      ))}
    </>
  );
}
export default RecipeGreat;