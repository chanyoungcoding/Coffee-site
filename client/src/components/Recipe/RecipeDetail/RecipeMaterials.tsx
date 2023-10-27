import React from "react";
import { RecipeData } from "../../../models/coffee";


const RecipeMaterials:React.FC<RecipeData> = ({data}) => {
  return ( 
    <div className="intro__box">
      <div className="box__left">
        <p>INTRODUCE</p>
      </div>
      <div className="box__right">
        <p className="right__h1">준비물</p>
        {data?.[0].materials.map((item,index) => (<p key={index}>{item}</p>))}
      </div>
  </div>
  );
}

export default RecipeMaterials;