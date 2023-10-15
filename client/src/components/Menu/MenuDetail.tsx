import '../../styles/menudetail.scss'
import MenuDetailItem from './components/MenuDetailItem';
import Button from '../Button';

import { useApiDataName } from '../../services/api';


import { useParams } from 'react-router-dom';

const MenuDetail:React.FC = () => {
  const {name} = useParams();
  const coffeeDB = 'http://localhost:4000/api/coffeeName'
  const {data, error} = useApiDataName(coffeeDB, name);

  if(error) return <div>{error ? error.message : null}</div>

  const dataLength = data.length > 0;

  return ( 
    <div className="menu">
      {dataLength ? (<h1>{data[0].name}</h1>) : (<h1>Loading...</h1>)}
      <h2>{name}</h2>
      <div className="menu__inner">
      {dataLength ? (<img src={data[0].imgurl} alt="#" />) : (<h1>Loading...</h1>)}
        <div className="inner__menuintro">
          <MenuDetailItem name='칼로리' detail={dataLength ? data[0].calory : null} />
          <MenuDetailItem number={1} name='포화지방' detail={dataLength ? data[0].sat_fat : null} />
        </div>
        <div className="inner__menuintro">
          <MenuDetailItem name='나트륨' detail={dataLength ? data[0].sodium : null} />
          <MenuDetailItem number={1} name='단백질' detail={dataLength ? data[0].protein : null} />
        </div>
        <div className="inner__menuintro">
          <MenuDetailItem name='당유' detail={dataLength ? data[0].sugar : null} />
          <MenuDetailItem number={1} name='카페인' detail={dataLength ? data[0].caffeine : null} />
        </div>
      </div>
      <div className="menu__detailintro">
        {dataLength ? (<h3>{data[0].description}</h3>) : (<h1>Loading...</h1>)}
        <Button href={dataLength ?`/recipe/${data[0].name}` : ''}>레시피 보러가기</Button>
      </div>
      
    </div>
  );
}

export default MenuDetail