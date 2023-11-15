import React from "react";

import { RecipeData } from "../../../models/coffee";
import styled from "styled-components";

const RecipeImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    @media (max-width: 500px) {
      width: 350px;
      height: 350px;
    }
  }
`

const RecipeImage:React.FC<RecipeData>  = ({data}) => {

  return ( 
    <>
      <RecipeImgBox>
        <img src={data?.[0].imgurl} alt="#" />
      </RecipeImgBox>
    </>
  );
}

export default RecipeImage;