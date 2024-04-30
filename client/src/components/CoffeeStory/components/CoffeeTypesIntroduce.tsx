import React from "react";
import { CoffeeTypes } from "../../../models/coffee";

interface CoffeeTypesIntroduceData {
  data: CoffeeTypes[] | undefined;
}

const CoffeeTypesIntroduce:React.FC<CoffeeTypesIntroduceData> = ({data}) => {
  
  return ( 
    <>
      {data?.map((item,index) => (
      <div key={index} className="inner__box">

        <div className="inner__img" style={{background: `url(${item.countryImage}) no-repeat center/cover`}}>
          <img src={item.countryNationalFlag} alt="#" className="img__nationalflag"/>
        </div>

        <div className="inner__introbox">

          <div className="inner__name">
            {item.countryCoffeeName}
          </div>

          <div className="inner__introduce">
            {item.countryIntroduce}
          </div>

        </div>
        
      </div>
      ))}
    </>
  );
}
export default CoffeeTypesIntroduce;