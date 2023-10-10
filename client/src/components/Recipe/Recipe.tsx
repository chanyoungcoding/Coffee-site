import React ,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from 'axios';

import '../../styles/recipe.scss';
import { Data } from '../../models/coffee';

const Recipe:React.FC = () => {
  const {name} = useParams();

  
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  
  const coffeeDB = 'http://localhost:4000/api/coffeeName'
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`${coffeeDB}?name=${name}`);
      setData(response.data);
    } catch(e:unknown) {
      if(e instanceof AxiosError) setError(e);
    }
  }
  
  useEffect(() => { fetchData() }, []);
  if(error) return <div>{error ? error.message : null}</div>
  
  const checkData = data.length > 0;

  return ( 
    <div className="recipe">
      <div className="recipeimg">
        <img src={checkData ? data[0].imgurl : ''} alt="#" />
      </div>
      <div className="recipe__intro">
        <h3>{checkData ? data[0].name : ''}</h3>
        <h1>COFFEE</h1>
        <div className="intro__box">
          <div className="box__left">
            <p>INTRODUCE</p>
          </div>
          <div className="box__right">
            <p className="right__h1">준비물</p>
            {checkData ? data[0].materials.map((item,index) => (<p key={index}>{item}</p>)) : ''}
          </div>
        </div>
        <div className="recipe__li">
          {checkData ? data[0].howToMake.map((item,index) => (<li key={index}>{index + 1}.{item}</li>)) : ''}
        </div>
      </div>
    </div>
  );
}
export default Recipe;