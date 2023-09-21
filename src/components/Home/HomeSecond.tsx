import coffeeBox from '../../assets/coffeebox.jpeg'
import coffeeBox1 from '../../assets/coffeebox1.jpeg'

const HomeSecond = () => {
  return ( 
    <div className="homesecond">
      <div className="second__left">
        <h1>MY STORY</h1>
        <p>
          어렸을 때부터 커피를 좋아해서 혼자서 커피도 만들어 보고 
          레시피도 외워 보기도 하면서 나중에 내가 가지고 있는 커피에 대한
          지식을 공유해 봤으면 좋겠다는 생각에 찬스 커피 사이트를 만들게 되었습니다.
        </p>
      </div>
      <div className="second__right">
        <div className="right__imgbox">
          <img src={coffeeBox} alt="#" />
          <img src={coffeeBox1} alt="#" />
        </div>
        <div className="right__imgbox">
          <img src={coffeeBox} alt="#" />
          <img src={coffeeBox1} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default HomeSecond;