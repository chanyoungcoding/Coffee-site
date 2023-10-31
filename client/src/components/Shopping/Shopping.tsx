import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import { useApiDataShop, useBasketMutation } from "../../services/api";
import { shoppingList } from "../../recoil/shop";
import '../../styles/shopping.scss';


const Shopping:React.FC = () => {

  const coffeeShopUrl = 'http://localhost:4000/api/coffeeShop'
  const {data, isError, isLoading} = useApiDataShop(coffeeShopUrl);
  const [shop, setShop] = useRecoilState(shoppingList)

  const { mutate } = useBasketMutation();

  useEffect(() => {
    if(data) setShop([...data]);
  },[data,setShop])

  const onClick = (e:React.MouseEvent<HTMLButtonElement>, coffeeName:string, coffeeUrl:string) => {
    const userName = Cookies.get('사용자명')
    e.currentTarget.disabled = true;
    mutate({coffeeName, coffeeUrl ,userName});
  }

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="shopping">
      {shop.map(item => (
        <div key={item.coffeeNumber} className="shopping__inner">
          <Link to={`/shopdetail/${item.name}`}>
            <img src={item.imgurl} alt="#"/>
            <p>{item.name}</p>
          </Link>
          <p className="shopping__date">제조일 2023.04.25</p>
          <p className="shopping__price">{item.price} 원</p>
          <button onClick={(e) => onClick(e, item.name, item.imgurl)}>장바구니 추가하기</button>
        </div>
      ))}
    </div>
  );
}
export default Shopping;