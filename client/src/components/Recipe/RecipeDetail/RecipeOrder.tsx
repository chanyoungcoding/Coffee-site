import React from "react";
import { RecipeData } from "../../../models/coffee";

const RecipeOrder:React.FC<RecipeData> = ({data}) => {
  return ( 
    <div className="recipe__li">
      {data?.[0].howToMake.map((item,index) => (<li key={index}>{index + 1}.{item}</li>))}
    </div>
  );
}
export default RecipeOrder;