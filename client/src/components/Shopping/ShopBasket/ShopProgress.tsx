const ShopProgress = () => {
  return ( 
    <div className="basket__progress">
      <div className="progress__basket">
        <p className="basket__procedure">01</p>
        <p className="basket__procedurename">장바구니</p>
      </div>
      <div className="progress__line"></div>
      <div className="progress__order">
        <p className="basket__procedure">02</p>
        <p className="basket__procedurename">주문/결제</p>
      </div>
      <div className="progress__line"></div>
      <div className="progress__complete">
        <p className="basket__procedure">03</p>
        <p className="basket__procedurename">주문완료</p>
      </div>
    </div>
  );
}
export default ShopProgress;