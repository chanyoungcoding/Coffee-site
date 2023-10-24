import React, { useEffect } from "react";
import { useApiDataShop } from "../../services/api";
import { useRecoilState } from "recoil";
import { shoppingList } from "../../recoil/shop";

const Shopping:React.FC = () => {

  const coffeeShopUrl = 'http://localhost:4000/api/coffeeShop'
  const {data, isError, isLoading} = useApiDataShop(coffeeShopUrl);
  const [shop, setShop] = useRecoilState(shoppingList)

  useEffect(() => {
    if(data) {
      setShop([...data]);
    }
    console.log(data);
  },[data,setShop])

  if(isError) return 
  <div className='mainmenu__error'>
    <p>무엇인가 에러가 발생했습니다.</p>
  </div>

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="shopping">
      {shop.map((item,index) => (<p key={index}>{item.name}</p>))}
    </div>
  );
}
export default Shopping;