import { useApiCoffeeTypes } from "../../services/api";
import CoffeeTypesIntroduce from "./components/CoffeeTypesIntroduce";

const CoffeeTypes = () => {

  const coffeeTypesDB = 'http://localhost:4000/api/coffeeTypes';
  const {data, isLoading, isError} = useApiCoffeeTypes(coffeeTypesDB);

  if(isError) return 
  <div className='mainmenu__error'>
    <p>무엇인가 에러가 발생했습니다.</p>
  </div>

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="coffeetypes">
      <h1>커피의 종류</h1>
      <p>
        커피의 품종은 크게 3가지로 구별되는데 아라비카, 로부스타 및 리베리카입니다.
        아라비카는 부드럽고 향기가 있으며, 로브스타종에 비해 단맛, 신맛, 감칠맛, 향이 뛰어나 가격이 더 비싸고, 카페인 함유량이 로부스타보다 적습니다.
        아라비카종은 해발 900~2000m 이상의 고지대에서 생산되며, 기계를 이용한 대량 재배와 수확이 불가능하기 때문에 사람손으로 일일이 심고 가꾸고 거두어야 합니다.
        원두커피는 높은 지대에서 재배할수록 질이 좋은 것으로 인정되는데 그 이유는 지대가 높을 수록 기후가 서늘하고 열매가 서서히 익어 밀도가 단단해지기 때문입니다.
        주요 생산국은 브라질을 비롯해 중남미, 콜롬비아, 멕시코, 과테말라, 이디오피아, 탄자니아, 케냐, 하와이, 코스타리카 등이며, 전세계 산출량의 약70-80%를 점유합니다.
        로부스타의 원산지는 아프리카 콩고로써 평지에서 기계로 재배하기 때문에 콩이 여문 정도나 크기, 결손 원두를 가리지 않고 모두 한꺼번에 가공합니다.
        잎과 나무의 키가 아라비카 종보다 크지만 열매는 리베리카종이나 아라비카 종보다 작습니다.
        또한 30도 이상의 온도에 7-8일 정도 견딜 수 있어 아라비카 종보다 기생충과 질병에 대한 저항력이 강하고, 해발고도 800m이하의 낮은 고도에서 생산이 가능하며 기후변화나 다른 토양등 환경적인 변화에 잘 견디는 특징이 있습니다.
        주요생산국은 인도네시아, 앙골라, 마다가스카르, 우간다, 아이보리코스트 등이며, 전 세계 생산량의 20-30%를 차지하지만 아라비카에 비해 카페인 함량이 많으며 쓴맛이 강하고 향이 부족하여 스트레이트 커피로 만들기에는 적합치 않습니다.
        하지만 경제적 이점이 있기 때문에 상업적으로 재배하여 인스턴트 커피의 주원료로 이용되고 있습니다.
        리베리카는 아프리카의 리베리아가 원산지인데 쓴맛이 강하고 향이 적어 전체 약1% 수준으로 생산량이 적습니다.
      </p>
      <div className="coffeetypes__inner">
        <CoffeeTypesIntroduce data={data}/>
      </div>
      <div className="inner__link">
        <h5>추가적인 정보</h5>
        <a href="https://knowledge-container.tistory.com/entry/%EC%BB%A4%ED%94%BC%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%ED%8A%B9%EC%A7%95ft-%EB%82%98%EB%9D%BC%EB%B3%84-%EC%BB%A4%ED%94%BC">티스토리 - 커피의 종류와 특징</a>
        <a href="https://lovinegar.com/entry/%EC%BB%A4%ED%94%BC-%EC%9B%90%EB%91%90%EC%9D%98-%EC%A2%85%EB%A5%98-%EC%BB%A4%ED%94%BC-%ED%9A%A8%EB%8A%A5%EA%B3%BC-%EB%82%B4-%EB%AA%B8%EC%97%90-%EB%A7%9E%EB%8A%94-%EC%BB%A4%ED%94%BC-%EC%84%AD%EC%B7%A8%EB%B2%95">동그라미정보 - 원두커피 종류</a>
        <a href="https://100479story.tistory.com/56">오지라퍼의 세상 - 나라별 즐겨 마시는 커피의 정류</a>
      </div>
    </div>
  );
}

export default CoffeeTypes;