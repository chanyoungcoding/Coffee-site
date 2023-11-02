// OrderForm.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { shopOrder } from '../../../recoil/shop';
import { useNavigate } from 'react-router-dom';

const ShopOrder = () => {
  const [orderData, setOrderData] = useRecoilState(shopOrder);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/shopcomplete');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          value={orderData.name}
          onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="address">주소:</label>
        <input
          type="text"
          id="address"
          value={orderData.address}
          onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="paymentMethod">결제 방식:</label>
        <select
          id="paymentMethod"
          value={orderData.paymentMethod}
          onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
          required
        >
          <option value="신용카드">신용카드</option>
          <option value="PayPal">PayPal</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <button type="submit">주문 확인</button>
    </form>
  );
}

export default ShopOrder;
