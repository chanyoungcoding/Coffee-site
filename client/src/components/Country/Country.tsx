import React from "react";
import '../../styles/country.scss';

import CountryTop from "./CountryTop";
import { useApiCoffeeCountry } from "../../services/api";


const Country:React.FC = () => {

  const coffeeCountryDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/coffeeCountry';
  const {data, isLoading, isError} =  useApiCoffeeCountry(coffeeCountryDB);

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="country">
      <CountryTop/>
      <div className="country__inner">
        <p>
          커피는 나라마다 품종이 다르고, 맛도 너무나도 다르며 Roast 즉 구운 정도에 따라서
          맛도 다양하기 때문에 이러한 정보를 참고하면 내가 원하는 맛의 커피를 마실 수 있습니다.<br/>
          이 정보를 가지고 여러분만의 커피 원두를 찾아보세요.
        </p>
        <div className="inner__type">
          <div className="type__banner">
            <p>Country</p>
            <p>Taste</p>
            <p>Roast</p>
          </div>

          <div className="type__intro">
            {data?.map(item => (
              <div key={item.name} className="intro__inner">
                <div className="inner__img">
                  <img src={item.country} alt="#" />
                  <p>{item.name}</p>
                </div>
                <div className="inner__img">
                  <img src={item.taste} alt="#" />
                  <p>{item.tasteName}</p>
                </div>
                <div className="inner__img">
                  <img src={item.beans} alt="#" />
                  <p>{item.beansName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Country;