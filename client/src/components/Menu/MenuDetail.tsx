import coffeeCup3 from '../../assets/coffeecup3.png'
import '../../styles/menudetail.scss'

const MenuDetail = () => {
  return ( 
    <div className="menu">
      <h1>아이스 아메리카노</h1>
      <h2>Ice Americano</h2>
      <div className="menu__inner">
        <img src={coffeeCup3} alt="#" />
        <div className="inner__menuintro">
          <div className="menuintro__detail">
            <h3>칼로리</h3>
            <h4>10Kcal</h4>
          </div>
          <div className="menuintro__detail__1">
            <h3>1잔</h3>
            <h4>1잔-355ml</h4>
          </div>
        </div>
        <div className="inner__menuintro">
          <div className="menuintro__detail">
            <h3>나트륨</h3>
            <h4>5mg</h4>
          </div>
          <div className="menuintro__detail__1">
            <h3>단백질</h3>
            <h4>1g</h4>
          </div>
        </div>
        <div className="inner__menuintro">
          <div className="menuintro__detail">
            <h3>당유</h3>
            <h4>0g</h4>
          </div>
          <div className="menuintro__detail__1">
            <h3>카페인</h3>
            <h4>150ml</h4>
          </div>
        </div>
      </div>
      <div className="menu__detailintro">
        <h3>"아메리카노는 에스프레소의 진한 풍미를 잘 느낄 수 있는 음료입니다."</h3>
        <h4>
          아메라카노는 에스프레소 샷 두개를 추출하여 바로 컵에 붓고, 그 위에 뜨거운 물을 재빠르게 부어 얇은 크레마 층이 형성되는 음료입니다. 갓 분쇄된 에스프레소만이 깊은 풍미를 가진 아메리카노를 만들 수 있습니다.</h4>
      </div>
      
    </div>
  );
}

export default MenuDetail