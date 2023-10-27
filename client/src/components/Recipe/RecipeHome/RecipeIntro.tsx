
import { useApiDataNumber } from "../../../services/api";
import Button from "../../Button";

const RecipeIntro = () => {
  const coffeeDB = 'http://localhost:4000/api/coffeeNumber';

  const {data, isLoading, isError, changeNumber } = useApiDataNumber(coffeeDB);

  if(isError) return <div className='mainmenu__error'><p>에러가 발생했습니다..</p></div>
  if(isLoading) return <p>로딩중입니다..</p>
  return ( 
    <div className="recipehome__recommend">
      <h1 className='recommendrecipe'>레시피</h1>
      <div className="recommend__inner">
        {data?.map(item => (
          <div key={item._id} className="inner__box">
            <img src={item.imgurl} alt="#"/>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Button href={`/recipe/${item.name}`}>보러 가기</Button>
          </div>
        ))}
      </div>
      <button className='button-74' role="button" onClick={changeNumber}>더보기</button>
  </div>
  );
}

export default RecipeIntro;