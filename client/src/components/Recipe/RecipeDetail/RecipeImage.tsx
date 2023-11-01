import React from "react";

import { RecipeData } from "../../../models/coffee";

const RecipeImage:React.FC<RecipeData>  = ({data}) => {

  return ( 
    <>
      <div className="recipeimg">
        <img src={data?.[0].imgurl} alt="#" />
      </div>
    </>
  );
}

export default RecipeImage;