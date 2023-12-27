// OrderForm.tsx
import React, {useEffect} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';


import { shopBaketPrice, shopOrder } from '../../../recoil/shop';
import { useNavigate } from 'react-router-dom';
import ShopProgress from '../ShopBasket/ShopProgress';
import { userName } from '../../../recoil/shop';
import { useApiBaket } from '../../../services/api';
import { shopBaket } from '../../../recoil/shop';

import '../../../styles/shoporder.scss';

const ShopOrder = () => {
  const [orderData, setOrderData] = useRecoilState(shopOrder);
  const navigate = useNavigate();

  const userDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/Basket';
  const username = useRecoilValue(userName);

  const { data, isError, isLoading } = useApiBaket(userDB, username);
  const [coffee, setCoffee] = useRecoilState(shopBaket);

  const totalPrice = useRecoilValue(shopBaketPrice);

  useEffect(() => {
    setCoffee(data);
  },[setCoffee,data])

  const totalCount = React.useMemo(() => {
    const total =  coffee?.reduce((prev, cur) => prev + cur.count, 0);
    return total
  }, [coffee])

  const totalProductName = React.useMemo(() => {
    const products = coffee?.map(productName => productName.name);
    return products
  },[coffee])

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/shopcomplete');
  };

  return (
    <div className="shoporder">
      <ShopProgress/>
      <div className="shoporder__inner">
        <div className="shoporder__form">
          <h1>주문 정보</h1>
          <form onSubmit={handleSubmit}>
            <div className='form__input'>
              <label htmlFor="name">이름</label>
              <input type="text" id="name" value={orderData.name} onChange={(e) => setOrderData({ ...orderData, name: e.target.value })} required/>
            </div>
            <div className='form__input'>
              <label htmlFor="address">주소</label>
              <input type="text" id="address" value={orderData.address} onChange={(e) => setOrderData({ ...orderData, address: e.target.value })} required/>
            </div>
            <div className='form__input'>
              <label htmlFor="name">전화번호</label>
              <input type="text" id="Phonenumber" value={orderData.phoneNumber} onChange={(e) => setOrderData({ ...orderData, phoneNumber: e.target.value })} required/>
            </div>
            <button type="submit" className='form__button'>주문 확인</button>
          </form>
        </div>
        <div className="shoporder__myorder">
          <h1>Submit my order</h1>
          <div className="myorder__receipt">
            <p>Count</p>
            {totalCount}
          </div>
          <div className="myorder__receipt">
            <p>Products</p>
            <p>
            {totalProductName?.map(product => `${product} `)}
            </p>
          </div>
          <div className="myorder__receipt">
            <p>Total</p>
            {totalPrice}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopOrder;
