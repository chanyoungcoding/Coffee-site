import coffeeCup3 from '../../assets/coffeecup3.png'
import '../../styles/menu.scss'

const Main = () => {
  return ( 
    <div className="menu">
      <h1>아이스 아메리카노</h1>
      <h2>Ice Americano</h2>
      <div className="menu__inner">
        <img src={coffeeCup3} alt="#" />
        <div className="inner__menuintro">
          <div className="menuintro__detail">
            <h3>칼로리</h3>
            <h4>5kcal</h4>
          </div>
          <div className="menuintro__detail__1">
            <h3>1회 제공량</h3>
            <h4>500ml</h4>
          </div>
        </div>
        <div className="inner__menuintro">
          <div className="menuintro__detail">
            <h3>나트륨</h3>
            <h4>5kcal</h4>
          </div>
          <div className="menuintro__detail__1">
            <h3>단백질</h3>
            <h4>500ml</h4>
          </div>
        </div>
        <div className="inner__menuintro">
          <div className="menuintro__detail">
            <h3>당유</h3>
            <h4>5kcal</h4>
          </div>
          <div className="menuintro__detail__1">
            <h3>카페인</h3>
            <h4>500ml</h4>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Main