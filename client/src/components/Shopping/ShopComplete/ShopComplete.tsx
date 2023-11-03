import React,{useEffect} from "react";
import { useRecoilValue,useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import '../../../styles/ShopComplete.scss';
import { shopBaketPrice, shopOrder, userName } from "../../../recoil/shop";
import payment from '../../../assets/payment.png';
import ShopProgress from "../ShopBasket/ShopProgress";
import { useApiBaket } from "../../../services/api";
import { shopBaket } from "../../../recoil/shop";

const ShopPayment:React.FC = () => {
  const userDB = 'http://localhost:4000/api/Basket';
  const username = useRecoilValue(userName);
  const orderData = useRecoilValue(shopOrder);
  //test
  const totalPrice = useRecoilValue(shopBaketPrice);

  const secretUsername = username?.substring(0, 4) + "****";

  console.log(orderData);

  const { data, isError, isLoading } = useApiBaket(userDB, username);
  const [coffee, setCoffee] = useRecoilState(shopBaket);

  useEffect(() => {
    setCoffee(data);
  },[setCoffee,data])

  const totalProductName = React.useMemo(() => {
    const products = coffee?.map(productName => productName.name);
    return products
  },[coffee])
  console.log(totalProductName)

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="shoppayment">
      <ShopProgress/>
      <div className="payment__intro">
        <h1>찬스 커피에서 <span>결제한 내역</span>을<br/>안내해 드립니다.</h1>
        <h2><span>{secretUsername}</span>님, 안녕하세요.</h2>
        <p>찬스 커피를 이용해 주셔서 감사합니다.</p>
        <p>고객님께서 주문하신 제품은 3일 이내에 배송 될 예정이오니 </p>
        <p>안심하시고 기다려 주시면 감사하겠습니다.</p>
      </div>
      <div className="payment__complete">
        <h1>주문이 완료되었습니다.</h1>
        <img src={payment} alt="#"/>
      </div>
      <div className="payment__information">
        <div className="information__inner">
          <h3>주문상품</h3>
          <h4>{totalProductName?.join(', ')}</h4>
        </div>
        <div className="information__inner">
          <h3>결제금액</h3>
          <h4>{totalPrice}</h4>
        </div>
        <div className="information__inner end">
          <h3>배송비</h3>
          <h4>무료</h4>
        </div>
      </div>
      <Link to="/" className="payment__home">홈 가기</Link>
    </div>
  );
}

export default ShopPayment;