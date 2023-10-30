import Right from './components/Second/Right'
import Left from './components/Second/Left'

const HomeSecond = () => {
  return ( 
    <div className="homesecond">
      <div className="second__left">
        <Right/>
      </div>
      <div className="second__right">
        <Left/>
      </div>
    </div>
  );
}

export default HomeSecond;